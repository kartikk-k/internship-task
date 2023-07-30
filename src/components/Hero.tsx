import React from 'react'
import Image from 'next/image'
import GradientImage from '../../public/media/gradient.png'
import { Button } from './ui/buttons'
import { motion } from 'framer-motion'


function Hero() {
    return (
        <div className='relative flex flex-col items-center justify-center pt-[100px]'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='absolute z-0 top-[-60px] sm:top-[-100px] md:top-[-120px] select-none'
            >
                <Image
                    src={GradientImage}
                    width={785}
                    height={532}
                    alt='illustration'
                    className='w-full mx-auto shrink-0'
                />
            </motion.div>

            <div className='relative z-10 flex flex-col items-center gap-2 px-4'>
                {/* branding */}
                <p className='relative text-xs text-primary'>JET PROTOCOL</p>

                {/* heading/main text */}
                <h1 className='text-3xl text-center md:text-5xl'>
                    the next generation of
                    <br />
                    <span className='playfair-font'>defi governance</span>
                </h1>

                {/* description */}
                <p className='my-2 text-sm font-light text-center md:text-lg text-zinc-400'>experience open source, transparent and efficient borrowing< br className='hidden sm:block' />and lending on solana.</p>

                {/* group of buttons */}
                <div className='flex gap-4 my-4'>
                    <Button size={'sm'}>read docs</Button>
                    <Button size={'sm'} variant={'outline'}>how it works</Button>
                </div>

            </div>

        </div>
    )
}

export default Hero