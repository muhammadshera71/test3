import { useRouter } from 'next/router'
import React from 'react'
import Index_item from '../components/Index_item';
import { getAllEvents } from '../DUMMY_DATA';

function index() {
  const router =useRouter();
  const events=getAllEvents();
  console.log(events);
  return (
   <div className='min-h-screen bg-gray-800 flex flex-col items-center justify-center gap-3'>

    {
      events.map((event)=>{
        return<Index_item event={event}/>      })
    }

   </div>
      
 )
}

export default index