import type { Metadata } from 'next'

import { ColorSchemeScript } from '@mantine/core'
import { Geist, Geist_Mono } from 'next/font/google'

import React, { Suspense } from 'react'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tickety - Minimal Todo List',
  description: 'Todo List made simple and privacy first!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="dark">
      <head>
        <title>Tickety</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <Suspense>
          <ColorSchemeScript defaultColorScheme="dark" />
        </Suspense>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
