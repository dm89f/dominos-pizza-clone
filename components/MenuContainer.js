import React, { useEffect, useState } from 'react'
import PizzaMenuItems from './PizzaMenuItems'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { fetchMenuItems,getAllMenuCategories, getAllMenuItems, getMenuItemsError,getMenuItemsStatus } from '../features/MenuItems/menuItemsSlice';


function MenuContainer() {


  const dispatch = useDispatch();
  const menuItems = useSelector(getAllMenuItems);
  const menuStatus = useSelector(getMenuItemsStatus);
  const menuItemsError = useSelector(getMenuItemsError);
  const categories = useSelector(getAllMenuCategories);

  useEffect(()=>{

    if( menuStatus === 'idle' ){
      dispatch(fetchMenuItems());
    }

  },[dispatch, menuStatus])

  let content='';
  if( menuStatus === 'loading' ){

    content = 'Loading';
  }else if( menuStatus === 'succeeded' ){
    content = ''

  }else if( menuStatus === 'failed' ){
    content = menuItemsError;
  }

  return (
    <section className='col-span-7 lg:mx-5 xl:col-span-5 xl:mx-10 mx-2'>
      { content&&<p>{content}</p> }
      { 
        categories&&categories.map( (categ)=>{
          let menuItem = menuItems.find((item) => ((item.category).toLowerCase() === categ.toLowerCase()));
          if(!menuItem ){
            // console.log(categ);
            return;
          }
          return (<PizzaMenuItems key={categ} menuItem={menuItem}/>); 
        })
      }
    
    </section>

  )
}

export default MenuContainer