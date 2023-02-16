

export function printMenuCategories(menuItems){

  let set = new Set();
  menuItems.menuItems && menuItems.menuItems.forEach(item=>{
    item.category.forEach( (category) =>{
      set.add(category);
    })
  })
  console.log(set);

}