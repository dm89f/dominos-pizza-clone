import React from 'react'

function Profile({active}) {


  return (
    <div className={`transition ${active?"opacity-100":'opacity-0'} absolute z-50  top-14 right-1 lg:right-8 lg:top-10 w-96 h-96 bg-white`}>
      Profile
    </div>
  )
}

export default Profile