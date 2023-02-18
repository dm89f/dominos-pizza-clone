
// find order item index 

export function findOrderItemIdx( orderItems, menuItemId ){
  
  return orderItems.findIndex( (item)=>{ return ( item.menuItemId === menuItemId ) });

}

// find order option index 
export function findOrderOptionIdx( orderOptions,{ size, crust, toppings, extraCheese }  ){
  
  return orderOptions.findIndex( (option)=>{
          return (  option.size === size 
                    && option.crust === crust 
                    && option.toppings === toppings
                    && option.extraCheese === extraCheese 
                  );  
        }) 
}



//update order menu price and Qty
export function updateOrderMenuPriceQty(orderItem){

  if(!orderItem) return;

  orderItem.menuPrice=0;
  if( Array.isArray(orderItem.orderOptions) ){

    orderItem.menuPrice = orderItem.orderOptions.reduce( ( sum, curr )=>{
      return sum + curr.unitPrice*curr.qty;
    }, 0 );

    orderItem.totalQty = orderItem.orderOptions.reduce( ( sum, curr )=>{
      return sum + curr.qty;
    }, 0 );

  }
 

}

//update Total order menu price and Qty
export function updateTotalOrderPriceQty(state){

  state.totalItems = state.orderItems.reduce( (sum, curr ) => {
    return sum+curr.totalQty;
  },0 );
  
  state.totalPrice = state.orderItems.reduce( (sum, curr) => {
    return sum + curr.menuPrice;
  },0 )

}
