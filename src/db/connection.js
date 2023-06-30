const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: 'practice', 
  port: 3306
});

async function queryDb(sql, params) {
    return new Promise((resolve, reject) => {
        con.query(sql, params, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
}

module.exports = queryDb;
