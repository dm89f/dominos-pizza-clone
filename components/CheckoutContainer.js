import React from 'react'

function CheckoutContainer() {
  return (
    <div className='hidden col-span-0 xl:col-span-2 xl:block'>
      <div className="bg-white border-t-2 border-green-600 w-4/5 mt-20 h-96 mx-auto bg-right-top bg-no-repeat bg-[url('/empty_cart.png')] px-10 relative">

      <div className='absolute bottom-20'>
        <h2 className='text-3xl text-gray-500 font-bold'>Your Cart is Empty</h2>
        <h1 className='text-gray-400'>Please add some items from the menu.</h1>
      </div>

      </div>
    </div>
  )
}

export default CheckoutContainer