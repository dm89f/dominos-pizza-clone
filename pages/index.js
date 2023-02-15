import Header from "@/components/Header"
import PizzaMenuItems from "@/components/PizzaMenuItems"
import Sidebar from "@/components/Sidebar"
import MenuContainer from "@/components/MenuContainer"
import CheckoutContainer from "@/components/CheckoutContainer"


export default function  Home({menuItems}){


  return(
    <div className="bg-dominos-bg">
      <Header/>
      <div className="grid grid-cols-7 max-w-screen  md:px-1" >
        <MenuContainer menuItems={menuItems}/>
        <CheckoutContainer/>
      </div>
    </div>
  )

}

export async function getServerSideProps(){

  let menuItems = {}
  try{
    const res = await fetch(`${process.env.HOST}/api/getMenuItems`);
    menuItems = await res.json();
    

  }catch(err){
    console.log(err);
  }

  return {
    props:{
      menuItems
    }
  }
}