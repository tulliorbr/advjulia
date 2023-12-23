import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Julia Advogada Trabalhista',
  description: 'Julia Advogada Trabalhista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      
      <body className={inter.className}><Header/>{children}</body>
    </html>
  )
}
