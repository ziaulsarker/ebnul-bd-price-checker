import type { Metadata } from 'next'
import './globals.css'
import Background from './components/background/background'

export const metadata: Metadata = {
  title: 'Price Checker',
  description: 'Dont get scammed on your next visit to bangladesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Background></Background>
          {children} 
      </body>
    </html>
  )
}
