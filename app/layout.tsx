import { Navbar } from './components/Navbar'
import { SideBar } from './components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideBar />
          <div className='w-full'>
            <Navbar />
            <div className='w-full'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
