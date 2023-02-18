import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import {printMenuCategories} from './utills'

export const fetchMenuItems = createAsyncThunk( 'menuItems/fetchMenuItems', async()=>{
  try{
    const res = await fetch(`${process.env.host}/api/getMenuItems`);
    let {menuItems} = await res.json();
    // printMenuCategories(menuItems)

    return menuItems;
  }catch(err){
    console.log(err);
    return {};
  }

} )


let initialState = {
  items:[],
  categories:[
    "BESTSELLERS", "NEW LAUNCHES",
    "VEG PIZZA", "GOURMET PIZZA",
    "SPECIALITY CHICKEN", "NON-VEG PIZZA", "BEVERAGES",
    "SIDES", "PIZZA MANIA", "LUNCH COMBOS",
    "MEAL FOR 2", "MEAL FOR 4", "DESSERT", "CHEFBOSS"
  ],
  status:'idle', // 'idle'|| 'loading' || 'succeeded' || 'failed'
  error:null
};


const menuItemsSlice = createSlice({
  name:'menuItems',
  initialState,
  reducers:{

  },
  extraReducers(builder){
    builder
    .addCase(fetchMenuItems.pending, (state, action)=>{
      state.status='loading';

    })
    .addCase( fetchMenuItems.fulfilled, (state, action)=>{
      state.status = 'succeeded';

      let menuItems = action.payload;
      const categs = new Set();
      let menuCategory = new Map();

      if( !Array.isArray(menuItems) )  return ;
      else{
        menuItems.forEach( item =>{
         item.category.forEach((categ)=>{
          if(menuCategory.has(categ)){
            menuCategory.set( categ, [...menuCategory.get(categ), item] )
          }else{
            menuCategory.set(categ,new Array());
          }
         })
        })
      }

      let newItems = [];
      for(let [name, value] of menuCategory ){
        
        newItems.push( { category:name, items:value } )
      }

      state.items = newItems;

    } )
    .addCase( fetchMenuItems.rejected, (state, action)=>{
      
      state.status = 'failed';
      state.error = action.error.message;
      console.log(state.error);

    } )
  }
} );

export const getAllMenuItems = (state)=>(state.MenuItems.items);
export const getAllMenuCategories = (state)=>(state.MenuItems.categories);
export const getMenuItemsStatus = (state)=>(state.MenuItems.status);
export const getMenuItemsError = (state)=>(state.MenuItems.error);

export const {} = menuItemsSlice.actions;
export default menuItemsSlice.reducer ;