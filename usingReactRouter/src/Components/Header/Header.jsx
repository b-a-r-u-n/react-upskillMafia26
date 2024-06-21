import React, { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../../Image/logo.png'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  const menuListRef = useRef(null);
  const showMenuref = useRef(null);
  const hideMenuref = useRef(null);

  const [width, setwidth] = useState(false);
  

  // Function to check window width and update state
  const findWidth = useCallback(() => {
    console.log(window.innerWidth);
    if(window.innerWidth < 640)
      setwidth(true);
    else
      setwidth(false);
  },[window.innerWidth])


  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', findWidth);
    // Call findWidth initially to set the state
    findWidth();
  },[window.innerWidth])


  // Function to toggle menu visibility
  const clickHandler = () => {
    console.log("Hello");
    menuListRef.current.classList.toggle('hidden');
    showMenuref.current.classList.toggle('hidden');
    hideMenuref.current.classList.toggle('hidden');
  }



  const check = () => {
    if(width == true){
      clickHandler();
    }
    else{
      return;
    }
      
  }

  return (
    <div className='sticky top-0 z-50'>
      <nav className='h-14 px-8 bg-gray-700 flex justify-between items-center  sm:px-16'>
        <Link to="/Dashboard">
          <div className="logo h-10 w-36 bg-center"
              style={{backgroundImage: `url(${logo})`}}
          ></div>
        </Link>

        <div ref={menuListRef} className='py-6 absolute top-14 left-0 right-0 w-full bg-gray-700 flex flex-col items-center gap-4 hidden sm:static sm:bg-transparent sm:inline-block'>
            <ul className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
                <li className='text-white text-lg font-bold' >
                  <NavLink to="/" className={({isActive}) => 
                  `${isActive ? "text-orange-500" : "text-white"}`} 
                  onClick={check}
                  >
                    Home
                  </NavLink>
                </li>
            </ul>

            <div className='flex flex-col gap-4 sm:hidden'>
                <button onClick={clickHandler} className='bg-green-700 px-3 py-1 font-bold rounded-lg whitespace-nowrap'>
                  <NavLink to="/Login" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>Log in </NavLink>
                </button>
                <button onClick={clickHandler} className='bg-green-700 px-3 py-1 font-bold rounded-lg whitespace-nowrap'>
                  <NavLink to="/Signup" className={({isActive})=> `${isActive ? "text-orange-500" : "text-white"}`}> Sign up </NavLink>
                </button>
            </div>
        </div>

        <div className='hidden text-white sm:block sm:flex gap-8'>
          <NavLink to="/Login" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>
            <button className='bg-green-700 px-3 py-1 font-bold rounded-lg whitespace-nowrap'>
              Log in
            </button>
          </NavLink>
          <NavLink to="/Signup" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>
            <button className='bg-green-700 px-3 py-1 font-bold rounded-lg whitespace-nowrap'>
              Sign up
            </button>
          </NavLink>
        </div>

        <div ref={showMenuref} className='absolute right-8 sm:hidden' onClick={clickHandler}>
          <i className="fa-solid fa-bars text-2xl"></i>
        </div>

        <div ref={hideMenuref} className='absolute right-8 hidden' onClick={clickHandler}>
          <i className="fa-solid fa-xmark text-2xl"></i>
        </div>
      </nav>
    </div>
  )
}

export default Header
