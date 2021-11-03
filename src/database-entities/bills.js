const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { dbConfig, secretKey } = require('../../src/config');




const getBill = async (req, res) => {
  const con = await mysql.createConnection(dbConfig);
  const [result] = await con.execute(
    `
    SELECT *
    FROM bills
    WHERE group_id = ?
  `,
  [group_id]
  );
  await con.end();
  return result;
};



    const postBill = async (req, res) => {
      const con = await mysql.createConnection(dbConfig);
      const [result] = await con.execute(
        `
        INSERT INTO bills (group_id, amount, description)
        VALUES(?, ?, ?);
      `,
        [group_id, amount, description],
      );
      await con.end();
      return result;
    };

   

module.exports = {
  getBill,
  postBill
    };


    