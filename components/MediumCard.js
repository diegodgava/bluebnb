import Image from 'next/image'
import React from 'react'

function MediumCard({img, title}) {
  return (
    <div className='cursor-ponter hover:scale-105 
    transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image className='rounded-xl' src ={img} fill alt='imagem'/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>

    </div>
  )
}

export default MediumCard