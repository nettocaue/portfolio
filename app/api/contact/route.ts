import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY não definida");
    return NextResponse.json({ error: "Configuração de e-mail ausente." }, { status: 500 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "caue.netto234@gmail.com",
    replyTo: email,
    subject: `Portfolio — mensagem de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("[contact] Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: "Falha ao enviar.", detail: error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
