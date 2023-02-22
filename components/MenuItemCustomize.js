import Image from 'next/image';
import {GrClose} from 'react-icons/gr';
import {TiTick} from 'react-icons/ti';

import { useEffect, useState } from 'react';
import {SliderContainer, SliderDivContainer} from './utils/SliderContainer'

function MenuItemCustomize({customizeMenu, setCustomizeMenu}) {


  const [toppings, setToppings] = useState([]);


  // fetch Toppings
  
  
  useEffect(()=>{
    (async function getToppings(){
      const res = await fetch('/api/getToppings');
      const data = await res.json();
      setToppings(data.toppings)
    })()
  },[])

  const active = customizeMenu._id !== undefined;
  const sidebarStyle = {
    transform: !active ?'translateX(-100%)':'translateX(0%)', 
    width:'600px',

  }

  return (
    <div style={sidebarStyle} className=' overflow-scroll transition fixed z-50 top-0 left-0 h-screen bg-white'>
      
      <div className=' w-full h-60'>
        <Image src={customizeMenu.image} alt={customizeMenu.title} width={900} height={500} />
      </div>
      <div className='px-8'>

        {/* header */}
        <div className='mb-4'>
          <h3 className='text-xl mb-2'>{customizeMenu.title}</h3>
          <p className='text-gray-500 text-sm'>{customizeMenu.description}</p>
        </div>


        {/* select Size */}

        <div className='mb-4'>
          <h3 className='mb-2 text-lg font-bold'>Select Size</h3>
          <div className='flex space-x-5'>
            <div className='flex px-3 py-2 border-2 items-center space-x-2'>
              <Image 
                src={'https://pizzaonline.dominos.co.in/static/assets/icons/regular_serve_1.svg'}
                width={40}
                height={40}
              />
              <p className='flex flex-col'>
                <span className='font-bold mt-1 '>Regular</span>
                <span className='text-gray-400 text-sm'>Serves 1</span>
              </p>
            </div>
            <div className='flex px-3 py-2 border-2 items-center space-x-2'>
              <Image 
                src={'https://pizzaonline.dominos.co.in/static/assets/icons/medium_serve_gray_2.svg'}
                width={40}
                height={40}
              />
              <p className='flex flex-col'>
                <span className='font-bold mt-1 '>Medium</span>
                <span className='text-gray-400 text-sm'>Serves 2</span>
              </p>
            </div>
            <div className='flex px-3 py-2 border-2 items-center space-x-2'>
              <Image 
                src={'https://pizzaonline.dominos.co.in/static/assets/icons/large_serve_gray_4.svg'}
                width={40}
                height={40}
              />
              <p className='flex flex-col'>
                <span className='font-bold mt-1 '>Large</span>
                <span className='text-gray-400 text-sm'>Serves 4</span>
              </p>
            </div>
          </div>
        </div>

        {/* select Crust */}
        <div className='mb-4'>
          <h3 className='mb-2 text-lg font-bold'>Select Crust</h3>
          <SliderContainer height={100} >
            <SliderDivContainer  active={true} >
              <h4 className=' whitespace-nowrap mb-1 text-dominos-blue'>New Hand Tossed</h4>
              <span className='p-1 text-sm bg-dominos-green text-white rounded text-gray-500'>
                ₹ 549
              </span>
            </SliderDivContainer>
            
          </SliderContainer>
           
        </div>

        {/* Cheese */}
        <div className='mb-4'>
          <div className='mb-4'>
            <h3 className=' text-lg font-bold'>Extra Cheese</h3>
          </div>  
          <div className='border-2 w-full flex  px-3 py-2'>
            <div className='mr-auto flex items-center space-x-3'>
              <span className='p-1 bg-dominos-green rounded-full'> <TiTick size={20} className='text-white' /> </span>
              <h3>I want to add extra Cheese</h3>
              <p className=' bg-yellow-500 text-white rounded px-2 py-1'>₹ {" "} 50</p>
            </div>
            <div className='ml-auto'>
              <button className='px-10 text-dominos-green border-dominos-green py-1 border-2'>ADD</button>
            </div>
          </div>

        </div>

        {/* Toppings */}
        <div className='mb-4'>
          <div className='mb-4 py-4 border-b-2'>
            <h3 className=' text-lg font-bold'>Add Toppings</h3>
            <h4 className='text-sm text-gray-500 mb-2' >You can add more toppings</h4>
          </div>
          <div className='mb-5'>
            <div className='flex items-center space-x-2 '>
              <Image alt='veg' src={'/veg.svg'} width={20} height={20}/>
              <h3 className='text-md font-bold'>Add Veg Toppings @ ₹ 60.00 each</h3>
            </div>
            <div>
              <SliderContainer height={200}>
                {
                  toppings&&toppings.filter( (item)=>(item.isVeg) ).map( item =>{
                    return(
                      <SliderDivContainer >
                        <div style={{width:'130px'}}>
                          <h3 className='whitespace-nowrap text-center text-sm text-gray-500'>{item.title}</h3>
                          <Image key={item.title} alt={item.title} src={item.image} height={150} width={300} />
                        </div>                        
                      </SliderDivContainer>
                    )
                  } )
                }
              </SliderContainer>
            </div>
          </div>

          <div className='mb-5'>
            <div className='flex items-center space-x-2 mb-5'>
              <Image src={'/non_veg.svg'} width={20} height={20}/>
              <h3 className='text-md font-bold'>Add Non-Veg Toppings @ ₹ 75.00 each</h3>
            </div>
            <div>
              <SliderContainer height={200}>
                  {
                    toppings&&toppings.filter( (item)=>(!item.isVeg) ).map( item =>{
                      return(
                        <SliderDivContainer >
                          <div style={{width:'120px'}}>
                            <h3 className=' text-center text-sm text-gray-500'>{item.title}</h3>
                            <Image key={item.title} alt={item.title} src={item.image} height={150} width={300} />
                          </div>                        
                        </SliderDivContainer>
                      )
                    } )
                  }
                </SliderContainer>

            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default MenuItemCustomize