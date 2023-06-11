const express = require("express");
const router = express.Router();
const Burger = require('../models/burgerModel')

router.get("/getallburgers", async(req, res) => {
  
    try {
        const burgers = await Burger.find({})
        res.send(burgers)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/addburger", async(req, res) => {

    const burger = req.body.burger

   try {
    const newburger = new Burger({
        name : burger.name,
        image :burger.image,
        varients : ['small','medium','large'],
        description : burger.description,
        category : burger.category,
        prices : [burger.prices]
    })
    await newburger.save()
    res.send('New burger Added Successfully')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
});

router.post("/getburgerbyid", async(req, res) => {

 const burgerid = req.body.burgerid

 try {
     const burger = await burger.findOne({_id : burgerid})
     res.send(burger)
 } catch (error) {
     return res.status(400).json({ message: error });
 }
  
});

router.post("/editburger", async(req, res) => {

    const editedburger = req.body.editedburger

    try {
        const burger = await burger.findOne({_id : editedburger._id})
        
        burger.name= editedburger.name,
        burger.description= editedburger.description,
        burger.image= editedburger.image,
        burger.category=editedburger.category,
        burger.prices = [editedburger.prices]

        await burger.save()

        res.send('burger Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deleteburger", async(req, res) => {

    const burgerid = req.body.burgerid

  try {
    await burgerid.findOneAndDelete({_id : burgerid})
    res.send('burger Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});




module.exports = router;