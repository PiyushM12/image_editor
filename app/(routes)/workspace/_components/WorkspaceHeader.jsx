import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='p-3 px-5 flex justify-between items-center shadow-sm'>
        <div className='flex gap-2 items-center'>
        <Image src="/logo.png" alt='logo' width ={100} height={100}  className='w-[70px] h-[70px]'/>
        <h1 className='font-bold text-3xl'>Snap<span className='text-orange-400 text-4xl'>F</span>orge{"/>"}</h1>
        </div>
      
      <UserButton/>
    </div>
  )
}

export default WorkspaceHeader
