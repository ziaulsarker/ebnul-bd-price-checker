import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/nav/nav'
import Hero from './components/hero/hero'

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
        <span></span>
        <Nav></Nav>
        <Hero></Hero>
          {children} 
      </body>
    </html>
  )
}
