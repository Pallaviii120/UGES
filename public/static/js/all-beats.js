// const { getAllBeats } = require("../../../routes/QrController/QrSqlc");

(function () {
  $('#beats_form').hide();

  
  getClients = function () {
    // alert("getClient called");
    debugger;
    $.ajax({
      url: '/Qr/getClients',
      type: 'POST',
      crossDomain: true,
      success: function (result) {
        debugger;
        var data = result.data;

        data.forEach((ele) => {
          $("#s_client").append(`<option value="${ele.clientID}">${ele.clientName}</option>`);
        });

        //to bind clientID 
        $("#s_client").on("change", function() {
          var selectedClientId = $(this).val();
          $("#client_id").val(selectedClientId);
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

  getRegions = function () {
    // alert("onchange of getRegions Called");
    debugger;
    $.ajax({
      url: '/Qr/getRegions',
      type: 'POST',
      crossDomain: true,
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
    // alert("get_region_State Called");
    debugger;
    $.ajax({
      url: '/Qr/get_region_State',
      type: 'POST',
      data: data,
      crossDomain: true,
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

  get_State_district = function (id) {
    debugger;
    var data = {
      id: id
    }
    // alert("get_State_district Called");
    debugger;
    $.ajax({
      url: '/Qr/get_State_district',
      type: 'POST',
      data: data,
      crossDomain: true,
      success: function (result) {
        debugger;
        var data = result.data;

        data.forEach((ele) => {
          $("#s_district").append(`<option value="${ele.districtID}">${ele.districtDescription}</option>`);
        });


      }, error: function (error) {
        console.log(error);
      }, complete: function () {

      }
    })

  }

  get_district_city = function (id) {
    debugger;
    var data = {
      id: id
    }
   
    debugger;
    $.ajax({
      url: '/Qr/get_district_city',
      type: 'POST',
      data: data,
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

   
  insert_beats_data = function () {
        
    debugger;
    var data = {
      routeid:$("#route_id").val(),
      route: $("#s_route_name").val(),
      clientid:$("#client_id").val(),
      region: $("#s_region   option:selected").text(),
      state: $("#s_state   option:selected").text(),
      district: $("#s_district   option:selected").text(),
      city: $("#s_city   option:selected").text(),
      distributor: $("#s_distributor_name").val(),
      effective_date: $("#d_effective").val(),
      beat_status: $("#s_status  option:selected").text(),
      deleted_status:$("#deleted_status  option:selected").text(),
      
    }

    

    $.ajax({
    url:'/Qr/insert_beat',
    type:'POST',
    crossDomain:true,
    data:data,

    beforeSend(){

    },

    success(result){
  
      
    },

    complete(){
   
    }

     })
  }

  getAllBeatsData = function () {

    debugger;
    $.ajax({
      url: './Qr/getAllBeatsData',
      type: 'POST',
      crossDomain: true,

      success: function (result) {
        debugger;
       
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
             
              { 'data': 'routeName' },
              { 'data': 'city' },
              { 'data': 'state' },
              { 'data': 'region' },
              { 'data': 'distributorname' },
              {
                'render': function (data, type, row, meta) {
                  if (row.deleted == 0) {
                    return `<a class="badge bg-dark text-white ms-2" style="background:green!important;color:white;font-weight:bolder;">Active</a>`
                  } else {
                    return `<a class="badge bg-dark text-white ms-2" style="background:red!important;color:white;font-weight:bolder;">Deactive</a>`
                  }
                }
              },
              {
                'render': function (data, type, row, meta) {

                  return `<a><i class="fa fa-edit" onclick=getBeatByID('${row.ID}') style="font-size:12px"></i></a> | <a><i class="fa fa-trash" onclick=deleteBeatById('${row.ID}') style="font-size:12px"></i></a>`;
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

    })
  }
  getAllBeatsData();

  getBeatByID = function (id){
    $('#beats_list').hide();
    $('#beats_form').show();

    $('#submit').hide();
    debugger;
    try{
      debugger;
    var data = { ID: id }
    $.ajax({
        url:"/Qr/getBeatByID",
        type: "POST",
        data: data,
        datatype:JSON,
        crossDomain: true,

        success: function (result) {
            console.log(result);
            var data = result.data[0];
            
            debugger;
            $("#id").val(data.ID),
            $("#route_id").val(data.routeID),
            $("#s_route_name").val(data.routeName),
            $("#client_id").val(data.clientID),
            $("#s_region   option:selected").text(data.region),
            $("#s_state   option:selected").text(data.state),
            $("#s_district   option:selected").text(data.district),
            $("#s_city   option:selected").text(data.city),
            $("#s_distributor_name").val(data.distributorname),
            $("#d_effective").val(data.effectiveDate),
            $("#s_status  option:selected").text(data.status),
            $("#deleted_status  option:selected").text(data.deleted)

        },
        complete: function () {


        }
    });
    }
catch(err){
    console.log(err);
}

  }

  update_beats_data = function (){

    debugger;
    var data = {
      ID: $("#id").val(),
      routeid:$("#route_id").val(),
      route: $("#s_route_name").val(),
      clientid:$("#client_id").val(),
      region: $("#s_region   option:selected").text(),
      state: $("#s_state   option:selected").text(),
      district: $("#s_district   option:selected").text(),
      city: $("#s_city   option:selected").text(),
      distributor: $("#s_distributor_name").val(),
      effective_date: $("#d_effective").val(),
      beat_status: $("#s_status  option:selected").text(),
      deleted_status:$("#deleted_status  option:selected").text()
     
    }
  debugger;
    $.ajax({
      url:'/Qr/update_beats_data',
      type:'POST',
      crossDomain:true,
      data:data,
  
      beforeSend(){
  
      },
  
      success(result){
       window.location.reload();
      },
  
      complete(){
        // getAllBeatsData();

      }
  
       })



  }

  
  deleteBeatById = function (id) {
 
        debugger;
        try{
        var data = { ID: id }
       
        $.ajax({
            url:"/Qr/deleteBeatById",
            type: "POST",
            data: data,
            datatype:JSON,
            crossDomain: true,
    
            success: function (result) {
             
               
            },
            complete: function () {  
              getAllBeatsData();
            }
        });
        }
    catch(err){
        console.log(err);
    }
}

})();