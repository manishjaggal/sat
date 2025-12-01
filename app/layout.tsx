import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GED Test Prep | Pass Your High School Equivalency Exam',
  description: 'Master your GED exam with adaptive practice tests, comprehensive study guides, and personalized learning. Join 100,000+ successful students who earned their diploma.',
  keywords: 'GED test, GED prep, high school equivalency, GED practice test, GED study guide',
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
