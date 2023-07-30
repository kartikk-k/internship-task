import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UsersGrid from '@/components/UsersGrid'
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion'
import MetaHead from '@/components/seo/MetaHead';

export default function Home() {
  return (
    <>
      <MetaHead />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <Navbar />
        <Hero />

        <Marquee gradient gradientColor={[0, 0, 0]} className='select-none'>
          <UsersGrid />
        </Marquee>

      </motion.main >
    </>
  )
}
