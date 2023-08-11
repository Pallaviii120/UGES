// const {
//     Pool,
//     Client
// } = require('pg');
// const connectionString = process.env.DATABASE_URL || "postgres://postgres:Admin@123@localhost:5434/db_vertiv";
const mysql = require('mysql');
var sql = require('mssql');
//var log4js = require('log4js');
//var log = log4js.getLogger("app");
// var pool = mysql.createPool({
//     connectionLimit: 100000, 
//         host: '127.0.0.1',
//         user: 'root',
//         password: 'Admin@123',
//         database: 'db_nextg',
//         multipleStatements: true,
//         port: 3306,
//         timeout:500000
// });

// var pool = sql.ConnectionPool({
//     connectionLimit: 100000, 
//         user: 'sumela',
//         password: 'Password@12345',
//         server: '103.7.181.119', 
//         database: 'SimplyAmplify', 
//         multipleStatements: true,
//         timeout:500000
// });

var config = {
        user: 'sumela',
        password: 'Password@12345',
        server: '103.7.181.119', 
        database: 'SimplyAmplify',
        encrypt: false,
        trustServerCertificate: true,
}


module.exports = {
	
	    queryExexute: function (obj) {
        return new Promise(function (resolve, reject) {
                var connection = new sql.ConnectionPool(config)
                //connection is actually a connection pool
                connection.connect().then(function() {

                    var request = new sql.Request(connection);
                    request.query(obj.queryString).then(function(recordset) {
                        if(!recordset){
                            reject(error);
                        }else{
                            resolve(recordset);
                        }
                    }).catch(function(err) {
                        console.log("Json Error : " + err)
                        reject(err);
                    });
                }).catch(function(err) {
                        console.log("Json Error : " + err)
                        reject(err);
                });

        });
    },
}