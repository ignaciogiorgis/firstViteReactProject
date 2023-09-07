import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center'>
      <div className='border-4 border-gray-800 p-10'>
        <h2 className='text-left text-xl pb-10 uppercase'>Entry Form</h2>
          <form action="">
            <div className='flex flex-col py-2'>
              <label className='text-left' htmlFor="">Name</label>
              <input className='rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 ' type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label className='text-left' htmlFor="">Lastname</label>
              <input className='rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 ' type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label className='text-left' htmlFor="">Phone</label>
              <input className='rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 ' type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label className='text-left' htmlFor="">Car</label>
              <input className='rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 ' type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label className='text-left' htmlFor="">Service</label>
              <input className='rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 ' type="text" />
          </div>
          <div>
              <input className='rounded-md p-2 mt-6 border-2 border-solid  border-gray-800 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer' type="submit" />
          </div>
          </form>
       </div>
    </div>
  )
}

export default Form
