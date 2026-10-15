"use client";

import { SITE } from "@/data/site";

/* ── Token helpers ─────────────────────────────────────── */
const K  = ({ c }: { c: string }) => <span className="tok-keyword">{c}</span>;
const V  = ({ c }: { c: string }) => <span className="tok-var">{c}</span>;
const P  = ({ c }: { c: string }) => <span className="tok-prop">{c}</span>;
const S  = ({ c }: { c: string }) => <span className="tok-string">{c}</span>;
const Pu = ({ c }: { c: string }) => <span className="tok-punct">{c}</span>;
const Cm = ({ c }: { c: string }) => <span className="tok-comment">{c}</span>;

const mono: React.CSSProperties = {
  fontFamily: "var(--font-jb), monospace",
  fontSize: 13,
  lineHeight: 2,
};

/* ── Section divider ──────────────────────────────────── */
function SectionHeader({ label }: { label: string }) {
  const bar = "─".repeat(Math.max(0, 48 - label.length - 5));
  return (
    <div style={{ ...mono, margin: "32px 0 16px", color: "#6272a4", fontStyle: "italic" }}>
      <Cm c={`// ── ${label} ${bar}`} />
    </div>
  );
}

/* ── Field row inside a const block ──────────────────── */
function Field({ name, value, color = "#f1fa8c" }: { name: string; value: string; color?: string }) {
  return (
    <div style={{ ...mono, paddingLeft: 24 }}>
      <P c={name} />
      <Pu c=":  " />
      <span style={{ color }}>{value}</span>
      <Pu c="," />
    </div>
  );
}

/* ── Main component ───────────────────────────────────── */
export default function CurriculumView() {
  return (
    <div style={{ display: "flex", padding: "40px 0 80px" }}>
      {/* Body */}
      <div className="vsc-section-body" style={{ paddingLeft: 24, paddingTop: 0 }}>

        {/* ─── Download ─── */}
        <div style={{ marginBottom: 36 }}>
          <a
            href={SITE.cv}
            download
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#50fa7b", color: "#282a36",
              fontFamily: "var(--font-jb), monospace", fontSize: 13, fontWeight: 700,
              padding: "10px 20px", borderRadius: 4, textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#69fb8c")}
            onMouseLeave={e => (e.currentTarget.style.background = "#50fa7b")}
          >
            ↓ Baixar PDF
          </a>
        </div>

        {/* ─── File header ─── */}
        <div style={{ ...mono, color: "#6272a4", fontStyle: "italic", marginBottom: 32 }}>
          <div><Cm c="/**" /></div>
          <div><Cm c=" * @file     curriculum.pdf" /></div>
          <div><Cm c=" * @author   Cauê Netto" /></div>
          <div><Cm c=" * @role     Suporte ao Cliente & Desenvolvimento Web" /></div>
          <div><Cm c=" * @location Curitiba, PR — Brasil" /></div>
          <div><Cm c=" */" /></div>
        </div>

        {/* ═══════════════════════════════════════════════════
            CONTATO
        ════════════════════════════════════════════════════ */}
        <SectionHeader label="CONTATO" />
        <div style={{ ...mono }}>
          <div><K c="const " /><V c="contato" /><Pu c=" = {" /></div>
          <Field name="email"    value={`"${SITE.email}"`} />
          <Field name="linkedin" value={`"linkedin.com/in/cauê-netto"`} color="#8be9fd" />
          <Field name="github"   value={`"github.com/nettocaue"`}       color="#8be9fd" />
          <Field name="whatsapp" value={`"wa.me/5541996114665"`}         color="#8be9fd" />
          <div><Pu c="};" /></div>
        </div>

        {/* ═══════════════════════════════════════════════════
            PROFESSIONAL SUMMARY
        ════════════════════════════════════════════════════ */}
        <SectionHeader label="PROFESSIONAL SUMMARY" />
        <div style={{ ...mono }}>
          <div><K c="const " /><V c="summary" /><Pu c=" = " /></div>
          <div style={{ paddingLeft: 24, color: "#f1fa8c", maxWidth: 640 }}>
            <S c={`"Profissional na interseção entre suporte ao cliente e`} />
            <br />
            <S c={`  desenvolvimento web. Três anos atendendo usuários,`} />
            <br />
            <S c={`  analisando tickets e levando problemas recorrentes para`} />
            <br />
            <S c={`  o time de produto — enquanto constrói projetos próprios`} />
            <br />
            <S c={`  do zero. Usa IA no fluxo de trabalho e sabe explicar`} />
            <br />
            <S c={`  cada decisão do que entrega."`} />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            EXPERIÊNCIA PROFISSIONAL
        ════════════════════════════════════════════════════ */}
        <SectionHeader label="EXPERIÊNCIA PROFISSIONAL" />

        {/* Pixta.me */}
        <div style={{ ...mono, marginBottom: 20 }}>
          <div><K c="const " /><V c="pixta" /><Pu c=" = {" /></div>
          <Field name="periodo" value='"2023 — hoje"'             color="#ff79c6" />
          <Field name="cargo"   value='"Suporte ao Cliente"'      color="#f8f8f2" />
          <Field name="empresa" value='"Pixta.me"'                color="#f1fa8c" />
          <div style={{ ...mono, paddingLeft: 24 }}>
            <P c="atividades" /><Pu c=": [" />
          </div>
          {[
            "Atendimento via tickets e chat — Chatwoot",
            "Manutenção da central de ajuda (artigos de autoatendimento)",
            "Análise de dados de tickets para identificar padrões",
            "Ponte entre usuários e o time de desenvolvimento",
          ].map(a => (
            <div key={a} style={{ ...mono, paddingLeft: 48 }}>
              <S c={`"${a}"`} /><Pu c="," />
            </div>
          ))}
          <div style={{ ...mono, paddingLeft: 24 }}><Pu c="]," /></div>
          <div><Pu c="};" /></div>
        </div>

        {/* ═══════════════════════════════════════════════════
            FORMAÇÃO
        ════════════════════════════════════════════════════ */}
        <SectionHeader label="FORMAÇÃO" />

        <div style={{ ...mono, marginBottom: 20 }}>
          <div><K c="const " /><V c="etec" /><Pu c=" = {" /></div>
          <Field name="periodo"     value='"2024 — 2025"'             color="#ff79c6" />
          <Field name="curso"       value='"Técnico em Informática"'  color="#f8f8f2" />
          <Field name="instituicao" value='"Etec"'                    color="#f1fa8c" />
          <div style={{ ...mono, paddingLeft: 24 }}>
            <P c="disciplinas" /><Pu c=": [" />
            <S c='"Redes"' /><Pu c=", " />
            <S c='"S.O."' /><Pu c=", " />
            <S c='"Hardware"' /><Pu c=", " />
            <S c='"Banco de Dados"' />
            <Pu c="]," />
          </div>
          <div><Pu c="};" /></div>
        </div>

        <div style={{ ...mono, marginBottom: 20 }}>
          <div><K c="const " /><V c="boticario" /><Pu c=" = {" /></div>
          <Field name="periodo"     value='"2023"'                         color="#ff79c6" />
          <Field name="programa"    value='"Programa Desenvolve"'          color="#f8f8f2" />
          <Field name="instituicao" value='"Grupo Boticário"'              color="#f1fa8c" />
          <Field name="foco"        value='"Formação e mentoria em tecnologia"' />
          <div><Pu c="};" /></div>
        </div>

        {/* ═══════════════════════════════════════════════════
            STACK
        ════════════════════════════════════════════════════ */}
        <SectionHeader label="STACK" />

        <div style={{ ...mono, marginBottom: 4 }}>
          <div><K c="const " /><V c="stack" /><Pu c=" = {" /></div>

          {[
            { key: "frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
            { key: "backend",  items: ["Supabase", "Firebase", "MySQL", "API REST"] },
            { key: "suporte",  items: ["Chatwoot", "Service Desk", "Linux", "Redes"] },
          ].map(group => (
            <div key={group.key} style={{ ...mono, paddingLeft: 24 }}>
              <P c={group.key} /><Pu c=": [" />
              {group.items.map((s, i) => (
                <span key={s}>
                  <S c={`"${s}"`} />
                  {i < group.items.length - 1 && <Pu c=", " />}
                </span>
              ))}
              <Pu c="]," />
            </div>
          ))}
          <div><Pu c="};" /></div>
        </div>

        {/* ─── Footer ─── */}
        <div style={{ ...mono, marginTop: 40, color: "#44475a" }}>
          <Cm c="// caue.netto.dev — Curitiba, 2026" />
        </div>

      </div>
    </div>
  );
}
