import type { LayoutProps } from '@/types/page'
import type { Viewport } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'
import { Header } from '@/shared/header/header'
import { Sidebar } from '@/shared/sidebar/sidebar'
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
    <html lang='en' className='overflow-hidden'>
      <body
        className={cn(
          'relative flex min-h-dvh select-none overflow-hidden bg-[#F5F7FA] antialiased',
          inter.className,
          lato.className,
        )}
      >
        <Sidebar />
        <div className='flex h-dvh flex-1 flex-col'>
          <Header />
          <main className='no-scrollbar flex-1 overflow-y-auto overflow-x-hidden scroll-smooth p-6 md:p-10'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
