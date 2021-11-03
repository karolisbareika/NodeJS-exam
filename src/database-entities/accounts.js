const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { dbConfig, secretKey } = require('../../src/config');




const getAccount = async (req, res) => {
  const con = await mysql.createConnection(dbConfig);
  const [result] = await con.execute(
    `
    SELECT accounts.group_id, uGroups.name 
    FROM accounts 
    LEFT JOIN uGroups ON (accounts.group_id = uGroups.id) 
    WHERE user_id = ?;
  `,
  [user_id]
  );
  await con.end();
  return result;
};



    const postAccount = async (req, res) => {
      const con = await mysql.createConnection(dbConfig);
      const [result] = await con.execute(
        `
        INSERT INTO accounts (group_id, user_id)
        VALUES(?, ?);
      `,
        [group_id, user_id],
      );
      await con.end();
      return result;
    };

   

module.exports = {
  getAccount,
  postAccount
    };

