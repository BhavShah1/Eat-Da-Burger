//Import MySQL dependency
var mysql = require("mysql");
var connection;

//Define connection parameters

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
	console.log("JAWSS!!!!!");
} else {
	connection = mysql.createConnection({
		port: '3306',
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
	});
	console.log("no jaws connection");
}

//Create connection
connection.connect(function(error) {
  if (error) {
    console.error('Connection error: ' + error.stack);
    return;
  }
  console.log('MySQL connection established! Connected as ID ' + connection.threadId);
});

// Export connection for ORM
module.exports = connection;