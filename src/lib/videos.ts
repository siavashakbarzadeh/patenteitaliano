// ─────────────────────────────────────────────────────────────────────────────
//  Video Registry — لیست ویدیوهای آموزشی
// ─────────────────────────────────────────────────────────────────────────────

export type VideoItem = {
  id: string;          // unique id
  chapterNum: number;  // فصل مرتبط
  topicTag?: string;   // tag مبحث (مثل "reazione", "frenatura")
  titleFa: string;     // عنوان فارسی
  titleIt: string;     // عنوان ایتالیایی
  description?: string;
  url: string;         // YouTube URL یا direct video URL
  downloadUrl?: string; // لینک مستقیم دانلود
  isPremium: boolean;  // آیا نیاز به اشتراک پریمیوم دارد؟
  duration?: string;   // مثل "3:45"
  thumbnailUrl?: string;
  addedAt: string;     // ISO date
};

const VIDEOS_KEY = "patente_videos";

// ── Seed data — ویدیوهای نمونه ───────────────────────────────────────────────
const SEED_VIDEOS: VideoItem[] = [
  {
    id: "vid-12-001",
    chapterNum: 12,
    topicTag: "distanza-sicurezza",
    titleFa: "فاصله ایمنی در جاده",
    titleIt: "Distanza di Sicurezza — Spiegazione Completa",
    description: "توضیح کامل فاصله ایمنی، فضای واکنش و فضای ترمز با مثال‌های تصویری",
    url: "https://www.youtube.com/watch?v=LrHne5Wl4bE",
    isPremium: false,
    duration: "4:23",
    addedAt: "2025-01-01T00:00:00Z",
  },
  {
    id: "vid-12-002",
    chapterNum: 12,
    topicTag: "frenatura",
    titleFa: "تست ترمز در شرایط مختلف",
    titleIt: "Test Frenata su Diversi Fondi Stradali",
    description: "مقایسه فاصله ترمز در جاده خشک، مرطوب و یخ‌زده",
    url: "https://www.youtube.com/watch?v=example2",
    downloadUrl: "https://example.com/download/vid-12-002.mp4",
    isPremium: true,
    duration: "6:10",
    addedAt: "2025-01-01T00:00:00Z",
  },
];

// ── Load all videos ───────────────────────────────────────────────────────────
export function loadVideos(): VideoItem[] {
  try {
    const stored = localStorage.getItem(VIDEOS_KEY);
    if (!stored) {
      // اولین بار — seed data ذخیره کن
      localStorage.setItem(VIDEOS_KEY, JSON.stringify(SEED_VIDEOS));
      return SEED_VIDEOS;
    }
    return JSON.parse(stored) as VideoItem[];
  } catch {
    return SEED_VIDEOS;
  }
}

// ── Save all videos ───────────────────────────────────────────────────────────
export function saveVideos(videos: VideoItem[]): void {
  localStorage.setItem(VIDEOS_KEY, JSON.stringify(videos));
}

// ── Get videos for a chapter ──────────────────────────────────────────────────
export function getChapterVideos(chapterNum: number): VideoItem[] {
  return loadVideos().filter(v => v.chapterNum === chapterNum);
}

// ── Add video (admin) ─────────────────────────────────────────────────────────
export function addVideo(video: Omit<VideoItem, "id" | "addedAt">): VideoItem {
  const all = loadVideos();
  const newVideo: VideoItem = {
    ...video,
    id: `vid-${Date.now()}`,
    addedAt: new Date().toISOString(),
  };
  saveVideos([...all, newVideo]);
  return newVideo;
}

// ── Update video (admin) ──────────────────────────────────────────────────────
export function updateVideo(id: string, changes: Partial<VideoItem>): void {
  const all = loadVideos().map(v => v.id === id ? { ...v, ...changes } : v);
  saveVideos(all);
}

// ── Delete video (admin) ──────────────────────────────────────────────────────
export function deleteVideo(id: string): void {
  saveVideos(loadVideos().filter(v => v.id !== id));
}

// ── Generate shareable link ───────────────────────────────────────────────────
export function generateShareLink(videoId: string): string {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}/?video=${videoId}`;
}

// ── Get YouTube embed URL ─────────────────────────────────────────────────────
export function getYouTubeEmbed(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  if (!match) return null;
  return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`;
}

// ── Is YouTube URL ────────────────────────────────────────────────────────────
export function isYouTube(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url);
}
