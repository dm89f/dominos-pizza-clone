const {MenuItems} = require('../../models/MenuItem')

export default async function handler(req, res) {
  try{

    const menuItems = await MenuItems.find({});
    res.status(200).json({menuItems})

  }catch(err){

    console.log(err);
    res.status(400).json({error:err});

  }


}