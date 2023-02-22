const mongoose = require('mongoose');
const {Schema} = mongoose;

export const menuItemSchema = mongoose.Schema({

  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  isVeg:{
    type:Boolean,
    required:true
  },
  category:{
    type:Schema.Types.Array,
    required:true
  },
  canCustomize:{
    type:Boolean,
    required:true
  },
  isPizza:{
    type:Boolean,
    required:true
  },
  price:{
    type:Schema.Types.Mixed,
    required:true
  },
  totalOrders:{
    type:Number,
    default: 0
  }

});

