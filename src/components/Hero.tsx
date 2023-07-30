import React from 'react'
import Image from 'next/image'
import GradientImage from '../../public/media/gradient.png'
import { Button } from './ui/buttons'


function Hero() {
    return (
        <div className='relative flex flex-col items-center justify-center pt-[130px]'>
            <Image
                src={GradientImage}
                width={785}
                height={532}
                alt='illustration'
                className='absolute z-0 top-[-120px]'
            />

            <div className='relative z-10 flex flex-col items-center gap-2'>
                {/* branding */}
                <p className='relative text-xs text-primary'>JET PROTOCOL</p>

                {/* heading/main text */}
                <h1 className='text-5xl text-center'>
                    the next generation of
                    <br />
                    <span className='playfair-font'>defi governance</span>
                </h1>

                {/* description */}
                <p className='my-2 text-lg font-light text-center text-zinc-400'>experience open source, transparent and efficient borrowing< br />and lending on solana.</p>

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