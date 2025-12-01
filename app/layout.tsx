import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SAT Prep | Boost Your Score 200+ Points',
  description: 'Master the Digital SAT with AI-powered practice tests, personalized study plans, and expert strategies. Join 50,000+ students who achieved their dream scores.',
  keywords: 'SAT prep, SAT practice test, Digital SAT, SAT study guide, college admissions, SAT score improvement',
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
