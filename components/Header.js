import Image from 'next/image'
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, 
    UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

 // #40AFF5 //


function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center  my-auto'>
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#40AFF5] cursor-pointer mr-1">
            <div className="text-white font-bold text-2xl">B</div>
        </div> 
        <h1 className='text-[#40AFF5] text-lg font-bold cursor-pointer'>blueBnB</h1>
        </div>

        <div className='flex items-center md:border-2 rounded-full py-2 
         md:shadow-sm'>
            <input className=' flex-grow pl-5 bg-transparent outline-none 
            text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Comece sua busca'/>
            <SearchIcon className='h-8 bg-[#40AFF5] text-white 
            rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2'/>
            </div>

        <div className='flex items-center space-x-4 justify-end text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Seja um anfitrião</p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full '>
                <MenuIcon className='h-6 cursor-pointer'/>
                <UserCircleIcon className='h-6 cursor-pointer'/>
            </div>
        </div>
    </header>
  )
}

export default Header