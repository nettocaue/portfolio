"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`z-50 flex justify-center px-4 pt-6 transition-all duration-300 ${
        scrolled ? "fixed top-0 left-0 right-0" : "relative"
      }`}
    >
      <nav
        aria-label="Principal"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
          background: "rgba(20,20,22,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid #26262A",
          borderRadius: 999,
          padding: "6px 6px 6px 16px",
        }}
      >
        <Link
          href="#topo"
          aria-label="Cauê Netto — início"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            marginRight: 12,
          }}
        >
          <Logo />
        </Link>

        {(
          [
            ["#projetos", "Projetos"],
            ["#sobre",    "Sobre"],
            ["#experiencia", "Experiência"],
            ["#contato",  "Contato"],
          ] as const
        ).map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="navlink hidden sm:block"
            style={{
              color: "#A3A39F",
              textDecoration: "none",
              fontSize: 14,
              padding: "10px 12px",
              borderRadius: 999,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#EDEDEA";
              (e.currentTarget as HTMLAnchorElement).style.background = "#1C1C1F";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#A3A39F";
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            {label}
          </a>
        ))}

        <a
          href={SITE.cv}
          download
          style={{
            marginLeft: 8,
            textDecoration: "none",
            background: "#EDEDEA",
            color: "#0B0B0C",
            fontSize: 14,
            fontWeight: 500,
            padding: "11px 18px",
            borderRadius: 999,
          }}
        >
          Currículo ↓
        </a>
      </nav>
    </header>
  );
}
