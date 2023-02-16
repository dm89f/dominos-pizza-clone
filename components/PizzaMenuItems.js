import React from 'react'
import MenuItem from './MenuItem'



function PizzaMenuItems({menuItem}) {
  
  const { category, items } = menuItem;

  return (
    <section id={category.toUpperCase().split(' ').join('_')} className='menu_categs  relative pt-10 my-10 pb-10 border-b-2 border-gray-300 grid sm:grid-cols-2 lg:grid-cols-3 '>
      <span  className='absolute -top-6 left-6 text-lg bg-white p-3 rounded-full px-6'>{category}</span>
      {
        items.map( (item, idx)=>{
            return(
            <MenuItem key={category+item._id+idx} item={item} />
          )
        })

      }
      
    </section>
  )
}

export default PizzaMenuItems