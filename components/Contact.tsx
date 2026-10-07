import { SITE } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contato"
      style={{ padding: "120px 16px 48px", textAlign: "center" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 13,
            color: "#B8BCC3",
          }}
        >
          04 — Contato
        </span>

        <h2
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: "clamp(40px, 6vw, 80px)",
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
          }}
        >
          Vamos{" "}
          <span
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            conversar?
          </span>
        </h2>

        <a
          href={`mailto:${SITE.email}`}
          style={{
            fontSize: "clamp(18px, 2.4vw, 28px)",
            textDecoration: "underline",
            textUnderlineOffset: 8,
            textDecorationColor: "#3A3A3F",
            color: "#EDEDEA",
          }}
        >
          {SITE.email}
        </a>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {(
            [
              ["LinkedIn", SITE.linkedin],
              ["GitHub",   SITE.github],
              ["WhatsApp", SITE.whatsapp],
            ] as const
          ).map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                border: "1px solid #3A3A3F",
                color: "#EDEDEA",
                fontSize: 14,
                padding: "12px 20px",
                borderRadius: 999,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <footer
        style={{
          maxWidth: 1200,
          margin: "120px auto 0",
          paddingTop: 24,
          borderTop: "1px solid #1E1E21",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 12,
          color: "#7E7E7A",
        }}
      >
        <span>© 2026 Cauê Netto</span>
        <span>Feito em Curitiba</span>
      </footer>
    </section>
  );
}
