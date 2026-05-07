import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FloraVision - Premium Indoor Plants',
  description: 'Discover the finest collection of indoor plants for your home and office. FloraVision brings nature closer to you.',
  keywords: 'indoor plants, buy plants online, aglaonema, cactus, snake plant, desk plants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
