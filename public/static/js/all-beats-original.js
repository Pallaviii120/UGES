// original beats data from simplyAmplify original table

(function () {
  $('#beats_form').hide();

  clearData = function () {
    $("#route_id").val('');
    $("#s_client").val('');
    $("#s_route_name").val('');
    $("#d_effective").val('');
    $("#s_city").val('');
    $("#s_state").val('');
    $("#s_region").val('');
    $("#s_status").val('');
    $("#s_distributor_name").val('');

  }

  back = function () {
    $('#beats_form').hide();
    $('#beats_list').show();

  }

  addbeat = function () {
    $('#beats_list').hide();
    $('#beats_form').show();
    $("#route_id").attr("disabled", false);
    $("#update").hide();

    $.ajax({
      url: '/Qr/get_route_id_max',
      type: 'POST',
      crossDomain: true,
      success: function (result) {
        debugger;
        var data = JSON.parse(result.data[0].maxrouteID);
        var max_id = data + 1;
        $("#route_id").val(max_id)

      }, error: function (error) {
        console.log(error);
      }, complete: function () {
      }
    })

  }


  getAllBeatsoriginal = function () {
    debugger;
    var data={clientID:localStorage.getItem('clientID')}
    $.ajax({
      url: './Qr/getAllBeatsoriginal',
      type: 'POST',
      data:data,
      crossDomain: true,

      success: function (result) {
        debugger;
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
                  var id = row.ID
                  return `<a><i class="fa fa-edit" style="font-size:12px" onclick="get_Beat_By_ID('${id}')"></i></a> | <a><i class="fa fa-trash" style="font-size:12px" onclick="delete_beat_by_id('${id}')"></i></a>`;
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
  getAllBeatsoriginal();

  getClients = function () {

    $.ajax({
      url: '/Qr/getClients',
      type: 'POST',
      crossDomain: true,
      beforeSend() {
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

      }
    })

  }
  getClients()

  getDistributors = function () {

    $.ajax({
      url: '/Qr/getDistributors',
      type: 'POST',
      crossDomain: true,
      beforeSend() {
        // $("#s_distributor_name").html(`<option value="">Select Distributor</option>`);
      },
      success: function (result) {
        debugger;
        var data = result.data;

        data.forEach((ele) => {
          $("#s_distributor_name").append(`<option value="${ele.siteID}">${ele.siteName}</option>`);
        });

      }, error: function (error) {
        console.log(error);
      }, complete: function () {


      }
    })

  }

  getRegions = function () {
    $.ajax({
      url: '/Qr/getRegions',
      type: 'POST',
      crossDomain: true,
      beforeSend() {
        $("#s_region").append(`<option value="">Select Region</option>`);

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

      }
    })

  }

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

  save_beat = function () {
    debugger;
    var dt = $("#d_effective").val();
    var date = dt.split("T")[0]

    var data = {

      route_id: $("#route_id").val(),
      s_client: $("#s_client").val().toUpperCase(),
      s_route_name: $("#s_route_name").val().toUpperCase(),
      d_effective: date,
      s_city: $("#s_city  option:selected").text().toUpperCase(),
      s_state: $("#s_state option:selected").text().toUpperCase(),
      s_region: $("#s_region option:selected").text().toUpperCase(),
      created: date,
      createdby: $("#s_client").val(),
      deleted: $("#s_status").val(),
      status: 1,
      s_distributor_name: $("#s_distributor_name option:selected").text().toUpperCase(),

    }

    $.ajax({
      url: '/Qr/save_beat',
      type: 'POST',
      crossDomain: true,
      data: data,
      success: function (result) {
        getAllBeatsoriginal()
        back()

      }, error: function (error) {
        console.log(error);
      }, complete: function () {


      }
    })
  }

  get_Beat_By_ID = function (id) {
    $("#eff_date").hide();
    $('#beats_list').hide();
    $('#beats_form').show();
    $('#submit').hide();
    $('#update').show();
    debugger;
    try {

      debugger;
      var data = { ID: id }
      $.ajax({
        url: "/Qr/get_Beat_By_ID",
        type: "POST",
        data: data,
        datatype: JSON,
        crossDomain: true,

        success: function (result) {
          console.log(result);
          var data = result.data[0];

          debugger;
          $("#id").val(data.ID),
            $("#route_id").val(data.routeID),
            $("#s_client").val(data.clientID).prop('disabled', true);
          $("#s_route_name").val(data.routeName);
          $("#client_id").val(data.clientID);
          $("#s_region   option:selected").text(data.region);
          $("#s_state   option:selected").text(data.state);
          $("#s_city   option:selected").text(data.city);
          $("#s_distributor_name option:selected").text(data.distributorname);

          debugger;

          var selectedValueFromDatabase = data.deleted;
          selectedValueFromDatabase = $("#s_status").val(selectedValueFromDatabase ? '1' : '0');

          if (selectedValueFromDatabase === '0') {
            $("#s_status option[value='0']").text('Active');
          } else if (selectedValueFromDatabase === '1') {
            $("#s_status option[value='1']").text('In-Active');
          }

        },
        complete: function () {
          getDistributors()
        }
      });
    }
    catch (err) {
      console.log(err);
    }

  }

  update_beats_data_org = function () {
    debugger;
    var data = {
      ID: $("#id").val(),
      routeID: $("#route_id").val(),
      s_route_name: $("#s_route_name").val(),
      s_region: $("#s_region   option:selected").text(),
      s_state: $("#s_state   option:selected").text(),
      s_city: $("#s_city   option:selected").text(),
      s_distributor_name: $("#s_distributor_name option:selected").text(),
      deleted: $("#s_status").val()
    }
    debugger;
    $.ajax({
      url: '/Qr/update_beats_data_org',
      type: 'POST',
      crossDomain: true,
      data: data,

      beforeSend() {

      },

      success(result) {
        back();
        getAllBeatsoriginal();

      },

      complete() {


      }

    })



  }

  delete_beat_by_id = function (id) {
 debugger;
  if(confirm("Do You Want To Delete Beat!")){
    try {
      var data = { ID: id }
      $.ajax({
        url: "/Qr/delete_beat_by_id",
        type: "POST",
        data: data,
        datatype: JSON,
        crossDomain: true,

        success: function (result) {
          
        },
        complete: function () {
       
        }
      });
    }
    catch (err) {
      console.log(err);
    }


  }else{
    return;
  }
    
   
  }






})
  ();