const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./nextg.db');

const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100000, 
        host: '127.0.0.1',
        user: 'root',
        password: 'Admin@123',
        database: 'qr_attendance',
        multipleStatements: true,
        port: 3306,
        timeout:500000
});

module.exports = {
	    Dumpsqltosqlite: function (obj) {
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                        console.error('Database connection was closed.')
                    }
                    if (err.code === 'ER_CON_COUNT_ERROR') {
                        console.error('Database has too many connections.')
                    }
                    if (err.code === 'ECONNREFUSED') {
                        console.error('Database connection was refused.')
                    }
                    return reject(err);
                }
                connection.query('SHOW DATABASES', [], function (error, results) {
                    if (connection) connection.release();
                    try {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    } catch (err) {
                        console.log("Json Error : " + err)
                        reject(err);
                    }
                })
            });
        });
    },

}