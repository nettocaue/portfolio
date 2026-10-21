"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

type Status = "idle" | "sending" | "ok" | "error";

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 8,
  fontSize: 14,
  color: "#A3A39F",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  background: "#121214",
  border: "1px solid #26262A",
  borderRadius: 14,
  color: "#EDEDEA",
  fontSize: 16,
  fontFamily: "inherit",
  padding: "14px 16px",
  outline: "none",
};

export default function Contact() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

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

        <p style={{ margin: 0, maxWidth: 520, color: "#A3A39F", fontSize: 17, lineHeight: 1.6 }}>
          Mande uma mensagem pelo formulário ou me chame onde for mais fácil
          para você. Respondo o quanto antes.
        </p>

        {status === "ok" ? (
          <div
            role="status"
            style={{
              width: "100%",
              maxWidth: 520,
              padding: "24px",
              background: "#121214",
              border: "1px solid #26262A",
              borderRadius: 20,
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            Mensagem enviada! Obrigado pelo contato, {name}. Logo eu respondo
            no seu e-mail.
          </div>
        ) : (
          <form
            onSubmit={send}
            style={{
              width: "100%",
              maxWidth: 520,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              textAlign: "left",
            }}
          >
            <div>
              <label htmlFor="contato-nome" style={labelStyle}>Seu nome</label>
              <input
                id="contato-nome"
                required
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="contato-email" style={labelStyle}>Seu e-mail</label>
              <input
                id="contato-email"
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="contato-mensagem" style={labelStyle}>Mensagem</label>
              <textarea
                id="contato-mensagem"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Olá, Cauê! Gostaria de conversar sobre..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {status === "error" && (
              <p role="alert" style={{ margin: 0, color: "#F2A1A1", fontSize: 15 }}>
                Não foi possível enviar agora. Tente de novo ou escreva para{" "}
                <a href={`mailto:${SITE.email}`} style={{ color: "#EDEDEA" }}>
                  {SITE.email}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-silver-btn"
              style={{
                alignSelf: "center",
                border: "none",
                color: "#0B0B0C",
                fontWeight: 500,
                fontSize: 15,
                fontFamily: "inherit",
                padding: "14px 28px",
                borderRadius: 999,
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Enviando…" : "Enviar mensagem"}
            </button>
          </form>
        )}

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
              ["WhatsApp", SITE.whatsapp],
              ["GitHub",   SITE.github],
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
