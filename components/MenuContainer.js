import React from 'react'
import PizzaMenuItems from './PizzaMenuItems'

function MenuContainer({menuItems}) {
  return (
    <section className='col-span-7 lg:mx-5 xl:col-span-5 xl:mx-10 mx-2'>
      <PizzaMenuItems menuItems={menuItems} />
    </section>
  )
}

export default MenuContainer