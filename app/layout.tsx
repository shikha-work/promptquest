import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PromptQuest",
  description: "Prompt Quest is a gamified platform to master AI prompting skills. Join daily challenges, track your progress, and level up your ChatGPT, Claude, and Midjourney expertise. Sign up for early access!",

  // PWA Configuration
  manifest: '/manifest.json',
  themeColor: '#6366f1',
  
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PromptQuest',
  },
  
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  
  // For better mobile experience
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}