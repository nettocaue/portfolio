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
  title: "Cauê Netto — Suporte & Desenvolvimento Web",
  description:
    "Portfólio de Cauê Netto: suporte técnico e desenvolvimento web. Três anos do lado de quem usa o produto, construindo do lado de quem faz.",
  openGraph: {
    title: "Cauê Netto — Suporte & Desenvolvimento Web",
    description:
      "Suporte que entende código. Código que entende gente.",
    url: "https://caue.netto.dev",
    siteName: "Cauê Netto",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cauê Netto — Suporte & Desenvolvimento Web",
    description: "Suporte que entende código. Código que entende gente.",
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
