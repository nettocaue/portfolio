"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

const CAT_COLORS: Record<string, string> = {
  dev: "#bd93f9",
  sup: "#50fa7b",
};

interface Props { project: Project }

export default function ProjectRow({ project }: Props) {
  const accentColor = CAT_COLORS[project.key] ?? "#8be9fd";

  return (
    <article
      className="project-row"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 28,
        padding: "32px 40px 32px 0",
        borderBottom: "1px solid #2d2f3e",
        alignItems: "center",
      }}
    >
      {/* Info */}
      <div style={{ flex: "999 1 480px", minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          flexWrap: "wrap",
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
        }}>
          <span style={{ color: "#44475a" }}>{project.num}</span>
          <span style={{
            border: `1px solid ${accentColor}44`,
            background: `${accentColor}18`,
            color: accentColor,
            padding: "3px 10px",
            borderRadius: 3,
            fontWeight: 500,
          }}>
            {project.cat}
          </span>
          <span style={{ color: "#50fa7b", fontSize: 11 }}>● {project.status}</span>
        </div>

        <h3
          className="project-title"
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: "clamp(22px, 2.4vw, 28px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "#f8f8f2",
            transition: "color 0.2s ease",
          }}
        >
          {project.title}
        </h3>

        <p style={{ margin: 0, color: "#6272a4", fontSize: 15, lineHeight: 1.65, maxWidth: 580 }}>
          {project.desc}
        </p>

        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          color: "#44475a",
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
        }}>
          {project.stack.split(" · ").map((s) => (
            <span key={s} style={{
              background: "#21222c",
              border: "1px solid #44475a",
              color: "#8be9fd",
              padding: "2px 8px",
              borderRadius: 3,
            }}>
              {s}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              fontFamily: "var(--font-mono), monospace",
              textDecoration: "none",
              color: "#bd93f9",
              border: "1px solid #bd93f944",
              padding: "8px 16px",
              borderRadius: 4,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#bd93f922")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {project.cta} ↗
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontFamily: "var(--font-mono), monospace",
                color: "#6272a4",
                textDecoration: "underline",
                textUnderlineOffset: 4,
              }}
            >
              Código ↗
            </a>
          )}
        </div>
      </div>

      {/* Thumbnail */}
      <div
        className="project-thumb"
        style={{
          flex: "1 1 300px",
          minWidth: 0,
          height: 200,
          borderRadius: 8,
          overflow: "hidden",
          border: project.image ? `1px solid #44475a` : "1px dashed #44475a",
          background: "#21222c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          color: "#44475a",
          position: "relative",
        }}
      >
        {project.image ? (
          <Image
            src={`/projetos/${project.image}`}
            alt={`Print do projeto ${project.title}`}
            fill
            style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            className="project-img"
          />
        ) : (
          "[sem imagem]"
        )}
      </div>
    </article>
  );
}
