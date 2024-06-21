import React from 'react'

const Login = () => {
  return (
    <div className='h-screen text-white bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center bg-center bg-cover'>
      <div className='px-5 py-6 rounded-xl backdrop-blur-md shadow-sm shadow-white'>
        <form className='flex flex-col gap-6'>
            <h1 className='login text-center text-3xl font-bold'>Log in</h1>
            <div className='flex flex-col gap-1'>
                <label htmlFor="userName" className='text-sm'>UserName</label>
                <input type="text" id="userName" placeholder='user name' className=' pl-2 py-1 bg-black text-white text-md  border-none outline-none rounded-lg '/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input type="password" id="password" placeholder='password' className=' pl-2 py-1 bg-black text-white text-md border-none outline-none rounded-lg'/>
            </div>
            <div className='text-center'>
                <button type="submit" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 py-0.5 w-2/4 rounded-xl shadow-md hover:shadow-fuchsia-500/50'>Log in</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
