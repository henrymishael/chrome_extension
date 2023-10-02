import React from 'react'
import { Logo } from '../assets/logo'

export default function Footer() {
  return (
    <div className='px-[100px] w-[100%] h-[347px] text-white bg-[#120B48] flex flex-row items-center gap-32'>
        <span>
            <Logo variant='light'/>
        </span>
        <div className='flex flex-row items-center justify-around list-none w-[100%]'>
            <span className='font2 text-[16px] font-normal flex flex-col  text-left gap-6'>
                <h3 className='font1 text-[16px] font-semibold mb-[2px] '>Menu</h3>
                <li>Home</li>
                <li>Converter</li>
                <li>How it Works</li>
            </span>
            <span className='font2 text-[16px] font-normal flex flex-col  text-left gap-6'>
                <h3 className='font1 text-[16px] font-semibold mb-[2px] '>About us</h3>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy</li>
            </span>
            <span className='font2 text-[16px] font-normal flex flex-col  text-left gap-6' >
                <h3 className='font1 text-[16px] font-semibold mb-[2px]  '>Screen Record</h3>
                <li>Browser Window</li>
                <li>Desktop</li>
                <li>Application</li>
            </span>
        </div>
    </div>
  )
}
