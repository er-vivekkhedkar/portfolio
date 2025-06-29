import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vivek Khedkar',
  description: 'Hi, I’m Vivek Khedkar. This is my official portfolio showcasing my web development projects, skills, and achievements.',
  keywords: 'Vivek Khedkar, Vivek Portfolio, Web Developer, Frontend Developer, Full Stack Developer JavaScript, React, Next.js, Mumbai Developer',
  authors: [{ name: 'Vivek Khedkar' }],
  creator: 'Vivek Khedkar',
  openGraph: {
    title: 'Vivek Khedkar – Web Developer & Tech Enthusiast',
    description: 'Explore the portfolio of Vivek Khedkar, showcasing innovative web projects and skills.',
    url: 'https://vivekkhedkar.vercel.app/', // replace with your actual domain
    type: 'website',
    images: [
      {
        url: '/images/hero-image.png', 
        width: 1200,
        height: 630,
        alt: 'Vivek Khedkar',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Vivek Khedkar – Web Developer',
  //   description: 'Explore the portfolio of Vivek Khedkar, a passionate frontend developer.',
  //   images: ['/og-image.png'],
  // },
  VivekKhedkar: {
    url: 'https://vivekkhedkar.vercel.app/',
    type: 'website',
    title: 'Vivek Khedkar – Portfolio Website',
    description:
      'Portfolio of Vivek Khedkar, a full-stack web developer specializing in React, Next.js, and modern web solutions.',
    image: '/images/projects/1.png',
  },
  Sikhley: {
    url: 'https://sikhley.vercel.app/',
    type: 'website',
    title: 'Sikhley – Course Platform',
    description:
      'A modern LMS platform built using React, Next.js, and Tailwind CSS for effortless course delivery.',
    image: '/images/projects/lmsp.png',
  },
  BgRemoval: {
    url: 'https://bgremoval-pro.vercel.app/',
    type: 'website',
    title: 'BG Removal – AI SaaS Tool',
    description:
      'Remove image backgrounds with AI. Supports login, payments, credits, and a free tier.',
    image: '/images/projects/bgremoval.png',
  },
  YTSummarizer: {
    url: 'https://youtubesummarizer.vercel.app/',
    type: 'website',
    title: 'AI YouTube Summarizer',
    description:
      'Automatically summarize YouTube videos using AI. Instant, fast, and accurate.',
    image: '/images/projects/yt.png',
  },
  MetaGame: {
    url: 'https://metagame.vercel.app/',
    type: 'website',
    title: 'MetaGame – Animated Website',
    description:
      'A visually immersive animated website built with Next.js and interactive motion libraries.',
    image: '/images/projects/metagame.png',
  },
 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
