"use client"
import { WorkspaceMenu } from '@/services/Options'
import { CirclePlus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {
    const path = usePathname();
  return (
    <div className='h-screen shadow-sm p-2 bg-orange-100'>
        <div className='flex flex-col items-center cursor-pointer mb-5'>
            <CirclePlus className='bg-orange-300 text-white rounded-full h-8 w-8'/>
            <h1 className='text-orange-400'>Create</h1>
        </div>
      {
        WorkspaceMenu.map((menu,index)=>(
           <div key ={index} className={`p-1 cursor-pointer flex items-center flex-col  mb-4 group hover:bg-amber-500 rounded-lg ${menu.path==path && 'bg-orange-500'}`} >
            <menu.icon className={`group-hover:text-orange-700 ${menu.path==path && 'bg-orange-500'}`}/>
            <h2 className={`group-hover:text-orange-700 ${menu.path==path && 'bg-orange-500'}`}>{menu.name}</h2>
            </div>
        ))
      }
    </div>
  )
}

export default Sidebar
