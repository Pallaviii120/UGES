(function () {
    $("#dist_reg_frm").hide()
    $("#btn_back_emp").hide()
    $('#beats_form').hide();


    add_dist = function () {
        $('#beats_list').hide();
        $('#beats_form').show();
        $("#route_id").attr("disabled", false);
        // $("#s_status").attr("disabled", false);
        $("#update").hide();
      }
    
      back = () =>{
        debugger;
        $("#beats_form").hide();
        $("#beats_list").show();
      }
    
      
  getClients =()=> {
    debugger;
    $.ajax({
      url: '/Qr/getClients',
      type: 'POST',
      crossDomain: true,
        
      beforeSend(){
        $("#s_client").html(`<option value="">Select Client</option>`);
      },
      success: function (result) {
        debugger;
        var data = result.data;

        data.forEach((ele) => {
          $("#s_client").append(`<option value="${ele.clientID}">${ele.clientName}</option>`);
        });

      

      }, error: function (error) {
        console.log(error);
      }, complete: function () {
        // $("#s_region").select2({
        //   placeholder: 'Select Region',
        // });
      }
    })

  }
  getClients()



  getRegions = function () {
    debugger;
    $.ajax({
      url: '/Qr/getRegions',
      type: 'POST',
      crossDomain: true,
      beforeSend(){
        $("#s_region").html(`<option value="">Select Region</option>`);
      },
      success: function (result) {
        debugger;
        var data = result.data;

        data.forEach((ele) => {
          $("#s_region").append(`<option value="${ele.regionID}">${ele.regionDescription}</option>`);
        });


      }, error: function (error) {
        console.log(error);
      }, complete: function () {
        // $("#s_region").select2({
        //   placeholder: 'Select Region',
        // });

      }
    })

  }
  getRegions();


  get_region_State = function (id) {
    debugger;

    var data = {
      id: id
    }
    debugger;
    $.ajax({
      url: '/Qr/get_region_State',
      type: 'POST',
      data: data,
      crossDomain: true,
      beforeSend(){
        $("#s_state").html(`<option value="">Select State</option>`);
      },
      success: function (result) {
        debugger;
        var data = result.data;

        data.forEach((ele) => {
          $("#s_state").append(`<option value="${ele.stateID}">${ele.stateDescription}</option>`);
        });
        
      }, error: function (error) {
        console.log(error);
      }, complete: function () {


      }
    })

  }



  get_city = function () {
    debugger;
    $.ajax({
      url: '/Qr/get_city',
      type: 'POST',
     
      crossDomain: true,
      success: function (result) {
        debugger;
        var data = result.data;

        data.forEach((ele) => {
          $("#s_city").append(`<option value="${ele.cityID}">${ele.cityDescription}</option>`);
        });


      }, error: function (error) {
        console.log(error);
      }, complete: function () {


      }
    })

  }

    savedist = function () {
        $("#dist_reg_frm").show()
        $("#all_dist_data_tbl").hide()
        $("#btn_back_emp").show()
        $("#btn_updt_dist").hide()
        $("#btn_sv_dist").show()
    }




    // save_validated_distributor= function () {
    //     debugger;
    //     if ($("#dst_frm").valid()) { 
    //         savedistributor();
    //     }
    // }

    savedistributor = function () {
        debugger;
        var data = {
            distri_name: $("#distri_name").val(),
            address: $("#address").val(),
            pin: $("#pin").val(),
            pan: $("#pan").val(),

            bank_name: $("#bank_name").val(),
            acc_num: $("#acc_num").val(),
            ifsc: $("#ifsc").val(),
            gst: $("#gst").val(),

            s_region: $("#s_region").val(),
            s_state: $("#s_state").val(),
            s_city: $("#s_city").val(),
            s_area: $("#s_area").val(),

            servicearea: $("#servicearea").val(),
            email: $("#email").val(),
            altemail: $("#altemail").val(),
            connumber: $("#con_number").val(),

            altconnumber: $("#altconnumber").val(),
            n_status: $("#n_status").val(),
        }

        debugger;
        $.ajax({
            url: '/nextg/savedistributor',
            type: 'POST',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(data),
            dataType: 'json',

            beforeSend() {


            },
            success(result) {
                // $("#dist_reg_frm").hide()
                // $("#all_dist_data_tbl").show()
                callAlert('success', success_handling(result));
                getalldistributors()
                // reset()
                back();

            },
            complete() {


            }

        })
    }


    getval=(id)=>{
      debugger;
      var data={
        clientID:id
      }
       
        $.ajax({
            url: '/Qr/getdistid',
            type: 'POST',
            crossDomain: true,
            data:data,
            beforeSend() {

            },
            success: function (result) {
                debugger;
                var html = '';
                var data = result.data[0].siteID;
                $('#siteid').val(data);
                $('#distcode').val(data);

            },
            complete() {

            }
        })
    }

    getalldistributors = function () {
      var data={
        clientID:localStorage.getItem('clientID')
      }
       
        $.ajax({
            url: '/Qr/getalldistributors',
            type: 'POST',
            crossDomain: true,
            data:data,
            beforeSend() {

            },
            success: function (result) {
                debugger;
                var html = '';

              
                var data = result.data;
                if ($.fn.dataTable.isDataTable('#dist_table')) {
                    $('#dist_table').DataTable().destroy();
                }
                table = $('#dist_table').DataTable({
                    'data': data,
                    "scrollX": true,
                    'aoColumns': [

                      { 'data': 'sitename' },
                      { 'data': 'clientName'},
                      { 'data': 'regionDescription' },
                      { 'data': 'stateDescription' },
                      { 'data': 'cityDescription' },
                      { 'data': 'siteAddress' },

                        {
                            'render': function (data, type, row, meta) {
                                var a =`<a><i class="fa fa-edit" style="font-size:12px" onclick="getdistributorbyid(${row.siteID});"></i></a> | <a><i class="fa fa-trash" style="font-size:12px" onclick="deletedistributorbyid(${row.siteID});"></i></a>`
                                return a;
                            },
                        },
                       
                        
                       

                    ],
                });

            },
            complete() {

            }
        })
    }
    getalldistributors()


    getdistributorbyid = (id) => {
        $("#dist_reg_frm").show()
        $("#all_dist_data_tbl").hide()
        $("#btn_updt_dist").show()
        $("#btn_sv_dist").hide()
        // getregion();
      
        $.ajax({
            type: 'POST',
            url: '/nextg/getdistributorbyid',
            crossDomain: true,
            data: { distributer_id: id },


            beforeSend: function () {
                //
            },
            success: function (result) {
                debugger;
                console.log(result);
                data = result.data[0];
                $("#distri_name").val(data.s_distributor_name);
                // $("#distri_code").val(data.n_distributor_code);
                $("#supplier").val(data.s_supplier);
                $("#s_region").val(data.n_region_id);
                get_region_State(data.n_region_id);
                get_state_City(data.n_state_id);
                get_city_area(data.n_city_id);
                $("#address").val(data.s_address);
                $("#pin").val(data.n_pin_code);
                $("#servicearea").val(data.n_service_area);
                $("#email").val(data.s_email_1);
                $("#altemail").val(data.s_email_2);
                $("#con_number").val(data.s_contact_number);
                $("#altconnumber").val(data.s_contact_number_2);
                $("#n_status").val(data.n_status);
                $("#distid").val(data.n_distributor_id);

                setTimeout(() => {
                    $("#s_state").val(data.n_state_id);
                    $("#s_city").val(data.n_city_id);
                    $("#s_area").val(data.n_area_id);
                    
                }, 2000);


      

            },
            error: function (err) {
                callAlert('error', error_handling(err));
            },
            complete: function () {

            }
        });
    }

    update_validated_distributor= function () {
        debugger;
        if ($("#dst_frm").valid()) { 
            updatdistributor();
        }
    }

    updatdistributor = () => {
        debugger;

        var data = {  
            distri_name: $("#distri_name").val(),
            // distri_code: $("#distri_code").val(),
            supplier: $("#supplier").val(),
            s_region: $("#s_region").val(),
            s_state: $("#s_state").val(),
            s_city: $("#s_city").val(),
            s_area: $("#s_area").val(),
            address: $("#address").val(),
            pin: $("#pin").val(),
            servicearea: $("#servicearea").val(),
            email: $("#email").val(),
            altemail: $("#altemail").val(),
            connumber: $("#con_number").val(),
            altconnumber: $("#altconnumber").val(),
            n_status: $("#n_status").val(),
            distid: $("#distid").val(),
        }


        debugger;
        $.ajax({
            url: '/nextg/updatdistributor',
            type: 'POST',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(data),
            dataType: 'json',
            beforeSend() {

            },
            success(result) {
                callAlert('success', success_handling(result));
                getalldistributors()
                back();
            },
            complete() {

            }

        })
    }


    deletedistributorbyid = (id) => {
        debugger;
        $.ajax({
            type: 'POST',
            url: '/nextg/deletedistributorbyid',
            crossDomain: true,
            data: { distid: id },
            beforeSend: function () {

            },
            success: function (result) {
                callAlert('success', success_handling(result));
                getalldistributors()
            },
            complete() {

            }
        });
    }


    reset = () => { 
        $("#distri_name").val('');
        $("#distri_code").val('');
        $("#supplier").val('');
        $("#s_region").val('');
        $("#s_state").val('');
        $("#s_city").val('');
        $("#s_area").val(''),
        $("#address").val('');
        $("#pin").val('');
        $("#servicearea").val('');
        $("#email").val('');
        $("#altemail").val('');
        $("#con_number").val('');
        $("#altconnumber").val('');
        $("#n_status").val('');

    }

    back=()=>{
        $("#dist_reg_frm").hide()
        $("#all_dist_data_tbl").show()
        reset();
    }

})
()