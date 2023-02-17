import React, { useEffect, useState } from 'react'

function MenuItemPrice({size, crust, updateCrust, updateSize}) {



  return (
    <div className='flex space-x-2 py-5 border-y '>
      <div className='grow flex flex-col'>
        <label className='text-gray-500' htmlFor="size" >Size</label>
        <select className='p-1 rounded-sm' value={size} onChange={updateSize} name="size" id="size">
          <option value="Regular">Regular</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className='grow flex flex-col'>
        <label className='text-gray-500' htmlFor="crust" >Crust</label>
          <select className='p-1 rounded-sm' name="crust" value={crust} onChange={updateCrust} id="crust">
            <option value="Hand Toasted">Hand Toasted</option>
            <option value="Fresh Pan Pizza">Fresh Pan Pizza</option>
            <option value="Cheese Burst">Cheese Burst</option>
          </select>
      </div>
    </div>
  )
}

export default MenuItemPrice