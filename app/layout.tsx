import '@/styles/globals.css';
import Footer from '@/components/Footer';
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Newriive',
  description: 'Tools, guidance, and community — designed for immigrants.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Newriive',
    description: 'Empowering immigrants through tools and support.',
    url: 'https://newriive.com',
    siteName: 'Newriive',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Newriive preview',
      },
    ],
    type: 'website',
  },
}



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
