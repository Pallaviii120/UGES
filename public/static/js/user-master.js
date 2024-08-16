
(function () {
//   var client_id;
//   var global_user_data=[];
  $("#beats_div").hide()
  $("#lev_els").hide()
  $("#ftter").hide();
  $("#edit_form").hide()

//   debugger;
//   levels=()=>{
//     $("#saveandprocess").hide()
//     $("#back1").hide()
//     $("#lev_els").show()
//     debugger;
//     var dt = new Date();
//     var year = dt.getFullYear();
//     var month = (dt.getMonth() + 1).toString().padStart(2, '0'); 
//     var day = dt.getDate().toString().padStart(2, '0');
//     var createdDate = `${year}-${month}-${day}`;

//     console.log(createdDate);

//     var originalDateTimeString = $("#d_doj").val();
//     var dateTime = new Date(originalDateTimeString);

//     var year = dateTime.getFullYear();
//     var month = (dateTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//     var day = dateTime.getDate().toString().padStart(2, '0');

//     var doj = `${year}-${month}-${day}`;

//     client_id= $("#s_client").val();
//     debugger;
//     var formdata = {
//       client: $("#s_client").val(),
//       username: $("#s_username").val().toUpperCase(),
//       password: $("#s_pass").val(),
//       fullname: $("#s_name").val().toUpperCase(),

//       position: $("#s_position  option:selected").text().toUpperCase(),
//       positiontype: $("#s_position_type  option:selected").text().toUpperCase(),
//       positioncode: $("#s_position_code").val().toUpperCase(),
//       doj: doj,

//       contactno: $("#n_contact_no").val(),
//       email: $("#s_email").val().toUpperCase(),
//       address: $("#s_address").val().toUpperCase(),
//       city: $("#s_city  option:selected").text().toUpperCase(),

//       state: $("#s_state  option:selected").text().toUpperCase(),
//       region: $("#s_region  option:selected").text().toUpperCase(),
//       employeecode: $("#s_emp_code").val().toUpperCase(),
    

//       payroll: $("#s_payroll").val().toUpperCase(),
//       process: 0,
//       validated: 1,
     
//       createdby: $("#s_client").val(),
//       deleted: $("#s_status").val(),
//       channel: $("#s_channel  option:selected").text().toUpperCase(),
//       brand: $("#s_brand").val().toUpperCase(),

//       remark: 'NEW',
//       existing_code: 'NA',
//       createdDate: createdDate,
//     }

//     getlevel2()
//     global_user_data.push(formdata)
//   }

//   // check_validate=()=>{
//   //   if ($("#act_frm").valid()) { 
//   //     levels();
//   // }

//   // }
 
//   back_to_form=()=>{
//     $("#lev_els").hide()
//     $("#beats_div").hide()
//     $('#user_form').show();
//     $('#user_list').show();
//     $('#user_form').hide();
//     $("#edit_form").hide()
//   }

//   back_to_levels=()=>{
//     $("#lev_els").show()
//     $("#beats_div").hide()
//   }
//   back = () => {
//     $('#user_list').show();
//     $('#user_form').hide();
//     $("#edit_form").hide()
//   }

//   proceed = () => {
//     debugger;
//     if (!confirm("Do You Really Want To Save And Proceed!")) {
//       return;
//     } else {
//       // $("#beats_div").show();
//       // $("#ftter").show();

//       var levels={
//         level2:$("#level2 option:selected").val(),
//         level3:$("#level3 option:selected").val(),
//         level4:$("#level4 option:selected").val(),
//         level5:$("#level5 option:selected").val(),
//         level6:$("#level6 option:selected").val()
//       }

//       debugger
//       global_user_data.push(levels)
      
     
//       // debugger;
//       // if ($("#act_frm").valid()) {
//       //   debugger;
//       //   }
//     }

//   }


//   adduser = () => {
//     $('#user_list').hide();
//     $('#user_form').show();
//     $('#user_bulk').hide();
//     $('#s_email').val('');
//     $('#s_pass').val('');
//     $('#s_username').val('');
//     $("#edit_form").hide()
    
//   }

//   cleardata = () => {
//     debugger
//     $('#s_email').val('');
//     $('#s_pass').val('');
//     $('#s_username').val('');

//   }

//   // cleardata = () => {
//   //   $('#excel_data').html('');
//   //   $('#save_data').prop('disabled', true);
//   //   $('#input').val('');
//   // }


//   getlistdata = () => {
//     debugger;
//     var data={clientID:localStorage.getItem('clientID')}
//     $.ajax({
//       url: './Qr/getuserData',
//       type: 'POST',
//       data:data,
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         debugger;
//         console.log(result);
//         try {
//           if ($.fn.dataTable.isDataTable('#makerTable12')) {
//             $('#makerTable12').DataTable().destroy();
//           }
//           $('#makerTable12').DataTable({
//             "dom": '<"dt-buttons"Bf><"clear">lirtp',
//             "paging": true,
//             "autoWidth": true,
//             "responsive": true,
//             "buttons": [
//               'copyHtml5',
//               'csvHtml5',
//               'excelHtml5',
//               'pdfHtml5',
//               'print'
//             ],
//             'data': result.data.recordset,
//             'aoColumns': [
//               { 'data': 'firstName' },
//               { 'data': 'userName' },
//               { 'data': 'position' },
//               { 'data': 'positionID' },
//               { 'data': 'city' },
//               {
//                 'render': function (data, type, row, meta) {
//                   if (row.deleted == 0) {
//                     return `<a class="badge bg-dark text-white ms-2" style="background:green!important;color:white;font-weight:bolder;">Active</a>`
//                   } else {
//                     return `<a class="badge bg-dark text-white ms-2" style="background:red!important;color:white;font-weight:bolder;">Deactive</a>`
//                   }
//                 }
//               },
//               {
//                 'render': function (data, type, row, meta) {
//                   return `<a onclick="edituser('${row.userID}');"><i class="fa fa-edit" style="font-size:12px"></i></a>`;
//                 },
//               }
//             ],
//           });
//         } catch (err) {
//           console.log(err);
//         }

//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {

//       }
//     });

//   }
//   getlistdata();

//   getClients = function () {
//     debugger;
//     $.ajax({
//       url: '/Qr/getClients',
//       type: 'POST',
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_client").append(`<option value="${ele.clientID}">${ele.clientName}</option>`);
//         });

//         // //to bind clientID 
//         // $("#s_client").on("change", function() {
//         //   var selectedClientId = $(this).val();
//         //   $("#client_id").val(selectedClientId);
//         // });


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {
//         // $("#s_region").select2({
//         //   placeholder: 'Select Region',
//         // });

//       }
//     })

//   }
//   getClients()
 
//   get_username = function () {
//     debugger;
//     var data = {
//       cli_id: $("#s_client").val()
//     }

//     debugger;
//     $.ajax({
//       url: '/Qr/get_username',
//       type: 'POST',
//       crossDomain: true,
//       data: data,

//       success: function (result) {
//         debugger;
//         var data = result.data[0].userName;
//         const match = data.match(/([a-zA-Z]+)([0-9]+)/);

//         if (match) {
//           const letters = match[1];
//           let numbers = parseInt(match[2], 10);
//           numbers += 1;
//           var username = letters + numbers;

//           console.log('Original String:', data);
//           console.log('Result String:', username);
//         } else {
//           console.log('Invalid input string');
//         }

//         $("#s_username").val(username);
//         $("#s_position_code").val(username);


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {

//       }
//     })

//   }

//   getPositions = function () {
//     var data = {
//       cli_id: $("#s_client").val()
//     }
//     $.ajax({
//       url: '/Qr/getPositions',
//       type: 'POST',
//       crossDomain: true,
//       data: data,

//       beforeSend: function () {
//         $("#s_position").html(`<option value="">Select Position</option>`);
//       },
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_position").append(`<option value="${ele.userTypeName}">${ele.userTypeName}</option>`);
//         });



//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {
//         // $("#s_region").select2({
//         //   placeholder: 'Select Region',
//         // });

//       }
//     })

//   }

//   getRegions = function () {

//     debugger;
//     $.ajax({
//       url: '/Qr/getRegions',
//       type: 'POST',
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_region").append(`<option value="${ele.regionID}">${ele.regionDescription}</option>`);
//         });


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }
//   getRegions()

//   getuserState = function (id) {

//     debugger;
//     $.ajax({
//       url: '/Qr/getuserState',
//       type: 'POST',
//       // data:{rid:id},
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_state").append(`<option value="${ele.stateID}">${ele.stateDescription}</option>`);
//         });


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }

//   getuserCity = function () {

//     debugger;
//     $.ajax({
//       url: '/Qr/getuserCity',
//       type: 'POST',
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_city").append(`<option value="${ele.cityID}">${ele.cityDescription}</option>`);
//         });


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }


//   getlevel2 = function () {
//     let data={
//       ID:client_id
//     }
//     debugger;
//     $.ajax({
//       url: '/Qr/getlevel2',
//       type: 'POST',
//       crossDomain: true,
//       data:data,
//       beforeSend(){
      
//       },
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_lvl2").append(`<option value="${ele.emp_code}">${ele.emp_code}-${ele.firstName}</option>`);
//         });

//         $("#s_lvl2").select2({
//           placeholder: 'Search Employee'
         
//       });



//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }

//   getlevel3 = function () {
//     let data={
//       ID:client_id
//     }

//     debugger;
//     $.ajax({
//       url: '/Qr/getlevel3',
//       type: 'POST',
//       data:data,
//       crossDomain: true,

//       beforeSend(){
      
//        },
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_lvl3").append(`<option value="${ele.emp_code}">${ele.emp_code}-${ele.firstName}</option>`);
//         });

//         $("#s_lvl3").select2({
//           placeholder: 'Search Employee'
         
//       });


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }

//   getlevel4 = function () {
//     let data={
//       ID:client_id
//     }

//     debugger;
//     $.ajax({
//       url: '/Qr/getlevel4',
//       type: 'POST',
//       data:data,
//       crossDomain: true,
//       beforeSend(){
       
//        },
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_lvl4").append(`<option value="${ele.emp_code}">${ele.emp_code}-${ele.firstName}</option>`);
//         });

//         $("#s_lvl4").select2({
//           placeholder: 'Search Employee'
         
//       });

        


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {

//       }
//     })

//   }

//   getlevel5 = function () {
//     let data={
//       ID:client_id
//     }

//     debugger;
//     $.ajax({
//       url: '/Qr/getlevel5',
//       type: 'POST',
//       data:data,
//       crossDomain: true,
//       beforeSend(){
       
//        },
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_lvl5").append(`<option value="${ele.emp_code}">${ele.emp_code}-${ele.firstName}</option>`);
//         });

//         $("#s_lvl5").select2({
//           placeholder: 'Search Employee'
         
//       });


//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }

//   getlevel6 = function () {
//     debugger;
//     let data={
//       ID:client_id
//     }
//     $.ajax({
//       url: '/Qr/getlevel6',
//       type: 'POST',
//       data:data,
//       crossDomain: true,
//       beforeSend(){
       
//        },
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#s_lvl6").append(`<option value="${ele.emp_code}">${ele.emp_code}-${ele.firstName}</option>`);
//         });

//         $("#s_lvl6").select2({
//           placeholder: 'Search Employee'
         
//       });

//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {

//       }
//     })

//   }

//   getbeatsByregion = function (region,client) {
//     debugger;
//     var data = {
//       selectedRegion: region,
//       client:client
//     }

//     debugger;
//     $.ajax({
//       url: '/Qr/getbeatsByregion',
//       type: 'POST',
//       data: data,
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         var data = result.data;

//         data.forEach((ele) => {
//           $("#multiSelect").append(`<option value="${ele.routeName}">${ele.routeName}</option>`);
//         });

//         $("#multiSelect").select2({
//           placeholder: 'Search Beats',
//         });

//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }

//   /*~~~~~~To select multiple beats and remove specific beat~~~~~~~~~~~*/
//   debugger;
//   var selectedValuesArray = [];
//   var selectedValuesHtml = '';
//   $("#multiSelect").on("change", function () {
//     debugger;
//     const selectedValues = $("#multiSelect").val();
//     selectedValuesArray = selectedValues; // Update the array

//     selectedValuesHtml = selectedValues.map(value => `
//           <div class="selected-value">
//               <div class="value-column">${value}</div>
//               <div class="remove-column">
//                   <button class="remove-btn" data-value="${value}">
//                       <i class="fa fa-times"></i>
//                   </button>
//               </div>
//           </div>`).join("");
//     $("#selectedValues").html(selectedValuesHtml);
//   });

//   debugger;
//   $(document).on("click", ".remove-btn", function () {
//     const valueToRemove = $(this).data("value");
//     $(this).parent().parent().remove();
//     $("#multiSelect option[value='" + valueToRemove + "']").prop("selected", false);
//     selectedValuesArray = selectedValuesArray.filter(value => value !== valueToRemove); // Update the array
//   });







//   edituser=(id)=>{
//     debugger;
//     let data ={
//       id:id
//     }
//     $.ajax({
//       url: '/Qr/getuserbyid',
//       type: 'POST',
//       data: data,
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         var data = result.data[0];
//         $('#user_list').hide();
//         $('#user_form').hide();
//         $("#edit_form").show();

//         $('#s_id').val(data.ID);
//         $('#clientID').val(data.clientID);
//         $('#userID').val(data.userID);
//         $('#usertyepID').val(data.userTypeID);
//         $('#userName').val(data.userName);
//         $('#password').val(data.password);
//         $('#positioncode').val(data.positioncode);
//         $('#positiontype').val(data.positionType);
//         $('#firstName').val(data.firstName);
//         $('#lastname').val(data.lastName);
//         $('#gender').val(data.gender);
//         $('#dob').val(data.dob!=null?data.dob.split('T')[0]:data.dob);
//         $('#age').val(data.age);
//         $('#bloodgroup').val(data.bloodGroup);
//         $('#email').val(data.email1);
//         $('#branch').val(data.branch);
//         $('#phone1').val(data.phone1);
//         $('#phone2').val(data.phone2);
//         $('#tlcode').val(data.tlCode);
//         $('#tlname').val(data.tlName);
//         $('#fmcode').val(data.fmCode);
//         $('#fmname').val(data.fmName);
//         $('#brand').val(data.brand);
//         $('#deleted').val(data.deleted==false?'0':'1');
//         $('#position').val(data.position);
//         $('#city').val(data.city);
//         $('#deactivationdate').val(data.deactivatedate != null ?data.deactivatedate.split('T')[0]:data.deactivatedate);
//         $('#doj').val(data.doj != null ?data.doj.split('T')[0]:data.doj);
//         $('#emp_code').val(data.emp_code);
//         $('#dor').val(data.dor != null ?data.dor.split('T')[0]:data.dor);
//         $('#fmempcode').val(data.fmempcode);
//         $('#lwd').val(data.lwd != null ?data.lwd.split('T')[0]:data.lwd);
//         $('#state').val(data.state);
//         $('#zone').val(data.zone);
//         $('#positionID').val(data.positionID);
//         $('#empID').val(data.empID);
//         $('#channeltype').val(data.channeltype);
//         $('#payroll').val(data.payroll);
//         $('#level_2').val(data.level2positionID);
//         $('#level_3').val(data.level3positionID);
//         $('#level_4').val(data.level4positionID);
//         $('#level_5').val(data.level5positionID);
//         $('#level_6').val(data.level6positionID);
//         $('#level_7').val(data.level7positionID);

//         // $('#s_client').val(data.clientID);
//         // $("#s_username").val(data.userName),
//         // $("#s_pass").val(data.password),
//         // $("#s_name").val(data.firstName),
//         // $("#s_position").val(data.position)

//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }

//   updateuserdetails=()=>{
//     let data ={
//       id:$("#s_id").val(),
//       clientID:($('#clientID').val()== null ||$('#clientID').val()== '' ||$('#clientID').val()== undefined)?null:$('#clientID').val(),
//       userID :($('#userID ').val()== null ||$('#userID ').val()== '' ||$('#userID ').val()== undefined)?null:$('#userID ').val(),
//       usertyepID:($('#usertyepID').val()== null ||$('#usertyepID').val()== '' ||$('#usertyepID').val()== undefined)?null:$('#usertyepID').val(),
//       userName :($('#userName ').val()== null ||$('#userName ').val()== '' ||$('#userName ').val()== undefined)?null:$('#userName ').val(),
//       password:($('#password').val()== null ||$('#password').val()== '' ||$('#password').val()== undefined)?null:$('#password').val(),
//       positioncode:($('#positioncode').val()== null ||$('#positioncode').val()== '' ||$('#positioncode').val()== undefined)?null:$('#positioncode').val(),
//       positiontype:($('#positiontype').val()== null ||$('#positiontype').val()== '' ||$('#positiontype').val()== undefined)?null:$('#positiontype').val(),
//       firstName:($('#firstName').val()== null ||$('#firstName').val()== '' ||$('#firstName').val()== undefined)?null:$('#firstName').val(),
//       lastname:($('#lastname').val()== null ||$('#lastname').val()== '' ||$('#lastname').val()== undefined)?null:$('#lastname').val(),
//       gender:($('#gender').val()== null ||$('#gender').val()== '' ||$('#gender').val()== undefined)?null:$('#gender').val(),
//       dob:($('#dob').val()== null ||$('#dob').val()== '' ||$('#dob').val()== undefined)?null:$('#dob').val(),
//       age:($('#age').val()== null ||$('#age').val()== '' ||$('#age').val()== undefined)?null:$('#age').val(),
//       bloodgroup:($('#bloodgroup').val()== null ||$('#bloodgroup').val()== '' ||$('#bloodgroup').val()== undefined)?null:$('#bloodgroup').val(),
//       email:($('#email').val()== null ||$('#email').val()== '' ||$('#email').val()== undefined)?null:$('#email').val(),
//       branch:($('#branch').val()== null ||$('#branch').val()== '' ||$('#branch').val()== undefined)?null:$('#branch').val(),
//       phone1:($('#phone1').val()== null ||$('#phone1').val()== '' ||$('#phone1').val()== undefined)?null:$('#phone1').val(),
//       phone2:($('#phone2').val()== null ||$('#phone2').val()== '' ||$('#phone2').val()== undefined)?null:$('#phone2').val(),
//       tlcode:($('#tlcode').val()== null ||$('#tlcode').val()== '' ||$('#tlcode').val()== undefined)?null:$('#tlcode').val(),
//       tlname:($('#tlname').val()== null ||$('#tlname').val()== '' ||$('#tlname').val()== undefined)?null:$('#tlname').val(),
//       fmcode:($('#fmcode').val()== null ||$('#fmcode').val()== '' ||$('#fmcode').val()== undefined)?null:$('#fmcode').val(),
//       fmname:($('#fmname').val()== null ||$('#fmname').val()== '' ||$('#fmname').val()== undefined)?null:$('#fmname').val(),
//       brand:($('#brand').val()== null ||$('#brand').val()== '' ||$('#brand').val()== undefined)?null:$('#brand').val(),
//       deleted:($('#deleted').val()== null ||$('#deleted').val()== '' ||$('#deleted').val()== undefined)?null:$('#deleted').val(),
//       position:($('#position').val()== null ||$('#position').val()== '' ||$('#position').val()== undefined)?null:$('#position').val(),
//       city:($('#city').val()== null ||$('#city').val()== '' ||$('#city').val()== undefined)?null:$('#city').val(),
//       deactivationdate:($('#deactivationdate').val()== null ||$('#deactivationdate').val()== '' ||$('#deactivationdate').val()== undefined)?null:$('#deactivationdate').val(),
//       doj:($('#doj').val()== null ||$('#doj').val()== '' ||$('#doj').val()== undefined)?null:$('#doj').val(),
//       emp_code:($('#emp_code').val()== null ||$('#emp_code').val()== '' ||$('#emp_code').val()== undefined)?null:$('#emp_code').val(),
//       dor:($('#dor').val()== null ||$('#dor').val()== '' ||$('#dor').val()== undefined)?null:$('#dor').val(),
//       fmempcode:($('#fmempcode').val()== null ||$('#fmempcode').val()== '' ||$('#fmempcode').val()== undefined)?null:$('#fmempcode').val(),
//       lwd:($('#lwd').val()== null ||$('#lwd').val()== '' ||$('#lwd').val()== undefined)?null:$('#lwd').val(),
//       state:($('#state').val()== null ||$('#state').val()== '' ||$('#state').val()== undefined)?null:$('#state').val(),
//       zone:($('#zone').val()== null ||$('#zone').val()== '' ||$('#zone').val()== undefined)?null:$('#zone').val(),
//       positionID:($('#positionID').val()== null ||$('#positionID').val()== '' ||$('#positionID').val()== undefined)?null:$('#positionID').val(),
//       empID:($('#empID').val()== null ||$('#empID').val()== '' ||$('#empID').val()== undefined)?null:$('#empID').val(),
//       channeltype:($('#channeltype').val()== null ||$('#channeltype').val()== '' ||$('#channeltype').val()== undefined)?null:$('#channeltype').val(),
//       payroll:($('#payroll').val()== null ||$('#payroll').val()== '' ||$('#payroll').val()== undefined)?null:$('#payroll').val(),
//       modifiedby:localStorage.getItem('userID')
      
  
//     }
//     $.ajax({
//       url: '/Qr/updateuserdata',
//       type: 'POST',
//       data: data,
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         getlistdata();
//         $('#user_list').show();
//         $('#user_form').hide();
//         $("#edit_form").hide();

//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }


//     updatehr=()=>{
//     let data ={
//       clientID:($('#clientID').val()== null ||$('#clientID').val()== '' ||$('#clientID').val()== undefined)?null:$('#clientID').val(),
//       positionID:($('#positionID').val()== null ||$('#positionID').val()== '' ||$('#positionID').val()== undefined)?null:$('#positionID').val(),
//       emp_code:($('#emp_code').val()== null ||$('#emp_code').val()== '' ||$('#emp_code').val()== undefined)?null:$('#emp_code').val(),
//       empID:($('#empID').val()== null ||$('#empID').val()== '' ||$('#empID').val()== undefined)?null:$('#empID').val(),
//       userID :($('#userID ').val()== null ||$('#userID ').val()== '' ||$('#userID ').val()== undefined)?null:$('#userID ').val(),
//       level2:($('#level_2 ').val()== null ||$('#level_2 ').val()== '' ||$('#level_2 ').val()== undefined)?null:$('#level_2 ').val(),
//       level3:($('#level_3 ').val()== null ||$('#level_3 ').val()== '' ||$('#level_3 ').val()== undefined)?null:$('#level_3 ').val(),
//       level4:($('#level_4 ').val()== null ||$('#level_4 ').val()== '' ||$('#level_4 ').val()== undefined)?null:$('#level_4 ').val(),
//       level5:($('#level_5 ').val()== null ||$('#level_5 ').val()== '' ||$('#level_5 ').val()== undefined)?null:$('#level_5 ').val(),
//       level6:($('#level_6 ').val()== null ||$('#level_6 ').val()== '' ||$('#level_6 ').val()== undefined)?null:$('#level_6 ').val(),
//       level7:($('#level_7 ').val()== null ||$('#level_7 ').val()== '' ||$('#level_7 ').val()== undefined)?null:$('#level_7 ').val(),

      
  
//     }
//     $.ajax({
//       url: '/Qr/updatehr',
//       type: 'POST',
//       data: data,
//       crossDomain: true,
//       success: function (result) {
//         debugger;
//         $('#user_list').show();
//         $('#user_form').hide();
//         $("#edit_form").hide();

//         getlistdata();

//       }, error: function (error) {
//         console.log(error);
//       }, complete: function () {


//       }
//     })

//   }




//   addnewusers = function () {
//     debugger;

//     var data={
//       formdata:global_user_data
//     }
//     debugger;
//     if(confirm("Do you want to save User?")){
//       $.ajax({
//         url: '/Qr/addnewusers',
//         type: 'POST',
//         crossDomain: true,
//         data: data,
  
//         beforeSend() {
  
//         },
//         success(result) {
//           debugger;
//           $("#user_form").hide();
//           $("#edit_form").hide()
//           $("#user_list").show();
//           window.location.href = '/main#/beatmapping'
//             // getlistdata();
          
  
//           // $.ajax({
//           //   url: '/Qr/execute_user_creation_job',
//           //   type: 'POST',
//           //   crossDomain: true,
//           //   data: data,
      
//           //   beforeSend() {
      
//           //   },
//           //   success(result) {
//           //     window.location.href = '/main#/beatapping'
//           //   },
//           //   complete() {
      
//           //   }
      
//           // })
  
//         },
//         complete() {
  
//         }
  
//       })


//     }else{

//       $.ajax({
//         url: '/Qr/addnewusers',
//         type: 'POST',
//         crossDomain: true,
//         data: data,
  
//         beforeSend() {
  
//         },
//         success(result) {
//           debugger;
//              alert("User Created successfully!")
//           // $.ajax({
//           //   url: '/Qr/execute_user_creation_job',
//           //   type: 'POST',
//           //   crossDomain: true,
//           //   data: data,
      
//           //   beforeSend() {
      
//           //   },
//           //   success(result) {
//           //     alertify.alert('User Created Succesfully!', function(){ alertify.success('Ok'); });
//           //   },
//           //   complete() {
      
//           //   }
      
//           // })
  
//         },
//         complete() {
  
//         }
  
//       })
     

//     }

   



//   }


// /**=================================================================================== */

//   $("#form-login").on("submit", function (e) {
//     debugger;
//     try {
//       var s_email = document.getElementById('s_email').value;
//       var s_pass = document.getElementById('s_pass').value;
//       var capt = document.getElementById('entered-captcha').value;
//       var s_type = 'CRM'
//       if (s_email == '' || s_email == null || s_email == undefined || s_email == 'undefined') {
//         alertify.error('Please Enter Email');
//       } else if (s_pass == '' || s_pass == null || s_pass == undefined || s_pass == 'undefined') {
//         alertify.error('Please Enter Password');
//       } else if (capt == '' || capt == null || capt == undefined || capt == 'undefined') {
//         alertify.error('Please Enter Captcha');
//       }
//       var OTP = Math.floor(100000 + Math.random() * 900000)
//       var data = {
//         s_email: s_email,
//         s_pass: s_pass,
//         capt: capt,
//         s_type: s_type,
//         OTP: OTP
//       };
//       // return;
//       $.ajax({
//         url: '/login',
//         type: 'POST',
//         crossDomain: true,
//         data: data,
//         success: function (result) {
//           if (result.data.n_active == 1) {
//             alert('User is not active please contact administrator')
//           } else {
//             $('#email').hide();
//             $('#otp').show();
//             $('#form-login').hide();
//             localStorage.clear();
//             localStorage.setItem("email", result.data.s_email_id);
//           }


//         },
//         error: function (err) {
//           alertify.error(err.responseJSON.mess_body);
//         },
//         complete: function (response) {
//           if (err) {
//             alertify.error(err.responseJSON.mess_body);
//           } else {
//           }

//         }
//       });
//     } catch (error) {
//       alert(error);
//     }
//   });


//   // addbulkuser = () => {

//   //   $('#user_list').hide();
//   //   $('#user_form').hide();
//   //   $('#user_bulk').show();
//   //   $('#excel_data').html('');
//   //   $('#save_data').prop('disabled', true);
//   //   $('#input').val('');

//   // }

 

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Bulk Upload ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//   let selectedFile;
//   console.log(window.XLSX);
//   document.getElementById('input').addEventListener("change", (event) => {
//     selectedFile = event.target.files[0];
//   })

//   let data = [{
//     "name": "jayanth",
//     "data": "scd",
//     "abc": "sdef"
//   }]


//   document.getElementById('load_excel').addEventListener("click", () => {
//     if ($('#input').val() == '' || $('#input').val() == null || $('#input').val() == undefined) {
//       selectedFile = ''
//       alert('Please Select File First')
//     } else {
//       XLSX.utils.json_to_sheet(data, 'out.xlsx');
//       if (selectedFile) {
//         let fileReader = new FileReader();
//         fileReader.readAsBinaryString(selectedFile);
//         fileReader.onload = (event) => {
//           let data = event.target.result;
//           let workbook = XLSX.read(data, { type: "binary" });
//           const firstSheetName = workbook.SheetNames[0];
//           const worksheet = workbook.Sheets[firstSheetName];
//           const options = { header: 1 };
//           const sheetData2 = XLSX.utils.sheet_to_json(worksheet, options);
//           const header = sheetData2.shift();
//           console.log(header);
//           console.log(workbook);
//           excel_data = [];
//           workbook.SheetNames.forEach(sheet => {
//             let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
//             debugger
//             console.log(rowObject);
//             excel_data.push(rowObject)

//           });

//           createtable(header, excel_data)
//         }
//       }
//     }
//   });

//   createtable = (header, rowObject) => {
//     var edata = ``;
//     edata += `<tr>`
//     header.forEach(header => {
//       if (header == 8 || header == 15 || header == 22 || header == 29) {
//         edata += `<th style="width: 2%;border: none;background: white;"></th>`
//       } else {

//       }
//       edata += `<th style="width: 2%;">` + header + `</th>`
//     });
//     edata += `</tr>`
//     rowObject[0].forEach(rdata => {
//       edata += `<tr>`
//       header.forEach(header => {
//         edata += `<td>` + rdata[header] + `</td>`
//       });
//       edata += `</tr>`
//     })

//     $('#excel_data').html(edata);
//     $('#save_data').prop('disabled', false);
//   }



//   $(document).ready(function() {
//     $("#s_lvl2").select2({placeholder: 'Search Employee'});
//   });
//   $(document).ready(function() {
//     $("#s_lvl3").select2({placeholder: 'Search Employee'});
//   });
//   $(document).ready(function() {
//     $("#s_lvl4").select2({placeholder: 'Search Employee'});
//   });
//   $(document).ready(function() {
//     $("#s_lvl5").select2({placeholder: 'Search Employee'});
//   });
//   $(document).ready(function() {
//     $("#s_lvl6").select2({placeholder: 'Search Employee'});
//   });

getallticketlist = () => {
  debugger;
  var data={clientID:localStorage.getItem('clientID')}
  $.ajax({
    url: './Qr/getallticketlist',
    type: 'POST',
    data:data,
    crossDomain: true,
    success: function (result) {
      debugger;
    
      console.log(result.data);
      try {
        if ($.fn.dataTable.isDataTable('#makerTable12')) {
          $('#makerTable12').DataTable().destroy();
        }
        $('#makerTable12').DataTable({
          
          "responsive": true,
         
      
          'data': result.data,
          'aoColumns': [
            { 'data': 'ticket_no' },
            {'data':'subject'},
            { 'data': 'severity' },
            { 'data': 'category' },
            { 'data': 'assign_to' },
            { 'data': 'progress' },
            {'data':'assign_on'},
            {'data':'updated'}
            
          ],
        });
      } catch (err) {
        console.log(err);
      }

    }, error: function (error) {
      console.log(error);
    }, complete: function () {

    }
  });

}
getallticketlist()

})();