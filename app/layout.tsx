"use client"
import { usePathname } from 'next/navigation'
import { Navbar } from './components/Navbar'
import { SideBar } from './components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  if (pathname == '/login' || pathname == '/register') return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex">
            <SideBar />
            <div className='w-full'>
              <Navbar />
              <div className='w-full'>
                {children}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
