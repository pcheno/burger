require("dotenv").config();
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQLPASSWORD,
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.log("error connecting:" + err.stack);
        return;
    }
    console.log("connected: " + connection.threadId);
});

module.exports = connection;