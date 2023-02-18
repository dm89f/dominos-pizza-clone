import {
  createSlice,
  nanoid,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {  
  findOrderItemIdx, 
  findOrderOptionIdx,
  updateOrderMenuPriceQty,
  updateTotalOrderPriceQty
} from './utils';


let initialState = {
  totalPrice: 0,
  totalItems: 0,
  orderItems: [],
}

/*
  orderItems:[
    { 
      menuItemId,
      title,
      description,
      image,
      isVeg,
      totalQty:1,
      menuPrice,
      canCustomize,
      orderOptions:[
        {
          id:nanoId()
          size,
          crust,
          unitPrice,
          qty,
          toppings:{
            veg:[],
            nonVeg:[]
          },
          extraCheese:Boolean
        }
      ],
    },
    ...
  ]

*/
// reducers

// addOrderItems => find the Order item & increase the qty if not found push the Order if no similar order item did not exist

// remove => find and decrease the qty of the Order item if not found just return

// increaseOrderOption => find and increase the option qty
// decreaseOrderOption => ifnd and decrease the option qty


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
    
      let orderItemIdx = findOrderItemIdx(state.orderItems, menuItemId);

      if(orderItemIdx >= 0 ){

        let optionIdx = findOrderOptionIdx( state.orderItems[orderItemIdx].orderOptions,{ size, crust, toppings, extraCheese }  )
        
        if( optionIdx >= 0 ){
          state.orderItems[orderItemIdx].orderOptions[optionIdx].qty += 1;
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

        updateOrderMenuPriceQty( state.orderItems[orderItemIdx] );

      }else{

        state.orderItems.push({
          menuItemId,
          title, 
          description,
          image,
          isVeg,
          totalQty:1,
          menuPrice:unitPrice,
          orderOptions:[
            { id:nanoid(), size, crust, qty:1,unitPrice, toppings, extraCheese }
          ]
        });

      }
      
      updateTotalOrderPriceQty( state );

    },
    removeOrderItem( state, action ){

      const {
        menuItemId,
        size,
        crust,
        toppings,
        extraCheese
      } = action.payload;
      
      if(state.totalItems === 1){

        state.orderItems = [];
        state.totalPrice = 0;
        state.totalItems = 0;
        return ;
      }
      

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
          state.orderItems[orderItemIdx].totalQty -= 1;
          state.totalItems -= 1;
        }        
      }

      state.orderItems[orderItemIdx].orderOptions = state.orderItems[orderItemIdx].orderOptions.filter( (option)=>( option.qty !== 0) );

      state.orderItems = state.orderItems.filter( (item)=>( item.totalQty !== 0 ));
      updateOrderMenuPriceQty( state.orderItems[orderItemIdx] );
      updateTotalOrderPriceQty( state );

    },
    // increaseOrderOption( state, action ){

    //   const { menuItemId, optionId } = action.payload;
      

    // },
    // decreaseOrderOption( state, action ){

    //   const { menuItemId, option } = action.payload;
    //   const orderItemIdx = findOrderItemIdx(state.orderItems, menuItemId);
    //   if(orderItemIdx < 0) return;
    //   const optionIdx = findOrderOptionIdx(state.orderItems[orderItemIdx].orderOptions, option.size, 
    //   option.crust, option.toppings, option.extraCheese );
      
    //   if( optionIdx <0 )return;
      
    //   state.orderItems[orderItemIdx].orderOptions[optionIdx].qty -= 1;
    //   state.orderItems[orderItemIdx].totalQty -= 1;
    //   state.totalItems -= 1;

    //   state.orderItems[orderItemIdx].orderOptions = state.orderItems[orderItemIdx].orderOptions.filter( (option)=>( option.qty !== 0) );
    //   state.orderItems = state.orderItems.filter( (item)=>( item.totalQty !== 0 ));

    //   updateOrderMenuPriceQty( state.orderItems[orderItemIdx] );
    //   updateTotalOrderPriceQty( state );
      
    // }
  },

});


export const getTotalOrderItemQty = (state, menuItemId)=>{
  let idx = state.orderItems.orderItems.findIndex( (item)=>( item.menuItemId === menuItemId ) );
  if(idx >= 0 )  return state.orderItems.orderItems[idx].totalQty;
  else return 0;
}

export const getAllOrderItems = ( state=> state.orderItems );


export const {
  addOrderItem,
  removeOrderItem
} = orderItemsSlice.actions;


export default orderItemsSlice.reducer