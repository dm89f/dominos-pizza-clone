import React from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import {TiTick} from 'react-icons/ti';
import {BsCircle} from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi'
import {MdModeEditOutline} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa';



function Header() {
  return (
    <nav >
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
      <div className='overflow-x-scroll flex justify-center bg-white shadow-md shadow-gray-300/50'>
        <div className='py-3 space-x-3 text-gray-400  text-xs whitespace-nowrap'>
          <span >EVERYDAY VALUE</span>
          <span >BESTSELLERS</span>
          <span >NEW LAUNCHES</span>
          <span >VALENTINE&apos;S SPECIAL</span>
          <span >VEG PIZZA</span>
          <span >GOURMET PIZZA</span>
          <span >SPECIALITY CHICKEN</span>
          <span >NON-VEG PIZZA</span>
          <span >BEVERAGES</span>
          <span >SPECIALITY CHICKEN</span>
          <span >SIDES</span>
          <span >PIZZA MANIA</span>
          <span >LUNCH COMBOS</span>
          <span >MEAL FOR 2</span>
          <span >MEAL FOR 4</span> 
          <span >DESSERT</span>
          <span >CHEFBOSS</span>
        </div>
      </div>
    </nav>
  )
}

export default Header