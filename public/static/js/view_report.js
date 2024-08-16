(function () {

    getfarmreport = () =>{
        // var data={clientID:localStorage.getItem('email')}
        $.ajax({
          url: './Qr/getfarmreport',
          type: 'POST',
        //   data:data,
          crossDomain: true,
          success: function (result) {
            data=result.data
            try {
              if ($.fn.dataTable.isDataTable('#makerTable12')) {
                $('#makerTable12').DataTable().destroy();
              }
              $('#makerTable12').DataTable({
                "responsive": true,
                "scrollX": true,
                'data': data,
                "dom": '<"dt-buttons"Bf><"clear">lirtp',
                            "paging": true,
                            "autoWidth": true,
                            "responsive": true,
                            "buttons": [
                              // 'copyHtml5',
                              'csvHtml5',
                              'excelHtml5',
                              // 'pdfHtml5',
                              // 'print'
                            ],
                'aoColumns': [
                    { 
                        'render': function (data, type, row) {
                            return `<a onclick="getfarmreportbyid('${row.report_id}');"><i class="fa-regular fa-eye"></i></a>`;
                        }
                      },
                      {'data':'s_loc_num'},
                  {'data':'state'},
                  { 'data': 'district' },
                  { 'data': 'taluka' },
                  { 'data': 'village' },

                  {'data':'s_survey_no'},
                  {'data':'s_survey_completed'},
                  { 'data': 's_major_footprint' },
                  { 'data': 's_risk_footprint' },
                  { 'data': 's_major_falling' },

                  {'data':'s_risk_falling'},
                  {'data':'s_major_noise'},
                  { 'data': 's_risk_noise' },
                  { 'data': 's_overall_risk' },
                  { 'data': 's_major_overall_risk' },

                  {'data':'s_shifting_req'},
                  {'data':'s_land_type'},
                  { 'data': 's_soil_type' },
                  { 'data': 's_terrain' },
                  
                  
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
    getfarmreport()
    var datatodownload

    downloadword = (datatodownload) =>{
      debugger

      var data  = {
        dwn:datatodownload
      }
      try {
        $.ajax({
            type: "POST",
            url: "generate-report",
            contentType: "application/json",
              data: JSON.stringify(data),
              xhrFields: {
                  responseType: 'blob' // Important for handling binary data
              },
              success: function (blob) {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'wind-report.docx';
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            },
            error: function (err) {
                console.error("Failed to generate the report", err);
            }
    
        })
    } catch (err) {
        $("#loader").removeClass("is-active");
        console.log(err)
    }
  }

    const columnMapping = {
      s_state: "State",
      s_district: "District",
      s_taluka: "Taluka",
      s_village: "Village",
      s_loc_num: "Location Number",
      s_survey_no: "Survey Number",
      s_survey_completed: "Survey Completed",
      s_terrain: "Terrain",
      // s_land_path: "Land Document",
      // s_meter_path: "Meter Document",
      s_major_footprint: "Major Footprint",
      s_risk_footprint: "Risk Footprint",
      s_major_falling: "Major Falling",
      s_risk_falling: "Risk Falling",
      s_overall_risk: "Overall Risk",
      s_major_overall_risk: "Major Overall Risk",
      s_shifting_req: "Shifting Required",
      s_land_type: "Land Type",
      s_soil_type: "Soil Type",
      s_access_road: "Access Road",
      s_key_challenges: "Key Challenges",
  };

  $('#worddoc').click(function () {
    if(datatodownload){
      downloadword(datatodownload)
    }
    else{
      console.log('error')
    }
  })
  

    getfarmreportbyid = (report_id) =>{
      debugger
      $('#reportmodal').modal('show');
      var data = {
        id:report_id
      }
    
      // console.log(data)
      try {
        $.ajax({
            type: "POST",
            url: "Qr/getfarmreportbyid",
            data:data,
            beforeSend: function () {
            },
            success: function (results) {
                var data = results.data[0];
            console.log(data)
            datatodownload=results.data[0]
            
            if ($('#report_data_table').length) {
              if ($.fn.DataTable.isDataTable('#report_data_table')) {
                  $('#report_data_table').DataTable().destroy();
              }
              $('#report_data').empty();
              for (var key in columnMapping) {
                  if (data.hasOwnProperty(key)) {
                      var row = `<tr>
                          <td>${columnMapping[key]}</td>
                          <td>${data[key] ? data[key] : '-'}</td>
                      </tr>`;
                      $('#report_data').append(row);
                  }
              }
              $('#report_data_table').DataTable({
                "paging": false, 
                "info": false, 
                "lengthChange": false, 
                "searching": false,
                "order":false
            });
          } else {
              console.error("Table element not found.");
          }
          
          
            }
        })
    } catch (err) {
        $("#loader").removeClass("is-active");
        console.log(err)
    }

    }


   
})()