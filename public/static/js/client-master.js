


(function () {

    addclient=()=>{
        $('#client_list').hide();
        $('#client_form').show();
        $('#s_client_name').val('');
        $('#s_business').val('');
    }


    getlistdata=()=>{
        debugger;
        $.ajax({
            url: './Qr/getclientdata',
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
                  'data': result.data,
                  'aoColumns': [
                     { 'data': 's_client_name' },
                     { 'data': 's_business' },
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

                        return `<button class="btn btn-primary btn-sm" onclick="adduser();"><b>Edit</b></button> | <button class="btn btn-danger btn-sm" onclick="adduser();"><b>Delete</b></button>`;
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
        $('#client_list').show();
        $('#client_form').hide();
        
      }
  
      cleardata=()=>{
        debugger
        $('#s_client_name').val('');
        $('#s_business').val('');
  
      }
      clearfilter=()=>{
        $('#d_from_date').val('');
        $('#d_to_date').val('');
        $('#s_region').val('');
      }



})();