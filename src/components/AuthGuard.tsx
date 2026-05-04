"use client";

import { useState, useEffect } from "react";
import { login, getSession, logout, addUser, type User } from "@/lib/auth";

// ─── Italian Flag SVG ─────────────────────────────────────────────────────────
function ItalianFlag() {
  return (
    <svg width="28" height="20" viewBox="0 0 3 2" style={{ borderRadius: 3, boxShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ce2b37" />
    </svg>
  );
}

// ─── Shared input style ───────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: 12,
  background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)",
  color: "var(--text-primary)", fontSize: 14,
  outline: "none", direction: "ltr", textAlign: "left",
  transition: "border-color 0.2s",
};
const focusIn = (e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = "rgba(99,102,241,0.6)");
const focusOut = (e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = "var(--border-color)");

// ─── Login Page ───────────────────────────────────────────────────────────────
function LoginPage({ onLogin, onGoRegister }: { onLogin: (user: User) => void; onGoRegister: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password) { setError("لطفاً نام کاربری و رمز عبور را وارد کنید."); return; }
    setLoading(true);
    setTimeout(() => {
      const user = login(username.trim(), password);
      setLoading(false);
      if (user) { onLogin(user); } else { setError("نام کاربری یا رمز عبور اشتباه است."); }
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, direction: "rtl", textAlign: "right" }}>نام کاربری</label>
        <input id="login-username" type="text" value={username} onChange={e => { setUsername(e.target.value); setError(""); }} placeholder="username" autoComplete="username" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, direction: "rtl", textAlign: "right" }}>رمز عبور</label>
        <div style={{ position: "relative" }}>
          <input id="login-password" type={showPass ? "text" : "password"} value={password} onChange={e => { setPassword(e.target.value); setError(""); }} placeholder="••••••" autoComplete="current-password" style={{ ...inputStyle, paddingRight: 40 }} onFocus={focusIn} onBlur={focusOut} />
          <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 12, padding: 4 }}>{showPass ? "پنهان" : "نمایش"}</button>
        </div>
      </div>
      {error && (
        <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 10, padding: "10px 14px", direction: "rtl", textAlign: "right" }}>
          <p style={{ fontSize: 12, color: "#f87171", margin: 0 }}>⚠️ {error}</p>
        </div>
      )}
      <button id="btn-login-submit" type="submit" disabled={loading} style={{ width: "100%", padding: "13px", borderRadius: 12, background: loading ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg, #6366f1, #8b5cf6)", border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", marginTop: 4, transition: "opacity 0.2s", boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}>
        {loading ? "در حال ورود..." : "ورود"}
      </button>
      <p style={{ textAlign: "center", fontSize: 13, color: "var(--text-muted)", margin: "4px 0 0", direction: "rtl" }}>
        حساب ندارید؟{" "}
        <button type="button" onClick={onGoRegister} style={{ background: "none", border: "none", color: "#a78bfa", cursor: "pointer", fontWeight: 700, fontSize: 13, textDecoration: "underline" }}>ثبت‌نام کنید</button>
      </p>
    </form>
  );
}

// ─── Register Page ────────────────────────────────────────────────────────────
function RegisterPage({ onRegister, onGoLogin }: { onRegister: (user: User) => void; onGoLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!username.trim()) { setError("نام کاربری الزامی است."); return; }
    if (username.trim().length < 3) { setError("نام کاربری حداقل ۳ کاراکتر باشد."); return; }
    if (!password || password.length < 4) { setError("رمز عبور حداقل ۴ کاراکتر باشد."); return; }
    if (password !== confirmPass) { setError("رمز عبور و تکرار آن یکسان نیستند."); return; }

    setLoading(true);
    setTimeout(() => {
      const ok = addUser({
        username: username.trim().toLowerCase(),
        password,
        displayName: displayName.trim() || username.trim(),
        role: "student",
      });
      if (!ok) { setLoading(false); setError("این نام کاربری قبلاً ثبت شده است."); return; }
      // Auto-login after register
      const user = login(username.trim().toLowerCase(), password);
      setLoading(false);
      if (user) { onRegister(user); } else { setError("ثبت‌نام انجام شد، اما ورود موفق نبود. لطفاً وارد شوید."); }
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, direction: "rtl", textAlign: "right" }}>نام کاربری *</label>
        <input id="register-username" type="text" value={username} onChange={e => { setUsername(e.target.value); setError(""); }} placeholder="username" autoComplete="username" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, direction: "rtl", textAlign: "right" }}>نام نمایشی</label>
        <input id="register-displayname" type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder="مثلاً: علی / Aida" style={{ ...inputStyle, direction: "rtl", textAlign: "right" }} onFocus={focusIn} onBlur={focusOut} />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, direction: "rtl", textAlign: "right" }}>رمز عبور *</label>
        <div style={{ position: "relative" }}>
          <input id="register-password" type={showPass ? "text" : "password"} value={password} onChange={e => { setPassword(e.target.value); setError(""); }} placeholder="حداقل ۴ کاراکتر" autoComplete="new-password" style={{ ...inputStyle, paddingRight: 40 }} onFocus={focusIn} onBlur={focusOut} />
          <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 12, padding: 4 }}>{showPass ? "پنهان" : "نمایش"}</button>
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, direction: "rtl", textAlign: "right" }}>تکرار رمز عبور *</label>
        <input id="register-confirm" type={showPass ? "text" : "password"} value={confirmPass} onChange={e => { setConfirmPass(e.target.value); setError(""); }} placeholder="تکرار رمز" autoComplete="new-password" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
        {confirmPass && password && confirmPass !== password && (
          <p style={{ fontSize: 11, color: "#f87171", margin: "6px 0 0", direction: "rtl", textAlign: "right" }}>⚠️ رمزها مطابقت ندارند</p>
        )}
      </div>
      {error && (
        <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 10, padding: "10px 14px", direction: "rtl", textAlign: "right" }}>
          <p style={{ fontSize: 12, color: "#f87171", margin: 0 }}>⚠️ {error}</p>
        </div>
      )}
      <button id="btn-register-submit" type="submit" disabled={loading} style={{ width: "100%", padding: "13px", borderRadius: 12, background: loading ? "rgba(34,211,165,0.5)" : "linear-gradient(135deg, #22d3a5, #059669)", border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", marginTop: 4, transition: "opacity 0.2s", boxShadow: "0 4px 20px rgba(34,211,165,0.3)" }}>
        {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
      </button>
      <p style={{ textAlign: "center", fontSize: 13, color: "var(--text-muted)", margin: "4px 0 0", direction: "rtl" }}>
        قبلاً ثبت‌نام کرده‌اید؟{" "}
        <button type="button" onClick={onGoLogin} style={{ background: "none", border: "none", color: "#a78bfa", cursor: "pointer", fontWeight: 700, fontSize: 13, textDecoration: "underline" }}>وارد شوید</button>
      </p>
    </form>
  );
}

// ─── Auth Shell (shared layout for Login & Register) ──────────────────────────
function AuthShell({ onLogin }: { onLogin: (user: User) => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "var(--bg-primary)", padding: "20px",
    }}>
      {/* Background glow */}
      <div style={{
        position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${mode === "login" ? "rgba(99,102,241,0.12)" : "rgba(34,211,165,0.10)"} 0%, transparent 70%)`,
        pointerEvents: "none", zIndex: 0, transition: "background 0.5s",
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 380 }}>
        {/* Logo area */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 14 }}>
            <ItalianFlag />
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              PATENTE B • CODICE DELLA STRADA
            </span>
          </div>
          <h1 style={{
            fontSize: 26, fontWeight: 900, lineHeight: 1.3, direction: "rtl",
            background: mode === "login"
              ? "linear-gradient(135deg, #6366f1, #a78bfa)"
              : "linear-gradient(135deg, #22d3a5, #6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            marginBottom: 6, transition: "background 0.3s",
          }}>
            آموزش گواهینامه ایتالیایی
          </h1>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            {mode === "login" ? "برای ادامه وارد حساب خود شوید" : "یک حساب جدید ایجاد کنید"}
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border-color)",
          borderRadius: 20, padding: "32px 28px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, direction: "rtl", textAlign: "right",
            marginBottom: 24, color: "var(--text-primary)" }}>
            {mode === "login" ? "ورود به حساب" : "ثبت‌نام حساب جدید"}
          </h2>

          {mode === "login"
            ? <LoginPage onLogin={onLogin} onGoRegister={() => setMode("register")} />
            : <RegisterPage onRegister={onLogin} onGoLogin={() => setMode("login")} />
          }
        </div>

        <p style={{ textAlign: "center", fontSize: 11, color: "var(--text-muted)", marginTop: 20 }}>
          Patente Italiana © 2025
        </p>
      </div>
    </div>
  );
}

// ─── Auth Guard ───────────────────────────────────────────────────────────────
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const session = getSession();
    setUser(session);
    setChecked(true);
  }, []);

  // Store logout in window for use from child components
  useEffect(() => {
    (window as unknown as Record<string, unknown>)["__patente_logout"] = () => {
      logout();
      setUser(null);
    };
  }, []);

  if (!checked) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", background: "var(--bg-primary)" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%",
          border: "3px solid rgba(99,102,241,0.2)", borderTopColor: "#6366f1",
          animation: "spin 0.7s linear infinite" }} />
      </div>
    );
  }

  if (!user) {
    return <AuthShell onLogin={u => setUser(u)} />;
  }

  return <>{children}</>;
}
