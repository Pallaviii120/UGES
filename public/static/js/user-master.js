


(function () {

    adduser=()=>{
        $('#user_list').hide();
        $('#user_form').show();
        $('#user_bulk').hide();
        $('#s_email').val('');
        $('#s_pass').val('');
        $('#s_username').val('');
    }


    getlistdata=()=>{
        debugger;
        $.ajax({
            url: './Qr/getuserData',
            type: 'POST',
            crossDomain: true,
            success: function (result) {
              console.log(result);
              try {
                if ($.fn.dataTable.isDataTable('#makerTable12')) {
                  $('#makerTable12').DataTable().destroy();
                }
                $('#makerTable12').DataTable({
                    "dom": '<"dt-buttons"Bf><"clear">lirtp',
                    "paging": true,
                    "autoWidth": true,
                    "responsive": true,
                    "buttons": [
                    'copyHtml5',
                    'csvHtml5',
                    'excelHtml5',
                    'pdfHtml5',
                    'print'
                    ],
                  'data': result.data.recordset,
                  'aoColumns': [
                     { 'data': 'fullName' },
                     { 'data': 'username' },
                     { 'data': 'positionName' },
                     { 'data': 'positionType' },
                     { 
                       'render': function (data, type, row, meta) {
                      if(row.deleted == 0){
                        return `<a class="badge bg-dark text-white ms-2" style="background:green!important;color:white;font-weight:bolder;">Active</a>`
                      }else{
                        return `<a class="badge bg-dark text-white ms-2" style="background:red!important;color:white;font-weight:bolder;">Deactive</a>`
                      }
                    } 
                  },
                     {
                      'render': function (data, type, row, meta) {

                        return `<a><i class="fa fa-edit" style="font-size:12px"></i></a> | <a><i class="fa fa-trash" style="font-size:12px"></i></a>`;
                      },
                    }
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
    getlistdata();


    $("#form-login").on("submit", function (e) {
        debugger;
        try {
            var s_email = document.getElementById('s_email').value;
            var s_pass = document.getElementById('s_pass').value;
            var capt = document.getElementById('entered-captcha').value;
            var s_type = 'CRM'
            if(s_email==''||s_email==null||s_email==undefined||s_email=='undefined'){
                alertify.error('Please Enter Email');  
            }else if(s_pass==''||s_pass==null||s_pass==undefined||s_pass=='undefined'){
                alertify.error('Please Enter Password'); 
            }else if(capt==''||capt==null||capt==undefined||capt=='undefined'){
                alertify.error('Please Enter Captcha'); 
            }
            var OTP = Math.floor(100000 + Math.random() * 900000)
            var data = {
                s_email:s_email,
                s_pass:s_pass,
                capt:capt,
                s_type:s_type,
                OTP:OTP
            };
            // return;
            $.ajax({
                url: '/login',
                type: 'POST',
                crossDomain: true,
                data: data,
                success: function (result) {
                    if(result.data.n_active==1){
                    alert('User is not active please contact administrator')
                    }else{
                        $('#email').hide();
                        $('#otp').show();
                        $('#form-login').hide();
                        localStorage.clear();
                        localStorage.setItem("email", result.data.s_email_id);
                    }


                },
                error: function (err) {
                    alertify.error(err.responseJSON.mess_body);
                },
                complete: function (response) {
                    if(err){
                        alertify.error(err.responseJSON.mess_body);
                    }else{
                    }
                    
                }
            });
        } catch (error) {
            alert(error);
        }
    });



    back=()=>{
      $('#user_list').show();
      $('#user_form').hide();
      
    }

    cleardata=()=>{
      debugger
      $('#s_email').val('');
      $('#s_pass').val('');
      $('#s_username').val('');

    }

    addbulkuser=()=>{

      $('#user_list').hide();
      $('#user_form').hide();
      $('#user_bulk').show();
      $('#excel_data').html('');
      $('#save_data').prop('disabled',true);
      $('#input').val('');

  }

  cleardata=()=>{
    $('#excel_data').html('');
    $('#save_data').prop('disabled',true);
    $('#input').val('');
}

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Bulk Upload ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  let selectedFile;
  console.log(window.XLSX);
  document.getElementById('input').addEventListener("change", (event) => {
      selectedFile = event.target.files[0];
  })
  
  let data=[{
      "name":"jayanth",
      "data":"scd",
      "abc":"sdef"
  }]
  
  
  document.getElementById('load_excel').addEventListener("click", () => {
    if($('#input').val()==''||$('#input').val()==null||$('#input').val()==undefined){
      selectedFile=''
      alert('Please Select File First')
    }else{
      XLSX.utils.json_to_sheet(data, 'out.xlsx');
      if(selectedFile){
          let fileReader = new FileReader();
          fileReader.readAsBinaryString(selectedFile);
          fileReader.onload = (event)=>{
           let data = event.target.result;
           let workbook = XLSX.read(data,{type:"binary"});
           const firstSheetName = workbook.SheetNames[0];
           const worksheet = workbook.Sheets[firstSheetName];
           const options = { header: 1 };
           const sheetData2 = XLSX.utils.sheet_to_json(worksheet, options);
           const header = sheetData2.shift();
           console.log(header);
           console.log(workbook);
           excel_data=[];
           workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                debugger
                console.log(rowObject);
                excel_data.push(rowObject)

           });

           createtable(header,excel_data)
          }
      }
    }
  });

  createtable=(header,rowObject)=>{
  var edata=``;
  edata+=`<tr>`
  header.forEach(header => {
      if(header == 8 || header == 15 || header == 22 || header == 29){
          edata+=`<th style="width: 2%;border: none;background: white;"></th>` 
      }else{

      }
      edata+=`<th style="width: 2%;">`+header+`</th>` 
  });
  edata+=`</tr>`
  rowObject[0].forEach(rdata=>{
      edata+=`<tr>`
      header.forEach(header => {
        edata+=`<td>`+rdata[header]+`</td>`
      });
      edata+=`</tr>`
  })

  $('#excel_data').html(edata);
  $('#save_data').prop('disabled',false);
  }



  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

})();