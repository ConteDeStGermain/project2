import './globals.css'
import { Roboto, Playfair_Display } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const playfair_display = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Been&Brew',
  description: 'Coffee shops for the nomad developer 👨‍💻',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <div className='flex flex-col justify-center items-center'>
            <h1 className={playfair_display.className + ' font-bold text-7xl mt-10'}>Been&Brew</h1>
            <p className='mt-4 text-3xl font-bold'>Coffee shops for the nomad developer 👨‍💻</p>
            <div className='flex flex-row justify-center mt-4'>
              <Link href="/">
                <button className={`border-2 border-[#582C1F] hover:bg-[#582C1F] hover:text-[#FAFBFB] p-1 mr-3 rounded-full text-lg w-20 transition duration-300 ease-in-out`}>Home</button>
              </Link>
              <Link href="/theratingsystem">
                <button className='border-2 border-[#FFAD69] hover:bg-[#FFAD69] hover:text-[#FAFBFB] p-1 mr-3 rounded-full text-lg w-40 transition duration-300 ease-in-out'>The rating system</button>
              </Link>
              <Link href="/motivation">
                <button className='border-2 border-[#C67B52] hover:bg-[#C67B52] hover:text-[#FAFBFB] p-1 mr-3 rounded-full text-lg w-28 transition duration-300 ease-in-out'>Motivation</button>
              </Link>
            </div>
          </div>
          {children}
          <footer className='bg-[#252525] h-24 w-full flex flex-row items-center'>
            <h1 className='flex-none font-bold text-2xl text-[#FAFBFB] ml-8'>Blog</h1>
            <h1 className={playfair_display.className + ' grow text-center font-bold text-3xl text-[#FAFBFB] ml-10'}>Been&Brew</h1>
            <h1 className='flex-none font-bold text-2xl text-[#FAFBFB] mr-8'>Contact Me</h1>
          </footer>
      </body>
    </html>
  )
}
