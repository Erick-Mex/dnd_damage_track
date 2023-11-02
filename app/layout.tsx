import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { config } from "@fortawesome/fontawesome-svg-core"
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DnD damage counter',
  description: 'No tengo idea de que poner aqui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  )
}
