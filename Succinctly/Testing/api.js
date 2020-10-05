
module.exports = {
    //
    test:(callback)=>{callback(true);},

    getCustomers: (callback) => {
        user='{id:2, name:jacob}';
        callback(user);
    },

    getCours: (callback) => {
        const sql = require("msnodesqlv8");
        const connectionString = "server=(localdb)\\MSSQLLocalDB;Database=ReleaseDb;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
        const query = "SELECT * FROM cours";

        sql.query(connectionString, query, (err, rows) => {
            callback(rows);
        });
    }
}
