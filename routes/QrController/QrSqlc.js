// // var dbValidation = require("./../../utils/dbValidation.js");
// // const crypto = require('crypto'); // this is contain all Validation part
// // const e = require("express");

const { getlogindetails } = require("./QrController");

// module.exports = {
 
  
//   getuserdata: function(req, res) {
//     var obj = {};
//     obj.queryString = `SELECT * FROM [NEXTG_DWH_HELLENERGY].[dbo].[dim_holding_user_master]`;
//     // obj.arr = [req.body.n_reg_id];
//     obj.arr=[];
//     return obj;
  
//   },
//   updatecallcycledata: function(req, res) {
//     var obj = {};
//     obj.queryString = `select a.*,b.zone,b.state,b.city from MobiScheduleList a,MobiUser b where  a.userID=b.userID and a.month=7 and a.year=2023 and a.deleted=0 and b.zone='${req.body.zone}' and b.state='${req.body.state}' and b.city='${req.body.city}'`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   getzone: function(req, res) {
//     var obj = {};
//     obj.queryString = `select zone from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 group by zone`;
//     // obj.arr = [req.body.n_reg_id];
//     obj.arr=[];
//     return obj;
  
//   },

//   getclient: function(req, res) {
//     var obj = {};
//     obj.queryString = `select * from apClients `;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   getcallcyclelistdata: function(req, res) {
//     var obj = {};
//     if(req.body.position==null || req.body.position == 'null'){
//       obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA`;
//     }else if(req.body.position=='REGIONAL SALES MANAGER'){
//       obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA where clientID='${req.body.clientID}'`;
//     }else{
//       obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA where createdby='${req.body.id}'`;
//     }

//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   getcallcycledatabyid: function(req, res) {
//     var obj = {};
//     obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,([s_asm]) as asmid,(select firstName from MobiUser where userID=s_so) as s_so,([s_so]) as soid,(select firstName from MobiUser where userID=s_sr) as s_sr,([s_sr]) as srid,[asm_position],[so_position],[clientID],[outlet],[beat],[month],[year],[status],[createdby],[created_date] from CALLCYCLE_LIST_DATA where n_callcycle_id='${req.body.id}'`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   approvecallcycle: function(req, res) {
//     var obj = {};
//     obj.queryString = `update CALLCYCLE_LIST_DATA set status='${req.body.sts}' where n_callcycle_id='${req.body.id}'`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   rejectcallcycle: function(req, res) {
//     var obj = {};
//     obj.queryString = `update CALLCYCLE_LIST_DATA set status='${req.body.sts}',s_remark='${req.body.remark}' where n_callcycle_id='${req.body.id}'`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   transferoutlet: function(req, res) {
//     var obj = {};
//     obj.queryString = `Insert into CallcycleTFDLLog(n_outlet_id,s_name,d_date,s_beat_transfer,s_beat_in,s_remark,s_created_by,d_created_date) values('${n_outlet_id}','${s_name}','${d_date}','${s_beat_transfer}','${s_beat_in}','${s_remark}','${s_created_by}','${d_created_date}')`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   transferoutlet: function(req, res) {
//     var obj = {};
//     obj.queryString = `Insert into CallcycleTFDLLog(n_outlet_id,s_name,d_date,s_beat_transfer,s_beat_in,s_remark,s_created_by) values('${req.body.n_outlet_id}','${req.body.s_name}','${req.body.date}','${req.body.beat_name_from}','${req.body.beat_name_to}','${req.body.swap_reason}','${req.body.created_by}')`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   inactiveoutlet: function(req, res) {
//     var obj = {};
//     obj.queryString = `Insert into CallcycleTFDLLog(n_outlet_id,s_name,d_date,s_remark,s_created_by) values('${req.body.n_outlet_id}','${req.body.s_name}','${req.body.date}','${req.body.inactive_reason}','${req.body.created_by}')`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },


  
//   getasmdatabyid: function(req, res) {
//     var obj = {};
//     obj.queryString = `select * from MobiUser where userID='${req.body.uid}'`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   getposition: function(req, res) {
//     var obj = {};
//     obj.queryString = `select * from apPosition `;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   getstate: function(req, res) {
//     var obj = {};
//     obj.queryString = `select state from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' group by state`;
//     return obj;
  
//   },

//   getasm: function(req, res) {
//     var obj = {};
//     obj.queryString = `select * from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}'`;
//     return obj;
  
//   },

//   getcity: function(req, res) {
//     var obj = {};
//     obj.queryString = `select * from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.userid}' `;
//     return obj;
  
//   },

//   getso: function(req, res) {
//     var obj = {};
//     // obj.queryString = `select * from MobiUser where position in ('SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.userid}') and deleted=0 and clientID='${req.body.clientid}'`;
//     obj.queryString=`select * from MobiUser nolock where positionID in (select level2positionID from apPosition_Levelwise1 nolock where level3positionID='${req.body.pid}' and deleted=0) and position in('SALES OFFICER') and clientID='${req.body.clientID}'`
//     return obj;
  
//   },

//   getsr: function(req, res) {
//     var obj = {};
//     obj.queryString=`select * from MobiUser nolock where positionID in (select level2positionID from apPosition_Levelwise1 nolock where level2positionID='${req.body.pid}' and deleted=0) and position in('SALES REPRESENTATIVE')`
//     // obj.queryString = `select * from MobiUser where positionID in (
//     //   select positionID from apPosition_Levelwise1 where positionID in (select positionID from MobiUser where position in ('SALES REPRESENTATIVE') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.uid}' ) and deleted=0) and level2positionID='${req.body.pid}')`;
//     return obj;
  
//   },

//   getbeatdata: function(req, res) {
//     var obj = {};
//     obj.queryString = `select * from MobiRouteScheduleList where clientID='${req.body.client_id}' and userID='${req.body.userid}' and month='${req.body.month}' and year='${req.body.year}' and deleted=0`;
//     return obj;
  
//   },

//   getoutletbybeat: function(req, res) {
//     var obj = {};
//     obj.queryString = `select a.clientRoute,a.ID as outletid,b.* from apOutlet a,MobiScheduleList b where a.deleted=b.deleted and a.clientID=b.clientID and a.outletCode=b.outletCode and a.clientID=${req.body.client_id} and a.clientRoute='${req.body.route_name}' and b.month='${req.body.month}' and b.year='${req.body.year}' and b.deleted=0`;
//     return obj;
  
//   },
  
//   getclientdata: function(req, res) {
//     var obj = {};
//     obj.queryString = `SELECT * FROM tbl_client_registration`;
//     // obj.arr = [req.body.n_reg_id];
//     obj.arr=[];
//     return obj;
  
//   },

//   getdatabyasm: function(req, res) {
//     var obj = {};
//     obj.queryString = `select * from MobiScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='${req.body.userid}') and deleted=0) and deleted=0 and month='${req.body.month}' and year='${req.body.year}'`;
//     // obj.arr = [req.body.n_reg_id];
//     obj.arr=[];
//     return obj;
  
//   },

//   getbeatdatabyasm: function(req, res) {
//     var obj = {};
//     // select * from MobiRouteScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='${req.body.userid}') and deleted=0) and deleted=0 and month='${req.body.month}' and year='${req.body.year}' order by userID asc
//      obj.queryString = `select a.*,b.firstName from MobiRouteScheduleList a,MobiUser b where a.userID in(select userID from MobiUser nolock where positionID in (select level2positionID from apPosition_Levelwise1 nolock where level3positionID=${req.body.pid} and deleted=0) and position in('SALES OFFICER','SALES REPRESENTATIVE') and clientID=${req.body.clientID}) and a.deleted=0 and a.month='${req.body.month}' and a.year='${req.body.year}' and a.userID=b.userID order by userID asc`;
//     // obj.arr = [req.body.n_reg_id];
//    // obj.arr=[];
//     return obj;
  
//   },

//   savecallcycle: function(req, res) {
//     var obj = {};
//     obj.queryString = `Insert into CALLCYCLE_LIST_DATA(s_region,s_state,s_city,s_asm,s_so,s_sr,asm_position,so_position,clientID,outlet,beat,month,year,status,createdby) values('${req.body.s_region}','${req.body.s_state}','${req.body.s_city}','${req.body.s_asm}','${req.body.s_so}','${req.body.s_sr}','${req.body.asm_pos}','${req.body.so_pos}','${req.body.clientID}','${JSON.stringify(req.body.outlet)}','${JSON.stringify(req.body.beat)}','${req.body.month}','${req.body.year}','${req.body.status}','${req.body.createdby}');`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   updatecallcycle: function(req, res) {
//     var obj = {};
//     obj.queryString = `Update CALLCYCLE_LIST_DATA set s_region='${req.body.s_region}',s_state='${req.body.s_state}',s_city='${req.body.s_city}',s_asm='${req.body.s_asm}',s_so='${req.body.s_so}',s_sr='${req.body.s_sr}',asm_position='${req.body.asm_pos}',so_position='${req.body.so_pos}',clientID='${req.body.clientID}',outlet='${JSON.stringify(req.body.outlet)}',beat='${JSON.stringify(req.body.beat)}',month='${req.body.month}',year='${req.body.year}',status='${req.body.status}',s_remark='',modifiedby='${req.body.createdby}',modified_date=GETDATE() where n_callcycle_id='${req.body.n_callcycle_id}'`;
//     // obj.arr = [req.body.n_reg_id];
//     // obj.arr=[];
//     return obj;
  
//   },

//   // savecallcycle: function(req, res) {
//   //   if(req.body.beat.length != 0){
//   //     qry=``
//   //     req.body.beat.forEach(element => {
//   //       qry+= `Update MobiRouteScheduleList set deleted=1 where ID='${element.ID}' and '${element.clientID}' and '${element.userID}' and'${element.routeID}';Insert into MobiRouteScheduleList(clientID,userID,routeID,routeName,activityList,year,month,status,[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27],[28],[29],[30],[31],effectiveFrom,effectiveTo,createdBy,deleted) values('${element.clientID}','${element.userID}','${element.routeID}','${element.routeName}','${element.activityList}','${req.body.year}','${req.body.month}','${element.status}','${element[1]}','${element[2]}','${element[3]}','${element[4]}','${element[5]}','${element[6]}','${element[7]}','${element[8]}','${element[9]}','${element[10]}','${element[11]}','${element[12]}','${element[13]}','${element[14]}','${element[15]}','${element[16]}','${element[17]}','${element[18]}','${element[19]}','${element[20]}','${element[21]}','${element[22]}','${element[23]}','${element[24]}','${element[25]}','${element[26]}','${element[27]}','${element[28]}','${element[29]}','${element[30]}','${element[31]}','${element.effectiveFrom}','${element.effectiveTo}','${element.createdBy}','${element.deleted}');`;
//   //     });

//   //   }
//   //   var obj = {};
//   //   obj.queryString = qry;
//   //   return obj;

  
//   // },


  
// // --Total Data
// // select * from MobiScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0) and deleted=0 and month='8' and year='2023' 

// // --SR

// // select userID from MobiUser where position in ('SALES REPRESENTATIVE') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0

// // --SO

// // select userID from MobiUser where position in ('SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0


// // --USERS
// // select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0) and deleted=0 and month='8' and year='2023')


// // --BEATS
// // select * from MobiRouteScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='10834') and deleted=0) and deleted=0 and month='8' and year='2023'

  

// }








// var dbValidation = require("./../../utils/dbValidation.js");
// const crypto = require('crypto'); // this is contain all Validation part
// const e = require("express");

var today = new Date();

module.exports = {

   
  sync: function(req, res) {
    var obj = {};
    obj.queryString = `exec [SimplyAmplify]..[MobiSyncActivity_sp] N'${JSON.stringify(req.body)}'`;
    // obj.arr = [req.body.n_reg_id];
    obj.arr=[];
    return obj;
  
  },
  
  getuserdata: function(req, res) {
    var obj = {};
    if(req.body.clientID != 0){
      obj.queryString = `SELECT * FROM [SimplyAmplify].[dbo].[mobiuser] where clientID=${req.body.clientID}`;
    }else{
      obj.queryString = `SELECT * FROM [SimplyAmplify].[dbo].[mobiuser]`;
    }

    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
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

  getclient: function(req, res) {
    var obj = {};
    obj.queryString = `select * from apClients `;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  getcallcyclelistdata: function(req, res) {
    var obj = {};
    if(req.body.position==null || req.body.position == 'null'){
      obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA where month=(month(GETDATE())+1)`;
    }else if(req.body.position=='RSM'){
      if(req.body.zone=='EAST' || req.body.zone=='WEST'){
        obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA where s_region in('EAST','WEST') and month=(month(GETDATE())+1)`;
        // '${req.body.zone}'
      }else if(req.body.zone=='NORTH'){
        obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA where s_region in('NORTH') and month=(month(GETDATE())+1)`; 
      }else{
        obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA where s_region in('SOUTH') and month=(month(GETDATE())+1)`; 
      }

    }else{
      obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,(select firstName from MobiUser where userID=s_so) as s_so,(select firstName from MobiUser where userID=s_sr) as s_sr,[outlet],[beat],[month],[year],[status],[s_remark],[createdby],[created_date] from CALLCYCLE_LIST_DATA  where createdby='${req.body.id}' and month=(month(GETDATE())+1)`;
    }

    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  getcallcycledatabyid: function(req, res) {
    var obj = {};
    obj.queryString = `SELECT [n_callcycle_id],[s_region],[s_state],[s_city],(select firstName from MobiUser where userID=s_asm) as s_asm,([s_asm]) as asmid,(select firstName from MobiUser where userID=s_so) as s_so,([s_so]) as soid,(select firstName from MobiUser where userID=s_sr) as s_sr,([s_sr]) as srid,[asm_position],[so_position],[clientID],[outlet],[beat],[month],[year],[status],[createdby],[created_date] from CALLCYCLE_LIST_DATA where n_callcycle_id='${req.body.id}'`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  approvecallcycle: function(req, res) {
    var obj = {};
    obj.queryString = `update CALLCYCLE_LIST_DATA set status='${req.body.sts}' where n_callcycle_id='${req.body.id}';Insert into CALLCYCLE_LOGS(n_callcycle_id,updated_by,updated_date,n_status,s_remark) values('${req.body.id}','${req.body.updatedby}','${today.toLocaleString()}','${req.body.sts}','Approved')`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  rejectcallcycle: function(req, res) {
    var obj = {};
    obj.queryString = `update CALLCYCLE_LIST_DATA set status='${req.body.sts}',s_remark='${req.body.remark}' where n_callcycle_id='${req.body.id}';Insert into CALLCYCLE_LOGS(n_callcycle_id,updated_by,updated_date,n_status,s_remark) values('${req.body.id}','${req.body.updatedby}','${today.toLocaleString()}','${req.body.sts}','${req.body.remark}')`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  // transferoutlet: function(req, res) {
  //   var obj = {};
  //   obj.queryString = `Insert into CallcycleTFDLLog(n_outlet_id,s_name,d_date,s_beat_transfer,s_beat_in,s_remark,s_created_by,d_created_date) values('${n_outlet_id}','${s_name}','${d_date}','${s_beat_transfer}','${s_beat_in}','${s_remark}','${s_created_by}','${d_created_date}')`;
  //   // obj.arr = [req.body.n_reg_id];
  //   // obj.arr=[];
  //   return obj;
  
  // },

  transferoutlet: function(req, res) {
    var obj = {};
    obj.queryString = `Insert into CallcycleTFDLLog(n_outlet_id,s_name,d_date,s_beat_transfer,s_beat_in,s_remark,s_created_by) values('${req.body.n_outlet_id}','${req.body.s_name}','${req.body.date}','${req.body.beat_name_from}','${req.body.beat_name_to}','${req.body.swap_reason}','${req.body.created_by}'); update apOutlet set clientRoute='${req.body.beat_name_to}' where outletCode='${req.body.n_outlet_id}'`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  inactiveoutlet: function(req, res) {
    var obj = {};
    obj.queryString = `Insert into CallcycleTFDLLog(n_outlet_id,s_name,d_date,s_remark,s_created_by) values('${req.body.n_outlet_id}','${req.body.s_name}','${req.body.date}','${req.body.inactive_reason}','${req.body.created_by}');update apOutlet set deleted=1 where outletCode='${req.body.n_outlet_id}';update MobiScheduleList set deleted=1 where outletCode='${req.body.n_outlet_id}'`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },


  
  getasmdatabyid: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiUser where userID='${req.body.uid}'`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  validatecallcyclewithuser: function(req, res) {
    var obj = {};
    obj.queryString = `select * from CALLCYCLE_LIST_DATA where s_so='${req.body.so}' and s_sr='${req.body.sr}' and month='${req.body.month}' and year='${req.body.year}'`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },


  getdashdata: function(req, res) {
    var obj = {};
    if(req.body.position=='RSM'){
      obj.queryString = `select (select count(*) from [CALLCYCLE_LIST_DATA] where status=0 and s_region='${req.body.zone}' and month=(month(GETDATE())+1)) as pending,(select count(*) from [CALLCYCLE_LIST_DATA] where status=1 and s_region='${req.body.zone}' and month=(month(GETDATE())+1)) as approved,(select count(*) from [CALLCYCLE_LIST_DATA] where status=2 and s_region='${req.body.zone}' and month=(month(GETDATE())+1)) as rejected,(select count(*) from [CALLCYCLE_LIST_DATA] where s_region='${req.body.zone}' and month=(month(GETDATE())+1)) as total`;
      // SELECT * from CALLCYCLE_LIST_DATA where s_region='${req.body.zone}
    }else{
      obj.queryString = `select (select count(*) from [CALLCYCLE_LIST_DATA] where status=0 and createdby='${req.body.userid}' and month=(month(GETDATE())+1)) as pending,(select count(*) from [CALLCYCLE_LIST_DATA] where status=1 and createdby='${req.body.userid}' and month=(month(GETDATE())+1)) as approved,(select count(*) from [CALLCYCLE_LIST_DATA] where status=2 and createdby='${req.body.userid}' and month=(month(GETDATE())+1)) as rejected,(select count(*) from [CALLCYCLE_LIST_DATA] where createdby='${req.body.userid}' and month=(month(GETDATE())+1)) as total `;
    }

    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },


  admindash: function(req, res) {
    var obj = {};
    obj.queryString = `select distinct position,count(position) as count from MobiUser where deleted=0 and clientID='${req.body.clientid}' group by position`
    
    // `select(select Count(*) from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')as ASM,
    // (select Count(*) from MobiUser where position in ('ZONAL SALES MANAGER') and deleted=0 and clientID='${req.body.clientid}')as ZSM,
    // (select Count(*) from MobiUser where position in ('REGIONAL SALES MANAGER') and deleted=0 and clientID='${req.body.clientid}')as RSM,
    // (select Count(*) from MobiUser where position in ('RURAL SALES OFFICER') and deleted=0 and clientID='${req.body.clientid}')as RSO,
    // (select Count(*) from MobiUser where position in ('SALES OFFICER') and deleted=0 and clientID='${req.body.clientid}')as SO,
    // (select Count(*) from MobiUser where position in ('SALES REPRESENTATIVE') and deleted=0 and clientID='${req.body.clientid}')as SR,
    // (select Count(*) from MobiUser where position in ('SALES EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')as SE,
    // (select Count(*) from MobiUser where position in ('MERCHANDISER') and deleted=0 and clientID='${req.body.clientid}')as MER,
    // (select Count(*) from MobiUser where position in ('NATIONAL SALES MANAGER') and deleted=0 and clientID='${req.body.clientid}')as NSM,
    // (select Count(*) from MobiUser where position in ('RETAIL SALES EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')as RESM,
    // (select Count(*) from MobiUser where position in ('SALES SUPERVISOR','SALES MANAGER','SALES HEAD') and deleted=0 and clientID='${req.body.clientid}')as SS,
    // (select Count(*) from MobiUser where position in ('KEY ACCOUNT MANAGER','KEY ACCOUNT EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')as KAM,
    // (select Count(*) from MobiUser where position in ('PROJECT LEAD') and deleted=0 and clientID='${req.body.clientid}')as PL,
    // (select Count(*) from MobiUser where position in ('PROMOTER') and deleted=0 and clientID='${req.body.clientid}')as PROMO,
    // (select Count(*) from MobiUser where position in ('ADMIN') and deleted=0 and clientID='${req.body.clientid}')as ADMIN,
    // (select (select Count(*) from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('ZONAL SALES MANAGER') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('REGIONAL SALES MANAGER') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('RURAL SALES OFFICER') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('SALES OFFICER') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('SALES REPRESENTATIVE') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('SALES EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('MERCHANDISER') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('NATIONAL SALES MANAGER') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('RETAIL SALES EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('SALES SUPERVISOR','SALES MANAGER','SALES HEAD') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('KEY ACCOUNT MANAGER','KEY ACCOUNT EXECUTIVE') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('PROJECT LEAD') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('PROMOTER') and deleted=0 and clientID='${req.body.clientid}')+(select Count(*) from MobiUser where position in ('ADMIN') and deleted=0 and clientID='${req.body.clientid}')) as SUB_TTL,
    // (select Count(*) from MobiUser where deleted=0 and clientID='${req.body.clientid}')as TOTAL`
    
// select(select Count(*) from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0)as ASM,(select Count(*) from MobiUser where position in ('ZONAL SALES MANAGER') and deleted=0)as ZSM,(select Count(*) from MobiUser where position in ('REGIONAL SALES MANAGER') and deleted=0)as RSM,(select Count(*) from MobiUser where position in ('RURAL SALES OFFICER') and deleted=0)as RSO,(select Count(*) from MobiUser where position in ('SALES OFFICER') and deleted=0)as SO,(select Count(*) from MobiUser where position in ('SALES REPRESENTATIVE') and deleted=0)as SR,(select Count(*) from MobiUser where position in ('SALES EXECUTIVE') and deleted=0)as SE,(select Count(*) from MobiUser where position in ('MERCHANDISER') and deleted=0)as MER,(select Count(*) from MobiUser where position in ('NATIONAL SALES MANAGER') and deleted=0)as NSM,(select Count(*) from MobiUser where position in ('RETAIL SALES EXECUTIVE') and deleted=0)as RESM,(select Count(*) from MobiUser where position in ('SALES SUPERVISOR','SALES MANAGER','SALES HEAD') and deleted=0)as SS,(select Count(*) from MobiUser where position in ('KEY ACCOUNT MANAGER','KEY ACCOUNT EXECUTIVE') and deleted=0)as KAM,(select Count(*) from MobiUser where position in ('PROJECT LEAD') and deleted=0)as PL,(select Count(*) from MobiUser where position in ('PROMOTER') and deleted=0)as PROMO,(select Count(*) from MobiUser where position in ('ADMIN') and deleted=0)as ADMIN,(select (select Count(*) from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0)+(select Count(*) from MobiUser where position in ('ZONAL SALES MANAGER') and deleted=0)+(select Count(*) from MobiUser where position in ('REGIONAL SALES MANAGER') and deleted=0)+(select Count(*) from MobiUser where position in ('RURAL SALES OFFICER') and deleted=0)+(select Count(*) from MobiUser where position in ('SALES OFFICER') and deleted=0)+(select Count(*) from MobiUser where position in ('SALES REPRESENTATIVE') and deleted=0)+(select Count(*) from MobiUser where position in ('SALES EXECUTIVE') and deleted=0)+(select Count(*) from MobiUser where position in ('MERCHANDISER') and deleted=0)+(select Count(*) from MobiUser where position in ('NATIONAL SALES MANAGER') and deleted=0)+(select Count(*) from MobiUser where position in ('RETAIL SALES EXECUTIVE') and deleted=0)+(select Count(*) from MobiUser where position in ('SALES SUPERVISOR','SALES MANAGER','SALES HEAD') and deleted=0)+(select Count(*) from MobiUser where position in ('KEY ACCOUNT MANAGER','KEY ACCOUNT EXECUTIVE') and deleted=0)+(select Count(*) from MobiUser where position in ('PROJECT LEAD') and deleted=0)+(select Count(*) from MobiUser where position in ('PROMOTER') and deleted=0)+(select Count(*) from MobiUser where position in ('ADMIN') and deleted=0)) as SUB_TTL,(select Count(*) from MobiUser where deleted=0)as TOTAL;
    return obj;
  
  },


  
  admindashregion: function(req, res) {
    var obj = {};
    obj.queryString = `
    select(select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and month=(month(GETDATE())+1) and clientID='${req.body.clientid}')as EAST,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and month=(month(GETDATE())+1) and status=0 and clientID='${req.body.clientid}')as EAST_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and month=(month(GETDATE())+1) and status=1 and clientID='${req.body.clientid}')as EAST_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and month=(month(GETDATE())+1) and status=2 and clientID='${req.body.clientid}')as EAST_REJ,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and month=(month(GETDATE())+1) and clientID='${req.body.clientid}')as WEST,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and month=(month(GETDATE())+1) and status=0 and clientID='${req.body.clientid}')as WEST_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and month=(month(GETDATE())+1) and status=1 and clientID='${req.body.clientid}')as WEST_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and month=(month(GETDATE())+1) and status=2 and clientID='${req.body.clientid}')as WEST_REJ,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and month=(month(GETDATE())+1) and clientID='${req.body.clientid}')as NORTH,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and month=(month(GETDATE())+1) and status=0 and clientID='${req.body.clientid}')as NORTH_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and month=(month(GETDATE())+1) and status=1 and clientID='${req.body.clientid}')as NORTH_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and month=(month(GETDATE())+1) and status=2 and clientID='${req.body.clientid}')as NORTH_REJ,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and month=(month(GETDATE())+1) and clientID='${req.body.clientid}')as SOUTH,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and month=(month(GETDATE())+1) and status=0 and clientID='${req.body.clientid}')as SOUTH_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and month=(month(GETDATE())+1) and status=1 and clientID='${req.body.clientid}')as SOUTH_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and month=(month(GETDATE())+1) and status=2 and clientID='${req.body.clientid}')as SOUTH_REJ,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and clientID='${req.body.clientid}')as TOTAL_EAST,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and status=0 and clientID='${req.body.clientid}')as TOTAL_EAST_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and status=1 and clientID='${req.body.clientid}')as TOTAL_EAST_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and status=2 and clientID='${req.body.clientid}')as TOTAL_EAST_REJ,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and clientID='${req.body.clientid}')as TOTAL_WEST,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and status=0 and clientID='${req.body.clientid}')as TOTAL_WEST_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and status=1 and clientID='${req.body.clientid}')as TOTAL_WEST_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and status=2 and clientID='${req.body.clientid}')as TOTAL_WEST_REJ,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and clientID='${req.body.clientid}')as TOTAL_NORTH,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and status=0 and clientID='${req.body.clientid}')as TOTAL_NORTH_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and status=1 and clientID='${req.body.clientid}')as TOTAL_NORTH_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and status=2 and clientID='${req.body.clientid}')as TOTAL_NORTH_REJ,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and clientID='${req.body.clientid}')as TOTAL_SOUTH,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and status=0 and clientID='${req.body.clientid}')as TOTAL_SOUTH_PEN,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and status=1 and clientID='${req.body.clientid}')as TOTAL_SOUTH_APP,
    (select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and status=2 and clientID='${req.body.clientid}')as TOTAL_SOUTH_REJ
    `;
    // select (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and month=(month(GETDATE())+1))as EAST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and month=(month(GETDATE())+1))as WEST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and month=(month(GETDATE())+1))as NORTH,(select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and month=(month(GETDATE())+1))as SOUTH,(select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST')as TOTAL_EAST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST')as TOTAL_WEST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH')as TOTAL_NORTH,(select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH')as TOTAL_SOUTH
    return obj;
  
  },


  getclient: function(req, res) {
    var obj = {};
    obj.queryString = `select distinct (SELECT a.clientName FROM apClients a where a.clientID in (b.clientID) ) as clientName,b.clientID from MobiUser b where b.deleted=0`;
    // select (select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST' and month=(month(GETDATE())+1))as EAST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST' and month=(month(GETDATE())+1))as WEST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH' and month=(month(GETDATE())+1))as NORTH,(select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH' and month=(month(GETDATE())+1))as SOUTH,(select count(*) from CALLCYCLE_LIST_DATA where s_region='EAST')as TOTAL_EAST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='WEST')as TOTAL_WEST,(select count(*) from CALLCYCLE_LIST_DATA where s_region='NORTH')as TOTAL_NORTH,(select count(*) from CALLCYCLE_LIST_DATA where s_region='SOUTH')as TOTAL_SOUTH
    return obj;
  
  },

  getcallcyclecount: function(req, res) {
    var obj = {};
    obj.queryString = `select(
      select count(distinct userID) from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0) as total_callcycle,
      (select count(*) from CALLCYCLE_LIST_DATA where clientID='${req.body.clientid}' and status=1 and month=(month(getdate())+1)) as submitted_callcycle,(select count(distinct userID) from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID='${req.body.clientid}' and status=1 and month=(month(getdate())+1))) as Pending_callcycle`;
    return obj;
  
  },


  getpendingcallcycle: function(req, res) {
    var obj = {};
    obj.queryString = `
    select a.clientID,a.userID,a.firstName,a.positionID,(select level3positionID from apPosition_Levelwise1  where positionID=a.positionID and deleted=0) as ASM from MobiUser a where a.userID in (select distinct userID from MobiRouteScheduleList where clientID=35 and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID='${req.body.clientid}' and status=1 and month=(month(getdate())+1)))`;
  // select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID= and status=1 and month=(month(getdate())+1)))
    return obj;
  
  },

  
  specificpositionwisedata: function(req, res) {
    var obj = {};
    obj.queryString = `select position,count(position) as cnt from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where deleted=0 and clientID='${req.body.clientid}' group by userID ) group by position`;
    
    // `select distinct b.position,(select count(distinct c.userID) from MobiRouteScheduleList c,MobiUser d where c.deleted=d.deleted and c.clientID=d.clientID and c.userID=d.userID and c.deleted=0 and d.clientID='${req.body.clientid}' and d.position=b.position ) as ucnt from MobiRouteScheduleList a,MobiUser b where a.deleted=b.deleted and a.clientID=b.clientID and a.userID=b.userID and a.deleted=0 and a.clientID='${req.body.clientid}'`;
  // select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID= and status=1 and month=(month(getdate())+1)))
    return obj;
  
  },

  getcallcyclelogdata: function(req, res) {
    var obj = {};
    obj.queryString = `SELECT a.n_callcycle_id as id,(select firstName from mobiuser where userID=b.createdby) as createdby,(select firstName from mobiuser where userID=a.updated_by) as updatedby,b.created_date,a.updated_date,a.n_status,a.s_remark FROM [SimplyAmplify].[dbo].[CALLCYCLE_LOGS] a, CALLCYCLE_LIST_DATA b where a.n_callcycle_id=b.n_callcycle_id`;
  // select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID= and status=1 and month=(month(getdate())+1)))
    return obj;
  
  },


  getcallcyclelistdata_admin: function(req, res) {
    var obj = {};
    var date = new Date;
    var month = parseInt(date.toISOString().split('T')[0].split('-')[1])
    var nextmonth = month+1
    obj.queryString = `select * from CALLCYCLE_LIST_DATA where month='${nextmonth}'`;
  // select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID= and status=1 and month=(month(getdate())+1)))
    return obj;
  
  },

  getsosrcntbyasm: function(req, res) {
    var obj = {};
    obj.queryString = `select (select count(distinct level2positionID) from apPosition_Levelwise1 where level3positionID in (select positionID from MobiUser where userID='${req.body.userid}') and deleted=0 ) as so,(select count(distinct mobiuserID) from apPosition_Levelwise1 where level3positionID in (select positionID from MobiUser where userID='${req.body.userid}' and deleted=0) and deleted=0) as sr,((select count(distinct level2positionID) as SO from apPosition_Levelwise1 where level3positionID in (select positionID from MobiUser where userID='${req.body.userid}') and deleted=0)+(select count(distinct mobiuserID) as SR from apPosition_Levelwise1 where level3positionID in (select positionID from MobiUser where userID='${req.body.userid}' and deleted=0) and deleted=0)) as total_so_sr`;
  // select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID= and status=1 and month=(month(getdate())+1)))
    return obj;
  
  },


  countbyclient: function(req, res) {
    var obj = {};
    obj.queryString = `select (
      select count(*) from MobiUser where deleted=0 and clientID='${req.body.clientid}') as total,
      (select count(distinct userID) from MobiRouteScheduleList where deleted=0 and clientID='${req.body.clientid}') as callcycle`;
  // select * from MobiUser where userID in (select distinct userID from MobiRouteScheduleList where clientID='${req.body.clientid}' and deleted=0 and userID not in (select CASE WHEN s_sr=0 THEN s_so ELSE s_sr END as s_sr from CALLCYCLE_LIST_DATA where clientID= and status=1 and month=(month(getdate())+1)))
    return obj;
  
  },





  getposition: function(req, res) {
    var obj = {};
    obj.queryString = `select * from apPosition `;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  getstate: function(req, res) {
    var obj = {};
    obj.queryString = `select state from MobiUser where deleted=0 and zone='${req.body.zone}' group by state`;

    // select state from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' group by state
    return obj;
  
  },

  getasm: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiUser where positionID in (select DISTINCT level3positionID from apPosition_Levelwise1 union all select DISTINCT level4positionID from apPosition_Levelwise1 union all select DISTINCT level5positionID from apPosition_Levelwise1) and deleted=0 and zone='${req.body.zone}'`
    
    // select * from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE','ZONAL SALES MANAGER','REGIONAL SALES MANAGER') and deleted=0 and zone='${req.body.zone}';
    // and state='${req.body.state}'
    return obj;
  
  },

  getcity: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.userid}' `;
    return obj;
  
  },

  getso: function(req, res) {
    var obj = {};
    // obj.queryString = `select * from MobiUser where position in ('SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.userid}') and deleted=0 and clientID='${req.body.clientid}'`;
    obj.queryString=`select * from MobiUser nolock where positionID in (select level2positionID from apPosition_Levelwise1 nolock where level3positionID='${req.body.pid}' and deleted=0)`
    // and clientID='${req.body.clientID}'
    // and position in('SALES OFFICER','RURAL SALES OFFICER','ZONAL SALES MANAGER') 
    return obj;
  
  },

  getsr: function(req, res) {
    var obj = {};
    obj.queryString=`select * from MobiUser nolock where positionID in (select positionID from apPosition_Levelwise1 nolock where level2positionID='${req.body.pid}' and deleted=0) `
    // and position in('SALES REPRESENTATIVE','MERCHANDISER')
    // obj.queryString = `select * from MobiUser where positionID in (
    //   select positionID from apPosition_Levelwise1 where positionID in (select positionID from MobiUser where position in ('SALES REPRESENTATIVE') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and zone='${req.body.zone}' and state='${req.body.state}' and userID='${req.body.uid}' ) and deleted=0) and level2positionID='${req.body.pid}')`;
    return obj;
  
  },

  getbeatdata: function(req, res) {
    var obj = {};
    obj.queryString = `select * from MobiRouteScheduleList where clientID='${req.body.client_id}' and userID='${req.body.userid}' and month='${req.body.month}' and year='${req.body.year}' and deleted=0`;
    return obj;
  
  },

  getoutletbybeat: function(req, res) {
    var obj = {};
    obj.queryString = `select a.clientRoute,a.outletCode as outletid,b.* from apOutlet a,MobiScheduleList b where a.deleted=b.deleted and a.clientID=b.clientID and a.outletCode=b.outletCode and a.clientID=${req.body.client_id} and a.clientRoute='${req.body.route_name}' and b.month='${req.body.month}' and b.year='${req.body.year}' and b.deleted=0 and b.userID='${req.body.userid}'`;
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
    obj.queryString = `select * from MobiScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','MERCHANDISER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='${req.body.userid}') and deleted=0) and deleted=0 and month='${req.body.month}' and year='${req.body.year}'`;
    // obj.arr = [req.body.n_reg_id];
    obj.arr=[];
    return obj;
  
  },

  getbeatdatabyasm: function(req, res) {
    var obj = {};
    // select * from MobiRouteScheduleList where userID in (select userID from MobiUser where position in ('SALES REPRESENTATIVE','SALES OFFICER') and city in (select city from MobiUser where position in ('AREA SALES MANAGER','AREA SALES EXECUTIVE') and deleted=0 and userID='${req.body.userid}') and deleted=0) and deleted=0 and month='${req.body.month}' and year='${req.body.year}' order by userID asc
     obj.queryString = `select a.*,b.firstName from MobiRouteScheduleList a,MobiUser b where a.userID in(select userID from MobiUser nolock where userID in (select mobiuserID from apPosition_Levelwise1 nolock where level3positionID=${req.body.pid} and deleted=0) and clientID=${req.body.clientID}) and a.deleted=0 and a.month='${req.body.month}' and a.year='${req.body.year}' and a.userID=b.userID order by userID asc`;

    //  and position in('SALES OFFICER','RURAL SALES OFFICER','SALES REPRESENTATIVE','MERCHANDISER')
    // obj.arr = [req.body.n_reg_id];
   // obj.arr=[];
    return obj;
  
  },

  savecallcycle: function(req, res) {
    var obj = {};
    obj.queryString = `Insert into CALLCYCLE_LIST_DATA(s_region,s_state,s_city,s_asm,s_so,s_sr,asm_position,so_position,clientID,outlet,beat,month,year,status,createdby) values('${req.body.s_region}','${req.body.s_state}','${req.body.s_city}','${req.body.s_asm}','${req.body.s_so}','${req.body.s_sr}','${req.body.asm_pos}','${req.body.so_pos}','${req.body.clientID}','${JSON.stringify(req.body.outlet)}','${JSON.stringify(req.body.beat)}','${req.body.month}','${req.body.year}','${req.body.status}','${req.body.createdby}')`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },

  updatecallcycle: function(req, res) {
    var obj = {};
    obj.queryString = `Update CALLCYCLE_LIST_DATA set asm_position='${req.body.asm_pos}',so_position='${req.body.so_pos}',clientID='${req.body.clientID}',outlet='${JSON.stringify(req.body.outlet)}',beat='${JSON.stringify(req.body.beat)}',status='${req.body.status}',s_remark='',modifiedby='${req.body.createdby}',modified_date=GETDATE() where n_callcycle_id='${req.body.n_callcycle_id}';Insert into CALLCYCLE_LOGS(n_callcycle_id,updated_by,updated_date,n_status,s_remark) values('${req.body.n_callcycle_id}','${req.body.createdby}','${today.toLocaleString()}','${req.body.status}','Updated by user')`;
    // obj.arr = [req.body.n_reg_id];
    // obj.arr=[];
    return obj;
  
  },
  
  deletecallcycledatabyid: function (req, res) {
    var obj = {};
    obj.queryString = `delete FROM CALLCYCLE_LIST_DATA where n_callcycle_id='${req.body.callcycle_id}';Insert into CALLCYCLE_LOGS(n_callcycle_id,updated_by,updated_date,s_remark) values('${req.body.callcycle_id}','${req.body.updatedby}','${today.toLocaleString()}','Record Deleted')`;
    return obj;

  },


  

  // savecallcycle: function(req, res) {
  //   if(req.body.beat.length != 0){
  //     qry=``
  //     req.body.beat.forEach(element => {
  //       qry+= `Update MobiRouteScheduleList set deleted=1 where ID='${element.ID}' and '${element.clientID}' and '${element.userID}' and'${element.routeID}';Insert into MobiRouteScheduleList(clientID,userID,routeID,routeName,activityList,year,month,status,[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27],[28],[29],[30],[31],effectiveFrom,effectiveTo,createdBy,deleted) values('${element.clientID}','${element.userID}','${element.routeID}','${element.routeName}','${element.activityList}','${req.body.year}','${req.body.month}','${element.status}','${element[1]}','${element[2]}','${element[3]}','${element[4]}','${element[5]}','${element[6]}','${element[7]}','${element[8]}','${element[9]}','${element[10]}','${element[11]}','${element[12]}','${element[13]}','${element[14]}','${element[15]}','${element[16]}','${element[17]}','${element[18]}','${element[19]}','${element[20]}','${element[21]}','${element[22]}','${element[23]}','${element[24]}','${element[25]}','${element[26]}','${element[27]}','${element[28]}','${element[29]}','${element[30]}','${element[31]}','${element.effectiveFrom}','${element.effectiveTo}','${element.createdBy}','${element.deleted}');`;
  //     });

  //   }
  //   var obj = {};
  //   obj.queryString = qry;
  //   return obj;

  
  // },


  
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


 /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~Beats~~~~~~~~~~~~~~~~~~~~~ */
 getAllBeatsoriginal: function (req, res) {
  var obj = {};
  if(req.body.clientID==0){
    obj.queryString = `SELECT * FROM [SimplyAmplify].[dbo].[apRoute]`;
  }else{
    obj.queryString = `SELECT * FROM [SimplyAmplify].[dbo].[apRoute] where clientID=${req.body.clientID}`;
  }

  return obj;
},

/**````````````````````````````Dependent Dropdowns``````````````````````````` */

get_region_State: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT stateID,stateDescription FROM [SimplyAmplify].[dbo].[apState] where regionID='${req.body.id}' `;
  return obj;
},

get_State_district: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT districtID,districtDescription FROM [SimplyAmplify].[dbo].[apDistrict] where stateID='${req.body.id}' `;
  return obj;
},

get_city: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT cityID,cityDescription FROM [SimplyAmplify].[dbo].[apCity]`;
  return obj;
},


/**~~~~~~~~~~~~~~~~~~~~~BEATS dummy Table CRUD~~~~~~~~~~~~~~~~~~~~~~  */
insert_beats_data: function (req, res) {
  var obj = {};

  const effectiveDate = new Date(req.body.effective_date);
  const formattedDate = `${effectiveDate.getFullYear()}-${(effectiveDate.getMonth() + 1).toString().padStart(2, '0')}-${effectiveDate.getDate().toString().padStart(2, '0')} ${effectiveDate.getHours().toString().padStart(2, '0')}:${effectiveDate.getMinutes().toString().padStart(2, '0')}:${effectiveDate.getSeconds().toString().padStart(2, '0')}.${effectiveDate.getMilliseconds().toString().padStart(3, '0')}`;

  obj.queryString = `INSERT INTO [SimplyAmplify].[dbo].[apRoute] (routeID, clientID, routeName, effectiveDate, city, state, region, deleted, distributorname, status, district,created,createdBy) VALUES (${req.body.routeid}, ${req.body.clientid}, '${req.body.route}', '${formattedDate}', '${req.body.city}', '${req.body.state}', '${req.body.region}', ${req.body.deleted_status}, '${req.body.distributor}', '${req.body.beat_status}', '${req.body.district}','${formattedDate}',1)`;

  return obj;

},

getAllBeatsData: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT * FROM [SimplyAmplify].[dbo].[apRoute] where deleted=0`;
  return obj;
},


get_all_dist_mapping: function (req, res) {
  var obj = {};
  if(req.body.clientID==0){
    obj.queryString = `SELECT a.*,(select clientName from apClients where clientID=a.clientID) as clientName FROM [SimplyAmplify].[dbo].[apRoute] a where a.deleted=0`;
  }else{
    obj.queryString = `SELECT a.*,(select clientName from apClients where clientID=a.clientID) as clientName FROM [SimplyAmplify].[dbo].[apRoute] a where a.deleted=0 and a.clientID=${req.body.clientID}`;
  }

  return obj;
},

getBeatByID: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT * FROM [SimplyAmplify].[dbo].[apRoute] where ID='${req.body.ID}'`;
  return obj;
},


get_beat_Mapping_by_id: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT a.*,(select clientName from apClients where clientID=a.clientID) as clientName FROM [SimplyAmplify].[dbo].[apRoute] a where a.ID='${req.body.ID}'`;
  return obj;
},

update_beats_data: function (req, res) {
  const effectiveDate = new Date(req.body.effective_date);

  const formattedDate = `${effectiveDate.getFullYear()}-${(effectiveDate.getMonth() + 1).toString().padStart(2, '0')}-${effectiveDate.getDate().toString().padStart(2, '0')} ${effectiveDate.getHours().toString().padStart(2, '0')}:${effectiveDate.getMinutes().toString().padStart(2, '0')}:${effectiveDate.getSeconds().toString().padStart(2, '0')}.${effectiveDate.getMilliseconds().toString().padStart(3, '0')}`;

  var obj = {};

  obj.queryString = `update  [SimplyAmplify].[dbo].[apRoute] set clientID=${req.body.clientid},routeName='${req.body.route}', effectiveDate='${formattedDate}', city='${req.body.city}', state='${req.body.state}', region='${req.body.region}',deleted=${req.body.deleted_status},status='${req.body.beat_status}', distributorname='${req.body.distributor}', district='${req.body.district}' where ID='${req.body.ID}' `;
  return obj;
},


updateuserdata: function (req, res) {

  var obj = {};

  obj.queryString = `update  [SimplyAmplify].[dbo].[mobiuser] set clientID='${req.body.clientID}',userID='${req.body.userID }',userTypeID='${req.body.usertyepID}',userName='${req.body.userName }',password='${req.body.password}',positioncode='${req.body.positioncode}',positionType='${req.body.positiontype}',firstName='${req.body.firstName}',lastName='${req.body.lastname}',gender='${req.body.gender}',dob=${req.body.dob},age=${req.body.age},bloodGroup='${req.body.bloodgroup}',email1='${req.body.email}',branch='${req.body.branch}',phone1='${req.body.phone1}',phone2='${req.body.phone2}',tlCode='${req.body.tlcode}',tlName='${req.body.tlname}',fmCode='${req.body.fmcode}',fmName='${req.body.fmname}',brand='${req.body.brand}',deleted=${req.body.deleted},position='${req.body.position}',city='${req.body.city}',deactivatedate=${req.body.deactivationdate},doj=${req.body.doj},emp_code='${req.body.emp_code}',dor=${req.body.dor},fmempcode='${req.body.fmempcode}',lwd=${req.body.lwd},state='${req.body.state}',zone='${req.body.zone}',positionID='${req.body.positionID}',empID='${req.body.empID}',channeltype='${req.body.channeltype}',payroll='${req.body.payroll}',modifiedBy='${req.body.modifiedby}' where ID=${req.body.id}`;
  return obj;
},


updatehr: function (req, res) {

  var obj = {};

  obj.queryString = `update  [SimplyAmplify].[dbo].[apposition_levelwise1] set level2positionID=${req.body.level2},level3positionID=${req.body.level3},level4positionID=${req.body.level4},level5positionID=${req.body.level5},level6positionID=${req.body.level6},level7positionID=${req.body.level7},modified=GETDATE() where clientID='${req.body.clientID}' and mobiuserID='${req.body.userID }' and positionID='${req.body.positionID}'`;
  return obj;
},



update_dist_mapping: function (req, res) {

  var obj = {};
  obj.queryString = `update  [SimplyAmplify].[dbo].[apRoute] set distributorname='${req.body.dist}' where ID='${req.body.map_id}'`;
  return obj;
},



update_user_beat_mapping: function (req, res) {

  var obj = {};

  obj.queryString = `INSERT INTO [SimplyAmplify].[dbo].[MobiRouteScheduleList](clientID,userID,routeID,routeName,year,month,status,[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27],[28],[29],[30],[31],created,createdBy,deleted)values(${req.body.clientID},${req.body.userid},${req.body.obj_data.routeID},'${req.body.obj_data.routeName}',YEAR(GETDATE()),MONTH(GETDATE()),1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,GETDATE(),1,0)`;
  return obj;
},








deleteBeatById: function (req, res) {
  var obj = {};
  obj.queryString = `delete FROM [SimplyAmplify].[dbo].[apRoute] where ID='${req.body.ID}'`;
  return obj;
},

getuserbyid: function (req, res) {
  var obj = {};
  obj.queryString = `select a.*,b.level2positionID,b.level3positionID,b.level4positionID,b.level5positionID,b.level6positionID,b.level7positionID  FROM [SimplyAmplify].[dbo].[mobiuser] a,[SimplyAmplify].[dbo].[apPosition_Levelwise1] b where a.userID=b.mobiuserID and a.userID='${req.body.id}' and a.deleted=b.deleted and a.deleted=0`;
  return obj;
},

/**~~~~~~~~~~~~~~~~~~~~~~~User Master Dropdowns~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` */
get_username: function (req, res) {
  var obj = {};
  obj.queryString = `select * from mobiuser where clientID='${req.body.cli_id}'  and userID=(select max(userID) from mobiuser where clientID='${req.body.cli_id}')`;
  return obj;
},


getPositions: function (req, res) {
  var obj = {};
  obj.queryString = `select * from apUsersTypes where  clientID='${req.body.cli_id}'  and deleted=0;`;
  return obj;
},

getClients: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT clientID,clientName FROM [SimplyAmplify].[dbo].[apClients] where deleted=0`;
  return obj;
},

getRegions: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT regionID,regionDescription FROM [SimplyAmplify].[dbo].[apRegion] where regionDescription IN ('North','South','East','West') AND regionID IN(2,1,3,4)`;
  return obj;
},

getuserState: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT stateID,stateDescription FROM [SimplyAmplify].[dbo].[apState]`;
  return obj;
},

getuserCity: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT cityID,cityDescription FROM [SimplyAmplify].[dbo].[apCity]`;
  return obj;
},

getbeatsByregion: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT routeID,routeName from [SimplyAmplify].[dbo].[apRoute] where region='${req.body.selectedRegion} and '${req.body.client}' and deleted=0;`;
  return obj;
},

getlevel2: function (req, res) {
  var obj = {};
  obj.queryString = `select * from [SimplyAmplify].[dbo].[MobiUser]  where clientID='${req.body.ID}' and deleted=0;`;
  return obj;
},

getlevel3: function (req, res) {
  var obj = {};
  obj.queryString = `select * from [SimplyAmplify].[dbo].[MobiUser]  where clientID='${req.body.ID}' and deleted=0;`;
  return obj;
},

getlevel4: function (req, res) {
  var obj = {};
  obj.queryString = `select * from [SimplyAmplify].[dbo].[MobiUser] where clientID='${req.body.ID}' and deleted=0;`;
  return obj;
},

getlevel5: function (req, res) {
  var obj = {};
  obj.queryString = `select * from [SimplyAmplify].[dbo].[MobiUser]  where clientID='${req.body.ID}' and deleted=0;`;
  return obj;
},

getlevel6: function (req, res) {
  var obj = {};
  obj.queryString = `select * from [SimplyAmplify].[dbo].[MobiUser]  where clientID='${req.body.ID}' and deleted=0;`;
  return obj;
},

addnewusers: function (req, res) {
  var obj = {};
  obj.queryString = `Exec [dbo].[user_creation] '${req.body.formdata[0].client}','${req.body.formdata[0].username}','${req.body.formdata[0].password}','${req.body.formdata[0].fullname}','${req.body.formdata[0].position}','${req.body.formdata[0].positiontype}','${req.body.formdata[0].positioncode}','${req.body.formdata[0].doj}','${req.body.formdata[0].contactno}','${req.body.formdata[0].email}','${req.body.formdata[0].address}','${req.body.formdata[0].city}','${req.body.formdata[0].state}','${req.body.formdata[0].region}','${req.body.formdata[0].employeecode}','${req.body.formdata[1].level2}','${req.body.formdata[1].level3}','${req.body.formdata[1].level4}','${req.body.formdata[1].level5}','${req.body.formdata[1].level6}','${req.body.formdata[0].payroll}','${req.body.formdata[0].process}','${req.body.formdata[0].validated}','${req.body.formdata[0].createdDate}','${req.body.formdata[0].createdby}','${req.body.formdata[0].deleted}','${req.body.formdata[0].channel}','${req.body.formdata[0].remark}','${req.body.formdata[0].existing_code}','${req.body.formdata[0].brand}'`;
  return obj;
},


execute_user_creation_job: function (req, res) {
  var obj = {};
  obj.queryString = `Exec [dbo].[usp_usermaster_transfer]`;
  return obj;
},

//Exec [dbo].[usp_usermaster_transfer]
// Exec [dbo].[usp_usermaster_transfer] 


getalldistributors: function (req, res) {
  var obj = {};
  if(req.body.clientID==0){
    obj.queryString = `select a.sitename,a.siteAddress, b.cityDescription, c.stateDescription,d.clientName, e.regionDescription from apSites a, apCity b, apState c, apClients d, apRegion e where a.deleted=0 and a.cityID in (select cityID from apCity where cityid in (select cityID from apSites where deleted=0)) and a.cityID=b.cityID  and a.stateID=c.stateID and a.clientID=d.clientID and c.regionID=e.regionID`;
  }else{
    obj.queryString = `select a.sitename,a.siteAddress, b.cityDescription, c.stateDescription,d.clientName, e.regionDescription from apSites a, apCity b, apState c, apClients d, apRegion e where a.deleted=0 and a.cityID in (select cityID from apCity where cityid in (select cityID from apSites where deleted=0)) and a.cityID=b.cityID  and a.stateID=c.stateID and a.clientID=d.clientID and c.regionID=e.regionID and d.clientID=${req.body.clientID}`;
  }

  return obj;
},
getDistributors: function (req, res) {
  var obj = {};
  obj.queryString = `select * from apSites where deleted=0 and clientID in (select clientID from apClients where deleted=0);`;
  return obj;
},

getdata: function (req, res) {
  var obj = {};
  obj.queryString = `exec [NEXTG_DWH_HELLENERGY]..[usp_mobi_getreportdata_sp] N'{"FormID": "${req.body.FormID}","UserID": "${req.body.UserID}","Data": {"report": "${req.body.Data['report']}" }}' `;
  return obj;
},

gethellreportdata: function (req, res) {
  var obj = {};
  obj.queryString = `exec [NEXTG_DWH_HELLENERGY].[dbo].[usp_mobile_summary_hellenergy_datewise_new] N'{"FormID": "${req.body.FormID}","UserID": ${req.body.UserID},"Date": "${req.body.Date}","Month": "${req.body.Month}","DateKey": "${req.body.DateKey}","MonthKey": "${req.body.MonthKey}","StartDate": "${req.body.StartDate}","DateStartKey": "${req.body.DateStartKey}","Data": {"report": "${req.body.Data.report}"}}' `;
  return obj;
},

getfmcgdata: function (req, res) {
  var obj = {};
  obj.queryString = `exec [NEXTG_DWH_FMCG]..[usp_mobile_sales_signoff] N'{"FormID": "${req.body.FormID}","UserID": "${req.body.UserID}","Data": {"report": "${req.body.Data['report']}" }}' `;
  return obj;
},

getucdata: function (req, res) {
  var obj = {};
  obj.queryString = `exec [NEXTG_DWH_HELLENERGY]..[usp_mobile_sales_signoff_uppercrust] N'{"FormID": "${req.body.FormID}","UserID": "${req.body.UserID}","Data": {"report": "${req.body.Data['report']}" }}' `;
  return obj;
},


getfmcgprdcalldata: function (req, res) {
  var obj = {};
  obj.queryString = `EXEC [NEXTG_DWH_FMCG].[dbo].[usp_mobile_productive_uc] N'{"FormID": "${req.body.FormID}","UserID": "${req.body.UserID}","MonthKey":"${req.body.MonthKey}","Data": {"report": "${req.body.Data['report']}" }}' `;
  return obj;
},


getCity: function (req, res) {
  var obj = {};
  obj.queryString = `select * from apCity;`;
  return obj;
},
get_route_id_max: function (req, res) {
  var obj = {};
  obj.queryString = `select max(routeID) as maxrouteID from apRoute;`;
  return obj;
},


save_beat: function (req, res) {
  var obj = {};
  obj.queryString = `insert into apRoute (routeID,clientID,routeName,effectiveDate,city,state,region,created,createdBy,deleted,distributorname,status) values('${req.body.route_id}','${req.body.s_client}','${req.body.s_route_name}','${req.body.d_effective}','${req.body.s_city}','${req.body.s_state}','${req.body.s_region}','${req.body.created}','${req.body.createdby}','${req.body.deleted}','${req.body.s_distributor_name}','${req.body.status}');`;
  return obj;
},

savedist: function (req, res) {
  var obj = {};
  obj.queryString = `insert into apRoute (routeID,clientID,routeName,effectiveDate,city,state,region,created,createdBy,deleted,distributorname,status) values('${req.body.route_id}','${req.body.s_client}','${req.body.s_route_name}','${req.body.d_effective}','${req.body.s_city}','${req.body.s_state}','${req.body.s_region}','${req.body.created}','${req.body.createdby}','${req.body.deleted}','${req.body.s_distributor_name}','${req.body.status}');`;
  return obj;
},
get_Beat_By_ID: function (req, res) {
  var obj = {};
  obj.queryString = `select * from apRoute where ID='${req.body.ID}'`;
  return obj;
},

getdistid: function (req, res) {
  var obj = {};
  obj.queryString = `select top(1)siteID from apsites where clientID='${req.body.clientID}' and deleted=0 order by ID desc`;
  return obj;
},


update_beats_data_org: function (req, res) {
  var obj = {};
  obj.queryString = `update apRoute set routeName='${req.body.s_route_name}',city='${req.body.s_city}',state='${req.body.s_state}',region='${req.body.s_region}',deleted='${req.body.deleted}',distributorname='${req.body.s_distributor_name}'
  where ID='${req.body.ID}' AND routeID='${req.body.routeID}';`
  return obj;
},
delete_beat_by_id: function (req, res) {
  var obj = {};
  obj.queryString = `delete from apRoute where ID='${req.body.ID}';`
  return obj;
},
get_all_beat_mappings: function (req, res) {
  var obj = {};
  if(req.body.clientID == 0){
    obj.queryString = `SELECT a.userID,a.clientID, a.emp_code, a.firstName,b.routeID,b.routeName,b.ID FROM MobiUser a JOIN MobiRouteScheduleList b ON a.userID = b.userID WHERE b.year = '${req.body.year}' AND b.month = '${req.body.month}' AND a.deleted = 0 AND b.deleted = 0;`
  }else{
    obj.queryString = `SELECT a.userID,a.clientID, a.emp_code, a.firstName,b.routeID,b.routeName,b.ID FROM MobiUser a JOIN MobiRouteScheduleList b ON a.userID = b.userID WHERE b.year = '${req.body.year}' AND b.month = '${req.body.month}' AND a.deleted = 0 AND b.deleted = 0 and b.clientID=${req.body.clientID};`
  }

  return obj;
},
get_all_user_id: function (req, res) {
  var obj = {};
  obj.queryString = `select * from mobiuser where deleted=0 order by ID desc`
  return obj;
},
getallbeats: function (req, res) {
  var obj = {};
  obj.queryString = `select * from apRoute where state  IN (select state from mobiuser where userID='${req.body.ID.split(':')[0]}')`
  return obj;
},
get_beat_mappings_by_id: function (req, res) {
  var obj = {};
obj.queryString = `select a.*,(select userName from MobiUser where userID=a.userID) as userName from MobiRouteScheduleList a where a.ID='${req.body.ID}' `
  return obj;
},

save_user_beat_mapping: function (req, res) {
  var obj = {};
  var val = req.body.val
  var user = req.body.user
  qry=``
  val.forEach(element => {
    
    qry+=`INSERT INTO [SimplyAmplify].[dbo].[MobiRouteScheduleList](clientID,userID,routeID,routeName,year,month,status,[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27],[28],[29],[30],[31],created,createdBy,deleted)values(${user.split(':')[1]},${user.split(':')[0]},${element.split(':')[0]},'${element.split(':')[1]}',YEAR(GETDATE()),MONTH(GETDATE()),1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,GETDATE(),${req.body.createdby},0)`
  });
  obj.queryString = qry;

  // obj.queryString = `INSERT INTO [SimplyAmplify].[dbo].[apRoute] (routeID, clientID, routeName, effectiveDate, city, state, region, deleted, distributorname, status, district,created,createdBy) VALUES (${req.body.routeid}, ${req.body.clientid}, '${req.body.route}', '${formattedDate}', '${req.body.city}', '${req.body.state}', '${req.body.region}', ${req.body.deleted_status}, '${req.body.distributor}', '${req.body.beat_status}', '${req.body.district}','${formattedDate}',1)`;

  return obj;

},

// getlogindetails: function (req, res) {
//   var obj = {};
//   obj.queryString = ``;
//   return obj;
// },

getuserlist: function (req, res) {
  var obj = {};
  obj.queryString = `SELECT * FROM users;`
  return obj;
},

saveticketdetails:function (req, res) {
var obj = {};
obj.queryString = `insert into tickets (ticket_no,owner, purpose, subject, message, assign_to, assign_on, progress,created, severity, cc, data,category) values('${req.body.ticketno}','${req.body.owner}','${req.body.purpose}','${req.body.sub}','${req.body.message}','${req.body.assignto}','${req.body.assigndate}','${req.body.progress}','${req.body.createddate}','${req.body.severity}','${req.body.cc}','${req.body.file}','${req.body.category}');`;
return obj;
},
getallticketlist:function (req, res) {
var obj = {};
  obj.queryString = `SELECT * FROM tickets order by id ;`
  return obj;
},

getticketdatabyid:function (req, res) {
  var obj = {};
    obj.queryString = `SELECT * FROM tickets where ticket_no='${req.body.ticketid}' ;`
    return obj;
  },  

getsummarydataadmin:function (req, res) {
var obj = {};
obj.queryString = `SELECT count(*) as total_ticket ,(select count(*) from tickets where assign_to='${req.body.name}') as assign_to, (select count(*) from tickets where assign_to='${req.body.name}' and progress='0') as pending_tickets, (select count(*) from tickets where assign_to='${req.body.name}' and progress='2') as closed_tickets FROM tickets;`
return obj;
},  


getstatelist:function (req, res) {
var obj = {};
  obj.queryString = `SELECT * FROM tbl_state_master;`         
  return obj;
}, 

getdistrictlist:function (req, res) {
  var obj = {};
    obj.queryString = `SELECT * FROM tbl_district_master where state_id ='${req.body.state}'`         
    return obj;
  }, 
gettalukalist:function (req, res) {
  var obj = {};
    obj.queryString = `SELECT * FROM db_uges.tbl_taluka_master where district_id='${req.body.district}'`         
    return obj;
  },
  getvillagelist:function (req, res) {
    var obj = {};
      obj.queryString = `SELECT * FROM db_uges.tbl_village_master where taluka_id='${req.body.taluka}'`         
      return obj;
    },
    getobstacle:function (req, res) {
      var obj = {};
        obj.queryString = `SELECT * FROM tbl_obstacle_data`         
        return obj;
      },
      savewinddetails:function (req, res) {
        var obj = {};
        obj.queryString = `INSERT INTO tbl_report_details (s_state, s_district, s_taluka, s_village, s_loc_num, s_survey_no, s_survey_completed, s_terrain, s_land_path, s_meter_path, s_major_footprint, s_risk_footprint, s_major_falling, s_risk_falling, s_major_noise, s_risk_noise, s_overall_risk, s_major_overall_risk, s_shifting_req, s_land_type, s_soil_type, s_soil_type_path, s_access_road, s_key_challenges, s_east, s_west, s_north, s_south, s_northeast, s_southeast, s_southwest, s_northwest, s_house, s_dwelling_1, s_dwelling_2, s_dwelling_3, s_culvert, s_lt_line, s_water_body1, s_water_body2, s_canal,s_created_by,s_user_id) VALUES ('${req.body.state}', '${req.body.district}', '${req.body.taluka}', '${req.body.village}', '${req.body.loc_number}', '${req.body.survey_no}', '${req.body.survey_completed}', '${req.body.terrain}', '${req.body.land_path}', '${req.body.meter_path}', '${req.body.major_footprint}', '${req.body.risk_footprint}', '${req.body.major_falling}', '${req.body.risk_falling}', '${req.body.major_noise}', '${req.body.risk_noise}', '${req.body.overall_risk}', '${req.body.major_risk}', '${req.body.shifting_req}', '${req.body.land_type}', '${req.body.soil_type}', '${req.body.soil_path}', '${req.body.access_road}', '${req.body.key_challenges}', '${req.body.east}', '${req.body.west}', '${req.body.north}', '${req.body.south}', '${req.body.north_east}', '${req.body.south_east}', '${req.body.south_west}', '${req.body.north_west}', '${req.body.house}', '${req.body.dwelling_1}', '${req.body.dwelling_2}', '${req.body.dwelling_3}', '${req.body.culvert}', '${req.body.LT_line}', '${req.body.water_body1}', '${req.body.water_body2}', '${req.body.canal}','${req.body.username}', '${req.body.userid}');`    
        return obj;
        },    
        getfarmreport:function (req, res) {
          var obj = {};
            obj.queryString = `SELECT *, b.s_state_name as state, c.district_name as district,d.taluka_name as taluka, e.village_name as village FROM db_uges.tbl_report_details a , db_uges.tbl_state_master b , db_uges.tbl_district_master c, db_uges.tbl_taluka_master d,
db_uges.tbl_village_master e where a.s_state=b.state_id and a.s_district=c.district_id and a.s_taluka=d.taluka_id and a.s_village=e.village_id`         
            return obj;
          },
          getfarmreportbyid:function (req, res) {
            var obj = {};
              obj.queryString = `SELECT a.*, b.s_state_name as state, c.district_name as district,d.taluka_name as taluka, e.village_name as village FROM db_uges.tbl_report_details a , db_uges.tbl_state_master b , db_uges.tbl_district_master c, db_uges.tbl_taluka_master d,
db_uges.tbl_village_master e where a.s_state=b.state_id and a.s_district=c.district_id and a.s_taluka=d.taluka_id and a.s_village=e.village_id and a.report_id='${req.body.id}'`         
              return obj;
            },      
}   