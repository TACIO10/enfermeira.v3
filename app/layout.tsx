import type { Metadata } from "next";
import globalStyles from "./globals.css?inline";

// Vazio no build padrao; "/enfermeira.v3" no build do GitHub Pages. O og:image
// precisa do prefixo aqui: caminho iniciado por "/" e resolvido contra a raiz
// do dominio, entao sem ele a imagem sai fora do subcaminho do Pages.
const asset = process.env.PAGES_BASE_PATH ?? "";
const ogImage = `${asset}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.PAGES_SITE_URL ??
      "https://memoria-musical-enfermagem.taciojoga10.chatgpt.site",
  ),
  title: "Memória Musical | Revisão para Concursos de Enfermagem",
  description:
    "Reforce os assuntos mais cobrados nos concursos de enfermagem com músicas que acompanham sua rotina.",
  openGraph: {
    title: "Memória Musical | Concursos de Enfermagem",
    description: "Faça a matéria voltar à memória.",
    images: [{ url: ogImage, width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memória Musical | Concursos de Enfermagem",
    description: "Faça a matéria voltar à memória.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap"
        />
        <meta name="theme-color" content="#04140d" />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <script
          defer
          src="https://cdn.raadstag.com/tag.js"
          data-tag-id="12333-91460ed26f1e492ab67bddf8ae1a6acf"
          data-event-host="api.raadstag.com"
          data-plat-params="utm_source,utm_medium,utm_content,utm_term"
        />
        <script
          data-goatcounter="https://enfermeiro.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'document.addEventListener("click",function(event){var button=event.target.closest("[data-price-jump]");if(!button)return;var target=document.getElementById("oferta");if(!target)return;target.scrollIntoView({behavior:"auto",block:"start"});});',
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xtqlk5gjp2");',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
