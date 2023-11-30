import type { Metadata } from 'next'
import type {ReactNode} from "react";
import { PT_Sans } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/navbar";

const font = PT_Sans({ weight:["400"], subsets:["latin"] })

export const metadata: Metadata = {
  title: 'AIStable',
  description: 'AI Hub',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
