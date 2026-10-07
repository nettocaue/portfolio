const EXPERIENCE = [
  {
    period: "2023 — hoje",
    role: "Suporte ao Cliente · Pixta.me",
    desc: "Tickets, central de ajuda, ponte com o time de produto",
  },
  {
    period: "2024 — 2025",
    role: "Técnico em Informática · Etec",
    desc: "Redes, sistemas operacionais, hardware, banco de dados",
  },
  {
    period: "Programa",
    role: "Programa Desenvolve · Grupo Boticário",
    desc: "Formação e mentoria em tecnologia",
  },
  {
    period: "2020 — 2023",
    role: "Vendas, laboratório e expedição",
    desc: "Manera, Cimento Itambé, Depecil — e-commerce, dados e logística",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        padding: "96px 16px",
        background: "#0F0F11",
        borderTop: "1px solid #1E1E21",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 64,
        }}
      >
        {/* Sobre */}
        <div
          style={{
            flex: "1 1 420px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 13,
              color: "#B8BCC3",
            }}
          >
            02 — Sobre
          </span>
          <h2
            style={{
              margin: 0,
              fontWeight: 300,
              fontSize: "clamp(30px, 3.6vw, 44px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
            }}
          >
            No meio do caminho entre{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              quem usa
            </span>{" "}
            e{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              quem constrói
            </span>
            .
          </h2>
          <p
            style={{
              margin: 0,
              color: "#A3A39F",
              fontSize: 16,
              lineHeight: 1.75,
            }}
          >
            Sou técnico em informática e trabalho com suporte ao cliente na
            Pixta.me, plataforma de venda de ingressos de Curitiba, desde 2023.
            No dia a dia atendo usuários, analiso tickets, mantenho a central de
            ajuda e levo os problemas recorrentes para o time de desenvolvimento.
          </p>
          <p
            style={{
              margin: 0,
              color: "#A3A39F",
              fontSize: 16,
              lineHeight: 1.75,
            }}
          >
            Em paralelo, desenvolvo meus próprios projetos web — de um app com
            assinaturas a ferramentas para comunidades de nicho. Uso IA no fluxo
            de desenvolvimento e sei explicar cada decisão do que entreguei.
          </p>
        </div>

        {/* Experiência */}
        <div
          id="experiencia"
          style={{
            flex: "1 1 420px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 13,
              color: "#B8BCC3",
            }}
          >
            03 — Experiência
          </span>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            {EXPERIENCE.map((item) => (
              <li
                key={item.role}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "20px 0",
                  borderBottom: "1px solid #1E1E21",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 13,
                    color: "#7E7E7A",
                    width: 120,
                    flexShrink: 0,
                  }}
                >
                  {item.period}
                </span>
                <div
                  style={{
                    flex: "1 1 240px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <strong style={{ fontWeight: 500 }}>{item.role}</strong>
                  <span style={{ color: "#A3A39F", fontSize: 15 }}>
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
