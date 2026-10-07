"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !svgRef.current) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (svgRef.current) {
            const y = window.scrollY * 0.18;
            svgRef.current.style.transform = `translateY(${y}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="topo"
      style={{ position: "relative", padding: "120px 16px 96px" }}
    >
      {/* Topographic lines */}
      <svg
        ref={svgRef}
        aria-hidden="true"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.32,
          willChange: "transform",
        }}
      >
        <g fill="none" stroke="#3A3A3F" strokeWidth="1.2">
          <path d="M-40 120 C 220 40, 420 220, 700 140 S 1180 30, 1480 160" />
          <path d="M-40 170 C 220 90, 430 270, 700 190 S 1180 80, 1480 210" />
          <path d="M-40 220 C 230 140, 440 320, 700 240 S 1180 130, 1480 260" />
          <path d="M-40 270 C 240 190, 450 370, 700 290 S 1180 180, 1480 310" />
          <path d="M-40 320 C 250 240, 460 420, 700 340 S 1180 230, 1480 360" />
          <path d="M-40 470 C 200 560, 520 380, 760 500 S 1200 620, 1480 480" />
          <path d="M-40 520 C 200 610, 520 430, 760 550 S 1200 670, 1480 530" />
          <path d="M-40 570 C 200 660, 520 480, 760 600 S 1200 720, 1480 580" />
          <path d="M-40 620 C 200 710, 520 530, 760 650 S 1200 770, 1480 630" />
          <path d="M-40 670 C 200 760, 520 580, 760 700 S 1200 820, 1480 680" />
          <ellipse cx="1120" cy="400" rx="90"  ry="48" />
          <ellipse cx="1120" cy="400" rx="150" ry="84" />
          <ellipse cx="1120" cy="400" rx="210" ry="120" />
          <ellipse cx="300"  cy="420" rx="70"  ry="36" />
          <ellipse cx="300"  cy="420" rx="130" ry="70" />
        </g>
      </svg>

      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 13,
            color: "#A3A39F",
            border: "1px solid #26262A",
            background: "#121214",
            borderRadius: 999,
            padding: "8px 16px",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(180deg, #F6F7F9, #8A8F97)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          CAUÊ NETTO — SUPORTE &amp; DEV — CURITIBA
        </div>

        {/* Heading */}
        <h1
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: "clamp(40px, 6.4vw, 88px)",
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
          }}
        >
          Suporte que entende{" "}
          <span
            className="text-chrome"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
              fontWeight: 400,
              paddingRight: "0.06em",
            }}
          >
            código
          </span>
          .<br />
          Código que entende{" "}
          <span
            className="text-chrome"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
              fontWeight: 400,
              paddingRight: "0.06em",
            }}
          >
            gente
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p
          style={{
            margin: 0,
            maxWidth: 620,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#A3A39F",
          }}
        >
          Cauê Netto — suporte técnico e desenvolvimento web. Três anos do lado
          de quem usa o produto, construindo do lado de quem faz.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#projetos"
            className="bg-silver-btn"
            style={{
              textDecoration: "none",
              color: "#0B0B0C",
              fontWeight: 500,
              fontSize: 15,
              padding: "14px 24px",
              borderRadius: 999,
            }}
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            style={{
              textDecoration: "none",
              border: "1px solid #3A3A3F",
              color: "#EDEDEA",
              fontSize: 15,
              padding: "14px 24px",
              borderRadius: 999,
            }}
          >
            Falar comigo
          </a>
        </div>
      </div>
    </section>
  );
}
