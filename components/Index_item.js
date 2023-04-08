import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';

function Index_item({event}) {
    const router = useRouter();
  return (
    <div className='min-h-screen bg-gray-400 flex flex-col items-center justify-center'>    <div className='w-[60%] h-[200px] rounded-md flex '>
    
    <img
      src={event.image}
        className='w-[150px] h-[100%]'
    ></img>
    <div className='p-5'
    >
      <h2 className='font-bold text-lg'>{event.title}</h2>
      <h3 className='font-bold'>{event.date}</h3>
      <p className='text-black'>{event.location}</p>
      <div className='flex items-end  justify-end mt-3'>
        <button className='bg-green-500 text-lg text-white rounded-md py-1'
        onClick={()=>router.push('/event/'+ event.id)}
        >Explore evemt</button>
      </div>
    </div>
    </div>
    
    
          </div>
  )
}

export default Index_item