import React from 'react'
import logo from '../../../public/images/dark.svg'
import logo2 from '../../../public/images/white.svg'
import Image from 'next/image'

export const Logo = ({variant}) => {

  let style;
  let image;

  switch(variant){
    case 'dark':
      style = ' flex flex-row items-center gap-2 text-[16px] font-bold text-[#100a42]'
      image = logo;
      break;
    case 'light':
      style = ' flex flex-row items-center gap-2 text-[16px] font-bold text-white'
      image = logo2
  }

  return (
 
    <div variant = {variant} className={`${style}`}>
        <Image src={image} width='40' height='40' alt='logo'/>
        <h2 className=''>HelpMeOut</h2>
    </div>
  )
  
}
