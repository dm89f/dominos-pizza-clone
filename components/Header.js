import React from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import {TiTick} from 'react-icons/ti';
import {BsCircle} from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi'
import {MdModeEditOutline} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getAllMenuCategories } from '../features/MenuItems/menuItemsSlice'

function Header() {

  const categories = useSelector(getAllMenuCategories);


  return (
    <nav className='sticky top-0 z-50' >
      {/* top nav */}
      <div className='flex px-2 md:px-5 lg:px-10  bg-dominos-blue text-white text-sm whitespace-nowrap'>
        <div className='py-3 flex items-center lg:py-1' >
            <GiHamburgerMenu size={30} className="mr-5"  />
            <Image alt='logo' src={'/logo.svg'} width={180} height={100}/>
        </div>

        <div className='py-3  flex ml-auto items-center space-x-4 text-xs lg:py-1 '>
          <div className='hidden md:flex items-center space-x-2 pl-3 border-l border-gray-200 '>
            <BsCircle/>
            <span>Delivery</span>
          </div>
          <div className='hidden md:flex flex items-center space-x-2'>
            <TiTick  size={20}/>
            <span>Pick Up/ Dine-in</span>
          </div>

          <div className='hidden lg:flex flex items-center space-x-2 '>
            <FiMapPin size={20}/>
            <p>Hoysalanagar, Horamavu, Bengaluru</p>
            <MdModeEditOutline size={20}/>
          </div>
          <div className='flex items-center space-x-2'>
            <FaUserCircle size={25}/>
            <p className='flex flex-col'>
              <span>Dileep B C</span>
              <span>9019664884</span>
            </p>
          </div>

        </div>
      </div>     

      {/* bottom nav */}
      <div className=' flex justify-center bg-white shadow-md shadow-gray-300/50'>
        <div className='py-3 flex 2xl:justify-center w-screen overflow-x-scroll  text-gray-400  text-xs whitespace-nowrap'>

          {
            categories&&categories.map( (categ)=>(
              <span key={categ} className='mx-3'>{categ}</span>
            ) )

          }
          
        </div>
      </div>
    </nav>
  )
}

export default Header