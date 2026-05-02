"use client";

import { useState, useEffect } from "react";
import { getChapterVideos, generateShareLink, getYouTubeEmbed, isYouTube, type VideoItem } from "@/lib/videos";
import { getSession } from "@/lib/auth";
import { isPremium } from "@/lib/subscription";

// ─── Icons (inline SVG برای سادگی) ───────────────────────────────────────────
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);
const ShareIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

// ─── VideoCard ────────────────────────────────────────────────────────────────
function VideoCard({ video, userIsPremium }: { video: VideoItem; userIsPremium: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const locked = video.isPremium && !userIsPremium;
  const embedUrl = isYouTube(video.url) ? getYouTubeEmbed(video.url) : null;

  function copyLink() {
    const link = generateShareLink(video.id);
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)", border: `1px solid ${locked ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.08)"}`,
      borderRadius: 14, overflow: "hidden",
      opacity: locked ? 0.85 : 1,
    }}>
      {/* Thumbnail / Player */}
      {playing && embedUrl ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={embedUrl}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div style={{
          height: 130, display: "flex", alignItems: "center", justifyContent: "center",
          background: locked
            ? "linear-gradient(135deg, rgba(167,139,250,0.1), rgba(99,102,241,0.05))"
            : "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(30,30,50,0.8))",
          cursor: locked ? "not-allowed" : "pointer",
          position: "relative",
        }} onClick={() => !locked && setPlaying(true)}>
          {/* Duration badge */}
          {video.duration && (
            <div style={{
              position: "absolute", bottom: 8, left: 8,
              background: "rgba(0,0,0,0.7)", borderRadius: 6, padding: "2px 8px",
              fontSize: 11, color: "#fff", fontWeight: 600,
            }}>{video.duration}</div>
          )}
          {locked ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "rgba(167,139,250,0.7)", marginBottom: 6 }}><LockIcon /></div>
              <div style={{ fontSize: 11, color: "rgba(167,139,250,0.6)", fontWeight: 600 }}>ویدیو پریمیوم</div>
            </div>
          ) : (
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "rgba(99,102,241,0.8)", display: "flex",
              alignItems: "center", justifyContent: "center",
              color: "#fff", boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
            }}>
              <PlayIcon />
            </div>
          )}
        </div>
      )}

      {/* Info */}
      <div style={{ padding: "12px 14px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)",
              direction: "rtl", textAlign: "right", margin: "0 0 3px" }}>
              {video.titleFa}
            </p>
            <p style={{ fontSize: 11, color: "var(--text-muted)", fontStyle: "italic", margin: 0 }}>
              {video.titleIt}
            </p>
          </div>
          {video.isPremium && (
            <span style={{ fontSize: 9, fontWeight: 700, color: "#a78bfa",
              background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: 4, padding: "2px 6px", flexShrink: 0 }}>P</span>
          )}
        </div>
        {video.description && (
          <p style={{ fontSize: 11, color: "var(--text-muted)", direction: "rtl",
            textAlign: "right", lineHeight: 1.5, margin: "6px 0 10px" }}>
            {video.description}
          </p>
        )}

        {/* Actions */}
        {!locked && (
          <div style={{ display: "flex", gap: 6 }}>
            {!playing && (
              <button onClick={() => setPlaying(true)} style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                padding: "7px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", border: "none",
              }}>
                <PlayIcon /> تماشا
              </button>
            )}
            {video.downloadUrl && (
              <a href={video.downloadUrl} download target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "7px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                background: "rgba(52,211,153,0.1)", color: "#34d399",
                border: "1px solid rgba(52,211,153,0.2)", textDecoration: "none",
              }}>
                <DownloadIcon /> دانلود
              </a>
            )}
            <button onClick={copyLink} style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "7px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
              background: copied ? "rgba(251,191,36,0.1)" : "rgba(255,255,255,0.05)",
              color: copied ? "#fbbf24" : "var(--text-muted)",
              border: `1px solid ${copied ? "rgba(251,191,36,0.25)" : "rgba(255,255,255,0.08)"}`,
              transition: "all 0.2s",
            }}>
              <ShareIcon /> {copied ? "کپی شد!" : "لینک"}
            </button>
          </div>
        )}

        {locked && (
          <div style={{
            background: "rgba(167,139,250,0.08)", borderRadius: 8, padding: "8px 12px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 11, color: "rgba(167,139,250,0.7)", direction: "rtl" }}>
              برای دسترسی اشتراک پریمیوم نیاز است
            </span>
            <span style={{ fontSize: 11, color: "#a78bfa", fontWeight: 700 }}>🔒</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── VideoPanel ───────────────────────────────────────────────────────────────
export default function VideoPanel({ chapterNum }: { chapterNum: number }) {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    setVideos(getChapterVideos(chapterNum));
    const user = getSession();
    if (user) setPremium(isPremium(user.username));
  }, [chapterNum]);

  if (videos.length === 0) {
    return (
      <div style={{
        padding: "14px 16px", borderRadius: 12,
        border: "1px dashed rgba(167,139,250,0.2)",
        background: "rgba(167,139,250,0.03)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ fontSize: 18 }}>🎬</span>
        <div>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0, direction: "rtl" }}>
            ویدیوی آموزشی برای این فصل هنوز اضافه نشده
          </p>
          <p style={{ fontSize: 10, color: "rgba(167,139,250,0.5)", margin: "2px 0 0" }}>بزودی اضافه می‌شود</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 16 }}>🎬</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#60a5fa" }}>
          ویدیوهای آموزشی ({videos.length})
        </span>
        {!premium && videos.some(v => v.isPremium) && (
          <span style={{ fontSize: 10, color: "rgba(167,139,250,0.7)",
            background: "rgba(167,139,250,0.1)", padding: "2px 7px", borderRadius: 5 }}>
            برخی ویدیوها نیاز به اشتراک دارند
          </span>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {videos.map(v => (
          <VideoCard key={v.id} video={v} userIsPremium={premium} />
        ))}
      </div>
    </div>
  );
}
