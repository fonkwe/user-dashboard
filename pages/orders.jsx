import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { data } from '@/data/data'

const orders = () => {
  return (
    <div className=' min-h-screen bg-gray-200'>
        <div className='flex justify-between px-4 pt-4'>
            <h2 className=' text-2xl font-bold'>Orders</h2>
            <h2 className=' font-bold'>Welcome Back, Admin</h2>
        </div>
        <div className='p-4'>
            <div className=' m-auto w-full p-4 overflow-y-auto bg-white border rounded-lg'>
                <div className=' p-2 grid md:grid-cols-4 my-3 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer' >
                    <span>Order</span>
                    <span className=' sm:text-left text-right '>Status</span>
                    <span className=' hidden md:grid'>Last Order</span>
                    <span className=' hidden sm:grid'>Method</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <li key={id} className=' grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 my-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 justify-between items-center cursor-pointer'>
                            <div className='flex items-center'>
                                <div className='bg-purple-100 p-3 rounded-lg'>
                                  <FaShoppingBag className='text-purple-800' />
                                </div>
                                <div className='pl-4'>
                                   <p className='text-gray-800 font-bold'>${order.total.toLocaleString()}</p>
                                   <p className='text-gray-800 text-sm'>{order.name.first}</p>
                                </div>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>
                               <span className={
                                  order.status == 'On Hold' ? 'bg-green-200 p-2 rounded-lg' : order.status == 'Completed' ? 'bg-blue-200 p-2 rounded-lg' : 'bg-yellow-200 p-2 rounded-lg'
                               }>{order.status}</span> 
                            </p>
                            <p className='hidden md:flex'>{order.date}</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>{order.method}</p> 
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </div>

  )
}

export default orders