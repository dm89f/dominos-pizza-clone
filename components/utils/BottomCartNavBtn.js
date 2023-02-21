import { useSelector } from 'react-redux'
import {getAllOrderItems,} from '../../features/orderItems.js/orderItemsSlice'


function BottomCartNavBtn({toggleBottomcart}) {

  let orderItems = useSelector(getAllOrderItems)
  let totalPrice = orderItems.totalPrice;
  let totalItems = orderItems.totalItems;


  return (
    <div style={{height:'80px'}} className='flex items-center z-50 absolute w-screen bg-dominos-blue'>
      <div className='hidden text-xl text-white md:block py-3 px-1 mr-auto ml-3'>
        Subtotal : ₹ {" "} {totalPrice.toFixed(2)}
      </div>
      <button
        onClick={toggleBottomcart} 
        className='w-screen my-2 text-xl border-0 outline-none py-5 text-white rounded-sm md:w-64 md:border-2 md:py-2 md:px-1 md:ml-auto md:mr-3 '
        >
          Show Cart Items ( { totalItems } )
      </button>
    </div>
  )
}

export default BottomCartNavBtn