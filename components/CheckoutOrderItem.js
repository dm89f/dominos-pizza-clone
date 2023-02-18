import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addOrderItem, removeOrderItem} from '../features/orderItems.js/orderItemsSlice'



function CheckoutOrderItem({ menuItemId, option, title, descriptiion,image,  }) {

  const dispatch = useDispatch();

  const handleAddOrderItem = (e)=>{
    e.preventDefault();
    dispatch( addOrderItem( {
      menuItemId,
      size:option.size,
      crust:option.crust,
      toppings:option.toppings,
      extraCheese:option.extraCheese,    
    }));
  }

  const handleRemoveOrderItem = (e)=>{
    e.preventDefault();
    dispatch(removeOrderItem({
      menuItemId,
      size:option.size,
      crust:option.crust,
      toppings:option.toppings,
      extraCheese:option.extraCheese
    })); 
    
  }


  return (
      <div className='h-36 mt-3 shadow-md' >
        <div className='flex'>
          <div className='relative w-1/4'>
            <div className='h-24 w-full bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url('${image}')`}}>                      
            </div>
          </div>
          <div className='w-3/4  pl-3'>
            <h3 className='text-sm font-bold '>{title}</h3>
            <p className='text-sm text-gray-500 '>{
              descriptiion.length >= 50 ? ( descriptiion.substr(0,50) + "..." ) :
              descriptiion
            }</p>
            <span className=' text-xs'>{ option.size} {" | "} { option.crust }</span>
          </div>
        </div>

        {/* bottom */}
        <div className='flex mt-2'>
          
          <div className='flex items-center border-2 rounded-sm mr-auto'>
              <button 
                onClick={handleRemoveOrderItem}
                className='px-3 py-1 text-red-900 hover:bg-red-600 rounded-bl-sm rounded-tl-sm hover:scale-110'
              >
                <AiOutlineMinus className='hover:text-white' size={15}/>
              </button>
              <span className='px-3 py-1 text-xs'>{option.qty}</span>
              <button 
                onClick={handleAddOrderItem}
                className='px-3 py-1 text-green-600 hover:bg-green-600 rounded-tr-sm rounded-br-sm hover:scale-110 '
              >
                <AiOutlinePlus className='hover:text-white' size={15}/>
              </button>
          </div>
          <div className='ml-auto'>
            <p className='text-green-800 font-bold'>₹ {" "} { (option.qty*option.unitPrice ).toFixed(2)}</p>
          </div>

        </div>
      </div>
  )
}

export default CheckoutOrderItem