const express = require('express');
const usersEntity = require('../database-entities/users');
const router = express.Router();


const { isAuthenticated } = require('../middleware/authenticator');



const handleSpecificBill = async (req, res) => {
  try {
    const { group_id } = req.body;
    const token = await usersEntity.loginUser(group_id);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error });
  }
};




const handleNewBill = async (req, res) => {
  try {
    const { group_id, amount, description } = req.body;
    const rows = await usersEntity.registerUser(group_id, amount, description);
    
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};





router.get('/bills/:id', isAuthenticated, handleSpecificBill); 

router.post('/bills', isAuthenticated, handleNewBill);


module.exports = router;



