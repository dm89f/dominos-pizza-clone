import {
  createSlice,
  nanoid,
  createAsyncThunk
} from "@reduxjs/toolkit";

let initialState = {
  totalPrice: 0,
  totalItems: 0,
  orderItems: [],
}

/*
  orderItems:[
    { 
      menuItemId,
      totalQty,
      orderOptions:[
        { 
          id:nanoId()
          size,
          crust,
          unitPrice,
          qty,
          toppings,
          extraCheese
        }
      ],
    },
    ...
  ]

*/
// reducers
// addOrderItems => find the Order item & increase the qty if not found push the Order if no similar order item did not exist
// remove => find and decrease the qty of the Order item if not found just return
// getOrderItemQty => find the orderItem qty if found else return 0


const orderItemsSlice = createSlice({
  name: "orderItems",
  initialState,
  reducers: {
    addOrderItem(state, action) {
      const { 
        menuItemId,
        title, 
        description,
        image,
        isVeg,
        size,
        crust,
        qty,
        unitPrice,
        toppings,
        extraCheese
      } = action.payload;
    
      let orderItemIdx = state.orderItems.findIndex( (item)=>{ return ( item.menuItemId === menuItemId ) });

      if(orderItemIdx >= 0 ){
        let optionIdx = state.orderItems[orderItemIdx].orderOptions.findIndex( (option)=>{
          return (  option.size === size 
                    && option.crust === crust 
                    && option.toppings === toppings
                    && option.extraCheese === extraCheese 
                  );  
        });
        
        if( optionIdx >= 0 ){

          state.orderItems[orderItemIdx].orderOptions[optionIdx].qty+=1;
        }else{
          
          state.orderItems[orderItemIdx].orderOptions.push({
            id:nanoid(), 
            size,
            crust,
            qty,
            toppings,
            extraCheese,
            unitPrice
          });
        }
        state.orderItems[orderItemIdx].totalQty +=1;

      }else{
        state.orderItems.push({
          menuItemId,
          title, 
          description,
          image,
          isVeg,
          totalQty:1,
          orderOptions:[
            { id:nanoid(), size, crust, qty:1,unitPrice, toppings, extraCheese }
          ]
        });

      }
      
      state.totalItems += 1;
    },    
    removeOrderItem( state, action ){

      const {
        menuItemId,
        size,
        crust,
        toppings,
        extraCheese
      } = action.payload;
      
      let orderItemIdx = state.orderItems.findIndex( (item)=>{ return ( item.menuItemId === menuItemId ) });

      if(orderItemIdx >= 0 ){
        let optionIdx = state.orderItems[orderItemIdx].orderOptions.findIndex( (option)=>{
          return (  option.size === size
                    && option.crust === crust
                    && option.toppings === toppings
                    && option.extraCheese === extraCheese
                  );  
        });
        
        if( optionIdx >= 0){

          state.orderItems[orderItemIdx].orderOptions[optionIdx].qty -= 1;
          state.orderItems[orderItemIdx].totalQty -=1;
          state.totalItems -= 1;
        
        }
        
      }

    }
  },

});


export const getTotalOrderItemQty = (state, menuItemId)=>{
  let idx = state.orderItems.orderItems.findIndex( (item)=>( item.menuItemId === menuItemId ) );
  if(idx >= 0 )  return state.orderItems.orderItems[idx].totalQty;
  else return 0;
}

export const {
  addOrderItem,
  removeOrderItem
} = orderItemsSlice.actions;


export default orderItemsSlice.reducer