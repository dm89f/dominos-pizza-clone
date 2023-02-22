const mongoose = require('mongoose');
const {Schema} = mongoose;


export const ToppingsSchema = Schema({
  title:{
    type:Schema.Types.String,
    required:true
  },
  image:{
    type:Schema.Types.String,
    required:true
  },
  isVeg:{
    type:Schema.Types.Boolean,
    required:true

  }
})