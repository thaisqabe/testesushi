import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: 'Arte do Sushi - Culinária Japonesa',
    icons: {
    icon: '/images/sushi-favicon.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased bg-background text-foreground ${sora.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
