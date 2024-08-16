var dbqyeryexecute = require("../../utils/dbqyeryexecute"); // this is for Query execution phase
var QrSqlc = require("./QrSqlc.js");
var log4js = require('log4js');
var log = log4js.getLogger("app");
var mailService = require("./QrEmailService");
const xlsx = require('xlsx');
const multer = require('multer');
const path = require('path');

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

    sync: function(req, res) {

        var Obj = QrSqlc.sync(req, res);
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

    getclient: function(req, res) {

        var Obj = QrSqlc.getclient(req, res);
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

    getcallcyclelistdata: function(req, res) {

        var Obj = QrSqlc.getcallcyclelistdata(req, res);
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

    getcallcycledatabyid: function(req, res) {

        var Obj = QrSqlc.getcallcycledatabyid(req, res);
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

    approvecallcycle: function(req, res) {

        var Obj = QrSqlc.approvecallcycle(req, res);
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

    rejectcallcycle: function(req, res) {

        var Obj = QrSqlc.rejectcallcycle(req, res);
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

    transferoutlet: function(req, res) {

        var Obj = QrSqlc.transferoutlet(req, res);
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

    inactiveoutlet: function(req, res) {

        var Obj = QrSqlc.inactiveoutlet(req, res);
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

    
    getasmdatabyid: function(req, res) {

        var Obj = QrSqlc.getasmdatabyid(req, res);
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

    validatecallcyclewithuser: function(req, res) {

        var Obj = QrSqlc.validatecallcyclewithuser(req, res);
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

    getdashdata: function(req, res) {

        var Obj = QrSqlc.getdashdata(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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

    admindash: function(req, res) {

        var Obj = QrSqlc.admindash(req, res);
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

    admindashregion: function(req, res) {

        var Obj = QrSqlc.admindashregion(req, res);
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

    getcallcyclecount: function(req, res) {

        var Obj = QrSqlc.getcallcyclecount(req, res);
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
    getpendingcallcycle: function(req, res) {

        var Obj = QrSqlc.getpendingcallcycle(req, res);
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

    getcallcyclelogdata: function(req, res) {

        var Obj = QrSqlc.getcallcyclelogdata(req, res);
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

    getcallcyclelistdata_admin: function(req, res) {

        var Obj = QrSqlc.getcallcyclelistdata_admin(req, res);
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

    getsosrcntbyasm: function(req, res) {

        var Obj = QrSqlc.getsosrcntbyasm(req, res);
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

    countbyclient: function(req, res) {

        var Obj = QrSqlc.countbyclient(req, res);
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



    specificpositionwisedata: function(req, res) {

        var Obj = QrSqlc.specificpositionwisedata(req, res);
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

    getclient: function(req, res) {

        var Obj = QrSqlc.getclient(req, res);
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

    getposition: function(req, res) {

        var Obj = QrSqlc.getposition(req, res);
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

    savecallcycle: function(req, res) {

        var Obj = QrSqlc.savecallcycle(req, res);
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

    updatecallcycle: function(req, res) {

        var Obj = QrSqlc.updatecallcycle(req, res);
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
    deletecallcycledatabyid: function (req, res) {

        var Obj = QrSqlc.deletecallcycledatabyid(req, res);
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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




    /**Original getAllBeats */
    getAllBeatsoriginal: function(req, res) {
        var Obj = QrSqlc.getAllBeatsoriginal(req, res);
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

    getClients: function(req, res) {

        var Obj = QrSqlc.getClients(req, res);
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
    
    getRegions: function(req, res) {

        var Obj = QrSqlc.getRegions(req, res);
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

    get_region_State: function(req, res) {

        var Obj = QrSqlc. get_region_State(req, res);
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

    get_State_district: function(req, res) {

        var Obj = QrSqlc. get_State_district(req, res);
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

    get_city: function(req, res) {

        var Obj = QrSqlc. get_city(req, res);
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

    /**BEATS dummy Table CRUD  */
    insert_beats_data: function(req, res) {
        var Obj = QrSqlc. insert_beats_data(req, res);
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

    getAllBeatsData: function(req, res) {
        var Obj = QrSqlc.getAllBeatsData(req, res);
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

    get_all_dist_mapping: function(req, res) {
        var Obj = QrSqlc.get_all_dist_mapping(req, res);
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

    getBeatByID: function(req, res) {
        var Obj = QrSqlc.getBeatByID(req, res);
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


    get_beat_Mapping_by_id: function(req, res) {
        var Obj = QrSqlc.get_beat_Mapping_by_id(req, res);
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

    update_beats_data: function(req, res) {
        var Obj = QrSqlc.update_beats_data(req, res);
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

    updateuserdata: function(req, res) {
        var Obj = QrSqlc.updateuserdata(req, res);
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


    updatehr: function(req, res) {
        var Obj = QrSqlc.updatehr(req, res);
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

    update_dist_mapping: function(req, res) {
        var Obj = QrSqlc.update_dist_mapping(req, res);
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

    update_user_beat_mapping: function(req, res) {
        var Obj = QrSqlc.update_user_beat_mapping(req, res);
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

    deleteBeatById: function(req, res) {
        var Obj = QrSqlc.deleteBeatById(req, res);
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

    getuserbyid: function(req, res) {
        var Obj = QrSqlc.getuserbyid(req, res);
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

    /**`````````````````````````User Master Dropdown``````````````````````````````` */
    
    getPositions: function(req, res) {
        var Obj = QrSqlc.getPositions(req, res);
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

    getuserState: function(req, res) {
        var Obj = QrSqlc.getuserState(req, res);
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
    
    getuserCity: function(req, res) {
        var Obj = QrSqlc.getuserCity(req, res);
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

    getbeatsByregion: function(req, res) {
        var Obj = QrSqlc.getbeatsByregion(req, res);
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

    getlevel2: function(req, res) {
        var Obj = QrSqlc.getlevel2(req, res);
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

    getlevel3: function(req, res) {
        var Obj = QrSqlc.getlevel3(req, res);
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

    getlevel4: function(req, res) {
        var Obj = QrSqlc.getlevel4(req, res);
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

    getlevel5: function(req, res) {
        var Obj = QrSqlc.getlevel5(req, res);
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

    getlevel6: function(req, res) {
        var Obj = QrSqlc.getlevel6(req, res);
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
    
    addnewusers: function(req, res) {
        var Obj = QrSqlc.addnewusers(req, res);
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
    execute_user_creation_job: function(req, res) {
        var Obj = QrSqlc.execute_user_creation_job(req, res);
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

    get_username: function(req, res) {
        var Obj = QrSqlc.get_username(req, res);
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


    getalldistributors: function(req, res) {
        var Obj = QrSqlc.getalldistributors(req, res);
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


    getDistributors: function(req, res) {
        var Obj = QrSqlc.getDistributors(req, res);
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
   
    getdata: function(req, res) {
        var Obj = QrSqlc.getdata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
 
                });
                res.status(200).json({
                    data: record.recordset[0]
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

    gethellreportdata: function(req, res) {
        var Obj = QrSqlc.gethellreportdata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
 
                });
                res.status(200).json({
                    data: record.recordset[0]
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

    getfmcgdata: function(req, res) {
        var Obj = QrSqlc.getfmcgdata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
 
                });
                res.status(200).json({
                    data: record.recordset[0]
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


    getucdata: function(req, res) {
        var Obj = QrSqlc.getucdata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
 
                });
                res.status(200).json({
                    data: record.recordset[0]
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

    getfmcgprdcalldata: function(req, res) {
        var Obj = QrSqlc.getfmcgprdcalldata(req, res);
        dbqyeryexecute.queryExexute(Obj).then(record => {
                log.info({
                    "status": 200,
                    "mess": "Record Saved !",
                    "mess_body": "Data Get successfully",
 
                });
                res.status(200).json({
                    data: record.recordset[0]
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


    get_route_id_max: function(req, res) {
        var Obj = QrSqlc.get_route_id_max(req, res);
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
    save_beat: function(req, res) {
        var Obj = QrSqlc.save_beat(req, res);
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

    savedist: function(req, res) {
        var Obj = QrSqlc.savedist(req, res);
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
    get_Beat_By_ID: function(req, res) {
        var Obj = QrSqlc.get_Beat_By_ID(req, res);
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

    getdistid: function(req, res) {
        var Obj = QrSqlc.getdistid(req, res);
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
    update_beats_data_org: function(req, res) {
        var Obj = QrSqlc.update_beats_data_org(req, res);
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
   
    delete_beat_by_id: function(req, res) {
        var Obj = QrSqlc.delete_beat_by_id(req, res);
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
    get_all_beat_mappings: function(req, res) {
        var Obj = QrSqlc.get_all_beat_mappings(req, res);
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
   
    get_all_user_id: function(req, res) {
        var Obj = QrSqlc.get_all_user_id(req, res);
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
    getallbeats: function(req, res) {
        var Obj = QrSqlc.getallbeats(req, res);
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
    get_beat_mappings_by_id: function(req, res) {
        var Obj = QrSqlc.get_beat_mappings_by_id(req, res);
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

    save_user_beat_mapping: function(req, res) {
        var Obj = QrSqlc. save_user_beat_mapping(req, res);
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
   

    // getlogindetails: function(req, res) {
    //     var Obj = QrSqlc.getlogindetails(req, res);
    //     dbqyeryexecute.queryExexute(Obj).then(record => {
    //             log.info({
    //                 "status": 200,
    //                 "mess": "Record Saved !",
    //                 "mess_body": "Data Get successfully",

    //             });
    //             res.status(200).json({
    //                 "status": 200,
    //                 "mess": "Record Saved !",
    //                 "mess_body": "Data Get successfully",
    //                 data: record.recordset
    //             });
    //         })
    //         .catch(err => {
    //             log.error({
    //                 "status": 500,
    //                 "mess": err.code,
    //                 "mess_body": err.message
    //             });
    //             res.status(500).json({
    //                 "status": 500,
    //                 "mess": err.code,
    //                 "mess_body": err.message,
    //                 data: err.message
    //             });
    //         });
    // },
    getuserlist: function(req, res) {
        var Obj = QrSqlc.getuserlist(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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

    saveticketdetails: function(req, res) {
        var Obj = QrSqlc.saveticketdetails(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    getallticketlist: function(req, res) {
        var Obj = QrSqlc.getallticketlist(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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

    getticketdatabyid: function(req, res) {
        var Obj = QrSqlc.getticketdatabyid(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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

    getsummarydataadmin: function(req, res) {
        var Obj = QrSqlc.getsummarydataadmin(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    getstatelist: function(req, res) {
        var Obj = QrSqlc.getstatelist(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    getdistrictlist: function(req, res) {
        var Obj = QrSqlc.getdistrictlist(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    gettalukalist: function(req, res) {
        var Obj = QrSqlc.gettalukalist(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    getvillagelist: function(req, res) {
        var Obj = QrSqlc.getvillagelist(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    getobstacle: function(req, res) {
        var Obj = QrSqlc.getobstacle(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    savewinddetails: function(req, res) {
        var Obj = QrSqlc.savewinddetails(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    getfarmreport: function(req, res) {
        var Obj = QrSqlc.getfarmreport(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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
    getfarmreportbyid: function(req, res) {
        var Obj = QrSqlc.getfarmreportbyid(req, res);
        dbqyeryexecute.queryExecute(Obj).then(record => {
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

}
