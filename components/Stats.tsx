const STATS = [
  { key: "conversations", value: "3_400", suffix: "+", label: "conversas de suporte na Pixta.me", color: "#bd93f9" },
  { key: "resolution",    value: "93",    suffix: "%",  label: "taxa de resolução dos atendimentos", color: "#50fa7b" },
  { key: "years",         value: "3",     suffix: " anos", label: "entre cliente, produto e dev", color: "#ff79c6" },
];

const LINE_NUMS = Array.from({ length: 14 }, (_, i) => i + 1);

export default function Stats() {
  return (
    <section aria-label="Números" className="vsc-section">
      <div className="vsc-gutter">
        {LINE_NUMS.map((n) => <div key={n}>{n}</div>)}
      </div>

      <div className="vsc-section-body">
        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: "0 0 28px" }}>
          <span className="tok-keyword">const</span>{" "}
          <span className="tok-var">stats</span>{" "}
          <span className="tok-punct">= {"{"}</span>
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 1,
          background: "#2d2f3e",
          border: "1px solid #44475a",
          borderRadius: 8,
          overflow: "hidden",
          marginBottom: 28,
        }}>
          {STATS.map((s) => (
            <div key={s.key} style={{
              background: "#282a36",
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <span style={{
                fontSize: 52,
                fontWeight: 300,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: s.color,
                fontFamily: "var(--font-mono), monospace",
              }}>
                {s.value}
                <span style={{ fontSize: 28 }}>{s.suffix}</span>
              </span>
              <span style={{ color: "#6272a4", fontSize: 13, fontFamily: "var(--font-mono), monospace" }}>
                {`// ${s.label}`}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: 0 }}>
          <span className="tok-punct">{"}"}</span>
        </p>
      </div>
    </section>
  );
}
