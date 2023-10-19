import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName } from '../features/user/userSlice'
import './Header.css'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Recommended from './Recommended'
import Viewer from './Viewer'
import { db } from '../Firebass'
import { collection, getDocs } from 'firebase/firestore';
import { setMovies } from '../features/movie/movieSlice'

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];

  useEffect(() => {
    const Collection = collection(db, 'movies');
    const fetchData = async () => {
      const querySnapshot = await getDocs(Collection);
      querySnapshot.forEach(doc => {
        if (doc.data().type === 'new') {
          newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
        } else {
          recommend = [...recommend, { id: doc.id, ...doc.data() }]
        }
      })
      dispatch(setMovies({
        recommend: recommend,
        newDisney: newDisney
      }))
    }
    fetchData();
  }, [userName])

  return (
    <main className='HOMECONTAINER px-[calc(3.5vw+5px)] block top-[70px] overflow-x-hidden min-h-[calc(100vh-250px)] relative'>
      <ImgSlider />
      <Viewer />
      <Recommended />
      <NewDisney />
    </main>
  )
}

export default Home