import type { Metadata } from 'next'
import Nav from './components/nav/nav'
import './globals.css'



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
        <Nav></Nav>
          {children} 
      </body>
    </html>
  )
}
