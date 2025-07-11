// app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Vivek Khedkar',
  description:
    'Hi, I’m Vivek Khedkar. This is my official portfolio showcasing my web development projects, skills, and achievements.',
  keywords:
    'Vivek Khedkar, Vivek Portfolio, Web Developer, Frontend Developer, Full Stack Developer JavaScript, React, Next.js, Mumbai Developer',
  authors: [{ name: 'Vivek Khedkar' }],
  creator: 'Vivek Khedkar',
  openGraph: {
    title: 'Vivek Khedkar – Web Developer & Tech Enthusiast',
    description: 'Explore the portfolio of Vivek Khedkar, showcasing innovative web projects and skills.',
    url: 'https://vivekkhedkar.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://vivekkhedkar.vercel.app/images/hero-image.png', // ✅ use full URL
        width: 1200,
        height: 630,
        alt: 'Vivek Khedkar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Khedkar – Web Developer',
    description: 'Explore the portfolio of Vivek Khedkar, a passionate frontend developer.',
    images: ['https://vivekkhedkar.vercel.app/images/hero-image.png'],
  },
};



export default function RootLayout({ children }) {
  return (
   <html lang="en">
  <body className={inter.className}>
    {children}
    <Analytics />
  </body>
</html>
  )
}
