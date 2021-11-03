const express = require('express');
const usersEntity = require('../database-entities/users');
const router = express.Router();


const { isAuthenticated } = require('../middleware/authenticator');



const handleAccountsGroups = async (req, res) => {
  try {
    const { user_id } = req.body;
    const token = await usersEntity.loginUser(user_id);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error });
  }
};




const handleRegisterAccount = async (req, res) => {
  try {
    const { group_id, user_id } = req.body;
    const rows = await usersEntity.registerUser(group_id, user_id);
    
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};





router.get('/accounts', isAuthenticated, handleAccountsGroups); 

router.post('/accounts', isAuthenticated, handleRegisterAccount);


module.exports = router;





