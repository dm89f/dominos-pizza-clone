const {Toppings} = require('../../models/models')

async function getToppings(){
  
  let toppings = await Toppings.find({});
  return toppings;

}


export default async function handler(req, res) {
  try{

    const toppings = await getToppings();
    res.status(200).json({toppings})

  }catch(err){

    console.log(err);
    res.status(400).json({error:err});

  }


}