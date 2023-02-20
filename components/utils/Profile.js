import {FaUserCircle} from 'react-icons/fa';
import {MdOutlineAddIcCall, MdHistory, MdAddLocationAlt} from 'react-icons/md'
import {BsPower} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai'


function Profile({active}) {


  return (
    <div className={`transition ${active?"opacity-100":'opacity-0'} absolute z-50  top-14 right-1 lg:right-8 lg:top-10 w-96  bg-white text-black `}>
      <p className='px-5 py-3 flex items-center space-x-10 opacity-100  hover:bg-gray-200  shadow-sm'> 
        <FaUserCircle color='rgb(0, 102, 167)' size={30}/> <span className='text-md'>Dileep B C</span>
      </p>
      <p className='px-5 py-3 flex items-center space-x-10 opacity-100  hover:bg-gray-200  shadow-sm'> 
        <MdOutlineAddIcCall color='rgb(0, 102, 167)' size={30}/> <span className='text-md'>9019664884</span>
      </p>
      <p className='px-5 py-3 flex items-center space-x-10 opacity-100  hover:bg-gray-200  shadow-sm'> 
        <MdAddLocationAlt color='rgb(0, 102, 167)' size={25}/> <span className='text-md'>My Adresses</span>
      </p>
      <p className='px-5 py-3 flex items-center space-x-10 opacity-100  hover:bg-gray-200  shadow-sm'> 
        <AiOutlineHeart color='rgb(0, 102, 167)' size={25}/> <span className='text-md'>My Favorite</span>
      </p>
      <p className='px-5 py-3 flex items-center space-x-10 opacity-100  hover:bg-gray-200  shadow-sm'> 
        <MdHistory color='rgb(0, 102, 167)' size={25}/> <span className='text-md'>My Orders</span>
      </p>
      <p className='px-5 py-3 flex items-center space-x-10 opacity-100  hover:bg-gray-200  shadow-sm'> 
        <BsPower color='rgb(0, 102, 167)' size={25}/> <span className='text-md'>Logout</span>
      </p>

    </div>
  )
}

export default Profile