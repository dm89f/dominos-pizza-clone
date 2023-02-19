import React from 'react'
import {GrMap} from 'react-icons/gr'
import {GrHistory} from 'react-icons/gr'
import {MdFeedback} from 'react-icons/md';
import {GrClose} from 'react-icons/gr';
import {BsInfo} from 'react-icons/bs'


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
      <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  bg-gray-100 items-center'>
        <GrMap size={25} className="mr-5"/>
        <span >TRACK CURRENT ORDER</span>
      </p>
      <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  bg-gray-100 items-center'>
        <MdFeedback size={25} className="mr-5"/>
        <span >Feedback</span>
      </p>
      <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  bg-gray-100 items-center'>
        <GrHistory size={25} className="mr-5"/>
        <span >Order History</span>
      </p>
      <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  bg-gray-100 items-center'>
        <BsInfo size={30} className="mr-5"/>
        <span >About</span>
      </p>
    </div>
  )
}

export default Sidenav