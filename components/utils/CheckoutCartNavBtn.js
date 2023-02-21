import { useSelector } from 'react-redux'
import {getAllOrderItems,} from '../../features/orderItems.js/orderItemsSlice'

function CheckoutCartNavBtn() {
  let orderItems = useSelector(getAllOrderItems)
  let totalPrice = orderItems.totalPrice;
  let totalItems = orderItems.totalItems;

  return (
    <div style={{height:'80px'}} 
      className='flex items-center z-50 absolute w-screen bg-dominos-green' 
    >
        <button
        // onClick={toggleBottomcart} 
        className='w-screen my-2 text-xl border-0 outline-none py-5 text-white rounded-sm md:w-64 md:border-2 md:py-2 md:px-1 md:ml-auto md:mr-3 '
        >
          Checkout ( { totalItems } ) : ₹ {" "} {totalPrice.toFixed(2)}
      </button>
    </div>
  )
}

export default CheckoutCartNavBtn