import Header from "@/components/Header"
import {useEffect} from 'react';
import PizzaMenuItems from "@/components/PizzaMenuItems"
import Sidebar from "@/components/Sidebar"
import MenuContainer from "@/components/MenuContainer"
import CheckoutContainer from "@/components/CheckoutContainer"
import { useDispatch, useSelector } from "react-redux";
import { getCartStatus, initializeCart, setActiveCartStatus } from "@/features/orderItems.js/orderItemsSlice";

export default function  Home(){

  const cartStatus =  useSelector(getCartStatus);
  const dispatch = useDispatch();

  useEffect(()=>{

    if(cartStatus === 'idle'){
      dispatch(initializeCart());
      dispatch(setActiveCartStatus);
    }

  },[])

  return(
    <div className="bg-dominos-bg">
      <Header/>
      <div className="grid grid-cols-7 max-w-screen  md:px-1" >
        <MenuContainer />
        <CheckoutContainer/>
      </div>
    </div>
  )

}