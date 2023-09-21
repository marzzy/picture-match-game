import './globals.css'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] , display: 'swap' })

export const metadata = {
  title: 'Picture Match Game',
  description: 'This is a simple picture match game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-stone-950 text-amber-600`}>{children}</body>
    </html>
  )
}
