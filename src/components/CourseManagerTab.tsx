"use client";

import { useState, useEffect } from "react";
import {
  getCourseConfigs, saveCourseConfigs, deleteCourse,
  type CourseConfig, type NavItemConfig,
} from "@/lib/courseConfig";

const AVAILABLE_ICONS = [
  "Home", "BookOpen", "BarChart2", "Award", "MessageCircle",
  "HelpCircle", "Settings", "Zap", "Target", "Trophy",
  "Star", "Flag", "GraduationCap",
];

export default function CourseManagerTab() {
  const [courses, setCourses] = useState<CourseConfig[]>([]);
  const [editing, setEditing] = useState<CourseConfig | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setCourses(getCourseConfigs()); }, []);

  const save = (list: CourseConfig[]) => {
    saveCourseConfigs(list);
    setCourses(list);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleToggle = (id: string) => {
    const updated = courses.map(c => c.id === id ? { ...c, enabled: !c.enabled } : c);
    save(updated);
  };

  const handleDelete = (id: string) => {
    if (!confirm("آیا مطمئنید؟")) return;
    deleteCourse(id);
    setCourses(getCourseConfigs());
  };

  const handleSaveEdit = () => {
    if (!editing) return;
    const updated = courses.map(c => c.id === editing.id ? editing : c);
    // If new course (not in list yet)
    if (!courses.find(c => c.id === editing.id)) updated.push(editing);
    save(updated);
    setEditing(null);
  };

  const handleMoveUp = (idx: number) => {
    if (idx === 0) return;
    const list = [...courses];
    [list[idx - 1], list[idx]] = [list[idx], list[idx - 1]];
    list.forEach((c, i) => c.order = i + 1);
    save(list);
  };

  const handleMoveDown = (idx: number) => {
    if (idx >= courses.length - 1) return;
    const list = [...courses];
    [list[idx], list[idx + 1]] = [list[idx + 1], list[idx]];
    list.forEach((c, i) => c.order = i + 1);
    save(list);
  };

  const addNewCourse = () => {
    setEditing({
      id: `course_${Date.now()}`,
      title: "",
      subtitle: "",
      description: "",
      icon: "📖",
      colorPrimary: "#6366f1",
      colorSecondary: "#8b5cf6",
      colorRgb: "99,102,241",
      badges: [],
      navItems: [
        { id: "home", label: "خانه", icon: "Home", enabled: true },
        { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      ],
      enabled: true,
      order: courses.length + 1,
      accessKey: "",
    });
  };

  const updateNavItem = (idx: number, field: keyof NavItemConfig, value: string | boolean) => {
    if (!editing) return;
    const navItems = [...editing.navItems];
    navItems[idx] = { ...navItems[idx], [field]: value };
    setEditing({ ...editing, navItems });
  };

  const addNavItem = () => {
    if (!editing) return;
    setEditing({
      ...editing,
      navItems: [...editing.navItems, { id: "new", label: "جدید", icon: "Home", enabled: true }],
    });
  };

  const removeNavItem = (idx: number) => {
    if (!editing) return;
    const navItems = editing.navItems.filter((_, i) => i !== idx);
    setEditing({ ...editing, navItems });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "8px 12px", borderRadius: 8,
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
    color: "var(--text-primary)", fontSize: 13, outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11, color: "var(--text-muted)", marginBottom: 4, display: "block", direction: "rtl",
  };

  // ── Edit Modal ──
  if (editing) {
    return (
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, direction: "rtl" }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)" }}>
            ✏️ {editing.title || "دوره جدید"}
          </h3>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setEditing(null)} style={{
              padding: "6px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text-muted)",
            }}>انصراف</button>
            <button onClick={handleSaveEdit} style={{
              padding: "6px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer",
              background: "linear-gradient(135deg, #22d3a5, #10b981)", border: "none",
              color: "white", fontWeight: 700,
            }}>💾 ذخیره</button>
          </div>
        </div>

        {/* Basic Info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <div>
            <label style={labelStyle}>شناسه (ID)</label>
            <input style={inputStyle} value={editing.id}
              onChange={e => setEditing({ ...editing, id: e.target.value })} placeholder="patente" />
          </div>
          <div>
            <label style={labelStyle}>کلید دسترسی</label>
            <input style={inputStyle} value={editing.accessKey}
              onChange={e => setEditing({ ...editing, accessKey: e.target.value })} placeholder="patente" />
          </div>
          <div>
            <label style={labelStyle}>عنوان</label>
            <input style={inputStyle} value={editing.title}
              onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="Patente Italiana" />
          </div>
          <div>
            <label style={labelStyle}>زیرعنوان</label>
            <input style={inputStyle} value={editing.subtitle}
              onChange={e => setEditing({ ...editing, subtitle: e.target.value })} placeholder="گواهینامه رانندگی" />
          </div>
          <div>
            <label style={labelStyle}>آیکون (Emoji)</label>
            <input style={inputStyle} value={editing.icon}
              onChange={e => setEditing({ ...editing, icon: e.target.value })} placeholder="🚗" />
          </div>
          <div>
            <label style={labelStyle}>ترتیب</label>
            <input style={inputStyle} type="number" value={editing.order}
              onChange={e => setEditing({ ...editing, order: Number(e.target.value) })} />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>توضیحات</label>
          <textarea style={{ ...inputStyle, minHeight: 60, resize: "vertical", direction: "rtl" }}
            value={editing.description}
            onChange={e => setEditing({ ...editing, description: e.target.value })} />
        </div>

        {/* Colors */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12, padding: 14, marginBottom: 16,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, direction: "rtl" }}>
            🎨 رنگ‌ها
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <div>
              <label style={labelStyle}>رنگ اصلی</label>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <input type="color" value={editing.colorPrimary}
                  onChange={e => setEditing({ ...editing, colorPrimary: e.target.value })}
                  style={{ width: 32, height: 32, border: "none", cursor: "pointer" }} />
                <input style={{ ...inputStyle, flex: 1 }} value={editing.colorPrimary}
                  onChange={e => setEditing({ ...editing, colorPrimary: e.target.value })} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>رنگ ثانویه</label>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <input type="color" value={editing.colorSecondary}
                  onChange={e => setEditing({ ...editing, colorSecondary: e.target.value })}
                  style={{ width: 32, height: 32, border: "none", cursor: "pointer" }} />
                <input style={{ ...inputStyle, flex: 1 }} value={editing.colorSecondary}
                  onChange={e => setEditing({ ...editing, colorSecondary: e.target.value })} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>RGB (بدون #)</label>
              <input style={inputStyle} value={editing.colorRgb}
                onChange={e => setEditing({ ...editing, colorRgb: e.target.value })} placeholder="147,51,234" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12, padding: 14, marginBottom: 16,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, direction: "rtl" }}>
            🏷️ برچسب‌ها (با ویرگول جدا کنید)
          </div>
          <input style={{ ...inputStyle, direction: "rtl" }}
            value={editing.badges.join(", ")}
            onChange={e => setEditing({ ...editing, badges: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
            placeholder="📚 ۲۵ فصل, ✍️ آزمون تمرینی" />
        </div>

        {/* Nav Items */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12, padding: 14,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, direction: "rtl" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>
              📱 آیتم‌های نوار ناوبری
            </div>
            <button onClick={addNavItem} style={{
              padding: "4px 10px", borderRadius: 6, fontSize: 11, cursor: "pointer",
              background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8", fontWeight: 600,
            }}>+ افزودن</button>
          </div>
          {editing.navItems.map((nav, idx) => (
            <div key={idx} style={{
              display: "grid", gridTemplateColumns: "80px 1fr 120px 40px 40px",
              gap: 8, marginBottom: 8, alignItems: "center",
            }}>
              <input style={{ ...inputStyle, fontSize: 11 }} value={nav.id}
                onChange={e => updateNavItem(idx, "id", e.target.value)} placeholder="id" />
              <input style={{ ...inputStyle, fontSize: 11, direction: "rtl" }} value={nav.label}
                onChange={e => updateNavItem(idx, "label", e.target.value)} placeholder="لیبل" />
              <select style={{ ...inputStyle, fontSize: 11 }} value={nav.icon}
                onChange={e => updateNavItem(idx, "icon", e.target.value)}>
                {AVAILABLE_ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
              </select>
              <button onClick={() => updateNavItem(idx, "enabled", !nav.enabled)} style={{
                padding: 4, borderRadius: 6, border: "none", cursor: "pointer", fontSize: 14,
                background: nav.enabled ? "rgba(34,211,165,0.15)" : "rgba(239,68,68,0.15)",
              }}>{nav.enabled ? "✅" : "❌"}</button>
              <button onClick={() => removeNavItem(idx)} style={{
                padding: 4, borderRadius: 6, border: "none", cursor: "pointer", fontSize: 14,
                background: "rgba(239,68,68,0.1)", color: "#ef4444",
              }}>🗑</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── List View ──
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)" }}>
          📚 مدیریت دوره‌ها ({courses.length})
        </h3>
        <div style={{ display: "flex", gap: 8 }}>
          {saved && <span style={{ fontSize: 12, color: "#22d3a5", fontWeight: 600 }}>✓ ذخیره شد</span>}
          <button onClick={addNewCourse} style={{
            padding: "6px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)", border: "none",
            color: "white", fontWeight: 700,
          }}>+ دوره جدید</button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {courses.map((course, idx) => (
          <div key={course.id} style={{
            display: "flex", alignItems: "center", gap: 14,
            background: course.enabled
              ? `linear-gradient(135deg, rgba(${course.colorRgb},0.08), rgba(${course.colorRgb},0.03))`
              : "rgba(255,255,255,0.02)",
            border: `1px solid rgba(${course.colorRgb},${course.enabled ? "0.2" : "0.05"})`,
            borderRadius: 14, padding: "14px 16px",
            opacity: course.enabled ? 1 : 0.5,
            transition: "all 0.2s", direction: "rtl",
          }}>
            {/* Icon */}
            <div style={{
              width: 44, height: 44, borderRadius: 12, flexShrink: 0,
              background: `rgba(${course.colorRgb},0.15)`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
            }}>{course.icon}</div>

            {/* Info */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text-primary)" }}>{course.title}</div>
              <div style={{ fontSize: 11, color: course.colorPrimary }}>{course.subtitle}</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>
                ID: {course.id} · نوبار: {course.navItems.filter(n => n.enabled).length} آیتم
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              <button onClick={() => handleMoveUp(idx)} style={{
                width: 28, height: 28, borderRadius: 6, border: "none", cursor: "pointer",
                background: "rgba(255,255,255,0.06)", color: "var(--text-muted)", fontSize: 12,
              }}>▲</button>
              <button onClick={() => handleMoveDown(idx)} style={{
                width: 28, height: 28, borderRadius: 6, border: "none", cursor: "pointer",
                background: "rgba(255,255,255,0.06)", color: "var(--text-muted)", fontSize: 12,
              }}>▼</button>
              <button onClick={() => handleToggle(course.id)} style={{
                width: 28, height: 28, borderRadius: 6, border: "none", cursor: "pointer",
                background: course.enabled ? "rgba(34,211,165,0.15)" : "rgba(239,68,68,0.15)",
                fontSize: 14,
              }}>{course.enabled ? "✅" : "❌"}</button>
              <button onClick={() => setEditing({ ...course })} style={{
                width: 28, height: 28, borderRadius: 6, border: "none", cursor: "pointer",
                background: "rgba(99,102,241,0.15)", color: "#818cf8", fontSize: 13,
              }}>✏️</button>
              <button onClick={() => handleDelete(course.id)} style={{
                width: 28, height: 28, borderRadius: 6, border: "none", cursor: "pointer",
                background: "rgba(239,68,68,0.1)", color: "#ef4444", fontSize: 13,
              }}>🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
