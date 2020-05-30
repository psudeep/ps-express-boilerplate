/**
 * Created by prashantsudeep on 30/5/2020. COVID19
 */

const mysql = require('mysql');
const chalk = require('chalk');
const debug = require('debug')('boot:models:mysqlConnect');

const poolCluster = mysql.createPool({
  connectionLimit : 10,
  host            : 'HOST',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db',
});

debug('connected to mysql database');

const queryDB = (query, cb) => {
  return new Promise((resolve, reject) => {
    poolCluster.getConnection((err, connection) => {
      if(err) {
        if(!cb){
          reject(err);
          return;
        }
        cb(err, null);
      }
      else {
        connection.query(query, (err, rows) => {
          connection.release();
          if(!cb){
            resolve(rows);
            return;
          }
          cb(err, rows);
        });
      }
    });
  });
};

module.exports = {
  queryDB,
};
