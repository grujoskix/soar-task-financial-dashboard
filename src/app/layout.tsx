import type { LayoutProps } from '@/types/page'
import type { Viewport } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/className'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default async function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'relative min-h-dvh select-none overflow-hidden antialiased',
          inter.className,
          lato.className,
        )}
      >
        {children}
      </body>
    </html>
  )
}
