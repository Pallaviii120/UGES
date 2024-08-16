const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const csv = require('csvtojson');
var csvToJson = require('convert-csv-to-json');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Media,ImageRun, AlignmentType,WidthType,PageBreak } = require('docx');

// var multer = require('multer');
//var log4js = require('log4js');
//const RateLimiterRedis = require('rate-limiter-flexible/lib/RateLimiterRedis');

// const busboy = require('connect-busboy'); 
const busboy = require('connect-busboy');
const multer = require('multer');
const path = require('path');

const MS_to_sqlite = require("./utils/mysql-to-sqlite");



const app = express();

app.set('views', __dirname + '/public'); // Main Entrance of project     
// app.use(express.static(__dirname + "/public/jadoo/public")); // Main Entrance of Doctor 
app.use(express.static(__dirname + "/public")); // Main Entrance of Doctor 
// app.use(express.static(__dirname + "/public/assets")); // Main Entrance of Doctor 
// app.use(express.static(__dirname + "/public/email-templates")); // Main Entrance of Doctor 
// app.use(express.static(__dirname + "/public/landing-page")); // Main Entrance of Doctor 
// app.use(express.static(__dirname + "/public/Trident")); // Main Entrance of Doctor 
// app.use(express.static(__dirname + "/public/vendor")); // Main Entrance of Doctor 
app.use(express.static(__dirname + "/utils")); // Main Entrance of Doctor 

app.use(express.static(__dirname + "/uploads"));
app.use('/uploads', express.static('uploads'));

//log4js.configure('./config/log4js.json');

app.use(busboy({ // This is BusBoy File Uploadiing MiddelWare
    highWaterMark: 2 * 1024 * 1024, // Set 2MiB buffer
})); // Insert the busboy middle-ware


app.set('view engine', 'ejs'); //extension of views
// app.use(bodyParser({
//   limit: '50mb'
// }));
app.use(bodyParser.json({
    limit: '50mb',
    extended: true
})); // this is 4 Json Data
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 1000000000
}));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'ssshhhhh',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Pass to next layer of middleware
    next();
});

var config = require('./config/config.js'); //this is server configuration file.
// var con = config.connection; // DB conectivity  

var pool= require('./config/config.js');

// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function(req, file, cb) {
//         /*  let extArray1 = file.mimetype.split("/");
//          let extension1 = extArray[extArray.length - 1]; */
//         let extArray = file.originalname.split(".");
//         let extension = extArray[extArray.length - 1];
//         cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
//     }
// });
var storageProfile = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/ProfilePic')
    },
    filename: function(req, file, cb) {
        /*  let extArray1 = file.mimetype.split("/");
         let extension1 = extArray[extArray.length - 1]; */
        let extArray = file.originalname.split(".");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
    }
})
// var upload = multer({ storage: storage });
// var uploadProfile = multer({ storage: storageProfile });

// global variable 
var sess;
var sesss;
// var date = Date.now();  // current datetime 
/*******Login Page******/

//var log = log4js.getLogger("app");
// routes goes here 
// var project_admin = require('./utils/route_goes_here');
// app.use('/dashboard', project_admin)  

// Url Routes goes here 
// Url Routes goes here 

//var legalRoutes = require("./routes/legalController/legalRoutes");
var QrController = require("./routes/QrController/QrRoutes");
var QrContr = require("./routes/QrController/QrController");
//app.use('/vser-server', legalRoutes);
app.use('/Qr', QrController);

//var legalRoutes = require("./routes/legalController/legalRoutes");
//app.use('/vser-server', legalRoutes);
// var legalController = require("./routes/legalController/legalController.js");
// var legalsqlc = require("./routes/legalController/legalSqlc.js");

// var pg_conn = require("./config/config");
//var con = require("./utils/dbqyeryexecute").nodeServerBridge;

// var con = require("./utils/dbqyeryexecute").queryExexute;
// var conmul = require("./utils/dbqyeryexecute").executeMultiple;


app.use(function(req, res, next) {
    const {
        rawHeaders,
        httpVersion,
        method,
        socket,
        url
    } = req;
    const {
        remoteAddress,
        remoteFamily
    } = socket;
    next();
})
app.get('/', function(req, res) {
    res.sendfile("./public/index.html");
});

// app.post('/uploadimage', upload.single("uploadimg"), (req, res) => {

//     try {
//         var a = req.file.filename;
//         var b = req.body;

//         QrContr.MarkVisitorsAttWithImg(req, res);

//         console.log(req)

//     } catch (error) {
//         console.log(error);
//     }

//     // importExcelData2MySQL('./uploads/device_class/' + req.file.filename,req, res);
//     // console.log(res);

// });

// app.post('/uploadManualDataWithImage', upload.single("uploadManualimg"), (req, res) => {

//     try {
//         var a = req.file.filename;
//         var b = req.body;

//         QrContr.ManualVisitorsAttWithImg(req, res);

//         console.log(req)

//     } catch (error) {
//         console.log(error);
//     }

//     // importExcelData2MySQL('./uploads/device_class/' + req.file.filename,req, res);
//     // console.log(res);

// });
// app.post('/uploadManualDataByEmpWithImage', upload.single("uploadManImgEmp"), (req, res) => {

//     try {
//         var a = req.file.filename;
//         var b = req.body;

//         QrContr.ManualVisitorsAttWithImgByEmp(req, res);

//         console.log(req)

//     } catch (error) {
//         console.log(error);
//     }

//     // importExcelData2MySQL('./uploads/device_class/' + req.file.filename,req, res);
//     // console.log(res);

// });
// app.post('/uploadProfileImage', uploadProfile.single("uploadProfileImg"), (req, res) => {

//     try {
//         var a = req.file.filename;
//         var b = req.body;

//         QrContr.uploadProfileImage(req, res);

//         console.log(req)

//     } catch (error) {
//         console.log(error);
//     }

//     // importExcelData2MySQL('./uploads/device_class/' + req.file.filename,req, res);
//     // console.log(res);

// });

var jwt = require('jsonwebtoken');
// var bcrypt = require('bcrypt')
/*for testing deployment */

// app.post('/login', function(req, res) {
//     var user_name = req.body.username;
//     var password = req.body.password;
//     var obj = {};
//     // obj.queryString = `exec [dbo].[UserLogin] '${user_name}','${password}'`
//     obj.queryString=   `select * from users where username='${user_name}' and password='${password}'`
//         // select * from MobiUser where userName='${user_name}' and password='${password}'`;
//         // obj.arr = [user_name, password];
//     pool(obj).then(data => {
//             if (data.recordset.length == 0) {
//                 res.status(400).json({
//                     "status": 400,
//                     "mess": "Record Not Found !",
//                     "mess_body": "You have Entered Wrong Credentials."
//                 });
//             } else {
//                 getsession(data, req, res);
//                 var userdata = {
//                     s_email: data.recordset[0].userName,
//                     s_pass: data.recordset[0].password
//                 }
//                 var token = jwt.sign(userdata, "this is mine", {
//                     expiresIn: '1hr'
//                 }, {
//                     algorithm: 'RS256'
//                 });

//                 res.status(200).json({
//                     "status": 200,
//                     "mess": "Record Found !",
//                     "mess_body": "Credentials Successfully Authenticate.",
//                     data: data.recordset[0],
//                     token
//                 });

//             }
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({
//                 "status": 500,
//                 "mess": `${err.code} !`,
//                 "mess_body": err.message
//             });
//         });
// })

// Set storage engine

const uploadPath = path.join('D:', 'ITSM_PROJECT_STRUCTURE', 'UGES', 'uploads');

const storage = multer.diskStorage({
    destination: uploadPath,
    filename: function (req, file, cb) {
        const inputName = req.body.field
        const userid = req.body.userid
        const originalName = file.originalname;
        const fileExt = path.extname(originalName);
        const baseName = path.basename(originalName);
        // cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
        // fileland_1_uploads/land.png-1723616220744.png
        const newFileName = `(${inputName})_(${userid})_${baseName}-${Date.now()}${fileExt}`;
        cb(null, newFileName);
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('file');
// Check file type
function checkFileType(file, cb) {
    // Allowed file extensions
    const filetypes = /jpeg|jpg|png|pdf|docx/;
    
    // Check file extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
    // Check MIME type
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Only images (jpeg, jpg, png) and documents (pdf, docx) are allowed!');
    }
}


// Static folder
app.use(express.static('./public'));

app.post('/uploadfileforticket', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.json({ message: err });
        } else {
            if (req.file == undefined) {
                res.json({ message: 'No file selected!' });
            } else {
                res.json({
                    message: 'File uploaded successfully!',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });
});

app.use(express.json()); 

const findImagePath = (keyword, userId,originalpath) => {
    // Construct possible file paths
    var reqpath=''
    try {
        if(originalpath!=''){
            a=originalpath.split('/')[1].split('_')[2]
            if(a.includes('(')){
                reqpath=originalpath.split('/')[1].split('_')[3]
            }
            else if(a.includes(')')){
                reqpath=originalpath.split('/')[1].split('_')[4]
            }
            else{
                reqpath=originalpath.split('/')[1].split('_')[2]
            }
    // const reqpath=originalpath.split('/')[1].split('_')[2]

    const fileName = `(${keyword})_(${userId})_${reqpath}`;
    const filePath = path.join(__dirname, 'uploads', fileName);

    if (fs.existsSync(filePath)) {
        // Return the file data if the file exists
        return fs.readFileSync(filePath);
    } else {
        console.error(`File not found: ${filePath}`);
        return null; 
    }
        } 
    }catch (error) {
    console.error('Error in findImagePath:', error);
    return null;
}
};
app.post('/generate-report', async (req, res) => {
    const reportData = req.body.dwn; // Ensure `dwn` contains the expected data

    if (!reportData) {
        return res.status(400).send('Invalid data');
    }

    // Create a new document
    // const doc = new Document({
    //     sections: [
    //         {
    //             properties: {},
    //             children: [
    //                 // Add the title in the center
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun({
    //                             text: "Wind Farm Physical Verification Report",
    //                             bold: true,
    //                             size: 32,
    //                             underline:true
    //                         }),
    //                     ],
    //                     spacing: { after: 300 },
    //                     alignment: AlignmentType.CENTER,
    //                 }),
    
    //                 // Add location number as a header
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun({
    //                             text: `1. Location Number: ${reportData.s_loc_num}`,
    //                             bold: true,
    //                             size: 28,
    //                         }),
    //                     ],
    //                     spacing: { after: 300 },
    //                 }),
    
    //                 // Add the table with key-value pairs
    //                 new Table({
    //                     rows: [
    //                         new TableRow({
    //                             children: [
    //                                 new TableCell({ width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 },children: [new Paragraph("Village")] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph("Survey No.")] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph("Terrain")] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph("Risk Category")] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 },children: [new Paragraph("Shifting Requirement")] }),
                                  
    //                                 new TableCell({ width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 },children: [new Paragraph("Type Land")] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph("Type Soil")] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph("Access Road")] }),
    //                                 new TableCell({ width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 },children: [new Paragraph("Key Challenges")] })
    //                             ],
    //                         }),
    //                         new TableRow({
    //                             children: [
                                    
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph(reportData.village)] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph(reportData.s_survey_no)] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph(reportData.s_terrain)] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph(reportData.s_overall_risk)] }),
    //                                 new TableCell({ width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 },children: [new Paragraph(reportData.s_shifting_req)] }),

    //                                 new TableCell({ width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 },children: [new Paragraph(reportData.s_land_type)] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph(reportData.s_soil_type)] }),
    //                                 new TableCell({ width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 },children: [new Paragraph(reportData.s_access_road)] }),
    //                                 new TableCell({width: {
    //                                     size: 3000,
    //                                     type: WidthType.DXA, // Width in twips (1/20 of a point)
    //                                 }, children: [new Paragraph(reportData.s_key_challenges)] }),
    //                             ],
    //                         }),
    //                     ],
    //                 }),
                    
    //                 new Paragraph({
    //                     spacing: { after: 300 },
    //                 }),
    //                 // land and meter image



    //                 new Paragraph({
    //                     children: [
    //                         new ImageRun({
                                
    //                             data: findImagePath('fileland', reportData.s_user_id,reportData.s_land_path), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         }),
    //                         new ImageRun({
    //                             data: findImagePath('filemeter', reportData.s_user_id,reportData.s_meter_path), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         }),
    //                     ],
    //                 }),
    //                 new Paragraph({
    //                     children: [new PageBreak()],
    //                 }),
    //                 // Content on Second Page
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun({
    //                             text: "2.Surroundings: ",
    //                             bold: true,
    //                             size: 32,
    //                         }),
    //                     ],
    //                 }),

    //                 new Paragraph({
    //                     spacing: { after: 300 },
    //                 }),

    //                 // east 
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('east', reportData.s_user_id, reportData.s_east)
    //                         ? new ImageRun({
    //                             data: findImagePath('east', reportData.s_user_id, reportData.s_east), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for east direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  west
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('west', reportData.s_user_id, reportData.s_west)
    //                         ? new ImageRun({
    //                             data: findImagePath('west', reportData.s_user_id, reportData.s_west), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for west direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                    // north 
    //                     new Paragraph({
    //                     children: [
    //                         findImagePath('north', reportData.s_user_id, reportData.s_north)
    //                         ? new ImageRun({
    //                             data: findImagePath('north', reportData.s_user_id, reportData.s_north), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for north direction.",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  south
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('south', reportData.s_user_id, reportData.s_south)
    //                         ? new ImageRun({
    //                             data: findImagePath('south', reportData.s_user_id, reportData.s_south), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for south direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),

    //                 // north_east
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('north_east', reportData.s_user_id, reportData.s_northeast)
    //                         ? new ImageRun({
    //                             data: findImagePath('north_east', reportData.s_user_id, reportData.s_northeast), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for north-east direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  south_east
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('south_east', reportData.s_user_id, reportData.s_southeast)
    //                         ? new ImageRun({
    //                             data: findImagePath('south_east', reportData.s_user_id, reportData.s_southeast), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for south-east direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                    // south_west 
    //                     new Paragraph({
    //                     children: [
    //                         findImagePath('south_west', reportData.s_user_id, reportData.s_southwest)
    //                         ? new ImageRun({
    //                             data: findImagePath('south_west', reportData.s_user_id, reportData.s_southwest), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for south-west direction.",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  north_west
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('north_west', reportData.s_user_id, reportData.s_northwest)
    //                         ? new ImageRun({
    //                             data: findImagePath('north_west', reportData.s_user_id, reportData.s_northwest), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for north-west direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 new Paragraph({
    //                     children: [new PageBreak()],
    //                 }),
    //                 // Content on third Page
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun({
    //                             text: "2.Actual PhotoGraphs: ",
    //                             bold: true,
    //                             size: 32,
    //                         }),
    //                     ],
    //                 }),

    //                 new Paragraph({
    //                     spacing: { after: 300 },
    //                 }),

    //                 // residential 
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('residential', reportData.s_user_id, reportData.s_house)
    //                         ? new ImageRun({
    //                             data: findImagePath('residential', reportData.s_user_id, reportData.s_house), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for residential direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  dwelling_1
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('dwelling_1', reportData.s_user_id, reportData.s_dwelling_1)
    //                         ? new ImageRun({
    //                             data: findImagePath('dwelling_1', reportData.s_user_id, reportData.s_dwelling_1), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for dwelling_1 direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                    // dwelling_2 
    //                     new Paragraph({
    //                     children: [
    //                         findImagePath('dwelling_2', reportData.s_user_id, reportData.s_dwelling_2)
    //                         ? new ImageRun({
    //                             data: findImagePath('dwelling_2', reportData.s_user_id, reportData.s_dwelling_2), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for dwelling_2 direction.",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  dwelling_3
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('dwelling_3', reportData.s_user_id, reportData.s_dwelling_3)
    //                         ? new ImageRun({
    //                             data: findImagePath('dwelling_3', reportData.s_user_id, reportData.s_dwelling_3), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for dwelling_3 direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),

    //                 // culvert
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('culvert', reportData.s_user_id, reportData.s_culvert)
    //                         ? new ImageRun({
    //                             data: findImagePath('culvert', reportData.s_user_id, reportData.s_culvert), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for culvert direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  LT_line
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('LT_line', reportData.s_user_id, reportData.s_lt_line)
    //                         ? new ImageRun({
    //                             data: findImagePath('LT_line', reportData.s_user_id, reportData.s_lt_line), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for LT_line direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                    // water_body_1 
    //                     new Paragraph({
    //                     children: [
    //                         findImagePath('water_body_1', reportData.s_user_id, reportData.s_water_body1)
    //                         ? new ImageRun({
    //                             data: findImagePath('water_body_1', reportData.s_user_id, reportData.s_water_body1), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for water_body_1 direction.",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),
    //                 //  water_body_2
    //                 new Paragraph({
    //                     children: [
    //                         findImagePath('water_body_2', reportData.s_user_id, reportData.s_water_body2)
    //                         ? new ImageRun({
    //                             data: findImagePath('water_body_2', reportData.s_user_id, reportData.s_water_body2), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for water_body2 direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),

    //                  //  canal
    //                  new Paragraph({
    //                     children: [
    //                         findImagePath('canal', reportData.s_user_id, reportData.s_canal)
    //                         ? new ImageRun({
    //                             data: findImagePath('canal', reportData.s_user_id, reportData.s_canal), // Replace 's_user_id' with the actual key if different
    //                             transformation: {
    //                                 width: 300,
    //                                 height: 200,
    //                             },
    //                         })
    //                         : new TextRun({
    //                             text: "Image not uploaded for canal direction",
    //                             italics: true,
    //                             bold:true,
    //                             color: "FF0000", 
    //                         }),
    //                     ],
    //                 }),




    //             ],
    //         },
    //     ],
    // });

   const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                // Title
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Wind Farm Physical Verification Report",
                            bold: true,
                            size: 32,
                            underline:true,
                        }),
                    ],
                    spacing: { after: 300 },
                    alignment: AlignmentType.CENTER,
                }),

                // Location Number Header
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `1. Location Number: ${reportData.s_loc_num}`,
                            bold: true,
                            size: 28,
                        }),
                    ],
                    spacing: { after: 300 },
                }),

                // Table with key-value pairs
                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph("Village")] }),
                                new TableCell({ children: [new Paragraph("Survey No.")] }),
                                new TableCell({ children: [new Paragraph("Terrain")] }),
                                new TableCell({ children: [new Paragraph("Risk Category")] }),
                                new TableCell({ children: [new Paragraph("Shifting Requirement")] }),
                                new TableCell({ children: [new Paragraph("Type Land")] }),
                                new TableCell({ children: [new Paragraph("Type Soil")] }),
                                new TableCell({ children: [new Paragraph("Access Road")] }),
                                new TableCell({ children: [new Paragraph("Key Challenges")] }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph(reportData.village)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_survey_no)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_terrain)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_overall_risk)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_shifting_req)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_land_type)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_soil_type)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_access_road)] }),
                                new TableCell({ children: [new Paragraph(reportData.s_key_challenges)] }),
                            ],
                        }),
                    ],
                }),

                new Paragraph({
                    spacing: { after: 300 },
                }),

              // Land and meter images with headers
              new Table({
                rows: [
                    // Header Row
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph("Land Image")] }),
                            new TableCell({ children: [new Paragraph("Meter Image")] }),
                        ],
                    }),
                    // Image Row
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [
                                    new Paragraph({
                                        children: [
                                            new ImageRun({
                                                data: findImagePath('fileland', reportData.s_user_id, reportData.s_land_path),
                                                transformation: {
                                                    width: 300,
                                                    height: 200,
                                                },
                                            }),
                                        ],
                                        
                                    }),
                                ],
                            }),
                            new TableCell({
                                children: [
                                    new Paragraph({
                                        children: [
                                            new ImageRun({
                                                data: findImagePath('filemeter', reportData.s_user_id, reportData.s_meter_path),
                                                transformation: {
                                                    width: 300,
                                                    height: 200,
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

                new Paragraph({
                    children: [new PageBreak()],
                }),

                // Content on Second Page
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "2.Surroundings: ",
                            bold: true,
                            size: 32,
                        }),
                    ],
                }),

                new Paragraph({
                    spacing: { after: 300 },
                }),

                // east and west

                new Table({
                    rows: [
                        // Header Row
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph("East")] }),
                                new TableCell({ children: [new Paragraph("West")] }),
                            ],
                        }),
                        // Image Row
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('east', reportData.s_user_id, reportData.s_east)
                                                ? new ImageRun({
                                                    data: findImagePath('east', reportData.s_user_id, reportData.s_east),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for east direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                    // margins: {
                                    //     top: 200, // Adjust padding as needed
                                    //     bottom: 400, // Adjust padding as needed
                                    // },
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('west', reportData.s_user_id, reportData.s_west)
                                                ? new ImageRun({
                                                    data: findImagePath('west', reportData.s_user_id, reportData.s_west),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for west direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                    // margins: {
                                    //     top: 200, // Adjust padding as needed
                                    //     bottom: 200, // Adjust padding as needed
                                    // },
                                }),
                            ],
                        }),
                    ],
                }),

                // north and south
                new Table({
                    rows: [
                        // Header Row
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph("North")] }),
                                new TableCell({ children: [new Paragraph("South")] }),
                            ],
                        }),
                        // Image Row
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('north', reportData.s_user_id, reportData.s_north)
                                                ? new ImageRun({
                                                    data: findImagePath('north', reportData.s_user_id, reportData.s_north),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for north direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('south', reportData.s_user_id, reportData.s_south)
                                                ? new ImageRun({
                                                    data: findImagePath('south', reportData.s_user_id, reportData.s_south),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for south direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),


                // north_east and Southe_east

                new Table({
                    rows: [
                        // Header Row
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph("North East")] }),
                                new TableCell({ children: [new Paragraph("South East")] }),
                            ],
                        }),
                        // Image Row
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('north_east', reportData.s_user_id, reportData.s_northeast)
                                                ? new ImageRun({
                                                    data: findImagePath('north_east', reportData.s_user_id, reportData.s_northeast),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for North East direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('south_east', reportData.s_user_id, reportData.s_southeast)
                                                ? new ImageRun({
                                                    data: findImagePath('south_east', reportData.s_user_id, reportData.s_southeast),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for South East direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // south_west and north_west
                new Table({
                    rows: [
                        // Header Row
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph("South West")] }),
                                new TableCell({ children: [new Paragraph("North West")] }),
                            ],
                        }),
                        // Image Row
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('south_west', reportData.s_user_id, reportData.s_southwest)
                                                ? new ImageRun({
                                                    data: findImagePath('south_west', reportData.s_user_id, reportData.s_southwest),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for South West direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                findImagePath('north_west', reportData.s_user_id, reportData.s_northwest)
                                                ? new ImageRun({
                                                    data: findImagePath('north_west', reportData.s_user_id, reportData.s_northwest),
                                                    transformation: {
                                                        width: 300,
                                                        height: 200,
                                                    },
                                                })
                                                : new TextRun({
                                                    text: "Image not uploaded for North West direction",
                                                    italics: true,
                                                    bold: true,
                                                    color: "FF0000",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),


                new Paragraph({
                    children: [new PageBreak()],
                }),

                // Content on third Page
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "3. Actual PhotoGraphs",
                            bold: true,
                            size: 32,
                        }),
                    ],
                }),


                new Paragraph({
                    spacing: { after: 300 },
                }),

                     // house and dwelling1

                     new Table({
                        rows: [
                            // Header Row
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Residential House")] }),
                                    new TableCell({ children: [new Paragraph("Dwelling-1")] }),
                                ],
                            }),
                            // Image Row
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('residential', reportData.s_user_id, reportData.s_house)
                                                    ? new ImageRun({
                                                        data: findImagePath('residential', reportData.s_user_id, reportData.s_house),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Residential House",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('dwelling_1', reportData.s_user_id, reportData.s_dwelling_1)
                                                    ? new ImageRun({
                                                        data: findImagePath('dwelling_1', reportData.s_user_id, reportData.s_dwelling_1),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Dwelling-1",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
    
                    // Dwelling-2 and Dwelling-3
                    new Table({
                        rows: [
                            // Header Row
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Dwelling-2")] }),
                                    new TableCell({ children: [new Paragraph("Dwelling-3")] }),
                                ],
                            }),
                            // Image Row
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('dwelling_2', reportData.s_user_id, reportData.s_dwelling_2)
                                                    ? new ImageRun({
                                                        data: findImagePath('dwelling_2', reportData.s_user_id, reportData.s_dwelling_2),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Dwelling 2",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('dwelling_3', reportData.s_user_id, reportData.s_dwelling_3)
                                                    ? new ImageRun({
                                                        data: findImagePath('dwelling_3', reportData.s_user_id, reportData.s_dwelling_3),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Dwelling 3",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
    
    
                    // Culvert and LT Line
    
                    new Table({
                        rows: [
                            // Header Row
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Culvert")] }),
                                    new TableCell({ children: [new Paragraph("LT Line")] }),
                                ],
                            }),
                            // Image Row
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('culvert', reportData.s_user_id, reportData.s_culvert)
                                                    ? new ImageRun({
                                                        data: findImagePath('culvert', reportData.s_user_id, reportData.s_culvert),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Culvert",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('LT_line', reportData.s_user_id, reportData.s_lt_line)
                                                    ? new ImageRun({
                                                        data: findImagePath('LT_line', reportData.s_user_id, reportData.s_lt_line),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for LT Line",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
    
                    // Water body 1 and 2
                    new Table({
                        rows: [
                            // Header Row
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Water Body-1")] }),
                                    new TableCell({ children: [new Paragraph("Water Body-2")] }),
                                ],
                            }),
                            // Image Row
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('water_body_1', reportData.s_user_id, reportData.s_water_body1)
                                                    ? new ImageRun({
                                                        data: findImagePath('water_body_1', reportData.s_user_id, reportData.s_water_body1),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Water Body-1",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('water_body_2', reportData.s_user_id, reportData.s_water_body2)
                                                    ? new ImageRun({
                                                        data: findImagePath('water_body_2', reportData.s_user_id, reportData.s_water_body2),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Water Body-2",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),

                    // canal
                    new Table({
                        rows: [
                            // Header Row
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Canal")] }),
                                    // new TableCell({ children: [new Paragraph("Water Body-2")] }),
                                ],
                            }),
                            // Image Row
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    findImagePath('canal', reportData.s_user_id, reportData.s_canal)
                                                    ? new ImageRun({
                                                        data: findImagePath('canal', reportData.s_user_id, reportData.s_canal),
                                                        transformation: {
                                                            width: 300,
                                                            height: 200,
                                                        },
                                                    })
                                                    : new TextRun({
                                                        text: "Image not uploaded for Canal",
                                                        italics: true,
                                                        bold: true,
                                                        color: "FF0000",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                   
                                ],
                            }),
                        ],
                    }),
    
            ],
        },
    ],
});


    // Generate the document
    try {
        const buffer = await Packer.toBuffer(doc);

        // Set response headers
        res.setHeader('Content-Disposition', 'attachment; filename="wind-report.docx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

        // Send the document as a download
        res.send(buffer);
    } catch (err) {
        console.error("Failed to generate the document", err);
        res.status(500).send("Internal Server Error");
    }
});




app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            status: 400,
            mess: 'Username and password are required.'
        });
    }

    const queryString = 'SELECT * FROM tbl_user_master WHERE username = ? AND password = ?';

    pool.query(queryString, [username, password], (err, results) => {
        
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: 500,
                mess: 'Internal server error',
                mess_body: err.message
            });
        }

        else if (results.length === 0) {
            return res.status(400).json({
                status: 400,
                mess: 'Record Not Found!',
                mess_body: 'You have entered wrong credentials.'
            });
        }

        else  {
            const userdata = {
                s_email: results[0].username,
                s_pass: results[0].password
            };
           var datasess=results[0]
            getsession(datasess, req, res);
                    userdata
            const token = jwt.sign(userdata, "this is mine", {
                expiresIn: '1h' // Note the correct key for expiresIn
            });
        return res.status(200).json({
            status: 200,
            mess: 'Record Found!',
            mess_body: 'Credentials successfully authenticated.',
            data: results[0],
            token
            
        });
    }
        
    });
});

  




function getsession(data, req, res) {
    sess = req.session;
    sess.user_name = req.body.username;
    // console.log(sess.user_name);
}

// app.get('/signin', function (req, res) {
//     res.sendfile('./public/index_login.html');
// })
app.get('/Privacy-Policy', function(req, res) {
    res.sendfile('./public/views/Privacypolicy.html');
})
app.get('/About', function(req, res) {
    res.sendfile('./public/views/About.html');
})
app.get('/Career', function(req, res) {
    res.sendfile('./public/views/Career.html');
})
app.get('/Help', function(req, res) {
    res.sendfile('./public/views/Help.html');
})
app.get('/Support', function(req, res) {
    res.sendfile('./public/views/Support.html');
})
app.get('/Contact-us', function(req, res) {
    res.sendfile('./public/views/contact-us.html');
})
app.get('/Pricing', function(req, res) {
    res.sendfile('./public/views/Pricing.html');
})
app.get('/Terms-and-conditions', function(req, res) {
    res.sendfile('./public/views/TNC.html');
})


app.get('/main', function(req, res) {
    sess = req.session;
    if (sess.user_name) {
        res.sendfile('./public/main.html');
    } else {
        res.redirect('/login');
    }
})


app.get('/login', function(req, res) {
    sess = req.session;
    if (sess.user_name) {
        res.redirect('/main');
    } else {
        res.redirect('/');
        //res.sendfile('./public/index.html');
    }
})

app.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('login');
        }
    })
})

/**
 * Upload photos route.
 */

app.post('/my_profile_pic', function(req, res) {
    try {
        var photos = [],
            fieldss = [];
        form = new formidable.IncomingForm();

        form.multiples = false;
        // Upload directory for the images
        form.uploadDir = path.join(__dirname, './public/assets/img/avatars/');

        // Invoked when a file has finished uploading.
        form.on('file', function(name, file) {
            try {
                // Allow only 3 files to be uploaded.
                if (photos.length === 2) {
                    fs.unlink(file.path);
                    return true;
                }

                var buffer = null,
                    type = file.type,
                    filename = '';

                // // Read a chunk of the file.
                // buffer = readChunk.sync(file.path, 0, 262);
                // // Get the file type using the buffer read using read-chunk
                // type = fileType(buffer);

                // Check the file type, must be either png,jpg or jpeg
                if (type !== null && (type === "image/png" || type === 'image/jpg' || type === 'image/jpeg')) {
                    // Assign new file name
                    filename = Date.now() + '-' + file.name;

                    // Move the file with the new file name
                    fs.rename(file.path, path.join(__dirname, './public/assets/img/avatars/' + filename), function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            // Add to the list of photos
                            photos.push({
                                status: true,
                                filename: filename,
                                type: type,
                                publicPath: '/assets/img/avatars/' + filename,
                                role: fieldss[0].role,
                                id: fieldss[0].id
                            });
                            photos = photos[0];
                            var obj = {};
                            if (photos.role == 'ven') {
                                obj.queryString = `update tbl_vendor set n_img_path=? where n_vendor_code=?;`;
                                obj.arr = [photos.publicPath, photos.id]
                            } else {
                                obj.queryString = `update tbl_emp set n_img_path=? where s_emp_id=?;`;
                                obj.arr = [photos.publicPath, photos.id]
                            }

                            con(obj).then(data => {
                                    res.status(200).json({
                                        "status": 200,
                                        "mess": "Updated !",
                                        "mess_body": `Image Uploaded Successfully.`,
                                        "data": photos.publicPath
                                    });
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        "code": 500,
                                        "status": 500,
                                        "mess": "Error !",
                                        "mess_body": `Error Uploading file.`
                                    });
                                });
                        }
                    });

                } else {
                    photos.push({
                        status: false,
                        filename: file.name,
                        message: 'Invalid file type'
                    });
                    fs.unlink(file.path, function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(`${file.path} deleted Succesfully.`)
                        }
                    });
                }
            } catch (error) {
                res.status(500).json(error);
            }
        });

        form.on('error', function(err) {
            console.log('Error occurred during processing - ' + err);
        });

        // Invoked when all the fields have been processed.
        form.on('end', function(err, fields, files) {
            console.
            log(`All Process Done here`);
        });
        // Parse the incoming form fields.
        form.parse(req, (err, fields, files) => {
            console.log('fields:', fields);
            fieldss.push(fields);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// ************** GIVEN BY GANESH***************
///////////////server.js code for image uypload

app.post('/uploadImg', function(req, res) {
    try {
        var photos = [],
            fieldss = [];
        form = new formidable.IncomingForm();

        form.multiples = false;
        // Upload directory for the images
        form.uploadDir = path.join(__dirname, './public/assets/img/logos/');

        // Invoked when a file has finished uploading.
        form.on('file', function(name, file) {
            try {
                // Allow only 3 files to be uploaded.
                if (photos.length === 2) {
                    fs.unlink(file.path);
                    return true;
                }

                var buffer = null,
                    type = file.type,
                    filename = '';

                // // Read a chunk of the file.
                // buffer = readChunk.sync(file.path, 0, 262);
                // // Get the file type using the buffer read using read-chunk
                // type = fileType(buffer);

                // Check the file type, must be either png,jpg or jpeg
                if (type !== null && (type === "image/png" || type === 'image/jpg' || type === 'image/jpeg')) {
                    // Assign new file name
                    filename = Date.now() + '-' + file.name;

                    // Move the file with the new file name
                    fs.rename(file.path, path.join(__dirname, './public/assets/img/logos/' + filename), function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            // Add to the list of photos
                            photos.push({
                                status: true,
                                filename: filename,
                                type: type,
                                s_og_name: file.name,
                                publicPath: '/assets/img/logos/' + filename,
                                n_user_id: fieldss[0].n_user_id,
                                s_email_id: fieldss[0].s_login_id,
                                n_system_param_id: fieldss[0].n_system_param_id1,

                                s_type: fieldss[0].s_type
                            });
                            photos = photos[0];
                            var date = new Date();
                            var d_created_date = date.getTime();

                            if (photos.n_system_param_id == "" || photos.n_system_param_id == undefined) {
                                var obj = {}
                                obj.queryString = `INSERT INTO tbl_temp_img  (s_og_name , s_new_name ,  s_path ,  s_type , s_created_by , d_created_date ) VALUES ($1,$2,$3,$4,$5,$6);`;


                                obj.arr = [photos.s_og_name, photos.filename, photos.publicPath, photos.s_type, photos.s_email_id, d_created_date]

                            } else if (photos.n_system_param_id != "") {
                                var obj = {}

                                // fieldss.logoid

                                // var sql  = `INSERT INTO tbl_attachment_master  (s_og_name , s_new_name ,  s_path ,  s_type , s_created_by , d_created_date,n_system_param_id ) VALUES ($$${photos.s_og_name}$$, $$${photos.filename}$$,$$${photos.publicPath}$$,$$${photos.s_type}$$, $$${photos.s_email_id}$$,$$${d_created_date}$$,$$${photos.n_system_param_id}$$);`;

                                obj.queryString = `INSERT INTO tbl_attachment_master  (s_og_name , s_new_name ,  s_path ,  s_type , s_created_by , d_created_date,n_system_param_id ) VALUES ($1,$2,$3,$4,$5,$6,$7);`;

                                obj.arr = [photos.s_og_name, photos.filename, photos.publicPath, photos.s_type, photos.s_email_id, d_created_date, photos.n_system_param_id]



                            }


                            con(obj).then(data => {
                                    res.status(200).json({
                                        "status": 200,
                                        "mess": "Updated !",
                                        "mess_body": `Image Uploading Successfully.`
                                    });
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        "code": 500,
                                        "status": 500,
                                        "mess": "Error !",
                                        "mess_body": `Error Uploading file.`
                                    });
                                });
                        }
                    });

                } else {
                    photos.push({
                        status: false,
                        filename: file.name,
                        message: 'Invalid file type'
                    });
                    fs.unlink(file.path, function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(`${file.path} deleted Succesfully.`)
                        }
                    });
                }
            } catch (error) {
                res.status(500).json(error);
            }
        });

        form.on('error', function(err) {
            console.log('Error occurred during processing - ' + err);
        });

        // Invoked when all the fields have been processed.
        form.on('end', function(err, fields, files) {
            console.log(`All Process Done here`);
        });
        // Parse the incoming form fields.
        form.parse(req, (err, fields, files) => {
            console.log('fields:', fields);
            fieldss.push(fields);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// *************** GANESH*******************
// *************** Export File*******************
var http = require("http").createServer(app);
// var fileSystem = require("fs");
var fastcsv = require("fast-csv");
app.use("/public/download", express.static(__dirname + "/public/download"));
app.post("/exportData", function(req, res) {
    var obj = {};
    obj.queryString = "SELECT * from tbl_asset_master where n_status=$1"
    obj.arr = ['0'];

    con(obj).then(data => {
            var ws = fs.createWriteStream("public/download/Assetdata.csv");
            fastcsv
                .write(data.rows, {
                    headers: true
                })
                .on("finish", function() {

                    res.send("<a href='public/download/Assetdata.csv' download='Assetdata.csv' id='download-link'></a><script>document.getElementById('download-link').click();</script>");
                })
                .pipe(ws);
            // log.info({ "status": 500, "mess": "Record Not Found !", "mess_body": "You have Entered Wrong Credentials." });
            // res.status(500).json({ "status": 500, "mess": "Record Not Found !", "mess_body": "You have Entered Wrong Credentials." });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                "code": 500,
                "status": 500,
                "mess": "Error !",
                "mess_body": "Server side Error."
            });
        });


});

//uplpoad cha form files
app.post('/uploadfile', function(req, res) {
    try {
        var sql = '';
        var obj = {
            queryString: '',
            arr: []
        };
        var uploadss = './uploads';
        if (!fs.existsSync(uploadss)) {
            fs.mkdirSync(uploadss);
        }
        req.pipe(req.busboy); // Pipe it through busboy
        var uploadPath_ = path.join('./uploads'); // Register the upload path

        var fields = {},
            files = [],
            fileSize = null;
        var date = new Date();
        req.busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            console.log('Field [' + fieldname + ']: value: ' + val);
            fields[fieldname] = val;
        });

        req.busboy.on('file', (fieldname, file, filename) => {
            // file.on('data', function (data) {
            //     console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
            //     // fileSize += data.length;
            // });

            file.on('end', function() {
                console.log('File [' + fieldname + '] Finished');
            });

            console.log(`Upload of '${filename}' started`);
            var replaceName = filename.replace(/[&\/\\#,+( )$~%'":*?<>{}]/g, '_');
            var filenm = replaceName;
            //fs.rename(file.path, form.uploadDir + '/' + filenm);
            // Create a write stream of the new file
            files.push({ name: filenm, path: './uploads/', oginame: replaceName });

            const fstream = fs.createWriteStream(path.join(uploadPath_, filenm));

            file.pipe(fstream);

            //On finish of the upload
            fstream.on('close', () => {
                // console.log(fileSize);
                console.log(`Upload of '${filename}' finished`);
                var data_arr = [];
                var field = fields;
                res.redirect('/main#/callcycle');


            });

        });

    } catch (error) {
        res.status(500).json(error);
    }
});

// upload dynamic form file
app.post('/uploadDynfile', function(req, res) {

    try {
        var sql = '';
        var obj = {
            queryString: '',
            arr: []
        };
        var uploadss = './public/assets/uploads/';
        if (!fs.existsSync(uploadss)) {
            fs.mkdirSync(uploadss);
        }
        req.pipe(req.busboy); // Pipe it through busboy
        var uploadPath_ = path.join('./public/assets/uploads/'); // Register the upload path

        var fields = {},
            files = [],
            fileSize = null;
        var date = new Date();
        req.busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            console.log('Field [' + fieldname + ']: value: ' + val);
            fields[fieldname] = val;
        });

        req.busboy.on('file', (fieldname, file, filename) => {
            // file.on('data', function (data) {
            //     console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
            //     // fileSize += data.length;
            // });

            file.on('end', function() {
                console.log('File [' + fieldname + '] Finished');
            });

            console.log(`Upload of '${filename}' started`);
            var replaceName = filename.replace(/[&\/\\#,+( )$~%'":*?<>{}]/g, '_');
            var filenm = Date.now() + '_' + replaceName;
            //fs.rename(file.path, form.uploadDir + '/' + filenm);
            // Create a write stream of the new file
            files.push({ name: filenm, path: './assets/uploads/', oginame: replaceName });

            const fstream = fs.createWriteStream(path.join(uploadPath_, filenm));

            file.pipe(fstream);

            //On finish of the upload
            fstream.on('close', () => {
                // console.log(fileSize);
                console.log(`Upload of '${filename}' finished`);
                var data_arr = [];
                var field = fields;

                /* if(fields.n_field_id = ""){
                 fields.n_field_id = null;
                }
                if(fields.n_action_id1 = ""){
                 fields.n_action_id1 = null;
                } */


                if (fields.head_id == "" && obj.queryString == "") {
                    obj.queryString = "INSERT INTO tbl_temp_dynfile (n_form_id,n_field_id,s_og_name,s_new_name,s_path,s_uid,s_attach_type,s_show_file_name) VALUES ?";
                    //var dum=[]
                    for (var i = 0; i < files.length; i++) {

                        obj.arr.push([fields.n_form_id, fields.n_field_id, files[i].oginame, files[i].name, files[i].path, fields.emailid, fields.type, fields.show_file_name]);

                    }

                    conmul(obj).then(data => {
                            res.status(200).json({
                                "status": 200,
                                "mess": "Inserted !",
                                "mess_body": `data Uploaded Successfully.`
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                "code": 500,
                                "status": 500,
                                "mess": "Error !",
                                "mess_body": `Error Uploading file.`
                            });
                        });
                } else if (fields.head_id != "" && obj.queryString == "") {
                    obj.queryString = "INSERT INTO tbl_dyn_file (n_form_id,n_field_id,s_evim_id,s_og_name,s_new_name,s_path,s_uid,s_attach_type,s_show_file_name) VALUES ?";
                    for (var i = 0; i < files.length; i++) {
                        obj.arr.push([fields.n_form_id, fields.n_field_id, fields.head_id, files[i].oginame, files[i].name, files[i].path, fields.emailid, fields.type, fields.show_file_name])

                    }
                    conmul(obj).then(data => {
                            res.status(200).json({
                                "status": 200,
                                "mess": "Inserted !",
                                "mess_body": `data Uploaded Successfully.`
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                "code": 500,
                                "status": 500,
                                "mess": "Error !",
                                "mess_body": `Error Uploading file.`
                            });
                        });
                }


            });

        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});



// ***************************************CSV File Upload*******************************

app.post('/uploadAsset', function(req, res) {
    try {
        var photos = [],
            fieldss = [];
        form = new formidable.IncomingForm();

        form.multiples = false;
        // Upload directory 
        form.uploadDir = path.join(__dirname, './public/assets/img/avatars/');

        // Invoked when a file has finished uploading.
        form.on('file', function(name, file) {
            try {
                type = file.type,
                    filename = '';
                // Check the file type, must be either png,jpg or jpeg
                if (type !== null && type === "application/vnd.ms-excel") {
                    // filename = Date.now() + '-' + file.name;
                    filename = Date.now() + '-' + name + '.csv';

                    // Move the file with the new file name
                    fs.rename(file.path, path.join(__dirname, './public/assets/img/avatars/' + filename), function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            var fileInputName = './public/assets/img/avatars/' + filename;

                            const csvFilePath = fileInputName;

                            var arruCsv = [];

                            (async() => {
                                const jsonObj = await csv().fromFile(csvFilePath)
                                console.log(jsonObj);
                                arruCsv.push(jsonObj);
                                if (arruCsv.length == 0) {
                                    return;
                                } else {
                                    var obj = {};
                                    var CSVdata = arruCsv[0]
                                    for (i = 0; i < CSVdata.length; i++) {
                                        var date = new Date();
                                        var d_created_date = date.getTime();

                                        obj.queryString = `insert into tbl_asset_master(s_asset_name,n_asset_no,s_manufacturer_name,s_make,n_model_no,s_device_category,n_serial_number,n_barcode_number,s_owner_name,s_owner_email,n_u_size,n_u_position,d_install_date,n_u_height,s_supplier,s_rated_power, s_rated_current,n_rated_voltage,s_maintenance_cycle,s_contact_person,n_contact_number,d_next_maintenance,s_customized_notes,n_status,s_created_by,d_created_date) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26)`;

                                        obj.arr = [CSVdata[i].AssetName, CSVdata[i].AssetNo, CSVdata[i].Manufacrturer, CSVdata[i].Maker, CSVdata[i].ModelNo, CSVdata[i].DeviceCategory, CSVdata[i].SerialNo, CSVdata[i].BarcodeNo, CSVdata[i].OwnerName, CSVdata[i].OwnerEmail, CSVdata[i].Usize, CSVdata[i].Uposition, CSVdata[i].InstallDate, CSVdata[i].UHeight, CSVdata[i].Supplier, CSVdata[i].RatedPower, CSVdata[i].RatedCurrent, CSVdata[i].RatedVoltage, CSVdata[i].MaintenanceCycle, CSVdata[i].ContactPerson, CSVdata[i].ContactNo, CSVdata[i].NextMaintenance, CSVdata[i].CustomizedNote, '0', fieldss[0].s_created_by, d_created_date];
                                        con(obj).then(data => {})
                                            .catch(err => {
                                                res.status(500).json({
                                                    "code": 500,
                                                    "status": 500,
                                                    "mess": "Error !",
                                                    "mess_body": `Error Uploading file.`
                                                });
                                            });
                                    }
                                    res.status(200).json({
                                        "status": 200,
                                        "mess": "Updated !",
                                        "mess_body": `Image Uploading Successfully.`
                                    });
                                }
                            })();


                        }
                    });

                } else {
                    photos.push({
                        status: false,
                        filename: file.name,
                        message: 'Invalid file type'
                    });
                    fs.unlink(file.path, function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(`${file.path} deleted Succesfully.`)
                        }
                    });
                }
            } catch (error) {
                res.status(500).json(error);
            }
        });

        form.on('error', function(err) {
            console.log('Error occurred during processing - ' + err);
        });

        // Invoked when all the fields have been processed.
        form.on('end', function(err, fields, files) {
            console.
            log(`All Process Done here`);
        });
        // Parse the incoming form fields.
        form.parse(req, (err, fields, files) => {
            console.log('fields:', fields);
            fieldss.push(fields);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
// ***************************************CSV File Upload End*******************************
app.post('/check_file', function(req, res) {
    fs.stat("./uploads/callcycle.xlsx", function(err, stats) {

        //Checking for errors
        if (err) {
            console.log(err)
            res.send(err.message)
        } else {
            console.log(stats)
            res.send(stats)
                //Logging the stats Object
        }
    });
})



// app.post('/upload_alaram_inhibit', upload.single('file'), async(req, res) => {
//     try {
//         // Access form data
//         const { name, email } = req.body;
//         const filename = req.file.filename;
//         const filepath = req.file.path;

//         // Save form data to MySQL database
//         const connection = await pool.getConnection();
//         await connection.query('INSERT INTO FormData (filename, filepath, name, email) VALUES (?, ?, ?, ?)', [filename, filepath, name, email]);
//         connection.release();

//         res.send('File uploaded successfully!');
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });


//start server
var server = require('http').createServer(app)

// Start server
var port = process.env.PORT || 5000
server.listen(port, function() {
    //log.info('Express server listening on port %d in %s mode', port, app.get('env'));
    console.log('Express server listening on port %d in %s mode', port, app.get('env'))
})