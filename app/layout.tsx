import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'کلینیک زیبایی تخصصی یاسمن رضوانی',
  description:
    'کلینیک تخصصی زیبایی و پوست یاسمن رضوانی؛ تزریق فیلر و بوتاکس، لیزر موهای زائد، جوانسازی پوست، هایفوتراپی و کانتورینگ صورت با بالاترین استانداردهای لاکچری.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a1124',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
