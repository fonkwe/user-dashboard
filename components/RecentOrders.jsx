import React from 'react'
import { data } from '@/data/data'
import { FaShoppingBag } from 'react-icons/fa'

const RecentOrders = () => {
  return (
    <div className=' w-full rounded-lg p-4 lg:h-[70vh] h-[50vh] col-span-1 relative m-auto border overflow-scroll bg-white'>
       <h1>Recents Order</h1>
       <ul>
         {data.map((order,id) => (
            <li key={id} className=' bg-gray-100 hover:bg-gray-200 rounded-lg my-3 p-2 flex items-center cursor-pointer '>
                <div className=' bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                </div>
                <div className='pl-4'>
                    <p className=' text-gray-800 font-bold'>${order.total}</p>
                    <p className=' text-gray-400 text-sm'>{order.name.first}</p>
                </div>
                <p className=' lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
            </li>
         ))}
       </ul>
        
    </div>
  )
}

export default RecentOrders