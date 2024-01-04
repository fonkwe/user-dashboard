import React from 'react'
import Link from 'next/link'
import { RxDashboard, RxSketchLogo, RxPerson,  } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { Image } from 'next/image'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className=' fixed w-20 h-screen p-4 justify-between flex flex-col bg-white border-r-[1px]'>
            <div className='flex flex-col items-center'>
                <Link href="/">
                  <div className='bg-purple-600 text-white p-3 rounded-lg inline-block'>
                    <RxSketchLogo size={20} />
                  </div>
                </Link>
               <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
               <Link href="/">
                  <div className='bg-gray-200 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <RxDashboard size={20} />
                  </div>
                </Link>
                <Link href="/customers">
                  <div className='bg-gray-200 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <RxPerson size={20} />
                  </div>
                </Link>
                <Link href="/orders">
                  <div className='bg-gray-200 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <HiOutlineShoppingBag size={20} />
                  </div>
                </Link>
                <Link href="/">
                  <div className='bg-gray-200 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <FiSettings size={20} />
                  </div>
                </Link>
            </div>

        </div>

        <main className=' ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar