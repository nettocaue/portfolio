"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/data/site";
import { PROJECTS } from "@/data/projects";
import CurriculumView from "./CurriculumView";

/* ── Layout constants ─────────────────────────────────── */
const TITLE_H  = 32;
const TABS_H   = 36;
const TOP      = TITLE_H + TABS_H;
const ACT_W    = 48;
const SIDE_W   = 220;
const LEFT     = ACT_W + SIDE_W;
const STATUS_H = 24;

/* ── Data ─────────────────────────────────────────────── */
const PORT_FILES = [
  { id: "topo",        label: "index.html",    dot: "#e8834c" },
  { id: "projetos",    label: "projects.json", dot: "#cbcb41" },
  { id: "sobre",       label: "about.md",      dot: "#519aba" },
  { id: "experiencia", label: "experience.ts", dot: "#bd93f9" },
  { id: "contato",     label: "contact.js",    dot: "#cbcb41" },
] as const;

const CV_TAB = { id: "cv", label: "curriculum.pdf", dot: "#50fa7b" };

type PortFileId  = (typeof PORT_FILES)[number]["id"];
type ActiveTab   = PortFileId | "cv";
type SidePanel   = "explorer" | "github" | "linkedin";

/* ── Small helpers ────────────────────────────────────── */
function Dot({ color }: { color: string }) {
  return (
    <span style={{
      width: 10, height: 10, borderRadius: 2,
      background: color, display: "inline-block", flexShrink: 0,
    }} />
  );
}

function ActivityBtn({
  title, active, onClick, children,
}: {
  title: string; active?: boolean; onClick?: () => void; children: React.ReactNode;
}) {
  return (
    <div
      title={title}
      onClick={onClick}
      style={{
        width: 40, height: 40,
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: 6, cursor: "pointer",
        color: active ? "#f8f8f2" : "#6272a4",
        position: "relative",
        transition: "color 0.15s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.color = "#f8f8f2"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.color = active ? "#f8f8f2" : "#6272a4"; }}
    >
      {active && (
        <span style={{
          position: "absolute", left: -4, top: "50%", transform: "translateY(-50%)",
          width: 2, height: 20, background: "#bd93f9", borderRadius: "0 2px 2px 0",
        }} />
      )}
      {children}
    </div>
  );
}

/* ── Sidebar panels ────────────────────────────────────── */
function ExplorerPanel({
  active, onFile, onOpenCV,
}: {
  active: ActiveTab;
  onFile: (id: string) => void;
  onOpenCV: () => void;
}) {
  return (
    <>
      <div style={{
        display: "flex", alignItems: "center", gap: 5,
        padding: "4px 8px 6px 10px",
        fontFamily: "var(--font-jb), monospace", fontSize: 13, color: "#f8f8f2",
        flexShrink: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 9l7 7 7-7" stroke="#8be9fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        PORTFOLIO
      </div>

      {PORT_FILES.map(f => {
        const isActive = active === f.id;
        return (
          <SidebarFileBtn key={f.id} label={f.label} dot={f.dot} isActive={isActive}
            onClick={() => onFile(f.id)} />
        );
      })}

      {/* curriculum.pdf */}
      <SidebarFileBtn
        label={CV_TAB.label}
        dot={CV_TAB.dot}
        isActive={active === "cv"}
        onClick={onOpenCV}
      />

      <div style={{ marginTop: 10, opacity: 0.4 }}>
        {["public/", ".next/", "node_modules/"].map(name => (
          <div key={name} style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "3px 8px 3px 10px",
            fontFamily: "var(--font-jb), monospace", fontSize: 12, color: "#6272a4",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#6272a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

function SidebarFileBtn({
  label, dot, isActive, onClick,
}: {
  label: string; dot: string; isActive: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "6px 8px 6px 28px",
        width: "100%", textAlign: "left",
        fontFamily: "var(--font-jb), monospace", fontSize: 13,
        color:      isActive ? "#f8f8f2" : "#6272a4",
        background: isActive ? "#282a36" : "transparent",
        borderTop: "none", borderRight: "none", borderBottom: "none",
        borderLeft: `2px solid ${isActive ? "#bd93f9" : "transparent"}`,
        cursor: "pointer", outline: "none",
        transition: "background 0.1s, color 0.1s",
      }}
      onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "#2d2f3e"; e.currentTarget.style.color = "#f8f8f2"; } }}
      onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6272a4"; } }}
    >
      <Dot color={dot} />
      {label}
    </button>
  );
}

function GithubPanel() {
  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      {/* Profile link */}
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "10px 12px",
          fontFamily: "var(--font-jb), monospace", fontSize: 12,
          color: "#8be9fd", textDecoration: "none",
          borderBottom: "1px solid #2d2f3e",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        github.com/nettocaue
      </a>

      {PROJECTS.map(p => (
        <div
          key={p.num}
          style={{
            padding: "10px 12px",
            borderBottom: "1px solid #2d2f3e",
          }}
        >
          {/* Title */}
          <div style={{
            fontFamily: "var(--font-jb), monospace", fontSize: 12,
            color: "#bd93f9", marginBottom: 4,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {p.title}
          </div>

          {/* Stack tags */}
          <div style={{
            fontFamily: "var(--font-jb), monospace", fontSize: 10,
            color: "#6272a4", marginBottom: 8,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {p.stack}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 8 }}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-jb), monospace", fontSize: 10,
                color: "#8be9fd", textDecoration: "none",
                border: "1px solid #44475a", padding: "2px 7px", borderRadius: 3,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#8be9fd")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#44475a")}
            >
              {p.cta} ↗
            </a>
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-jb), monospace", fontSize: 10,
                  color: "#6272a4", textDecoration: "none",
                  border: "1px solid #44475a", padding: "2px 7px", borderRadius: 3,
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#bd93f9")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#44475a")}
              >
                código ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function LinkedinPanel() {
  return (
    <div style={{ padding: "16px 12px" }}>
      <a
        href={SITE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex", flexDirection: "column", gap: 12,
          padding: "16px", borderRadius: 6,
          background: "#2d2f3e", border: "1px solid #44475a",
          textDecoration: "none",
          transition: "border-color 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "#0a66c2")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "#44475a")}
      >
        {/* LinkedIn icon */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 4,
            background: "#0a66c2",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-jb), monospace", fontSize: 13, color: "#f8f8f2", fontWeight: 600 }}>
              Cauê Netto
            </div>
            <div style={{ fontFamily: "var(--font-jb), monospace", fontSize: 11, color: "#6272a4" }}>
              Suporte & Dev
            </div>
          </div>
        </div>

        <div style={{
          fontFamily: "var(--font-jb), monospace", fontSize: 11,
          color: "#8be9fd", display: "flex", alignItems: "center", gap: 4,
        }}>
          Visitar perfil ↗
        </div>
      </a>

      <p style={{
        fontFamily: "var(--font-jb), monospace", fontSize: 11,
        color: "#44475a", margin: "16px 0 0",
        fontStyle: "italic",
      }}>
        <span className="tok-comment">// aberto a oportunidades</span>
      </p>
    </div>
  );
}

/* ── Main component ────────────────────────────────────── */
export default function VsCodeShell({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<PortFileId>("topo");
  const [cvOpen, setCvOpen]       = useState(false);
  const [panel, setPanel]         = useState<SidePanel>("explorer");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* Scroll tracking — reattaches only when cvOpen toggles */
  useEffect(() => {
    if (cvOpen) return;

    const items = PORT_FILES.map(f => ({ id: f.id, el: document.getElementById(f.id) }));

    const track = () => {
      const y = window.scrollY + TOP + 60;
      let cur: PortFileId = PORT_FILES[0].id;
      for (const s of items) {
        if (s.el && s.el.offsetTop <= y) cur = s.id as PortFileId;
      }
      setActiveTab(cur);
    };

    window.addEventListener("scroll", track, { passive: true });
    track();
    return () => window.removeEventListener("scroll", track);
  }, [cvOpen]);

  const goToSection = (id: string) => {
    const wasCVOpen = cvOpen;
    setCvOpen(false);
    setActiveTab(id as PortFileId);

    if (wasCVOpen) {
      /* Portfolio DOM isn't mounted yet — wait for two animation frames */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - TOP - 4), behavior: "smooth" });
        });
      });
    } else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - TOP - 4), behavior: "smooth" });
    }
  };

  const openCV = () => {
    setCvOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const af      = cvOpen ? CV_TAB : (PORT_FILES.find(f => f.id === activeTab) ?? PORT_FILES[0]);
  const allTabs = cvOpen ? [...PORT_FILES, CV_TAB] : PORT_FILES;
  const tabActive = (id: string) => cvOpen ? id === "cv" : id === activeTab;

  return (
    <>
      {/* ══ TITLE BAR ══ */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: TITLE_H,
        background: "#21222c", borderBottom: "1px solid #191a24",
        display: "flex", alignItems: "center", padding: "0 16px",
        zIndex: 1000, userSelect: "none",
      }}>
        {/* Logo */}
        <div
          onClick={() => goToSection("topo")}
          style={{ display: "flex", alignItems: "center", flexShrink: 0, cursor: "pointer" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo.svg" alt="Logo" style={{ height: 20, display: "block" }} />
        </div>
        <div className="vsc-title-center" style={{
          flex: 1, textAlign: "center",
          fontFamily: "var(--font-jb), monospace", fontSize: 12, color: "#6272a4",
        }}>
          {af.label} — Cauê Netto Portfolio
        </div>
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "block" }} />
        </div>
      </div>

      {/* ══ ACTIVITY BAR ══ */}
      <div className="vsc-activity-bar" style={{
        position: "fixed", left: 0, top: TITLE_H, bottom: STATUS_H, width: ACT_W,
        background: "#21222c", borderRight: "1px solid #191a24",
        display: "flex", flexDirection: "column", alignItems: "center",
        paddingTop: 8, gap: 4, zIndex: 900,
      }}>
        {/* Explorer */}
        <ActivityBtn title="Explorer" active={panel === "explorer"} onClick={() => { if (panel === "explorer") setSidebarOpen(o => !o); else { setPanel("explorer"); setSidebarOpen(true); } }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M3 12h18M3 19h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </ActivityBtn>

        {/* GitHub */}
        <ActivityBtn title="GitHub" active={panel === "github"} onClick={() => { if (panel === "github") setSidebarOpen(o => !o); else { setPanel("github"); setSidebarOpen(true); } }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </ActivityBtn>

        {/* LinkedIn */}
        <ActivityBtn title="LinkedIn" active={panel === "linkedin"} onClick={() => { if (panel === "linkedin") setSidebarOpen(o => !o); else { setPanel("linkedin"); setSidebarOpen(true); } }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </ActivityBtn>

        {/* CV */}
        <ActivityBtn title="Currículo" active={cvOpen} onClick={() => { openCV(); setSidebarOpen(false); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </ActivityBtn>
      </div>

      {/* ══ SIDEBAR ══ */}
      <aside className={`vsc-sidebar${sidebarOpen ? " vsc-sidebar--open" : ""}`} style={{
        position: "fixed", left: ACT_W, top: TITLE_H, bottom: STATUS_H, width: SIDE_W,
        background: "#21222c", borderRight: "1px solid #191a24",
        display: "flex", flexDirection: "column",
        zIndex: 900, overflow: "hidden",
      }}>
        <div style={{
          fontFamily: "var(--font-jb), monospace",
          fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
          color: "#6272a4", textTransform: "uppercase" as const,
          padding: "12px 16px 8px", flexShrink: 0,
        }}>
          {panel === "explorer" ? "Explorer" : panel === "github" ? "GitHub" : panel === "linkedin" ? "LinkedIn" : "Currículo"}
        </div>

        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {panel === "explorer" && (
            <ExplorerPanel active={cvOpen ? "cv" : activeTab} onFile={goToSection} onOpenCV={openCV} />
          )}
          {panel === "github" && <GithubPanel />}
          {panel === "linkedin" && <LinkedinPanel />}
        </div>
      </aside>

      {/* ══ TAB BAR ══ */}
      <div className="vsc-tab-bar" style={{
        position: "fixed", left: LEFT, top: TITLE_H, right: 0, height: TABS_H,
        background: "#21222c", borderBottom: "1px solid #191a24",
        display: "flex", alignItems: "stretch",
        zIndex: 900, overflowX: "auto", scrollbarWidth: "none",
      }}>
        {allTabs.map(f => {
          const isActive = tabActive(f.id);
          const handleClick = f.id === "cv" ? openCV : () => goToSection(f.id);
          return (
            <button
              key={f.id}
              onClick={handleClick}
              style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "0 16px",
                fontFamily: "var(--font-jb), monospace", fontSize: 13,
                color:      isActive ? "#f8f8f2" : "#6272a4",
                background: isActive ? "#282a36" : "transparent",
                borderTop: "none", borderLeft: "none",
                borderRight: "1px solid #191a24",
                borderBottom: `2px solid ${isActive ? "#bd93f9" : "transparent"}`,
                cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                transition: "background 0.1s, color 0.1s",
                outline: "none",
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#f8f8f2"; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#6272a4"; }}
            >
              <Dot color={f.dot} />
              {f.label}
            </button>
          );
        })}
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <main className="vsc-main" style={{ marginLeft: LEFT, marginTop: TOP, marginBottom: STATUS_H }}>
        {cvOpen ? <CurriculumView /> : children}
      </main>

      {/* ══ STATUS BAR ══ */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, height: STATUS_H,
        background: "#6272a4",
        display: "flex", alignItems: "center", padding: "0 12px", gap: 16,
        zIndex: 1000,
        fontFamily: "var(--font-jb), monospace", fontSize: 11, color: "#f8f8f2",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          main
        </span>
        <span>{af.label}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16, alignItems: "center" }}>
          <a href={SITE.cv} download style={{ color: "#f8f8f2", textDecoration: "none" }}>↓ Currículo</a>
          <span className="vsc-status-extra">TypeScript · Next.js</span>
          <span className="vsc-status-extra">UTF-8</span>
        </div>
      </div>
    </>
  );
}
