import React, { useEffect } from 'react'
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

  function getOffsetTop( elem )
  {
    var offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetTop;
  }

  useEffect(()=>{

    window.onscroll = () => {
      var current = "";

      const sections = document.querySelectorAll('.menu_categs');
      const navLi = document.querySelectorAll('.nav_link');

      sections.forEach((section) => {
        const sectionTop = getOffsetTop(section);

        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id"); 
        }

      });
      
      if(!current) return;
      else{
        navLi.forEach((li) => {
          li.classList.remove("link_active");      
        });
  
        // console.log(current);
        let link = document.querySelector(`[href="#${current}"]`);
        if(!link.classList.contains('link_active')){
          link.classList.add('link_active')
        }
      }
      
      

    };
    
  })

  function handleNavLinkClick(e){

    function Position(obj){
      var currenttop = -160;
      if (obj.offsetParent){
       do{
        currenttop += obj.offsetTop;
       }while ((obj = obj.offsetParent));
       return [currenttop];
      }
    }

    document.querySelectorAll('.nav_link').forEach((link)=>{
      link.classList.remove('link_active');
    })

    e.target.classList.add('link_active');

    e.preventDefault();
    let scrollToSection = document.getElementById((e.target.hash).substr(1));
    if(scrollToSection){
      window.scroll(0, Position(scrollToSection));
    }else{
      console.log("scroll_failed")
    }
  }




  return (
    <nav className='sticky top-0 z-50' >
      {/* top nav */}
      <div className='flex px-2 md:px-5 lg:px-10  bg-dominos-blue text-white text-sm whitespace-nowrap'>
        <div className='py-3 flex items-center lg:py-1' >
            <GiHamburgerMenu size={30} className="mr-5"  />
            <Image alt='logo' className='w-auto h-auto' src={'/logo.svg'} width={180} height={100}/>
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
        <div 
          className='flex 2xl:justify-center w-screen overflow-x-scroll  text-gray-400 whitespace-nowrap  md:text-sm'       
        >

          {
            categories&&categories.map( (categ)=>(
              <a href={`#${categ.split(' ').join('_')}`} onClick={handleNavLinkClick}  key={categ} className='nav_link mx-3 py-5 md:py-3'>{categ}</a>
            ) )

          }
          
        </div>
      </div>
    </nav>
  )
}

export default Header