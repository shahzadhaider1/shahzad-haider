import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata = {
  title: 'Shahzad Haider - Software Engineer',
  description: 'Backend developer specializing in microservices and scalable systems',
  icons: {
    icon: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/android-chrome-512x512.png' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  )
}
