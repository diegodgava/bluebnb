import Image from 'next/image'
import React from 'react'
import banner from '../imagens/banner.jpg'
import banner2 from '../imagens/banner2.jpg'



function Banner() {
    return (
        <div className="relative h-[18.75rem] sm:h-[31.25rem] lg:h-[31.25rem] xl:h-[33.5rem] overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover bg-center"
          src={banner}
          alt="Banner"
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className=' text-sm sm:text-lg font-bold'>Não sabe para onde vai? Que emocionante!</p>
            <button className='text-[#A8650E] bg-white px-10 
            py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Encontre um destino</button>
        </div>
      </div>
      
    );
  }
  
  

export default Banner 