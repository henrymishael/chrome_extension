import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({text, variant, type, onClick, onChange, style}) => {
    

    switch(variant) {
        case 'primary':
            style = 'flex flex-row items-center justify-center gap-3 bg-[#120b48] text-white rounded-[8px] w-[239px] h-[65px] text-[18px] font-semibold font2 '
             ;
            break;
        case 'primary-long':
            style = 'bg-[#120b48] text-white rounded-[8px] w-[475px] h-[53px] text-[18px] font-semibold font2 '
            break;
        case 'secondary-long':
            style = 'bg-[#120b48] text-white rounded-[8px] w-[252px] h-[51px] text-[18px] font-semibold font2 '
            break;
        case 'accent':
            colour = 'bg-[#083e9e] text-white'
            border = 'rounded-tr-[8px] rounded-tl-[8px] rounded-br-[8px] sm:h-[49px] xsm:h-[40px] md:w-[368px] xsm:w-[250px] sm:w-[358px] sm:text-[14px] md:text-[18px] xsm:text-[10px]';
            break;
        default:
            style = null;
            break;

    }

    return(
        (variant === 'primary'?
        (
            <button className={` ${style}`} variant={variant}>
                {text}
                <GoArrowRight/>
            </button>
        ):
        (<button type={type} onClick={onClick} onChange={onChange} className={` ${style}`}>{text}</button> ) 
       
    ))

}
export default Button
