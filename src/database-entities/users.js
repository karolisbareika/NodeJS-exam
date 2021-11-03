const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { dbConfig, secretKey } = require('../../src/config');


const registerUser = async (email, password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const con = await mysql.createConnection(dbConfig);
  const [result] = await con.execute(
    `
    INSERT INTO users(full_name, email, password)
    VALUES(?, ?, ?);
  `,
    [fullName, email, hashedPassword],
  );
  await con.end();
  return result;
};




const loginUser = async (email, password) => {
  const con = await mysql.createConnection(dbConfig);
  const [result] = await con.execute(
    `
    SELECT *
    FROM users
    WHERE email = ?;
  `,
    [email],
  );
  await con.end();
  const isLoggedIn = bcrypt.compareSync(password, result[0].password);
  if (!isLoggedIn) {
    throw new Error('Password or email is wrong.');
  }

  const token = jwt.sign(
    {
      userId: result[0].id,
      email: result[0].email,
    },
    secretKey,
  );

  return token;
};



module.exports = {
  registerUser,
  loginUser,
  };