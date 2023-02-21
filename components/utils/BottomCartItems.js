import {useSelector} from 'react-redux'
import {getAllOrderItems,} from '../../features/orderItems.js/orderItemsSlice'
import CheckoutOrderItem from '../CheckoutOrderItem';
import {BiHide} from 'react-icons/bi'


function BottomCartItems({toggleBottomcart}) {

  let orderItems = useSelector(getAllOrderItems)
  let totalPrice = orderItems.totalPrice;
  let totalItems = orderItems.totalItems;



  return (
    <div className={`px-2 bottom-cart-container ${totalItems == 0 && "bg-right-top bg-no-repeat bg-[url('/empty_cart.png')] "} `}>
         {  totalItems === 0 &&
            <div className='absolute px-10 bottom-20'>
              <h2 className='text-3xl text-gray-500 font-bold'>Your Cart is Empty</h2>
              <h1 className='text-gray-400'>Please add some items from the menu.</h1>
            </div>
          }

          <div className='' >
            <div className='whitespace-nowrap flex items-center justify-center hover:bg-red-500 hover:text-white outline-none border-0 py-2 px-2 px-1 text-red-500 text-lg'
            onClick={toggleBottomcart}
            >
              <span >Hide </span>
              <BiHide className='ml-5' size={25}/>
            </div>
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

    </div>
  )
}

export default BottomCartItems