import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import {getAllOrderItems,} from '../features/orderItems.js/orderItemsSlice'
import CheckoutOrderItem from './CheckoutOrderItem'


function CheckoutContainer() {

  let orderItems = useSelector(getAllOrderItems)
  let totalPrice = orderItems.totalPrice;
  let totalItems = orderItems.totalItems;

  console.log(orderItems);

  return (
    <div className='relative hidden col-span-0 xl:col-span-2 xl:block'>
      <div className='w-4/5  mx-auto mt-20 h-48 bg-no-repeat bg-center bg-cover' style={{ backgroundImage:'url(https://api.dominos.co.in/prod-olo-api/images/flashBanner/Dominos_Howzzat_IPL-2021_Menu.jpg)' }} >
      </div>

      <div className="sticky top-48">
        
        <div className={` overflow-scroll bg-white border-t-2 border-green-600 w-4/5 mt-4 h-96 mx-auto ${totalItems === 0 && "bg-right-top bg-no-repeat bg-[url('/empty_cart.png')]"} px-2 relative`}>
          
          {
            totalItems === 0 &&
            <div className='absolute px-10 bottom-20'>
              <h2 className='text-3xl text-gray-500 font-bold'>Your Cart is Empty</h2>
              <h1 className='text-gray-400'>Please add some items from the menu.</h1>
            </div>
          }

          {
            

            orderItems&&orderItems.orderItems.map( (item)=>{
              
              return item.orderOptions.map( (option)=>{
              
                return ( <CheckoutOrderItem 
                  key={option.id}
                  menuItemId={item.menuItemId}
                  option={option}
                  title={item.title} 
                  descriptiion={item.description}
                  image={item.image}
                /> )
              
              } )

            } )

          }
          
        </div>

        <div className='bg-gray-200 px-4 py-2 w-4/5 mx-auto h-28'>
          <div className='flex justify-center'>
            <h3 className='text-2xl mr-auto font-bold'>
              Subtotal ({totalItems})
            </h3>
            <h3 className='text-2xl ml-auto font-bold text-green-900'>
            ₹ {" "}{totalPrice.toFixed(2)}
            </h3>
          </div>
          <div className='mt-2'>
            <button className='p-2 bg-dominos-green rounded-sm text-white font-bold w-full'>      CHECKOUT 
            </button>

          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default CheckoutContainer