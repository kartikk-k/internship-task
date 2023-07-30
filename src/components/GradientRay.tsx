import React from 'react'

function GradientRay() {
    return (
        <div className='fixed top-[-50px] left-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1114" height="792" viewBox="0 0 1114 792" fill="none">
                <g opacity="0.62" filter="url(#filter0_f_226_725)">
                    <path d="M1220.51 883.154L-218 157.888L-126.844 -4.32003e-05L1220.51 883.154Z" fill="url(#paint0_linear_226_725)" />
                </g>
                <defs>
                    <filter id="filter0_f_226_725" x="-446" y="-228" width="1894.51" height="1339.15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="114" result="effect1_foregroundBlur_226_725" />
                    </filter>
                    <linearGradient id="paint0_linear_226_725" x1="1076.91" y1="905.441" x2="382.478" y2="-289.299" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109375" stopColor="#0081F7" />
                        <stop offset="0.541667" stopColor="#8451F1" />
                        <stop offset="1" stopColor="#A34BE8" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    )
}

export default GradientRay