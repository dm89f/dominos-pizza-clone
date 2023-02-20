import React from 'react'
import SidenavModal from './utils/SidenavModal';


function SideNavRight({active, toggle}) {

  if(!active){
    return "";
  }

  return (
    <SidenavModal active={active} toggle={toggle} position={{right:true}}>
      
    </SidenavModal>
  )

}

export default SideNavRight