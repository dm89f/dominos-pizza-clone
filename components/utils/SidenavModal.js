import React from 'react'
import {GrClose} from 'react-icons/gr';


function Sidenav({position,active,toggle, children}) {

  let translateStyle={};

  if( position.left ){
    translateStyle= {
      position:'absolute',
      left:0,
      transform:active ?('translateX(0)'):('translateX(-100%)'),
    };
  }else{
    translateStyle={
      position:'absolute',
      right:0,
      transform:active ?('translateX(0)'):('translateX(100%)'),
    }
  }  



  return (
    <div style={translateStyle} className='sidenav-modal pt-20 relative'>
      <span className='hover:cursor-pointer absolute top-5 right-5'>
        <GrClose onClick={toggle} size={25}/>
      </span>

      {children}

    </div>
  )
}

export default Sidenav