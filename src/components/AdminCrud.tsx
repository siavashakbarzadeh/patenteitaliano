"use client";
import { useState, useEffect, useCallback } from "react";
import { adminList, adminCreate, adminDelete } from "@/lib/supabaseAdmin";

interface FieldDef {
  key: string; label: string;
  type?: "text" | "number" | "select" | "textarea" | "date" | "time" | "color" | "checkbox";
  options?: { value: string; label: string }[];
  required?: boolean; placeholder?: string; defaultValue?: string | number | boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CrudConfig {
  title: string; icon: string;
  module: string; // Supabase module key
  fields: FieldDef[];
  columns: { key: string; label: string; render?: (item: any) => React.ReactNode }[];
  statusField?: string;
  statusColors?: Record<string, string>;
  // Legacy local-only fallback (optional)
  getData?: () => any[];
  onSave?: (item: any) => void;
  onDelete?: (id: string) => void;
  getId?: (item: any) => string;
}

const iS = {
  width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
  borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AdminCrud({ config }: { config: CrudConfig }) {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Record<string, unknown>>(() => {
    const f: Record<string, unknown> = {};
    config.fields.forEach(fd => { f[fd.key] = fd.defaultValue ?? (fd.type === "number" ? 0 : fd.type === "checkbox" ? false : ""); });
    return f;
  });

  const refresh = useCallback(async () => {
    setLoading(true);
    if (config.module) {
      const data = await adminList(config.module);
      setList(data);
    } else if (config.getData) {
      setList(config.getData());
    }
    setLoading(false);
  }, [config]);

  useEffect(() => { refresh(); }, [refresh]);

  const handleSave = async () => {
    const missing = config.fields.find(f => f.required && !form[f.key]);
    if (missing) return;
    if (config.module) {
      await adminCreate(config.module, form as Record<string, any>);
    } else if (config.onSave) {
      const item = { ...form, id: Date.now().toString(), createdAt: new Date().toISOString() };
      config.onSave(item);
    }
    const f: Record<string, unknown> = {};
    config.fields.forEach(fd => { f[fd.key] = fd.defaultValue ?? (fd.type === "number" ? 0 : fd.type === "checkbox" ? false : ""); });
    setForm(f);
    setShowForm(false);
    await refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("حذف شود؟")) return;
    if (config.module) {
      await adminDelete(config.module, id);
    } else if (config.onDelete) {
      config.onDelete(id);
    }
    await refresh();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>
          {loading ? "..." : `${list.length} مورد`}
        </span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          {showForm ? "انصراف" : `${config.icon} افزودن`}
        </button>
      </div>

      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {config.fields.map(fd => (
            <div key={fd.key} style={fd.type === "textarea" ? { gridColumn: "1/-1" } : {}}>
              <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>{fd.label}{fd.required ? " *" : ""}</label>
              {fd.type === "select" ? (
                <select style={iS} value={String(form[fd.key] ?? "")} onChange={e => setForm(f => ({ ...f, [fd.key]: e.target.value }))}>
                  {fd.options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ) : fd.type === "textarea" ? (
                <textarea style={{ ...iS, minHeight: 60, resize: "vertical" }} value={String(form[fd.key] ?? "")} onChange={e => setForm(f => ({ ...f, [fd.key]: e.target.value }))} placeholder={fd.placeholder} />
              ) : fd.type === "checkbox" ? (
                <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, cursor: "pointer" }}>
                  <input type="checkbox" checked={!!form[fd.key]} onChange={e => setForm(f => ({ ...f, [fd.key]: e.target.checked }))} />
                  {fd.placeholder}
                </label>
              ) : (
                <input type={fd.type || "text"} style={iS} value={String(form[fd.key] ?? "")}
                  onChange={e => setForm(f => ({ ...f, [fd.key]: fd.type === "number" ? Number(e.target.value) : e.target.value }))}
                  placeholder={fd.placeholder} />
              )}
            </div>
          ))}
          <button onClick={handleSave} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ذخیره</button>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "65vh", overflowY: "auto" }}>
        {list.map((item) => {
          const id = item.id;
          const st = config.statusField ? String(item[config.statusField] ?? "") : "";
          const stColor = config.statusColors?.[st] ?? "#888";
          return (
            <div key={id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 12, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                  {config.columns.slice(0, 1).map(col => (
                    <span key={col.key} style={{ fontWeight: 700, fontSize: 14 }}>
                      {col.render ? col.render(item) : String(item[col.key] ?? "")}
                    </span>
                  ))}
                  {st && <span style={{ fontSize: 9, padding: "1px 6px", borderRadius: 4, background: `${stColor}20`, color: stColor }}>{st}</span>}
                </div>
                <div style={{ fontSize: 11, color: "#888", display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {config.columns.slice(1).map(col => (
                    <span key={col.key}>{col.label}: {col.render ? col.render(item) : String(item[col.key] ?? "")}</span>
                  ))}
                </div>
              </div>
              <button onClick={() => handleDelete(id)} style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 10, flexShrink: 0 }}>حذف</button>
            </div>
          );
        })}
        {!loading && list.length === 0 && <p style={{ color: "#555", fontSize: 13, direction: "rtl" }}>هنوز موردی ثبت نشده</p>}
      </div>
    </div>
  );
}
