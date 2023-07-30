import React from 'react'
import Image from 'next/image'
import GoogleIcon from '../../../public/media/brand-logos/Google.svg'
import supabaseClient from '../../../config/supabaseClient'
import GradientRay from '@/components/GradientRay'

function Login() {

    const handleLogin = async () => {
        const res = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: "http://localhost:3000/movies"
            }
        })
    }

    return (
        <div className='flex items-center justify-center w-screen h-screen bg-white'>
            <GradientRay />

            <div className='relative'>
                <button onClick={() => handleLogin()} className='flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg'>
                    <Image src={GoogleIcon} alt='Login with google' className='w-6' />
                    Login with Google
                </button>
            </div>

        </div>
    )
}

export default Login