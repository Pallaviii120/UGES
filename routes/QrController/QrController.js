var dbqyeryexecute = require("../../utils/dbqyeryexecute"); // this is for Query execution phase
var QrSqlc = require("./QrSqlc.js");
var log4js = require('log4js');
var log = log4js.getLogger("app");
var mailService = require("./QrEmailService");
const xlsx = require('xlsx');
// const fs = require('fs')
// const request = require('request');
// var spawn = require('child_process').spawn
// var QrEmail = require("./QrEmailService"); // This is emailing .js
// var Qrpush = require("./Qrpushnotify"); // This is push notification .js
// var jwt = require('jsonwebtoken');
// var sys_cre = require('./../../config/config_con.json');


module.exports = {

    getuserdata: function(req, res) {

        var Obj = QrSqlc.getuserdata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getclientdata: function(req, res) {

        var Obj = QrSqlc.getclientdata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },


    getzone: function(req, res) {

        var Obj = QrSqlc.getzone(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },


    getstate: function(req, res) {

        var Obj = QrSqlc.getstate(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getasm: function(req, res) {

        var Obj = QrSqlc.getasm(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getcity: function(req, res) {

        var Obj = QrSqlc.getcity(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getso: function(req, res) {

        var Obj = QrSqlc.getso(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getsr: function(req, res) {

        var Obj = QrSqlc.getsr(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getbeatdata: function(req, res) {

        var Obj = QrSqlc.getbeatdata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getoutletbybeat: function(req, res) {

        var Obj = QrSqlc.getoutletbybeat(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getdatabyasm: function(req, res) {

        var Obj = QrSqlc.getdatabyasm(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },

    getbeatdatabyasm: function(req, res) {

        var Obj = QrSqlc.getbeatdatabyasm(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",

                });
                res.status(200).json({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
                    data: record.recordset
                });
            })
            .catch(err => {
                log.error({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message
                });
                res.status(500).json({
                    "status": 500,
                    "mess": err.code,
                    "mess_body": err.message,
                    data: err.message
                });
            });
    },
    // runcallcycle:function(req,res){
    //     const workbook = xlsx.readFile('./uploads/callcycle.xlsx');  // Step 2
    //     let workbook_sheet = workbook.SheetNames;                // Step 3
    //     let workbook_response = xlsx.utils.sheet_to_json(        // Step 4
    //       workbook.Sheets[workbook_sheet[0]]
    //     );
    //     res.status(200).send({                                   // Step 5
    //       message: workbook_response,
    //     });
    // },

    // updatecallcycledata: function(req,res){
    //     var Obj = QrSqlc.updatecallcycledata(req, res);
    //     return new Promise(async function(resolve,reject){
    //         await dbqyeryexecute.queryExexute(Obj).then(record => {
    //             module.exports.runcallcycle();
    //                 log.info({
    //                     "status": 200,
    //                     "mess": "Record Saved !",
    //                     "mess_body": "Data Get successfully",
    
    //                 });
    //                 res.status(200).json({
    //                     "status": 200,
    //                     "mess": "Record Saved !",
    //                     "mess_body": "Data Get successfully",
    //                     data: record
    //                 });

    //             })
    //             .catch(err => {
    //                 log.error({
    //                     "status": 500,
    //                     "mess": err.code,
    //                     "mess_body": err.message
    //                 });
    //                 res.status(500).json({
    //                     "status": 500,
    //                     "mess": err.code,
    //                     "mess_body": err.message,
    //                     data: err.message
    //                 });
    //             });
    //     })

    // },




}
