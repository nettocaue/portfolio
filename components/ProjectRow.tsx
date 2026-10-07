import Image from "next/image";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectRow({ project }: Props) {
  return (
    <article
      className="project-row"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        padding: "36px 0",
        borderBottom: "1px solid #1E1E21",
        alignItems: "center",
      }}
    >
      {/* Info */}
      <div
        style={{
          flex: "999 1 520px",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexWrap: "wrap",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 12,
          }}
        >
          <span style={{ color: "#7E7E7A" }}>{project.num}</span>
          <span
            style={{
              border: "1px solid #3A3A3F",
              color: "#CFCFCB",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            {project.cat}
          </span>
          <span style={{ color: "#7E7E7A" }}>{project.status}</span>
        </div>

        <h3
          className="project-title"
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: 32,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            transition: "color 0.2s ease",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            margin: 0,
            color: "#A3A39F",
            fontSize: 16,
            lineHeight: 1.65,
            maxWidth: 620,
          }}
        >
          {project.desc}
        </p>

        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 13,
            color: "#8A8A86",
          }}
        >
          {project.stack}
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              width: "fit-content",
              textDecoration: "underline",
              textUnderlineOffset: 4,
              color: "#EDEDEA",
            }}
          >
            {project.cta} ↗
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "#7E7E7A",
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
          flex: "1 1 340px",
          minWidth: 0,
          height: 220,
          borderRadius: 16,
          overflow: "hidden",
          border: project.image ? "none" : "1px dashed #3A3A3F",
          background: "#121214",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 13,
          color: "#7E7E7A",
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
          "[print do projeto]"
        )}
      </div>
    </article>
  );
}
