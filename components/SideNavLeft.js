 import SidenavModal from "./utils/SidenavModal";
 import {GrMap} from 'react-icons/gr'
 import {GrHistory} from 'react-icons/gr'
 import {MdFeedback} from 'react-icons/md';
 import {BsInfo} from 'react-icons/bs'
 


function SideNavLeft( {active, toggleLeftMenu} ) {




  return (
    <SidenavModal active={active} toggle={toggleLeftMenu} position={{left:true}}>
      <div>
        <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  hover:bg-gray-100 items-center'>
          <GrMap size={25} className="mr-5"/>
          <span >TRACK CURRENT ORDER</span>
        </p>
        <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  hover:bg-gray-100 items-center'>
          <MdFeedback size={25} className="mr-5"/>
          <span >Feedback</span>
        </p>
        <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  hover:bg-gray-100 items-center'>
          <GrHistory size={25} className="mr-5"/>
          <span >Order History</span>
        </p>
        <p className='hover:cursor-pointer px-10 py-5 mb-3 flex  hover:bg-gray-100 items-center'>
          <BsInfo size={30} className="mr-5"/>
          <span >About</span>
        </p>
      </div>
    </SidenavModal>
  )
}

export default SideNavLeft