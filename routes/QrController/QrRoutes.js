var express = require('express');
var QrCtrl = require('./QrController.js');

var QrRoutes = express.Router();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ User Master ~~~~~~~~~~~~~~~~~~~~~~~~//

QrRoutes.route('/getuserdata').post(QrCtrl.getuserdata);

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

module.exports = QrRoutes;
