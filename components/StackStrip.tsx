const STACK = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Supabase",
  "Firebase", "MySQL", "API REST", "Chatwoot", "Service Desk", "Linux", "Redes",
];

export default function StackStrip() {
  return (
    <div style={{
      borderTop: "1px solid #2d2f3e",
      borderBottom: "1px solid #2d2f3e",
      padding: "14px 0 14px 52px",
      background: "#21222c",
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px 24px",
        fontFamily: "var(--font-mono), monospace",
        fontSize: 12,
        color: "#44475a",
      }}>
        <span style={{ color: "#6272a4", marginRight: 8 }}>//</span>
        {STACK.map((tech, i) => (
          <span key={tech} style={{ color: i % 3 === 0 ? "#8be9fd" : i % 3 === 1 ? "#50fa7b" : "#ffb86c" }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
