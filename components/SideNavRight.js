import React from 'react'
import SidenavModal from './utils/SidenavModal';
import { useDispatch, useSelector } from 'react-redux';
import {updateOrderType, getOrderType} from '../features/orderItems.js/orderItemsSlice';
import {IoMdRadioButtonOn, IoMdRadioButtonOff, IoMdLocate } from 'react-icons/io';
import {BsTrash} from 'react-icons/bs' 
import {TfiMapAlt, } from 'react-icons/tfi'


function SideNavRight({active, toggle}) {



  const dispatch = useDispatch();
  const isOrderDelivery =   useSelector(getOrderType);
  if(!active){
    return "";
  }
  const handleDeliveryClick = (e)=>{
    e.preventDefault();
    console.log("clicked")
    dispatch(updateOrderType(true));  
  }

  const handlePickupClick = (e)=>{
    e.preventDefault();
    console.log("clicked")
    dispatch(updateOrderType(false));
  }


  return (
    <SidenavModal active={active} toggle={toggle} position={{right:true}}>
      <div className='px-5'>
        <h2 className='text-3xl font-bold mb-3'>Order Online</h2>
        <div className='flex items-center space-x-5'>
          <p onClick={handleDeliveryClick} className={`${isOrderDelivery?'text-dominos-blue':'text-gray-500'} font-bold flex items-center space-x-2`}>
            <span >
              {
                isOrderDelivery?<IoMdRadioButtonOn/>:<IoMdRadioButtonOff/>
              }
            </span>
            <span>
              Delivery
            </span>
          </p>
          <p onClick={handlePickupClick} className={`${!isOrderDelivery?'text-dominos-blue':'text-gray-500'} font-bold flex items-center space-x-2`}>
            <span>
              {
                isOrderDelivery?<IoMdRadioButtonOff/>:<IoMdRadioButtonOn/>
              }
            </span>
            <span>
              Pickup/Dine-in
            </span>
          </p>
        </div>

        <h5 className='my-4 font-bold text-sm'>We Will Deliver right to your Door</h5>


        <div className='flex items-center px-5 py-1   shadow-lg border-2'>
            <input className='py-4 outline-none shrink-1 mr-2' type="text"  placeholder='Enter Area/Locality'/>
            <p className='flex items-center px-3 py-2 bg-dominos-green rounded-sm text-white'>
              <IoMdLocate className='mr-3 inline' size={25}/>
              <span className='whitespace-nowrap text-lg font-bold'>Locate</span>
            </p>
            
        </div>

        <h6 className='my-3 text-gray-500 text-md'>Saved Addresses</h6>

        <div>
            
          <div className='flex items-center space-x-3 px-2 py-3 border-2 shadow-md'>
            <TfiMapAlt className='' size={35}/>
            <div className='text-sm' >
              <p className='text-dominos-blue' >India,N.A., ., Bengaluru</p>
              <p>2nd Block, Raghavendra Nagar,Sir M V Nagar, Raghavendra</p>
            </div>
            <BsTrash size={25}/>
          </div>

        </div>


      </div>
    </SidenavModal>
  )

}

export default SideNavRight