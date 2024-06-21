import React from 'react'

const Dashboard = () => {
  return (
    <div className='bg-white px-1 py-8 flex flex-col gap-10 sm:flex-row'>
        <div className='text-white  flex flex-col gap-8 sm:w-1/3'>
            <div className='bg-black shadow-lg shadow-black rounded-xl'>
                <img src={`https://images.pexels.com/photos/210660/pexels-photo-210660.jpeg?auto=compress&cs=tinysrgb&w=600`} alt=""/>
                <h1 className='p-4'>My Name</h1>
                <p className='text-sm p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolores sunt aliquid unde consequatur ut iusto doloribus voluptate reiciendis atque provident fugiat error, aspernatur voluptatibus! Laudantium molestiae consequatur ullam dolore.</p>
            </div>

            <div className='bg-black px-4 py-5 rounded-xl shadow-lg shadow-black'>
                <h1 className='mb-4'>Popular Posts</h1>
                <div className='pb-3 border-b-2'>
                    <h2 className='text-sm'>Lorem</h2>
                    <p className='text-sm'>Sed matts nunc</p>
                </div>
                <div className='py-3 border-b-2'>
                    <h2 className='text-sm'>Ipsum</h2>
                    <p className='text-sm'>Sed matts nunc</p>
                </div>
                <div className='py-3 border-b-2'>
                    <h2 className='text-sm'>Dorum</h2>
                    <p className='text-sm'>Sed matts nunc</p>
                </div>
                <div className='py-3 border-b-2'>
                    <h2 className='text-sm'>Mingsum</h2>
                    <p className='text-sm'>Sed matts nunc</p>
                </div>
            </div>

            <div className='bg-black p-4 rounded-xl shadow-lg shadow-black'>
                <h1 className='mb-8'>Tags</h1>
                <div className='text-black flex flex-wrap gap-2 gap-y-4'>
                    <label className='bg-white px-1.5 text-sm font-semibold'>Travel</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>New York</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>Paris</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>Sports</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>News</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>Games</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>Norway</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>Family</label>
                    <label className='bg-white px-1.5 text-sm font-semibold'>Baby</label>
                </div>
            </div>
        </div>

        <div className=' bg-black text-white h-full rounded-xl shadow-xl shadow-black order-first sm:w-2/3 sm:order-last'>
            <img src={`https://images.pexels.com/photos/3746005/pexels-photo-3746005.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" width="100%"/>
            <div className='p-4'>
                <h1 className='uppercase mb-4 text-lg font-semibold'>Title Heading</h1>
                <div className='mb-4'>
                    <label className='text-md font-medium'>Title description,</label>
                    <label className='text-md font-light'> June 20 2024 </label>
                </div>
                <p className='mb-10 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem molestiae porro autem optio accusamus quos soluta iusto, delectus quod maxime asperiores ratione exercitationem consequatur ab? Ex, nobis qui quam placeat voluptatibus doloribus! Veniam dicta voluptates molestiae aspernatur vel, voluptas iusto optio accusantium sit! Ipsum dicta iure non fuga cum?</p>
                <div className='px-8 flex flex-wrap justify-between'>
                    <p className='whitespace-nowrap'>Read more <label><i className="fa-solid fa-arrow-right"></i></label></p>
                    <div className='flex gap-5'>
                        <p>Comments</p>
                        <label className='text-black bg-white px-1.5 font-bold'>0</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
