import Header from "@/components/Header"
import {useEffect} from 'react';
import PizzaMenuItems from "@/components/PizzaMenuItems"
import Sidebar from "@/components/Sidebar"
import MenuContainer from "@/components/MenuContainer"
import CheckoutContainer from "@/components/CheckoutContainer"

export default function  Home(){


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