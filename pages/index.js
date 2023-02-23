import Header from "@/components/Header"
import {useEffect, useState} from 'react';
import PizzaMenuItems from "@/components/PizzaMenuItems"
import Sidebar from "@/components/Sidebar"
import MenuContainer from "@/components/MenuContainer"
import CheckoutContainer from "@/components/CheckoutContainer"
import { useDispatch, useSelector } from "react-redux";
import { getCartStatus, initializeCart, setActiveCartStatus } from "@/features/orderItems.js/orderItemsSlice";
import MenuItemCustomize from "@/components/MenuItemCustomize";


export default function  Home(){

  const cartStatus =  useSelector(getCartStatus);
  const dispatch = useDispatch();
  const [customizeMenu, setCustomizeMenu] = useState({})

  useEffect(()=>{

    if(cartStatus === 'idle'){
      dispatch(initializeCart());
      dispatch(setActiveCartStatus);
    }

  },[dispatch, cartStatus])

  return(
    <div className="bg-dominos-bg">
      <Header/>
      <MenuItemCustomize customizeMenu={customizeMenu} setCustomizeMenu={setCustomizeMenu} />
      <div onClick={()=>setCustomizeMenu({})} className={`${!customizeMenu._id&&'hidden'}  overlay fixed`}></div>
      <div className="grid grid-cols-7 max-w-screen  md:px-1" >
        <MenuContainer setCustomizeMenu={setCustomizeMenu} />
        <CheckoutContainer/>
      </div>
    </div>
  )

}