"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

const LINE_NUMS = Array.from({ length: 28 }, (_, i) => i + 1);

type Status = "idle" | "sending" | "ok" | "error";
type ErrorDetail = { name?: string; message?: string } | null;

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#21222c",
  border: "1px solid #44475a",
  borderRadius: 4,
  color: "#f8f8f2",
  fontFamily: "var(--font-jb), monospace",
  fontSize: 13,
  padding: "10px 12px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};

export default function Contact() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState<ErrorDetail>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("ok");
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorDetail(body.detail ?? null);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="vsc-section" style={{ paddingBottom: 80 }}>
      <div className="vsc-gutter">
        {LINE_NUMS.map((n) => <div key={n}>{n}</div>)}
      </div>

      <div className="vsc-section-body">
        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: "0 0 8px" }}>
          <span className="tok-comment">{`// contact.js`}</span>
        </p>
        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: "0 0 32px" }}>
          <span className="tok-keyword">module</span>
          <span className="tok-punct">.</span>
          <span className="tok-prop">exports</span>
          <span className="tok-punct"> = </span>
          <span className="tok-keyword">async function</span>
          <span className="tok-fn"> falarComigo</span>
          <span className="tok-punct">() {"{"}</span>
        </p>

        <h2 style={{
          margin: "0 0 24px",
          fontWeight: 300,
          fontSize: "clamp(36px, 5.5vw, 68px)",
          letterSpacing: "-0.04em",
          lineHeight: 1.04,
          color: "#f8f8f2",
        }}>
          Vamos{" "}
          <span style={{ color: "#ffb86c", fontFamily: "var(--font-jb), monospace", fontStyle: "italic", fontWeight: 400 }}>
            conversar?
          </span>
        </h2>

        {/* Quick links */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          {(
            [
              ["LinkedIn", SITE.linkedin, "#bd93f9"],
              ["GitHub",   SITE.github,   "#50fa7b"],
              ["WhatsApp", SITE.whatsapp,  "#25d366"],
            ] as const
          ).map(([label, href, color]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                border: `1px solid ${color}55`,
                color: color,
                fontSize: 13,
                padding: "10px 18px",
                borderRadius: 4,
                fontFamily: "var(--font-mono), monospace",
                background: `${color}11`,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = `${color}22`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = `${color}11`)}
            >
              {label} ↗
            </a>
          ))}
        </div>

        {/* Contact form */}
        {status === "ok" ? (
          <div style={{
            padding: "20px 24px",
            background: "#50fa7b11",
            border: "1px solid #50fa7b44",
            borderRadius: 6,
            maxWidth: 520,
            marginBottom: 40,
          }}>
            <p style={{ fontFamily: "var(--font-jb), monospace", fontSize: 13, color: "#50fa7b", margin: 0 }}>
              <span className="tok-comment">// mensagem enviada com sucesso ✓</span>
            </p>
            <p style={{ fontFamily: "var(--font-jb), monospace", fontSize: 13, color: "#f8f8f2", margin: "8px 0 0" }}>
              Obrigado pelo contato, <span style={{ color: "#ffb86c" }}>{name}</span>. Responderei em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={send} style={{ maxWidth: 520, marginBottom: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Nome */}
              <div>
                <label style={{ fontFamily: "var(--font-jb), monospace", fontSize: 11, color: "#6272a4", display: "block", marginBottom: 6 }}>
                  <span className="tok-prop">nome</span>
                  <span className="tok-punct">:</span>
                  <span style={{ color: "#ff5555", marginLeft: 2 }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Seu nome"
                  style={{ ...inputStyle, borderColor: focused === "name" ? "#bd93f9" : "#44475a" }}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ fontFamily: "var(--font-jb), monospace", fontSize: 11, color: "#6272a4", display: "block", marginBottom: 6 }}>
                  <span className="tok-prop">email</span>
                  <span className="tok-punct">:</span>
                  <span style={{ color: "#ff5555", marginLeft: 2 }}>*</span>
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  style={{ ...inputStyle, borderColor: focused === "email" ? "#bd93f9" : "#44475a" }}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label style={{ fontFamily: "var(--font-jb), monospace", fontSize: 11, color: "#6272a4", display: "block", marginBottom: 6 }}>
                  <span className="tok-prop">mensagem</span>
                  <span className="tok-punct">:</span>
                  <span style={{ color: "#ff5555", marginLeft: 2 }}>*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Olá Cauê, gostaria de..."
                  style={{ ...inputStyle, resize: "vertical", borderColor: focused === "msg" ? "#bd93f9" : "#44475a" }}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {status === "error" && (
                <p style={{ fontFamily: "var(--font-jb), monospace", fontSize: 12, color: "#ff5555", margin: 0 }}>
                  <span className="tok-comment">// erro ao enviar — tente novamente.</span>
                  {errorDetail && (
                    <span style={{ display: "block", marginTop: 4, color: "#ff555599" }}>
                      {errorDetail.name}: {errorDetail.message}
                    </span>
                  )}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  alignSelf: "flex-start",
                  background: status === "sending" ? "#44475a" : "#ffb86c",
                  color: "#282a36",
                  fontFamily: "var(--font-jb), monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "11px 24px",
                  borderRadius: 4,
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.background = "#ffc77e"; }}
                onMouseLeave={e => { if (status !== "sending") e.currentTarget.style.background = "#ffb86c"; }}
              >
                {status === "sending" ? "enviando..." : "Enviar mensagem →"}
              </button>
            </div>
          </form>
        )}

        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#6272a4", margin: "0 0 40px" }}>
          <span className="tok-punct">{"}"}</span>
        </p>

        <footer style={{
          paddingTop: 24,
          borderTop: "1px solid #2d2f3e",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          color: "#44475a",
        }}>
          <span>© 2026 Cauê Netto</span>
          <span>Feito em Curitiba</span>
        </footer>
      </div>
    </section>
  );
}
