const STATS = [
  {
    value: "3.400",
    suffix: "+",
    label: "conversas de suporte atendidas na Pixta.me",
  },
  {
    value: "93",
    suffix: "%",
    label: "de resolução dos atendimentos",
  },
  {
    value: "3",
    suffix: " anos",
    suffixSerif: true,
    label: "entre cliente, produto e time de desenvolvimento",
  },
];

export default function Stats() {
  return (
    <section aria-label="Números" style={{ padding: "96px 16px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 1,
          background: "#1E1E21",
          border: "1px solid #1E1E21",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.value}
            style={{
              background: "#0B0B0C",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <span
              style={{
                fontSize: 64,
                fontWeight: 300,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {s.value}
              {s.suffixSerif ? (
                <span
                  className="text-chrome"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    fontStyle: "italic",
                    fontSize: 40,
                  }}
                >
                  {s.suffix}
                </span>
              ) : (
                <span className="text-chrome">{s.suffix}</span>
              )}
            </span>
            <span style={{ color: "#A3A39F", fontSize: 15 }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
