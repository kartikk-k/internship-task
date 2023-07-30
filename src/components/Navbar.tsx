import React from 'react'
import Image from 'next/image'
import Logo from '../../public/media/logo.svg'
import { Button } from './ui/buttons'

function Navbar() {
    return (
        <div className='relative z-10 flex items-center justify-between max-w-5xl px-8 py-3 mx-auto my-6 bg-black bg-opacity-50 border border-gray-800 rounded-full backdrop-blur-md'>
            <Image
                src={Logo}
                height={24}
                width={140}
                alt='Jet Protocol'
            />

            <div>
                <Button variant={'ghost'}>products</Button>
                <Button variant={'ghost'}>dao</Button>
                <Button variant={'ghost'}>build</Button>
                <Button variant={'ghost'}>docs</Button>
            </div>

            <Button>
                launch app
            </Button>

        </div>
    )
}

export default Navbar