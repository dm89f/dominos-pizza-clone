const mongoose = require('mongoose');
const {menuItemSchema} = require('../schemas/MenuItemSchema')
const {ToppingsSchema} = require('../schemas/ToppingsSchema')

mongoose.set( 'strictQuery', false ); 

mongoose.connect( process.env.MONGODB_URI).then( ()=>{
  console.log("DB Connected")
} ).catch(err=>{
  console.log(err)
});

let MenuItems;
let Toppings;
if( mongoose.models.MenuItems){
  MenuItems=mongoose.models.MenuItems;
}else{
  MenuItems = mongoose.model( 'MenuItems', menuItemSchema  );
}

if( mongoose.models.Toppings){
  Toppings=mongoose.models.Toppings;
}else{
  Toppings = mongoose.model( 'Toppings', ToppingsSchema  );
}


module.exports = {MenuItems, Toppings}