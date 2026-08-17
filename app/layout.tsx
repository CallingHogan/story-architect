import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Story Architect',
  description: 'Make it real.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="neutral">
      <body>{children}</body>
    </html>
  )
}
