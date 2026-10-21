export default function Logo() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-geist-sans), sans-serif",
        fontWeight: 600,
        fontSize: 24,
        letterSpacing: "-0.05em",
        lineHeight: 1,
        color: "#EDEDEA",
      }}
    >
      c
      <span
        style={{
          display: "inline-block",
          margin: "0 3px",
          padding: "1px 6px",
          borderRadius: 6,
          transform: "skewX(-12deg)",
          background:
            "linear-gradient(180deg, #F6F7F9 0%, #BBC0C7 45%, #8A8F97 58%, #E2E5E8 100%)",
          color: "#0B0B0C",
          boxShadow: "inset 0 1px 0 #FFFFFF, inset 0 -1px 0 #6F747C",
        }}
      >
        /
      </span>
      n
    </span>
  );
}
