import React, { useEffect, useState,  } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebass'
import './Header.css'
import RingLoader from "react-spinners/ClipLoader";

const Detail = () => {
      const { id } = useParams();
      const [detail, setdetail] = useState(null)

      useEffect(() => {
            const Collection = collection(db, 'movies');
            const init = async () => {
                  try {
                        const querySnapshot = await getDocs(Collection);
                        querySnapshot.forEach(doc => {
                              if (doc.id === id) {
                                    setdetail(doc.data());
                              }
                        })
                  } catch (error) {
                        console.log("err");
                  }
            }
            init();
      }, [])


      return (
            <>{detail ?
                  <div className='DETAILONTAINER relative min-h-[calc(100vh-250px)] block top-[72px] px-[calc(3.5vw+5px)]'>
                        <div className='BACKGROUND fixed left-0  top-0 right-0 z-[-1] '>
                              <img className='md:w-[100vw] h-[100vh]' src={detail.backgroundImg} alt={detail.title} />
                        </div>
                        <div className='IMAGETITLE flex items-[flex-end] justify-[flex-start] min-h-[170px] pt-6 w-full'>
                              <img className='max-w-[600px] min-w-[200px] w-[35vw]' src={detail.titleImg} alt={detail.title} />
                        </div>
                        <div className='max-w-[874px] '>
                              <div className='CONTROLS flex items-center flex-row flex-nowrap my-6 min-h-[56px]'>
                                    <button className=' hover:bg-[rgb(198,198,198)] text-[12px] md:text-[15px]  mr-[10px] md:mr-6 px-3 md:px-6 h-[45px] md:h-[56px] rounded-sm items-center cursor-pointer flex justify-center tracking-wide text-center uppercase none bg-[rgba(249,249,249,.9)]'>
                                          <img className='md:w-8 w-6' src="/image/play-icon-black.png" alt="" />
                                          <span className='text-black font-semibold'>Play</span>
                                    </button>
                                    <button className='hover:bg-[rgb(198,198,198)] text-[rgb(249,249,249)] text-[12px] md:text-[15px]  mr-[10px] md:mr-6 px-3 md:px-6 h-[45px] md:h-[56px] rounded-sm items-center cursor-pointer flex justify-center tracking-wide text-center uppercase none bg-[rgba(0,0,0,.3)] border-[1px] border-solid border-[rgb(249,249,249)]'>
                                          <img src="/image/play-icon-white.png" alt="" />
                                          <span>Trailer</span>
                                    </button>
                                    <div className='ADD cursor-pointer rounded-full w-11 mr-4 h-11 flex justify-center items-center bg-[rgba(0,0,0,0.4)] border-[2px] border-solid border-[rgb(249,249,249)] transition-all ease-in-out duration-300'>
                                          <span className='bg-[rgb(249,249,249)] inline-block h-[3px] w-5 '></span>
                                          <span className='bg-[rgb(249,249,249)] inline-block h-5 w-[3px] translate-x-[-11px]'></span>
                                    </div>
                                    <div className='cursor-pointer rounded-full w-11 mr-4 h-11 flex justify-center items-center bg-[rgba(0,0,0,0.4)] border-[2px] border-solid border-[rgb(249,249,249)] hover:scale-110 transition-all ease-in-out duration-200'>
                                          <div className='w-10 h-10 bg-black rounded-full'>
                                                <img className='w-full' src="/image/group-icon.png" alt="" />
                                          </div>
                                    </div>
                              </div>
                              <div className='SUBTITLE tracking-wider text-[rgb(249,249,249)] text-[12px] md:text-[15px] min-h-4 mb-1 '>
                                    {detail.subTitle}
                              </div>
                              <div className='DESCRIPTION leading-2 tracking-wider md:text-[20px] py-4 text-[rgb(249,249,249)]'>
                                    {detail.description}
                              </div>
                        </div>
                  </div> :
                  <div className='HOMECONTAINER w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
                        <p className='mb-4 leading-3 tracking-wider'>Please Wait We Loading for you.....</p>
                        <RingLoader
                              color="white"
                              size={150}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                        />
                  </div>
            }
            </>
      )
}

export default Detail