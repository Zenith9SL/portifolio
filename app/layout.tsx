import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Portfolio | Desenvolvedor Full Stack",
  description:
    "Portfolio de desenvolvedor Full Stack com projetos, cursos e redes sociais.",
  authors: [{ name: "Seu Nome" }],
  openGraph: {
    title: "Portfolio | Desenvolvedor Full Stack",
    description:
      "Portfolio de desenvolvedor Full Stack com projetos, cursos e redes sociais.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
