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
      <div className='flex px-10  bg-dominos-blue text-white text-sm '>
        <div className='py-1 flex items-center' >
            <GiHamburgerMenu size={30} className="mr-5"  />
            <Image src={'/logo.svg'} width={180} height={100}/>
        </div>
        <div className='py-1 flex ml-auto items-center space-x-4 '>
          <div className='flex items-center space-x-2 pl-3 border-l border-gray-200 '>
            <BsCircle/>
            <span>Delivery</span>
          </div>
          <div className='flex items-center space-x-2'>
            <TiTick  size={20}/>
            <span>Pick Up/ Dine-in</span>
          </div>

          <div className='flex items-center space-x-2 '>
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
      <div className='flex text-gray-400 bg-white shadow-md shadow-gray-300/50 text-xs space-x-5 items-center justify-center'>
        <p className='py-2' >EVERYDAY VALUE</p>
        <p className='py-2  text-dominos-blue border-b-2 border-green-700 '>BESTSELLERS</p>
        <p className='py-2' >NEW LAUNCHES</p>
        <p className='py-2' >VALENTINE'S SPECIAL</p>
        <p className='py-2' >VEG PIZZA</p>
        <p className='py-2' >GOURMET PIZZA</p>
        <p className='py-2' >SPECIALITY CHICKEN</p>
        <p className='py-2' >NON-VEG PIZZA</p>
        <p className='py-2' >BEVERAGES</p>
        <p className='py-2' >SPECIALITY CHICKEN</p>
        <p className='py-2' >SIDES</p>
        <p className='py-2' >PIZZA MANIA</p>
        <p className='py-2' >LUNCH COMBOS</p>
        <p className='py-2' >MEAL FOR 2</p>
        <p className='py-2' >MEAL FOR 4</p>
        <p className='py-2' >DESSERT</p>
        <p className='py-2' >CHEFBOSS</p>
      </div>
    </nav>
  )
}

export default Header