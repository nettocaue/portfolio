const EXPERIENCE = [
  {
    period: "2023 — hoje",
    role: "Suporte ao Cliente · Pixta.me",
    desc: "Tickets, central de ajuda, ponte com o time de produto",
    color: "#ff79c6",
  },
  {
    period: "2024 — 2025",
    role: "Técnico em Informática · Etec",
    desc: "Redes, sistemas operacionais, hardware, banco de dados",
    color: "#8be9fd",
  },
  {
    period: "Programa",
    role: "Programa Desenvolve · Grupo Boticário",
    desc: "Formação e mentoria em tecnologia",
    color: "#50fa7b",
  },
];

const LINE_NUMS_ABOUT = Array.from({ length: 22 }, (_, i) => i + 1);
const LINE_NUMS_EXP   = Array.from({ length: 22 }, (_, i) => i + 24);

export default function About() {
  return (
    <>
      {/* Sobre */}
      <section id="sobre" className="vsc-section">
        <div className="vsc-gutter">
          {LINE_NUMS_ABOUT.map((n) => <div key={n}>{n}</div>)}
        </div>

        <div className="vsc-section-body">
          <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: "0 0 20px" }}>
            <span className="tok-comment">{`# about.md`}</span>
          </p>

          <h2 style={{
            margin: "0 0 20px",
            fontWeight: 300,
            fontSize: "clamp(26px, 3.2vw, 40px)",
            letterSpacing: "-0.03em",
            color: "#f8f8f2",
            lineHeight: 1.15,
          }}>
            No meio do caminho entre{" "}
            <span style={{ color: "#ff79c6", fontFamily: "var(--font-jb), monospace", fontStyle: "italic", fontWeight: 400 }}>
              quem usa
            </span>{" "}
            e{" "}
            <span style={{ color: "#bd93f9", fontFamily: "var(--font-jb), monospace", fontStyle: "italic", fontWeight: 400 }}>
              quem constrói
            </span>
            .
          </h2>

          <p style={{ margin: "0 0 16px", color: "#6272a4", fontSize: 15, lineHeight: 1.75, maxWidth: 600 }}>
            Sou técnico em informática e trabalho com suporte ao cliente na
            Pixta.me, plataforma de venda de ingressos de Curitiba, desde 2023.
            No dia a dia atendo usuários, analiso tickets, mantenho a central de
            ajuda e levo os problemas recorrentes para o time de desenvolvimento.
          </p>
          <p style={{ margin: 0, color: "#6272a4", fontSize: 15, lineHeight: 1.75, maxWidth: 600 }}>
            Em paralelo, desenvolvo meus próprios projetos web — de um app com
            assinaturas a ferramentas para comunidades de nicho. Uso IA no fluxo
            de desenvolvimento e sei explicar cada decisão do que entreguei.
          </p>
        </div>
      </section>

      {/* Experiência */}
      <section id="experiencia" className="vsc-section" style={{ background: "#21222c" }}>
        <div className="vsc-gutter">
          {LINE_NUMS_EXP.map((n) => <div key={n}>{n}</div>)}
        </div>

        <div className="vsc-section-body">
          <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: "0 0 20px" }}>
            <span className="tok-keyword">export const</span>{" "}
            <span className="tok-var">experience</span>{" "}
            <span className="tok-punct">= [</span>
          </p>

          <ol style={{ listStyle: "none", margin: "0 0 20px", padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
            {EXPERIENCE.map((item) => (
              <li key={item.role} style={{
                display: "flex",
                gap: 20,
                padding: "20px 0",
                borderBottom: "1px solid #2d2f3e",
                flexWrap: "wrap",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 12,
                  color: item.color,
                  width: 110,
                  flexShrink: 0,
                  paddingTop: 2,
                }}>
                  {item.period}
                </span>
                <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: 4 }}>
                  <strong style={{ fontWeight: 500, color: "#f8f8f2", fontSize: 15 }}>{item.role}</strong>
                  <span style={{ color: "#6272a4", fontSize: 14, fontFamily: "var(--font-mono), monospace" }}>
                    {`// ${item.desc}`}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: 0 }}>
            <span className="tok-punct">]</span>
          </p>
        </div>
      </section>
    </>
  );
}
