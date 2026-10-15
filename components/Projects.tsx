"use client";

import { useState } from "react";
import { PROJECTS, FILTERS, type FilterId } from "@/data/projects";
import ProjectRow from "./ProjectRow";

const LINE_NUMS = Array.from({ length: 6 }, (_, i) => i + 1);

export default function Projects() {
  const [filter, setFilter] = useState<FilterId>("todos");

  const visible =
    filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.key === filter);

  return (
    <section id="projetos" className="vsc-section" style={{ flexDirection: "column", paddingBottom: 0 }}>
      {/* Header row with line numbers */}
      <div style={{ display: "flex" }}>
        <div className="vsc-gutter">
          {LINE_NUMS.map((n) => <div key={n}>{n}</div>)}
        </div>

        <div className="vsc-section-body" style={{ paddingBottom: 0 }}>
          <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: "0 0 4px" }}>
            <span className="tok-comment">{`// projects.json — ${visible.length} projetos`}</span>
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
            <h2 style={{
              margin: 0,
              fontWeight: 300,
              fontSize: "clamp(28px, 3.8vw, 48px)",
              letterSpacing: "-0.03em",
              color: "#f8f8f2",
            }}>
              Coisas que eu{" "}
              <span style={{ color: "#50fa7b", fontFamily: "var(--font-jb), monospace", fontStyle: "italic", fontWeight: 400 }}>
                construí
              </span>
            </h2>

            <div role="group" aria-label="Filtrar projetos" style={{ display: "flex", gap: 6 }}>
              {FILTERS.map((f) => {
                const active = f.id === filter;
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f.id as FilterId)}
                    style={{
                      cursor: "pointer",
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 12,
                      padding: "8px 14px",
                      borderRadius: 4,
                      background: active ? "#bd93f9" : "transparent",
                      color: active ? "#282a36" : "#6272a4",
                      border: active ? "1px solid #bd93f9" : "1px solid #44475a",
                      transition: "all 0.15s ease",
                      fontWeight: active ? 600 : 400,
                    }}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Project list — full width, no gutter */}
      <div className="vsc-projects-list" style={{ borderTop: "1px solid #2d2f3e", paddingLeft: 52 }}>
        {visible.map((project) => (
          <ProjectRow key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}
