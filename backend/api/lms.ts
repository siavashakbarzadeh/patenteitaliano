import { supabaseAdmin } from "../lib/supabase";

// ══════════════════════════════════════════════════════════════════════════════
//  Announcements
// ══════════════════════════════════════════════════════════════════════════════
export async function getAnnouncements() {
  const { data } = await supabaseAdmin
    .from("announcements")
    .select("*")
    .order("pinned", { ascending: false })
    .order("created_at", { ascending: false });
  return data ?? [];
}

export async function createAnnouncement(ann: {
  title: string; body: string; priority: string; pinned: boolean; targetUsers: string;
}) {
  const { data, error } = await supabaseAdmin.from("announcements").insert({
    title: ann.title, body: ann.body, priority: ann.priority,
    pinned: ann.pinned, target_users: ann.targetUsers,
  }).select().single();
  return { data, error: error?.message ?? null };
}

export async function deleteAnnouncement(id: string) {
  await supabaseAdmin.from("announcements").delete().eq("id", id);
}

// ══════════════════════════════════════════════════════════════════════════════
//  Certificates
// ══════════════════════════════════════════════════════════════════════════════
export async function getCertificates(username?: string) {
  let q = supabaseAdmin.from("certificates").select("*").order("issued_at", { ascending: false });
  if (username) q = q.eq("username", username);
  const { data } = await q;
  return data ?? [];
}

export async function issueCertificate(cert: {
  userId: string; username: string; courseName: string; courseLevel: string; grade: string; note: string;
}) {
  const { data, error } = await supabaseAdmin.from("certificates").insert({
    user_id: cert.userId, username: cert.username,
    course_name: cert.courseName, course_level: cert.courseLevel,
    grade: cert.grade, note: cert.note,
  }).select().single();
  return { data, error: error?.message ?? null };
}

export async function deleteCertificate(id: string) {
  await supabaseAdmin.from("certificates").delete().eq("id", id);
}

// ══════════════════════════════════════════════════════════════════════════════
//  Messages
// ══════════════════════════════════════════════════════════════════════════════
export async function getMessages(username?: string) {
  let q = supabaseAdmin.from("messages").select("*").order("sent_at", { ascending: false });
  if (username) q = q.or(`from_user.eq.${username},to_user.eq.${username}`);
  const { data } = await q;
  return data ?? [];
}

export async function sendMessage(msg: {
  from: string; to: string; subject: string; body: string;
}) {
  const { data, error } = await supabaseAdmin.from("messages").insert({
    from_user: msg.from, to_user: msg.to,
    subject: msg.subject, body: msg.body,
  }).select().single();
  return { data, error: error?.message ?? null };
}

export async function markMessageRead(id: string) {
  await supabaseAdmin.from("messages").update({ is_read: true }).eq("id", id);
}

export async function deleteMessage(id: string) {
  await supabaseAdmin.from("messages").delete().eq("id", id);
}

// ══════════════════════════════════════════════════════════════════════════════
//  Schedule
// ══════════════════════════════════════════════════════════════════════════════
export async function getSchedule() {
  const { data } = await supabaseAdmin
    .from("schedule_events")
    .select("*")
    .order("event_date");
  return data ?? [];
}

export async function createScheduleEvent(ev: {
  title: string; description: string; date: string; time: string; type: string; targetUsers: string;
}) {
  const { data, error } = await supabaseAdmin.from("schedule_events").insert({
    title: ev.title, description: ev.description,
    event_date: ev.date, event_time: ev.time || null,
    event_type: ev.type, target_users: ev.targetUsers,
  }).select().single();
  return { data, error: error?.message ?? null };
}

export async function deleteScheduleEvent(id: string) {
  await supabaseAdmin.from("schedule_events").delete().eq("id", id);
}

// ══════════════════════════════════════════════════════════════════════════════
//  Videos
// ══════════════════════════════════════════════════════════════════════════════
export async function getVideos() {
  const { data } = await supabaseAdmin.from("videos").select("*").order("created_at", { ascending: false });
  return data ?? [];
}

export async function addVideo(video: {
  chapterNum: number; titleFa: string; titleIt: string; url: string;
  downloadUrl: string; isPremium: boolean; duration: string; description: string;
}) {
  const { data, error } = await supabaseAdmin.from("videos").insert({
    chapter_num: video.chapterNum, title_fa: video.titleFa, title_it: video.titleIt,
    url: video.url, download_url: video.downloadUrl, is_premium: video.isPremium,
    duration: video.duration, description: video.description,
  }).select().single();
  return { data, error: error?.message ?? null };
}

export async function deleteVideo(id: string) {
  await supabaseAdmin.from("videos").delete().eq("id", id);
}

// ══════════════════════════════════════════════════════════════════════════════
//  Subscriptions
// ══════════════════════════════════════════════════════════════════════════════
export async function getSubscription(userId: string) {
  const { data } = await supabaseAdmin.from("subscriptions").select("*").eq("user_id", userId).single();
  return data ?? { plan: "free", expires_at: null };
}

export async function setPlan(userId: string, plan: string, expiresAt?: string) {
  await supabaseAdmin.from("subscriptions").upsert({
    user_id: userId, plan, expires_at: expiresAt || null, updated_at: new Date().toISOString(),
  }, { onConflict: "user_id" });
}

// ══════════════════════════════════════════════════════════════════════════════
//  Discount Codes
// ══════════════════════════════════════════════════════════════════════════════
export async function getDiscountCodes() {
  const { data } = await supabaseAdmin.from("discount_codes").select("*").order("created_at", { ascending: false });
  return data ?? [];
}

export async function createDiscountCode(code: {
  code: string; discountPercent: number; description: string;
  maxUses: number | null; expiresAt: string | null; active: boolean;
}) {
  await supabaseAdmin.from("discount_codes").insert({
    code: code.code, discount_percent: code.discountPercent,
    description: code.description, max_uses: code.maxUses,
    expires_at: code.expiresAt, active: code.active,
  });
}

export async function toggleDiscountCode(code: string) {
  const { data } = await supabaseAdmin.from("discount_codes").select("active").eq("code", code).single();
  if (data) await supabaseAdmin.from("discount_codes").update({ active: !data.active }).eq("code", code);
}

export async function deleteDiscountCode(code: string) {
  await supabaseAdmin.from("discount_codes").delete().eq("code", code);
}

// ══════════════════════════════════════════════════════════════════════════════
//  Student Notes
// ══════════════════════════════════════════════════════════════════════════════
export async function getStudentNotes(username?: string) {
  let q = supabaseAdmin.from("student_notes").select("*").order("created_at", { ascending: false });
  if (username) q = q.eq("username", username);
  const { data } = await q;
  return data ?? [];
}

export async function addStudentNote(userId: string, username: string, note: string) {
  await supabaseAdmin.from("student_notes").insert({ user_id: userId, username, note });
}

export async function deleteStudentNote(id: string) {
  await supabaseAdmin.from("student_notes").delete().eq("id", id);
}
