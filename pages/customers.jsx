import React from 'react'
import {BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data'

const customers = () => {
  return (
    <div className=' min-h-screen bg-[#34c0eb]'>
        <div className='flex justify-between px-4 pt-4'>
            <h2 className=' text-2xl font-bold'>Customers</h2>
            <h2 className=' font-bold'>Welcome Back, Admin</h2>
        </div>
        <div className='p-4'>
            <div className=' m-auto w-full p-4 overflow-y-auto bg-white border rounded-lg'>
                <div className=' p-2 grid md:grid-cols-4 my-3 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer' >
                    <span>Name</span>
                    <span className=' sm:text-left text-right '>Email</span>
                    <span className=' hidden md:grid'>Last Order</span>
                    <span className=' hidden sm:grid'>Method</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <li key={id} className=' grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 my-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 justify-between items-center cursor-pointer'>
                            <div className='flex items-center'>
                                <div className='bg-purple-100 p-3 rounded-lg'>
                                  <BsPersonFill className='text-purple-800' />
                                </div>
                                <p className='pl-4'>{order.name.first + ' ' + order.name.second}</p>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                            <p className='hidden md:flex'>{order.date}</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>{order.method}</p>
                                <BsThreeDotsVertical /> 
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
            
        </div>
    </div>
  )
}

export default customers