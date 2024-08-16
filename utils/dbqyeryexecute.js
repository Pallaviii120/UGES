// const {
//     Pool,
//     Client
// } = require('pg');
// const connectionString = process.env.DATABASE_URL || "postgres://postgres:Admin@123@localhost:5434/db_vertiv";
const mysql = require('mysql');
// var sql = require('mssql');
//var log4js = require('log4js');
//var log = log4js.getLogger("app");

var extraCode = require("../utils/extraCode");

var logger = require('logger').createLogger(); // logs to STDOUT
var logger = require('logger').createLogger('./log/' + extraCode.formatdateYYMMDD(new Date()) + '-development.log');
var pool = mysql.createPool({
    connectionLimit: 100000, 
        host: 'localhost',
        user: 'root',
        password: 'Password@123',
        database: 'db_uges',
        multipleStatements: true,
        port: 3306,
        timeout:500000
});

// var pool = sql.ConnectionPool({
//     connectionLimit: 100000, 
//         user: 'sumela',
//         password: 'Password@12345',
//         server: '103.7.181.119', 
//         database: 'SimplyAmplify', 
//         multipleStatements: true,
//         timeout:500000
// });

// var config = {
//     user: 'apadmin',
//     password: '$imply@mpl#fy@2018',
//     server: '103.7.181.119',
//     database: 'SimplyAmplify',
//     encrypt: false,
//     trustServerCertificate: true,
//     timeout: 500000,
//     multipleStatements: true,
// }


// module.exports = {

//     queryExexute: function(obj) {
//         return new Promise(function(resolve, reject) {
//             var connection = new sql.ConnectionPool(config)
//                 //connection is actually a connection pool
//             connection.connect().then(function() {

//                 var request = new sql.Request(connection);
//                 request.query(obj.queryString).then(function(recordset) {
//                     if (!recordset) {
//                         reject(error);
//                     } else {
//                         resolve(recordset);
//                     }
//                 }).catch(function(err) {
//                     console.log("Json Error : " + err)
//                     reject(err);
//                 });
//             }).catch(function(err) {
//                 console.log("Json Error : " + err)
//                 reject(err);
//             });

//         });
//     },.



    
    pool.getConnection((err, connection) => {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                logger.error('Database connection was closed.' + err.code)
                console.error('Database connection was closed.')
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                logger.error('Database has too many connections.' + err.code)
                console.error('Database has too many connections.')
            }
            if (err.code === 'ECONNREFUSED') {
                logger.error('Database connection was refused.' + err.code)
                console.error('Database connection was refused.')
            }
        }
        if (connection) connection.release()
    
        logger.info('Connection release.')
        return
    })
    function queryExecute(obj) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => { // Use 'connection' for the pool connection
                if (err) {
                    logger.error('Error getting database connection: ' + err);
                    return reject(err);
                }
    
                // Log or use connection.config if needed
                const connectionConfig = connection.config;
                logger.info('Connection configuration: ', connectionConfig);
    
                connection.query(obj.queryString, (error, results) => {
                    connection.release(); // Release the connection back to the pool
                    if (error) {
                        logger.error('Query execution error: ' + error);
                        return reject(error);
                    }
                    resolve(results);
                });
            });
        });
    }
    


// }
module.exports = { pool ,connectionConfig: pool.config.connectionConfig,queryExecute};