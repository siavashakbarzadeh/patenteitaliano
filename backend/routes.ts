// ═══════════════════════════════════════════════════════════════════════════════
//  Next.js API Route Templates for Vercel
//  Copy these to src/app/api/ when ready to switch from localStorage to Supabase
// ═══════════════════════════════════════════════════════════════════════════════

// ── File: src/app/api/auth/login/route.ts ─────────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/../../backend/api/auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const result = await loginUser(username, password);
  if (result.error) return NextResponse.json({ error: result.error }, { status: 401 });
  return NextResponse.json(result.user);
}
*/

// ── File: src/app/api/auth/logout/route.ts ────────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { logoutUser } from "@/../../backend/api/auth";

export async function POST(req: NextRequest) {
  const { userId, username } = await req.json();
  await logoutUser(userId, username);
  return NextResponse.json({ ok: true });
}
*/

// ── File: src/app/api/users/route.ts ──────────────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { getAllUsers, addUser, updateUser, deleteUser } from "@/../../backend/api/auth";

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const { username, password, displayName, role } = await req.json();
  const result = await addUser(username, password, displayName, role);
  if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
  return NextResponse.json(result.user);
}

export async function PUT(req: NextRequest) {
  const { userId, ...updates } = await req.json();
  const result = await updateUser(userId, updates);
  return NextResponse.json({ error: result.error });
}

export async function DELETE(req: NextRequest) {
  const { userId } = await req.json();
  const result = await deleteUser(userId);
  return NextResponse.json({ error: result.error });
}
*/

// ── File: src/app/api/sections/route.ts ───────────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { getUserSections, setUserSections, getAllSectionAccess } from "@/../../backend/api/sections";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  if (userId) {
    const sections = await getUserSections(userId);
    return NextResponse.json(sections);
  }
  const all = await getAllSectionAccess();
  return NextResponse.json(all);
}

export async function PUT(req: NextRequest) {
  const { userId, sections } = await req.json();
  await setUserSections(userId, sections);
  return NextResponse.json({ ok: true });
}
*/

// ── File: src/app/api/progress/route.ts ───────────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { getProgress, saveProgress, resetProgress } from "@/../../backend/api/progress";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId")!;
  const progress = await getProgress(userId);
  return NextResponse.json(progress);
}

export async function PUT(req: NextRequest) {
  const { userId, ...progress } = await req.json();
  const result = await saveProgress(userId, progress);
  return NextResponse.json({ error: result.error });
}

export async function DELETE(req: NextRequest) {
  const { userId } = await req.json();
  await resetProgress(userId);
  return NextResponse.json({ ok: true });
}
*/

// ── File: src/app/api/announcements/route.ts ──────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { getAnnouncements, createAnnouncement, deleteAnnouncement } from "@/../../backend/api/lms";

export async function GET() {
  return NextResponse.json(await getAnnouncements());
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await createAnnouncement(body);
  return NextResponse.json(result);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await deleteAnnouncement(id);
  return NextResponse.json({ ok: true });
}
*/

// ── File: src/app/api/certificates/route.ts ───────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { getCertificates, issueCertificate, deleteCertificate } from "@/../../backend/api/lms";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username") ?? undefined;
  return NextResponse.json(await getCertificates(username));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await issueCertificate(body);
  return NextResponse.json(result);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await deleteCertificate(id);
  return NextResponse.json({ ok: true });
}
*/

// ── File: src/app/api/messages/route.ts ───────────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { getMessages, sendMessage, markMessageRead, deleteMessage } from "@/../../backend/api/lms";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username") ?? undefined;
  return NextResponse.json(await getMessages(username));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await sendMessage(body);
  return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
  const { id } = await req.json();
  await markMessageRead(id);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await deleteMessage(id);
  return NextResponse.json({ ok: true });
}
*/

// ── File: src/app/api/schedule/route.ts ───────────────────────────────────────
/*
import { NextRequest, NextResponse } from "next/server";
import { getSchedule, createScheduleEvent, deleteScheduleEvent } from "@/../../backend/api/lms";

export async function GET() {
  return NextResponse.json(await getSchedule());
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await createScheduleEvent(body);
  return NextResponse.json(result);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await deleteScheduleEvent(id);
  return NextResponse.json({ ok: true });
}
*/

// ── File: src/app/api/activity/route.ts ───────────────────────────────────────
/*
import { NextResponse } from "next/server";
import { getActivityLog } from "@/../../backend/api/sections";

export async function GET() {
  return NextResponse.json(await getActivityLog());
}
*/
