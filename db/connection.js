//require mysql
const mysql = require('mysql');

//creates connection info,using credentials to mysql database 
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'yourRootPassword',
  //employeeSchema
  database: 'employees_DB'
});

// connect and catch errors
connection.connect((err) => {
  if (err) throw err;
});
// exports module
module.exports = connection;