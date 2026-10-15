// Logo { > cn ▮ } — Cauê Netto
// Texto em contorno (Geist Mono), não depende de fonte carregada.
// Uso: <Logo className="h-8 w-auto" />  ·  <Logo mono className="h-6 text-white" />  ·  <Logo blink />

type LogoProps = {
  className?: string;
  /** usa currentColor em tudo (herda a cor do texto) */
  mono?: boolean;
  /** cursor piscando */
  blink?: boolean;
};

const C = { brace: "#6272a4", prompt: "#50fa7b", text: "#f8f8f2", cursor: "#ff79c6" };

const glyph = {
  open: "M402 -120Q315 -120 277.5 -72Q240 -24 240 52L240 156Q240 199 230 225Q220 251 192 262.5Q164 274 110 274L110 356Q164 356 192 367.5Q220 379 230 405Q240 431 240 474L240 578Q240 654 277.5 702Q315 750 402 750L490 750L490 672L403 672Q357 672 338.5 649Q320 626 320 580L320 488Q320 413 292 369.5Q264 326 190 318L190 312Q264 305 292 261Q320 217 320 142L320 50Q320 4 338.5 -19Q357 -42 403 -42L490 -42L490 -120Z",
  close: "M198 -120L110 -120L110 -42L197 -42Q243 -42 261.5 -19Q280 4 280 50L280 142Q280 217 308.5 261Q337 305 410 312L410 318Q337 326 308.5 369.5Q280 413 280 488L280 580Q280 626 261.5 649Q243 672 197 672L110 672L110 750L198 750Q285 750 322.5 702Q360 654 360 578L360 474Q360 431 370 405Q380 379 408 367.5Q436 356 490 356L490 274Q436 274 408 262.5Q380 251 370 225Q360 199 360 156L360 52Q360 -24 322.5 -72Q285 -120 198 -120Z",
  prompt: "M72 33L72 119L466 295L466 283L72 459L72 545L528 342L528 236Z",
  c: "M314 -12Q240 -12 185 22Q130 56 100 118.5Q70 181 70 265Q70 349 100 411Q130 473 185 507.5Q240 542 314 542Q373 542 419 520.5Q465 499 495 458Q525 417 536 358L448 352Q436 405 400.5 433.5Q365 462 314 462Q241 462 199.5 409.5Q158 357 158 265Q158 173 199.5 120.5Q241 68 314 68Q365 68 402.5 98Q440 128 452 188L540 182Q529 123 498 79.5Q467 36 420 12Q373 -12 314 -12Z",
  n: "M84 0L84 530L161 530L164 395L154 404Q164 451 190.5 481.5Q217 512 254 527Q291 542 332 542Q393 542 433.5 515Q474 488 495 442.5Q516 397 516 341L516 0L432 0L432 317Q432 391 403 429.5Q374 468 314 468Q273 468 240 450.5Q207 433 187.5 399.5Q168 366 168 317L168 0Z",
};

export default function Logo({ className, mono = false, blink = false }: LogoProps) {
  const col = (k: keyof typeof C) => (mono ? "currentColor" : C[k]);
  const p = (d: string, x: number, k: keyof typeof C) => (
    <path transform={`translate(${x} 0)`} d={d} fill={col(k)} stroke={col(k)} strokeWidth={16} strokeLinejoin="round" />
  );
  return (
    <svg viewBox="50 -810 4165 990" className={className} role="img" aria-label="Cauê Netto">
      {blink && <style>{`@keyframes cn-blink{50%{opacity:0}} .cn-cursor{animation:cn-blink 1.1s steps(1) infinite} @media (prefers-reduced-motion: reduce){.cn-cursor{animation:none}}`}</style>}
      <g transform="scale(1 -1)">
        {p(glyph.open, 0, "brace")}
        {p(glyph.prompt, 870, "prompt")}
        {p(glyph.c, 1700, "text")}
        {p(glyph.n, 2300, "text")}
        <rect className="cn-cursor" x={3015} y={-60} width={380} height={650} rx={36} fill={col("cursor")} />
        {p(glyph.close, 3665, "brace")}
      </g>
    </svg>
  );
}
