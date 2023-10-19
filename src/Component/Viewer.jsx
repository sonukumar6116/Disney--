import React from 'react'
import './Header.css'
const Viewer = () => {
      return (
            <div className='VIEWER-CONTAINER relative mt-[50px] mb-4 px-2 grid gap-6 grid-cols-1 md:grid-cols-5'>
                  <div className='VIEWERWRAPER relative pt-[56.25%] rounded-sm overflow-hidden cursor-pointer border-[3px] border-solid border-[rgba(249,249,249,.1)]'>
                        <img className='w-full block opacity-[1] top-0 transition-[opacity] ease-in-out duration-500 absolute inset-0 object-cover z-[1]' src="/image/viewers-disney.png" alt="" />
                        <video className='VIDEO h-full w-full absolute top-0 opacity-[0] z-[0] ' autoPlay>
                              <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
                        </video>
                  </div>
                  <div className='VIEWERWRAPER relative pt-[56.25%] rounded-sm overflow-hidden cursor-pointer border-[3px] border-solid border-[rgba(249,249,249,.1)]'>
                        <img className='w-full block opacity-[1] top-0 transition-[opacity] ease-in-out duration-500 absolute inset-0 object-cover z-[1]' src="/image/viewers-marvel.png" alt="" />
                        <video className='VIDEO h-full w-full absolute top-0 opacity-[0] z-[0] ' autoPlay>
                              <source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
                        </video>
                  </div>
                  <div className='VIEWERWRAPER relative pt-[56.25%] rounded-sm overflow-hidden cursor-pointer border-[3px] border-solid border-[rgba(249,249,249,.1)]'>
                        <img className='w-full block opacity-[1] top-0 transition-[opacity] ease-in-out duration-500 absolute inset-0 object-cover z-[1]' src="/image/viewers-starwars.png" alt="" />
                        <video className='VIDEO h-full w-full absolute top-0 opacity-[0] z-[0] ' autoPlay>
                              <source src='/videos/1608229455-star-wars.mp4' type='video/mp4' />
                        </video>
                  </div>
                  <div className='VIEWERWRAPER relative pt-[56.25%] rounded-sm overflow-hidden cursor-pointer border-[3px] border-solid border-[rgba(249,249,249,.1)]'>
                        <img className='w-full block opacity-[1] top-0 transition-[opacity] ease-in-out duration-500 absolute inset-0 object-cover z-[1]' src="/image/viewers-pixar.png" alt="" />
                        <video className='VIDEO h-full w-full absolute top-0 opacity-[0] z-[0] ' autoPlay>
                              <source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
                        </video>
                  </div>
                  <div className='VIEWERWRAPER relative pt-[56.25%] rounded-sm overflow-hidden cursor-pointer border-[3px] border-solid border-[rgba(249,249,249,.1)]'>
                        <img className='w-full block opacity-[1] top-0 transition-[opacity] ease-in-out duration-500 absolute inset-0 object-cover z-[1]' src="/image/viewers-national.png" alt="" />
                        <video className='VIDEO h-full w-full absolute top-0 opacity-[0] z-[0] ' autoPlay>
                              <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4' />
                        </video>
                  </div>
            </div>
      )
}

export default Viewer