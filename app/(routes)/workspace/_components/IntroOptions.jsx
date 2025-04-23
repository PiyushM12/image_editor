import { canvasSizeOptions } from '@/services/Options'
import Image from 'next/image'
import React from 'react'

function IntroOptions() {
  return (
    <div>
    <div className='relative'>
      <Image src={'/banner-home.png'} alt='banner' width={1800} height={300} className='w-full h-[240px] rounded-2xl object-cover' />
      <h2 className='text-3xl absolute bottom-5 text-white left-10'> WorkSpace</h2>

      
    </div>
    <div className='flex gap-6 items-center justify-center mt-2'>
        {canvasSizeOptions.map((option,index)=>(
            <div key={index} className='flex  flex-col items-center'>
                <Image src={option.icon} alt={option.name} width={60} height={60} className='hover:scale-105 translate-all' />
                <h2 className='text-xs mt-2'>{option.name}</h2>
            </div>
            
        ))}
      </div>
    </div>
  )
}

export default IntroOptions
