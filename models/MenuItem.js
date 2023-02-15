const mongoose = require('mongoose');
const {menuItemSchema} = require('../models/schemas/MenuItemSchema')

mongoose.set( 'strictQuery', false ); 

mongoose.connect( process.env.MONGODB_URI).then( ()=>{
  console.log("DB Connected")
} ).catch(err=>{
  console.log(err)
});

let MenuItems;

if( mongoose.models.MenuItems){
  MenuItems=mongoose.models.MenuItems;
}else{
  MenuItems = mongoose.model( 'MenuItems', menuItemSchema  );
}


module.exports = {MenuItems}