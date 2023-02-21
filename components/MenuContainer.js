import React, { useEffect, useState } from 'react'
import PizzaMenuItems from './PizzaMenuItems'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { fetchMenuItems,getAllMenuCategories, getAllMenuItems, getMenuItemsError,getMenuItemsStatus } from '../features/MenuItems/menuItemsSlice';
import BottomCartNavBtn from './utils/BottomCartNavBtn';
import BottomCartItems from './utils/BottomCartItems';
import CheckoutCartNavBtn from './utils/CheckoutCartNavBtn';


function MenuContainer() {


  const dispatch = useDispatch();
  const menuItems = useSelector(getAllMenuItems);
  const menuStatus = useSelector(getMenuItemsStatus);
  const menuItemsError = useSelector(getMenuItemsError);
  const categories = useSelector(getAllMenuCategories);
  const [showbottomCartNav, setShowbottomCartNav] = useState(false);

  const toggleBottomcart=()=>{
    setShowbottomCartNav(!showbottomCartNav);
  }

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
      <div className='xl:hidden bottom-nav-cart'>
        <div className='relative'>
          <div className={`bottom-cart-container ${showbottomCartNav&&"show"}`} > 
            <BottomCartItems toggleBottomcart={toggleBottomcart}/>
          </div>
        </div>
        {!showbottomCartNav&&<BottomCartNavBtn toggleBottomcart={toggleBottomcart}/> } 
        {showbottomCartNav&&<CheckoutCartNavBtn/> } 
      </div>
    </section>

  )
}

export default MenuContainer