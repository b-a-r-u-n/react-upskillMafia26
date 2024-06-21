import React from 'react'

const Signup = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex items-center justify-center bg-center bg-cover'>
      <div className='px-8 py-6 rounded-xl backdrop-blur-md shadow-sm shadow-white'>
        <form className='flex flex-col gap-6'>
            <h1 className='login text-center text-3xl font-bold'>Sign Up</h1>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='text-sm'>Name</label>
                <input type="text" id="name" placeholder='name' className=' pl-2 py-1 bg-black text-white text-md  border-none outline-none rounded-lg '/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-sm'>Email</label>
                <input type="email" id="email" placeholder='abc@gmail.com' className=' pl-2 py-1 bg-black text-white text-md  border-none outline-none rounded-lg '/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input type="password" id="password" placeholder='password' className=' pl-2 py-1 bg-black text-white text-md border-none outline-none rounded-lg'/>
            </div>
            <div className='text-center'>
                <button type="submit" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 py-0.5 w-2/4 rounded-xl'>Sign Up</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
