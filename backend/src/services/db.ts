import mysql = require('mysql2/promise');
import config from '../config';

async function query(sql: string, params: any) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);
  
    return results;
  }
  
module.exports = query;
  