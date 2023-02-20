import React from 'react'
import SidenavModal from './utils/SidenavModal';


function SideNavRight({active, toggleRightMenu}) {
  
  return (
    <SidenavModal active={active} toggle={toggleRightMenu} position={{right:true}}>
      
    </SidenavModal>
  )

}

export default SideNavRight