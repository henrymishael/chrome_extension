import React from 'react'
import { Logo } from '../assets/logo'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='bg-white px-[100px] flex flex-row items-center   h-[87px] border-b-[1px] justify-between border-solid border-gray-200 '>
        <div>
            <Logo variant='dark'/>
        </div>
        <div className='font2 flex flex-row text-[16px] gap-[39px] font-medium'>
            <p>Features</p>
            <p>How It Works</p>
        </div>
        <div className='cursor-pointer font1 text-[18px] font-semibold text-[#120b48]'>
          <Link href='../Account/signup'>
            <p>Get Started</p>
          </Link>
        </div>
    </div>
  )
}
