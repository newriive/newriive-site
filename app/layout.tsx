import '@/styles/globals.css';
import Footer from '@/components/Footer';
import { ReactNode } from 'react'

export const metadata = {
  title: 'Newriive',
  description: 'Tools, guidance, and community — designed for immigrants.',
  icons: {
    icon: '/favicon.png', // or '/favicon.ico'
  },
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
