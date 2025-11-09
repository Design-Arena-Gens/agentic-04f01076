import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Machine Learning Hinglish - Linear & Logistic Regression',
  description: 'Visual guide to Linear and Logistic Regression in Hinglish for complete beginners',
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
