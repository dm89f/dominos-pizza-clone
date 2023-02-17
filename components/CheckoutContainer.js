import React from 'react'
import {} from '../features/orderItems.js/orderItemsSlice'



function CheckoutContainer() {



  return (
    <div className='relative hidden col-span-0 xl:col-span-2 xl:block'>
      <div className='w-4/5  mx-auto mt-20 h-48 bg-red-300'>
      </div>

      <div className="sticky top-48">
        
        <div className="bg-white border-t-2 border-green-600 w-4/5 mt-4 h-96 mx-auto bg-right-top bg-no-repeat bg-[url('/empty_cart.png')] px-10 relative">
          <div className='absolute bottom-20'>
            <h2 className='text-3xl text-gray-500 font-bold'>Your Cart is Empty</h2>
            <h1 className='text-gray-400'>Please add some items from the menu.</h1>
          </div>
        </div>

        <div className='bg-gray-200 px-4 py-2 w-4/5 mx-auto h-28'>
          <div className='flex justify-center'>
            <h3 className='text-2xl mr-auto font-bold'>
              Subtotal ({2})
            </h3>
            <h3 className='text-2xl ml-auto font-bold'>
            ₹ {" "}300
            </h3>
          </div>
          <div className='mt-2'>
            <button className='p-2 bg-dominos-green rounded-sm text-white font-bold w-full'> CHECKOUT </button>

          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default CheckoutContainer