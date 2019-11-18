const mysql = require("mysql");
const {db} = require('./config');

const conn = mysql.createConnection(db);

conn.connect()

module.exports = conn