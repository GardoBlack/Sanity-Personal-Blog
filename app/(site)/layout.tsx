import Link from 'next/link'
import '../globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-800 max-w-full  mx-auto py-10'>
      <header className="flex items-center justify-center space-x-5">
          <Link href="/" className="text-cyan-500 font-extrabold text-2xl hover:scale-105 hover:text-amber-400">RosEdward</Link>
          
          <Link href="/about" className="text-cyan-500 font-extrabold text-2xl hover:scale-105 hover:text-amber-400">About Me</Link>
          </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
