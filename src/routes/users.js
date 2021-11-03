const express = require('express');
const usersEntity = require('../database-entities/users');
const router = express.Router();


const handleRegisterUser = async (req, res) => {
  try {
    let {full_name, email, password } = req.body;
    const rows = await usersEntity.registerUser(full_name, email, password); 
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await usersEntity.loginUser(email, password); 
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error });
  }
};



router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);

module.exports = router;
