import { ImageResponse } from "next/og";

export const alt = "Cauê Netto — Suporte & Desenvolvimento Web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0B0C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontWeight: 600,
            fontSize: 56,
            letterSpacing: "-0.05em",
            color: "#EDEDEA",
          }}
        >
          <span style={{ display: "flex" }}>c</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2px 14px",
              borderRadius: 12,
              background:
                "linear-gradient(180deg, #F6F7F9 0%, #BBC0C7 45%, #8A8F97 58%, #E2E5E8 100%)",
              color: "#0B0B0C",
            }}
          >
            /
          </span>
          <span style={{ display: "flex" }}>n</span>
        </div>

        {/* Line 1 */}
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 300,
            color: "#EDEDEA",
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
          }}
        >
          Suporte que entende código.
        </div>

        {/* Line 2 */}
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 300,
            color: "#EDEDEA",
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
          }}
        >
          Código que entende gente.
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#A3A39F",
            letterSpacing: "-0.01em",
          }}
        >
          Cauê Netto · Curitiba
        </div>
      </div>
    ),
    { ...size }
  );
}
