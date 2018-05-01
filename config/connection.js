require("dotenv").config();
var mysql = require("msql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQLPASSWORD,
    database: "burger_db"
});

connection.connect(function(err){
    if (err) {
        console.logerror("error connecting:" = err.stack);
        return;
    }
    console.log("connected: " + connection.threadId);
});

module.exports = connection;