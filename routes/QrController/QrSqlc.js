// var dbValidation = require("./../../utils/dbValidation.js");
// const crypto = require('crypto'); // this is contain all Validation part
// const e = require("express");

module.exports = {
 
  
  getuserdata: function(req, res) {
    var obj = {};
    obj.queryString = `SELECT * FROM [NEXTG_DWH_HELLENERGY].[dbo].[dim_holding_user_master]`;
    // obj.arr = [req.body.n_reg_id];
    obj.arr=[];
    return obj;
  
  },
  updatecallcycledata: function(req, res) {
    var obj = {};
    obj.queryString = `select a.*,b.zone,b.state,b.city from MobiScheduleList a,MobiUser b where  a.userID=b.userID and a.month=7 and a.year=2023 and a.deleted=0 and b.zone='${req.body.zone}' and b.state='${req.body.state}' and b.city='${req.body.city}'`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  getzone: function(req, res) {
    var obj = {};
    obj.queryString = `select zone from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 group by zone`;
    // obj.arr = [req.body.n_reg_id];
    obj.arr=[];
    return obj;
  
  },

  getstate: function(req, res) {
    var obj = {};
    obj.queryString = `select state from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' group by state`;
    return obj;
  
  },

  getasm: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}'`;
    return obj;
  
  },

  getcity: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.userid}' `;
    return obj;
  
  },

  getso: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiUser where position in ('SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.userid}') and deleted=0`;
    return obj;
  
  },

  getsr: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiUser where positionID in (
      select positionID from apPosition_Levelwise1 where positionID in (select positionID from MobiUser where position in ('SALES REPRESENTATIVE') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.uid}' ) and deleted=0) and level2positionID='${req.body.pid}')`;
    return obj;
  
  },

  getbeatdata: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiRouteScheduleList where clientID='${req.body.client_id}' and userID='${req.body.userid}' and month='${req.body.month}' and year='${req.body.year}' and deleted=0`;
    return obj;
  
  },

  getoutletbybeat: function(req, res) {
    var obj = {};
    obj.queryString = `select a.clientRoute,b.* from apOutlet a,MobiScheduleList b where a.deleted=b.deleted and a.clientID=b.clientID and a.outletCode=b.outletCode and a.clientID=${req.body.client_id} and a.clientRoute='${req.body.route_name}' and b.month='${req.body.month}' and b.year='${req.body.year}' and b.deleted=0`;
    return obj;
  
  },
  
  getclientdata: function(req, res) {
    var obj = {};
    obj.queryString = `SELECT * FROM tbl_client_registration`;
    // obj.arr = [req.body.n_reg_id];
    obj.arr=[];
    return obj;
  
  },

  getdatabyasm: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='${req.body.userid}') and deleted=0) and deleted=0 and month='${req.body.month}' and year='${req.body.year}'`;
    // obj.arr = [req.body.n_reg_id];
    obj.arr=[];
    return obj;
  
  },

  getbeatdatabyasm: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiRouteScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='${req.body.userid}') and deleted=0) and deleted=0 and month='${req.body.month}' and year='${req.body.year}'`;
    // obj.arr = [req.body.n_reg_id];
    obj.arr=[];
    return obj;
  
  },


  
// --Total Data
// select * from MobiScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0) and deleted=0 and month='8' and year='2023' 

// --SR

// select userID from MobiUser where position in ('SALES REPRESENTATIVE') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0

// --SO

// select userID from MobiUser where position in ('SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0


// --USERS
// select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0) and deleted=0 and month='8' and year='2023')


// --BEATS
// select * from MobiRouteScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0) and deleted=0 and month='8' and year='2023'

  

}