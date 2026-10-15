"use client";

import { SITE } from "@/data/site";

const LINE_NUMS = Array.from({ length: 28 }, (_, i) => i + 1);

export default function Hero() {
  return (
    <section id="topo" className="vsc-section">
      {/* Gutter */}
      <div className="vsc-gutter">
        {LINE_NUMS.map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>

      {/* Content */}
      <div className="vsc-section-body" style={{ paddingTop: 8 }}>
        {/* comment block */}
        <p className="tok-comment" style={{ fontFamily: "var(--font-jb), monospace", fontSize: 14, margin: "0 0 24px", lineHeight: 1.7 }}>
          {`/**`}<br />
          {` * @file index.html`}<br />
          {` * @author Cauê Netto`}<br />
          {` * @description Suporte & Dev — Curitiba, BR`}<br />
          {` */`}
        </p>

        {/* import line */}
        <p style={{ fontFamily: "var(--font-jb), monospace", fontSize: 14, margin: "0 0 32px", lineHeight: 1.8 }}>
          <span className="tok-keyword">import</span>
          <span className="tok-punct"> {"{ "}</span>
          <span className="tok-var">skills</span>
          <span className="tok-punct">{", "}</span>
          <span className="tok-var">curiosidade</span>
          <span className="tok-punct">{", "}</span>
          <span className="tok-var">troubleshooting</span>
          <span className="tok-punct">{" } "}</span>
          <span className="tok-keyword">from</span>
          <span className="tok-string">{' "caue-netto"'}</span>
          <span className="tok-punct">;</span>
        </p>

        {/* Main heading */}
        <h1 style={{
          margin: "0 0 16px",
          fontWeight: 300,
          fontSize: "clamp(36px, 5.5vw, 72px)",
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          color: "#f8f8f2",
        }}>
          Suporte que entende{" "}
          <span style={{ color: "#bd93f9", fontFamily: "var(--font-jb), monospace", fontStyle: "italic", fontWeight: 400 }}>
            código
          </span>
          .<br />
          Código que entende{" "}
          <span style={{ color: "#ff79c6", fontFamily: "var(--font-jb), monospace", fontStyle: "italic", fontWeight: 400 }}>
            gente
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p style={{
          margin: "0 0 40px",
          maxWidth: 560,
          fontSize: 17,
          lineHeight: 1.7,
          color: "#6272a4",
          fontFamily: "var(--font-jb), monospace",
        }}>
          <span className="tok-comment">// Três anos do lado de quem usa o produto,</span><br />
          <span className="tok-comment">// construindo do lado de quem faz.</span>
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("projetos");
              if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - 68 - 4), behavior: "smooth" });
            }}
            style={{
              textDecoration: "none",
              background: "#bd93f9",
              color: "#282a36",
              fontWeight: 600,
              fontSize: 14,
              padding: "12px 24px",
              borderRadius: 6,
              fontFamily: "var(--font-jb), monospace",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#caa8fa")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#bd93f9")}
          >
            Ver projetos →
          </a>
          <a
            href={SITE.cv}
            download
            style={{
              textDecoration: "none",
              border: "1px solid #44475a",
              color: "#f8f8f2",
              fontSize: 14,
              padding: "12px 24px",
              borderRadius: 6,
              fontFamily: "var(--font-jb), monospace",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#bd93f9";
              e.currentTarget.style.color = "#bd93f9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#44475a";
              e.currentTarget.style.color = "#f8f8f2";
            }}
          >
            ↓ Currículo
          </a>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contato");
              if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - 68 - 4), behavior: "smooth" });
            }}
            style={{
              textDecoration: "none",
              border: "1px solid #44475a",
              color: "#f8f8f2",
              fontSize: 14,
              padding: "12px 24px",
              borderRadius: 6,
              fontFamily: "var(--font-jb), monospace",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ff79c6";
              e.currentTarget.style.color = "#ff79c6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#44475a";
              e.currentTarget.style.color = "#f8f8f2";
            }}
          >
            Falar comigo
          </a>
        </div>
      </div>
    </section>
  );
}
