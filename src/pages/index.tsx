import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UsersGrid from '@/components/UsersGrid'
import Marquee from "react-fast-marquee";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />

      <Marquee gradient gradientColor={[0, 0, 0]} className='select-none'>
        <UsersGrid />
      </Marquee>

    </main >
  )
}
