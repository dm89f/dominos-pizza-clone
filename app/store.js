import {configureStore} from '@reduxjs/toolkit'
import MenuItemsReducer from '../features/MenuItems/menuItemsSlice'

export const store = configureStore({
  reducer:{
    MenuItems:MenuItemsReducer
  }
})
