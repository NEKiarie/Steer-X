import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'


export const metadata: Metadata = {
  title: 'Steer X',
  description: 'Gateway to a wide collection of cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className='relative'>
        {children}
        </body>
        <Footer />
    </html>
  )
}
