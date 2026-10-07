const STACK = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Supabase",
  "Firebase", "MySQL", "API REST", "Chatwoot", "Service Desk", "Linux", "Redes",
];

export default function StackStrip() {
  return (
    <div
      style={{
        borderTop: "1px solid #1E1E21",
        borderBottom: "1px solid #1E1E21",
        padding: "18px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 28px",
          justifyContent: "center",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 13,
          color: "#7E7E7A",
        }}
      >
        {STACK.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
