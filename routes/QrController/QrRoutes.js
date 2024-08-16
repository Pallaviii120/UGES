var express = require('express');
var QrCtrl = require('./QrController.js');

var QrRoutes = express.Router();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ User Master ~~~~~~~~~~~~~~~~~~~~~~~~//

QrRoutes.route('/getuserdata').post(QrCtrl.getuserdata);
QrRoutes.route('/sync').post(QrCtrl.sync);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ Client Master ~~~~~~~~~~~~~~~~~~~~~~~~//

QrRoutes.route('/getclientdata').post(QrCtrl.getclientdata);
QrRoutes.route('/getzone').post(QrCtrl.getzone);
QrRoutes.route('/getstate').post(QrCtrl.getstate);
QrRoutes.route('/getasm').post(QrCtrl.getasm);
QrRoutes.route('/getcity').post(QrCtrl.getcity);
QrRoutes.route('/getso').post(QrCtrl.getso);
QrRoutes.route('/getsr').post(QrCtrl.getsr);
QrRoutes.route('/getbeatdata').post(QrCtrl.getbeatdata);
QrRoutes.route('/getoutletbybeat').post(QrCtrl.getoutletbybeat);
QrRoutes.route('/getdatabyasm').post(QrCtrl.getdatabyasm);
QrRoutes.route('/getbeatdatabyasm').post(QrCtrl.getbeatdatabyasm);
QrRoutes.route('/savecallcycle').post(QrCtrl.savecallcycle);
QrRoutes.route('/updatecallcycle').post(QrCtrl.updatecallcycle);
QrRoutes.route('/getclient').post(QrCtrl.getclient);
QrRoutes.route('/getposition').post(QrCtrl.getposition);
QrRoutes.route('/getcallcyclelistdata').post(QrCtrl.getcallcyclelistdata);
QrRoutes.route('/getcallcycledatabyid').post(QrCtrl.getcallcycledatabyid);
QrRoutes.route('/approvecallcycle').post(QrCtrl.approvecallcycle);
QrRoutes.route('/rejectcallcycle').post(QrCtrl.rejectcallcycle);
QrRoutes.route('/transferoutlet').post(QrCtrl.transferoutlet);
QrRoutes.route('/inactiveoutlet').post(QrCtrl.inactiveoutlet);
QrRoutes.route('/getasmdatabyid').post(QrCtrl.getasmdatabyid);
QrRoutes.route('/validatecallcyclewithuser').post(QrCtrl.validatecallcyclewithuser);
QrRoutes.route('/getdashdata').post(QrCtrl.getdashdata);
QrRoutes.route('/deletecallcycledatabyid').post(QrCtrl.deletecallcycledatabyid);
QrRoutes.route('/admindash').post(QrCtrl.admindash);
QrRoutes.route('/admindashregion').post(QrCtrl.admindashregion);
QrRoutes.route('/getclient').post(QrCtrl.getclient);
QrRoutes.route('/getcallcyclecount').post(QrCtrl.getcallcyclecount);
QrRoutes.route('/getpendingcallcycle').post(QrCtrl.getpendingcallcycle);
QrRoutes.route('/specificpositionwisedata').post(QrCtrl.specificpositionwisedata);
QrRoutes.route('/getcallcyclelogdata').post(QrCtrl.getcallcyclelogdata);
QrRoutes.route('/getcallcyclelistdata_admin').post(QrCtrl.getcallcyclelistdata_admin);
QrRoutes.route('/getsosrcntbyasm').post(QrCtrl.getsosrcntbyasm);
QrRoutes.route('/countbyclient').post(QrCtrl.countbyclient);


//`````````````````````````Beats````````````````````````````````//

/**Original getAllBeats */
QrRoutes.route('/getAllBeatsoriginal').post(QrCtrl.getAllBeatsoriginal);
QrRoutes.route('/get_route_id_max').post(QrCtrl.get_route_id_max);
QrRoutes.route('/save_beat').post(QrCtrl.save_beat);
QrRoutes.route('/savedist').post(QrCtrl.savedist);
QrRoutes.route('/get_Beat_By_ID').post(QrCtrl.get_Beat_By_ID);
QrRoutes.route('/getdistid').post(QrCtrl.getdistid);
QrRoutes.route('/update_beats_data_org').post(QrCtrl.update_beats_data_org);
QrRoutes.route('/delete_beat_by_id').post(QrCtrl.delete_beat_by_id);

/**```````````````````Dependent dropdown`````````````````````` */
QrRoutes.route('/get_region_State').post(QrCtrl. get_region_State);
QrRoutes.route('/get_State_district').post(QrCtrl. get_State_district);
QrRoutes.route('/get_city').post(QrCtrl. get_city);

  /**BEATS dummy Table CRUD  */
QrRoutes.route('/insert_beats_data').post(QrCtrl. insert_beats_data);
QrRoutes.route('/getAllBeatsData').post(QrCtrl.getAllBeatsData);
QrRoutes.route('/getBeatByID').post(QrCtrl.getBeatByID);
QrRoutes.route('/update_beats_data').post(QrCtrl.update_beats_data);
QrRoutes.route('/deleteBeatById').post(QrCtrl.deleteBeatById);
QrRoutes.route('/getuserbyid').post(QrCtrl. getuserbyid);
QrRoutes.route('/updateuserdata').post(QrCtrl.updateuserdata);
QrRoutes.route('/updatehr').post(QrCtrl.updatehr);
QrRoutes.route('/update_dist_mapping').post(QrCtrl.update_dist_mapping);
QrRoutes.route('/update_user_beat_mapping').post(QrCtrl.update_user_beat_mapping);
QrRoutes.route('/get_all_dist_mapping').post(QrCtrl.get_all_dist_mapping);
QrRoutes.route('/get_beat_Mapping_by_id').post(QrCtrl.get_beat_Mapping_by_id);

//~~~~~~~~~~~~~~~~~~~~~~~~~~User Master~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
QrRoutes.route('/getClients').post(QrCtrl. getClients);
QrRoutes.route('/getPositions').post(QrCtrl.getPositions);
QrRoutes.route('/getRegions').post(QrCtrl.getRegions);
QrRoutes.route('/getuserState').post(QrCtrl.getuserState);
QrRoutes.route('/getuserCity').post(QrCtrl.getuserCity);
QrRoutes.route('/getbeatsByregion').post(QrCtrl.getbeatsByregion);
QrRoutes.route('/getlevel2').post(QrCtrl.getlevel2);
QrRoutes.route('/getlevel3').post(QrCtrl.getlevel3);
QrRoutes.route('/getlevel4').post(QrCtrl.getlevel4);
QrRoutes.route('/getlevel5').post(QrCtrl.getlevel5);
QrRoutes.route('/getlevel6').post(QrCtrl.getlevel6);
QrRoutes.route('/get_username').post(QrCtrl.get_username);


QrRoutes.route('/addnewusers').post(QrCtrl.addnewusers);
QrRoutes.route('/execute_user_creation_job').post(QrCtrl.execute_user_creation_job);

//~~~~~~~~~~~~~~~User Beat Mapping~~~~~~~~~~~~~~~~~~~//

QrRoutes.route('/get_all_beat_mappings').post(QrCtrl.get_all_beat_mappings);
QrRoutes.route('/get_all_user_id').post(QrCtrl.get_all_user_id);
QrRoutes.route('/getallbeats').post(QrCtrl.getallbeats);
QrRoutes.route('/get_beat_mappings_by_id').post(QrCtrl.get_beat_mappings_by_id);
QrRoutes.route('/save_user_beat_mapping').post(QrCtrl.save_user_beat_mapping);


//~~~~~~~~~~~~~~~Distributor~~~~~~~~~~~~~~~~~~~~~~~~//
QrRoutes.route('/getalldistributors').post(QrCtrl. getalldistributors);
QrRoutes.route('/getDistributors').post(QrCtrl. getDistributors);



QrRoutes.route('/getdata').post(QrCtrl.getdata);
QrRoutes.route('/getfmcgdata').post(QrCtrl.getfmcgdata);
QrRoutes.route('/getucdata').post(QrCtrl.getucdata);
QrRoutes.route('/getfmcgprdcalldata').post(QrCtrl.getfmcgprdcalldata);
QrRoutes.route('/gethellreportdata').post(QrCtrl.gethellreportdata);

// change

// QrRoutes.route('/login').post(QrCtrl.getlogindetails);getdashdata

 QrRoutes.route('/getuserlist').post(QrCtrl.getuserlist);
 QrRoutes.route('/saveticketdetails').post(QrCtrl.saveticketdetails);
 QrRoutes.route('/getallticketlist').post(QrCtrl.getallticketlist);
 QrRoutes.route('/getticketdatabyid').post(QrCtrl.getticketdatabyid);
 QrRoutes.route('/getsummarydataadmin').post(QrCtrl.getsummarydataadmin);


 QrRoutes.route('/getstatelist').post(QrCtrl.getstatelist);
 QrRoutes.route('/getdistrictlist').post(QrCtrl.getdistrictlist);
 QrRoutes.route('/gettalukalist').post(QrCtrl.gettalukalist);
 QrRoutes.route('/getvillagelist').post(QrCtrl.getvillagelist);
 QrRoutes.route('/getobstacle').post(QrCtrl.getobstacle);
 QrRoutes.route('/savewinddetails').post(QrCtrl.savewinddetails);
 QrRoutes.route('/getfarmreport').post(QrCtrl.getfarmreport);
 QrRoutes.route('/getfarmreportbyid').post(QrCtrl.getfarmreportbyid);

 
module.exports = QrRoutes;
