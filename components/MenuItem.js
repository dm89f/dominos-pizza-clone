import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {addOrderItem,removeOrderItem, getTotalOrderItemQty} from '../features/orderItems.js/orderItemsSlice';
import{AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {AiOutlineArrowRight, AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import MenuItemPrice from './utils/MenuItemPrice';

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

  const [ menuPrice, setMenuPrice ] = useState(0);
  const [ favorite, setFavorite ] = useState(false);
  const [ size, setSize ] = useState('Regular');
  const [ crust, setCrust ] = useState('Hand Toasted');
  
  const dispatch = useDispatch();


  let qty = useSelector((state)=>getTotalOrderItemQty(state, item._id));

  useEffect( ()=>{
    if(!isPizza) return;
    calculatePrice(size, crust);
  }, [size, crust] )
  
  const updateSize = (e)=>{
    setSize(e.target.value);
  }

  const updateCrust = (e)=>{
    setCrust(e.target.value);
  }

  const calculatePrice = ( size, crust )=>{

    const option = price.find( (option)=>{
      return (option.size).toLowerCase() === size.toLowerCase() && (option.crust).toLowerCase()===crust.toLowerCase();
    } );
    setMenuPrice(option.cost);

  }

  const handleAddOrderItem = (e)=>{
    e.preventDefault();
    dispatch( addOrderItem( {
      
      menuItemId:item._id,
      title, 
      description,
      image,
      isVeg,
      size,
      crust,
      qty:1,
      unitPrice:menuPrice,
      toppings:"",
      extraCheese:false
    
    }));
  }

  const handleRemoveOrderItem = (e)=>{
    e.preventDefault();
    dispatch(removeOrderItem({
      menuItemId:item._id,
      size,
      crust,
      toppings:"",
      extraCheese:false
    })); 
    
  }



  useEffect(()=>{
    //add to favorites
  },[favorite]);

  return (
    <div className='relative bg-white shadow-lg m-2'>
        
      <div  className='h-48 relative'>
        <span className='absolute z-10 top-2 left-2'>
          <Image alt='meal type'  src={`${isVeg?"/veg.svg":"./non_veg.svg"}`} width={20} height={20} />
        </span>
        <span onClick={()=>setFavorite( !favorite )} className='absolute z-10 top-2 right-2'>
          { favorite ? <AiFillHeart color='red' size={25} /> :
            <AiOutlineHeart color='white' size={25}/>
          }
        </span>
        <span className='absolute z-10 px-1 font-bold bottom-2 left-2 text-xl text-white bg-gray-600/[.6]'>₹ {" "}{menuPrice}</span>
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
            isPizza&&<MenuItemPrice size={size} crust={crust} updateSize={updateSize} updateCrust={updateCrust} />
          }
        

       <div className='h-16 mt-4'>
        <div className='absolute bottom-5 '>
          
          {/* <div className='my-2'>
            <span className='text-sm font-bold text-gray-500'>Added Toppings: </span>
            <span className='mx-1 p-1 bg-gray-100 rounded-sm text-xs'>Onion</span>
            <span className='mx-1 p-1 bg-gray-100 rounded-sm text-xs'>Crisp Capsicum</span>
            <span className='mx-1 p-1 bg-gray-100 rounded-sm text-xs'>Fresh Tomato</span>
            <span className='mx-1 p-1 bg-gray-100 rounded-sm text-xs'>Fresh Tomato</span>
            <span className='mx-1 p-1 bg-gray-100 rounded-sm text-xs'>Fresh Tomato</span>
            <span className='mx-1 p-1 bg-gray-100 rounded-sm text-xs'>Fresh Tomato</span>
          </div> */}
          
          <div className='flex items-center'>
            {
              qty === 0 
              ? <button 
                  className=' border-2 px-3 py-1 text-md rounded-md text-green-700 border-green-600 hover:bg-green-600 hover:text-white'
                  onClick={handleAddOrderItem} 
                >
                  ADD TO CART
                </button> 
              :
                <div className='flex items-center border-2 rounded-md '>
                  <button 
                    onClick={handleRemoveOrderItem}
                    className='px-3 py-1 text-red-900 hover:bg-red-600 rounded-bl-md rounded-tl-md hover:scale-110'
                  >
                    <AiOutlineMinus className='hover:text-white' size={23}/>
                  </button>
                  <span className='px-3 py-1'>{qty}</span>
                  <button 
                    onClick={handleAddOrderItem}
                    className='px-3 py-1 text-green-600 hover:bg-green-600 rounded-tr-md rounded-br-md hover:scale-110 '
                  >
                    <AiOutlinePlus className='hover:text-white' size={23}/>
                  </button>
                </div>
            }
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}



export default MenuItem