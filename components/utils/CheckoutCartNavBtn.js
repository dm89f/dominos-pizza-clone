import { useSelector } from 'react-redux'
import {getAllOrderItems,} from '../../features/orderItems.js/orderItemsSlice'

function CheckoutCartNavBtn() {
  let orderItems = useSelector(getAllOrderItems)
  let totalPrice = orderItems.totalPrice;
  let totalItems = orderItems.totalItems;

  return (
    <div style={{height:'80px'}} className='flex items-center z-50 absolute w-screen bg-dominos-green' >
      Checkout
    </div>
  )
}

export default CheckoutCartNavBtn