import React, {useRef, useState} from 'react'

import { 
  TfiAngleRight, 
  TfiAngleLeft 
} from 'react-icons/tfi'

export function SliderContainer({height, children}) {

  const [translateX, setTranslateX] = useState(0);
  let ulContainer = useRef("");
  let ul = useRef("")


  const handleRightArrowClick = ()=>{

    if( ( ul.current.offsetWidth - ulContainer.current.offsetWidth ) > -translateX )
      setTranslateX(translateX-100);
    else{

    }

  }

  const handleLeftArrowClick = ()=>{
    
    if(translateX >= 0) return;
    setTranslateX(translateX+100);

  }


  return (
    <div className='border-2 flex items-center'>
            <div className='shadow-lg rounded-full p-3 border-2'
              onClick={handleLeftArrowClick}
            ><TfiAngleLeft size={15}/></div>
              <div ref={ulContainer} style={{height}} className='relative overflow-hidden grow p-2'>
                <ul ref={ul}  style={{ transition:'transform .2s ease', transform:`translateX(${translateX}px)`}} className='absolute top-3 left-0 w-auto flex border-dominos-blue space-x-5'>
                  {children}
                </ul>
              </div>
            <div className='shadow-lg rounded-full p-3 border-2'
              onClick={handleRightArrowClick}
            ><TfiAngleRight size={15}/></div>
    </div>
         
  )
}


export function SliderDivContainer({children,active, handleClick}){

  return  (
  <li onClick={handleClick}>
    <div id='slider-div-container'  className={`py-2 px-2 border-2 ${active?' border-green-600 text-white ':''}`}>
      {children}
    </div>
  </li>
)

}