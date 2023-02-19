 import SidenavModal from "./utils/SidenavModal";



function SideNavLeft( {active, toggleLeftMenu} ) {

  return (
    <SidenavModal active={active} toggle={toggleLeftMenu} position={{left:true}}>
      
    </SidenavModal>
  )
}

export default SideNavLeft