import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectRecommend } from '../features/movie/movieSlice'

const Recommended = () => {
      const movies = useSelector(selectRecommend)
      return (
            <div className='m-2'>
                  <h4 className='p-1 text-[20px] font-semibold shadow-2xl'>Recommended For You</h4>
                  <div className='grid gap-8 grid-cols-2 md:grid-cols-4 p-[6px]'>
                        {movies && movies.map((movie, key) => (
                              <div key={key} className='WRAPPER pt-[56.25%] relative rounded-md cursor-pointer overflow-hidden transition-all duration-300 ease-in-out border-[3px] border-solid border-[rgba(249,249,249,.1)]'>
                                    <Link to={`/detail/`+movie.id}>
                                          <img className='inset-0 block h-full object-cover absolute opacity-[1] w-full top-0 z-[1]' src={movie.cardImg} alt={movie.title} />
                                    </Link>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Recommended