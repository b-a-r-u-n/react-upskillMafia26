import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className='bg-gray-700 py-8 flex flex-col gap-6 justify-between items-center sm:h-16 sm:px-16  sm:flex-row'>
            <p className='text-sm text-white order-last sm:order-first'>
                2024 All rights reserved.
            </p>
            <Link to="/Signup">
              <button className='bg-gray-300 text-sm text-black py-1 px-3 rounded-md'>Register for Free</button>
            </Link>
        </footer>
    </>
  )
}

export default Footer
