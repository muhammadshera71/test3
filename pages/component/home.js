import React from 'react'

function home() {
  return (
    <div className='bg-slate-400 min-h-screen'>
        <div className='bg-blue-700 flex gap-3 px-3 py-2 justify-between'>
        <h4 className="text-3xl font-bold text-white px-2 py-1 pl-48 ">Facebook </h4>
        <form className='flex gap-4'>
        <input
              type="text"
              placeholder='Username'
              className='outline-none border border-gray-600 rounded-sm py-1 px-5 '
              />
            <input
              type="password"
              placeholder='Password'
              className='outline-none border border-gray-600 rounded-sm py-1 px-5'
              />
             <button
            type='submit'
            className='bg-gray-400 text-white py-1 rounded-sm px-5 p-4 hover:bg-blue-300'
            
            
            >LOGIN</button>
            </form>
        </div>
        <div className=' px-6 py-4 '>
        
       <div className=' flex justify-around'>
        
        <img src='/asset/capture.png'
        className='w-[750px] h-[350px] px-12 py-12 ml-14'
        />
        
        
        
        <form className='flex flex-col gap-2 self-center mr-64'>  
        <h4 className="text-3xl font-bold self-center ">Register </h4>
            <input
              type="text"
              placeholder='Name'
              className='outline-none border border-gray-600 rounded-sm py-1 px-5'
            />
             <input
              type="text"
              placeholder='Username'
              className='outline-none border border-gray-600 rounded-sm py-1 px-5'
            />

            <input
              type="password"
              placeholder='Password'
              className='outline-none border border-gray-600 rounded-sm py-1 px-5'
            />
            <button
            type='submit'
            className='bg-blue-500 text-white py-1 rounded-md px-5 self-center hover:bg-blue-300'>Sign up</button></form></div>
            </div></div>
       
   
  )
}

export default home