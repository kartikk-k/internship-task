import React from 'react'

function Illustration() {
    return (
        <div className='relative flex flex-col items-center illustration'>
            {/* tube bar */}
            <div className='w-56 h-2 bg-black blur-lg'></div>
            {/* light spreader */}
            <div className=' ellipse'></div>
            {/* rays effect */}
            <div className='absolute top-0 flex'>
                {/* effect left */}
                <div className='ray ray-left'></div>
                {/* effect right */}
                <div className='ray ray-right'></div>

                <div className='ray-blur'></div>
            </div>
        </div>
    )
}

export default Illustration