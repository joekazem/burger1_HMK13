const mysql = require('mysql');

 connection = mysql.createConnection({
     host: 'localhost',
     port: 3306,
     user: 'root',
     password: 'maggies113',
     database: 'burgers_db',
     multipleStatements: true
 });

//connection = mysql.createConnection({
 //   host: 'us-cdbr-east-02.cleardb.com',
 //   port: 3306,
 //   user: 'beadae349e0bbf',
  //  password: 'a87627cb',
  //  database: 'heroku_cc95a2a137e37df',
  //  multipleStatements: true
//});

// connection.connect(function(err){
//     if(err) throw err;
//     console.log('connected!');
// });

module.exports = connection;

// mysql://beadae349e0bbf:a87627cb@us-cdbr-east-02.cleardb.com/heroku_cc95a2a137e37df?reconnect=true