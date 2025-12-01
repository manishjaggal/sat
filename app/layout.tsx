import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TEAS Prep | Master Your Nursing Entrance Exam',
  description: 'Comprehensive ATI TEAS test preparation with practice questions, study guides, and personalized learning paths. Join thousands of successful nursing students.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

