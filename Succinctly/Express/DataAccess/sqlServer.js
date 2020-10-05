var express = require('express');
var app = express();

app.get('/', (req, res) => {
   
    const sql = require("msnodesqlv8");
    const connectionString = "server=(localdb)\\MSSQLLocalDB;Database=ReleaseDb;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
    const query = "SELECT * FROM cours";
    
    sql.query(connectionString, query, (err, rows) => {
        // console.log(rows);
        res.send(rows);
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running on port :5000');
});