import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center'>
      <div>
        <h2 className='text-left text-xl pb-10'>Entry Form</h2>
          <form action="">
            <div className='flex flex-col py-2'>
              <label htmlFor="">Name</label>
              <input className=' border-2 border-black mt-' type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label htmlFor="">Lastname</label>
              <input type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label htmlFor="">Phone</label>
              <input type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label htmlFor="">Car</label>
              <input type="text" />
          </div>
          <div className='flex flex-col py-2'>
              <label htmlFor="">Service</label>
              <input type="text" />
          </div>
          </form>
       </div>
    </div>
  )
}

export default Form
