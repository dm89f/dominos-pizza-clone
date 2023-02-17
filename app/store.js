import {configureStore} from '@reduxjs/toolkit'
import MenuItemsReducer from '../features/MenuItems/menuItemsSlice'
import OrderItemsReducer from '../features/orderItems.js/orderItemsSlice';


export const store = configureStore({
  reducer:{
    MenuItems:MenuItemsReducer,
    orderItems:OrderItemsReducer
  }
})