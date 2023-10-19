import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectUserEmail, selectUserPhoto, selectUserName, setUserLoginDetails, setSingOutState } from "../features/user/userSlice"
import { auth, provider } from '../Firebass';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto)

  const handleAuth = (e) => {
    e.preventDefault();
    if (userName) {
      signOut().then(() => {
        dispatch(setSingOutState());
        navigate('/');
      }).catch(err => {
        alert(err.message);
      })
    } else {
      signInWithPopup(auth, provider).then((result) => {
        setUser(result.user);
        console.log(result);
      }).catch(err => {
        alert(err.message)
      })
    }
  }

  const setUser = user => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUser(user);
        navigate('/home');
      }
    })
  }, [userName])


  return (
    <nav className='w-full fixed top-0 left-0 h-[70px] bg-[#090b13] flex justify-between items-center px-[36px] z-[3] tracking-widest'>

      <a className='w-[80px] mt-2 max-h-[70px] inline-block' href=''>
        <img className='block w-full' src="/image/logo.svg" alt="" />
      </a>

      {userName ?
        <>
          <div className='NAVMENU items-center flex-nowrap h-full justify-center relative hidden md:flex'>
            <a href="/home" className='SLIDER flex items-center justify-center px-3'>
              <img className='h-[20px] min-w-[20px] w-[20px]' src="/image/home-icon.svg" alt="HOME" />
              <span className='SPAN text-[rgb(249,249,249] text-base tracking-[1.5px] leading-[1.5] py-0.5 relative'>HOME</span>
            </a>
            <a href="/search" className='SLIDER flex items-center justify-center px-3'>
              <img className='h-[20px] min-w-[20px] w-[20px]' src="/image/search-icon.svg" alt="HOME" />
              <span className='SPAN text-[rgb(249,249,249] text-base tracking-[1.5px] leading-[1.5] py-0.5 relative'>SEARCH</span>
            </a>
            <a href="/watchlist" className='SLIDER flex items-center justify-center px-3'>
              <img className='h-[20px] min-w-[20px] w-[20px]' src="/image/watchlist-icon.svg" alt="HOME" />
              <span className='SPAN text-[rgb(249,249,249] text-base tracking-[1.5px] leading-[1.5] py-0.5 relative'>WATCHLIST</span>
            </a>
            <a href="/originals" className='SLIDER flex items-center justify-center px-3'>
              <img className='h-[20px] min-w-[20px] w-[20px]' src="/image/original-icon.svg" alt="HOME" />
              <span className='SPAN text-[rgb(249,249,249] text-base tracking-[1.5px] leading-[1.5] py-0.5 relative'>ORIGINALS</span>
            </a>
            <a href="/movies" className='SLIDER flex items-center justify-center px-3'>
              <img className='h-[20px] min-w-[20px] w-[20px]' src="/image/movie-icon.svg" alt="HOME" />
              <span className='SPAN text-[rgb(249,249,249] text-base tracking-[1.5px] leading-[1.5] py-0.5 relative'>MOVIES</span>
            </a>
            <a href="/series" className='SLIDER flex items-center justify-center px-3'>
              <img className='h-[20px] min-w-[20px] w-[20px]' src="/image/series-icon.svg" alt="HOME" />
              <span className='SPAN text-[rgb(249,249,249] text-base tracking-[1.5px] leading-[1.5] py-0.5 relative'>SERIEAS</span>
            </a>
          </div>
          <div className='SIGNOUT relative flex cursor-pointer items-center justify-center' style={{ height: "60px", width: "60px" }} >
            <img className='SIGNOUT h-8 w-8 rounded-full' src={userPhoto} alt={userName} />
            <p onClick={handleAuth} className='DROPDOWN p-3 absolute top-12 right-0 bg-[rgb(19,19,19)] border-[1px] border-solid border-[rgba(151,151,151,0.34)] rounded-lg shadow-md text-xs opacity-0'>
              SignOut
            </p>
          </div>
        </>
        :
        <a onClick={handleAuth} className='LOGIN bg-[rgb(0,0,0,.5)] py-1 px-4 border-[1px] border-solid border-[#f9f9f9] rounded-[4px] transition-all ease duration-200 hover:bg-[#f9f9f9] hover:text-[#000] hover:border-transparent' href=''>
          Log In
        </a>
      }
    </nav>
  )
}

export default Header