"use client";

import { useState } from "react";
import { PROJECTS, FILTERS, type FilterId } from "@/data/projects";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  const [filter, setFilter] = useState<FilterId>("todos");

  const visible =
    filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.key === filter);

  return (
    <section id="projetos" style={{ padding: "32px 16px 112px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 13,
                color: "#B8BCC3",
              }}
            >
              01 — Projetos
            </span>
            <h2
              style={{
                margin: 0,
                fontWeight: 300,
                fontSize: "clamp(34px, 4.4vw, 56px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Coisas que eu{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                construí
              </span>
            </h2>
          </div>

          {/* Filter buttons */}
          <div
            role="group"
            aria-label="Filtrar projetos"
            style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
          >
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
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 13,
                    padding: "10px 18px",
                    borderRadius: 999,
                    minHeight: 44,
                    background: active ? "#EDEDEA" : "transparent",
                    color: active ? "#0B0B0C" : "#CFCFCB",
                    border: active ? "1px solid #EDEDEA" : "1px solid #3A3A3F",
                    transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid #1E1E21",
          }}
        >
          {visible.map((project) => (
            <ProjectRow key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
