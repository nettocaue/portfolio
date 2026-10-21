import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caue.netto.dev"),
  title: "Cauê Netto — Suporte ao Cliente",
  description:
    "Portfólio de Cauê Netto: suporte ao cliente e atendimento técnico. Três anos ajudando pessoas a resolver problemas com clareza e paciência.",
  openGraph: {
    title: "Cauê Netto — Suporte ao Cliente",
    description:
      "Suporte que resolve. Atendimento que acolhe.",
    url: "https://caue.netto.dev",
    siteName: "Cauê Netto",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cauê Netto — Suporte ao Cliente",
    description: "Suporte que resolve. Atendimento que acolhe.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
