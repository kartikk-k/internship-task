"use client"

import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Loader2Icon, PopcornIcon } from 'lucide-react'
import Link from 'next/link'
import GradientRay from '@/components/GradientRay'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import MovieCard from '@/components/MovieCard'


const movies = [
    {
        "adult": false,
        "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 298618,
        "original_language": "en",
        "original_title": "The Flash",
        "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        "popularity": 4631.142,
        "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        "release_date": "2023-06-13",
        "title": "The Flash",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 1773
    }
]

const Movies = () => {
    const { isAuthenticated } = useContext(AuthContext)

    // get movies using api from TMDB
    // const fetchMovies = async (page: number) => {

    //     await new Promise((resolve) => setTimeout(resolve, 1000))
    //     return movies.slice((page - 1) * 2, page * 2)
    // }

    const fetchMovies = async (page: number) => {
        console.log(page)
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTcyOTAxYWEzOWMzYTBiNjY1YjVmNjM3OTA4ZmZjZSIsInN1YiI6IjY0YzY1OWFhY2FkYjZiMDEyNTcwMTY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9Jewv6QapestLYNHon7ZP7-y4duXOcPmKflDQG_1lM'
            }
        })

        const data = await response.json()
        // console.log(data.results)
        return data.results.slice(0, 18)
    }

    // use react-query to fetch movies
    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['moviesData'],
        async ({ pageParam = 1 }) => {
            const response = await fetchMovies(pageParam)
            console.log(response)
            return response
        }, {
        getNextPageParam: (_, pages) => {
            return pages.length + 1
        },
        initialData: {
            pages: [movies.slice(0, 2)],
            pageParams: [1]
        }
    }
    )


    return (
        <div className='min-h-screen text-gray-700 bg-white'>
            <GradientRay />
            {/* when checking if account is logged in */}
            {isAuthenticated === undefined ? (
                <div className='relative screen-center'>
                    <Loader2Icon size={20} className='animate-spin' />
                    <div>Checking for authentication</div>
                </div>

            ) : isAuthenticated === false ? (
                <div className='relative screen-center'>
                    <PopcornIcon size={20} className='-rotate-6' />
                    <div>
                        Please <Link href={'/account/login'}>login</Link> to continue.
                    </div>
                </div>
            ) : (

                // main content if the user is logged in
                <div className='relative pb-10'>
                    {data?.pages.map((page, i) => (

                        <div key={i} className='grid grid-cols-2 gap-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>

                            {page.map((movie: any) => (
                                <MovieCard key={movie.id} data={movie} />
                            ))}

                        </div>
                    ))}

                    <button
                        disabled={isFetchingNextPage}
                        className='block px-4 py-2 mx-auto text-white bg-gray-600 border disabled:opacity-60 rounded-xl'
                        onClick={() => fetchNextPage()}
                    >Load more</button>
                </div>
            )}



        </div>
    )
}

export default Movies