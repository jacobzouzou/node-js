var express = require('express');
var app = express();

app.get('/', (req, res) => {
    const sql = require("msnodesqlv8");
    const connectionString = "Driver={ODBC Driver 17 for SQL Server};Server=.\\SQLEXPRESS;Database=ReleaseDb;Trusted_Connection=Yes;";
    const query = "SELECT * FROM cours";
    
    sql.query(connectionString, query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log(rows);
        res.send(rows);
    });
});

app.listen(5000, function () {
    console.log('Server is running on port :5000');
});