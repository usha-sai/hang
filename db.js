var mysql = require('mysql');  
var con = mysql.createConnection({  
port: 3306,
host: "localhost",  
user: "root",  
password: ""  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE javatpoint", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
});  