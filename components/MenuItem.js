import React from 'react'
import Image from 'next/image'
import{AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'


function MenuItem({item}) {

  const {
    _id, 
    title, 
    description, 
    canCustomize,
    category, 
    image, 
    isPizza, 
    isVeg, 
    price,
    totalOrders,

  } = item;

  console.log(item);

  return (
    <div className='bg-white shadow-lg m-2'>  
      <div  className='h-48 relative'>
        <span className='absolute z-10 top-2 left-2'>
          <Image alt='meal type'  src={`${isVeg?"/veg.svg":"./non_veg.svg"}`} width={20} height={20} />
        </span>
        <span className='absolute z-10 top-2 right-2'><AiFillHeart color='red' size={25}/></span>
        <span className='absolute z-10 px-1 font-bold bottom-2 left-2 text-xl text-white bg-gray-600/[.6]'>₹ {" "}</span>
        {
          canCustomize && <span className='absolute bottom-2 right-2 z-10 whitespace-nowrap text-xs flex items-center bg-white rounded p-1' >Customize {" "} <AiOutlineArrowRight className='mx-2 text-green-600' /></span>
        }
        
        <Image src={image} sizes="100%" alt={title} fill/>
      </div>
      <div className='text-sm p-2'>
        
        <h3 className='font-bold py-2'>{title}</h3>
        
        <p className='text-gray-500 py-2 '>
          {description}
        </p>

          {
            isPizza&&<div className='flex space-x-2 py-5 border-y '>
            <div className='grow flex flex-col'>
              <label className='text-gray-500' htmlFor="size" >Size</label>
              <select className='p-1 rounded-sm' name="size" id="size">
                <option value="Regular">Regular</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className='grow flex flex-col'>
              <label className='text-gray-500' htmlFor="size" >Crust</label>
                <select className='p-1 rounded-sm' name="size" id="size">
                  <option value="Classic Hand tossed">Classic Hand tossed</option>
                  <option value="Fresh Pan Pizza">Medium</option>
                  <option value="Cheese Burst">Cheese Burst</option>
                </select>
            </div>
          </div>
          }
        

       <div className='flex mt-4'>
        <button className='ml-auto border-2 px-3 py-1 text-md rounded-md text-green-700 border-green-600 hover:bg-green-600 hover:text-white'>
            ADD TO CART
        </button>
       </div>
      </div>
    </div>
  )
}



export default MenuItem