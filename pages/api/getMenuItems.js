const {MenuItems} = require('../../models/models')

export default async function handler(req, res) {
  try{

    const menuItems = await MenuItems.find({}).limit(20);
    res.status(200).json({menuItems})

  }catch(err){

    console.log(err);
    res.status(400).json({error:err});

  }


}
