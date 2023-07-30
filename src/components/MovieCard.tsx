import Image from 'next/image'
import React from 'react'


interface MovieCardProps {
    data: {
        title: string
        poster_path: string
    }
}

function MovieCard({ data }: MovieCardProps) {
    const [isLoading, setIsLoading] = React.useState(true)
    return (
        <div className='relative overflow-hidden border rounded-xl group'>
            <Image
                width={200}
                height={350}
                // layout='fill'
                objectFit='cover'
                className={`object-cover w-full h-[280px] ${isLoading ? 'blur-md' : 'blur-none'} duration-500`}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                onLoadingComplete={() => setIsLoading(false)}
            />

            <div className='absolute bottom-0 flex items-end w-full h-full p-3 text-sm text-white duration-200 opacity-0 card-hover group-hover:opacity-100'>
                <p>{data.title}</p>
            </div>
        </div>
    )
}

export default MovieCard