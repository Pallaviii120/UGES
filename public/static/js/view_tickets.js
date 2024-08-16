
(function () {
    
      // $("#beats_div").hide()
      // $("#lev_els").hide()
      // $("#ftter").hide();
      var ticketsdata=''
      var name = localStorage.getItem('name')
      $("#edit_form").hide()
      $('#viewlist').hide();

  $('#viewlist').click(function () {
    $("#edit_form").hide();
    $('#user_list').show();
    $('#viewlist').hide();
    $('#summary_data').show();
  })


   initializeDataTable =(data)=> {
    if ($.fn.dataTable.isDataTable('#makerTable12')) {
      $('#makerTable12').DataTable().destroy();
    }
  
    $('#makerTable12').DataTable({
      "responsive": true,
      'data': data,
      'aoColumns': [
        { 
          'data': 'ticket_no',
          'createdCell': function (td, celldata) {
            $(td).addClass('tooltip'); // Add tooltip class
            $(td).append('<span class="tooltiptext">See details</span>'); // Append the tooltip text element
  
            $(td).on('click', function () {
              $('#viewlist').show();
              $("#edit_form").show();
              $('#user_list').hide();
              $('#summary_data').hide();
              getticketdatabyid(celldata);
            });
          }
        },
        { 'data': 'subject' },
        { 'data': 'severity' },
        { 'data': 'category' },
        { 'data': 'assign_to' },
        { 
          'data': 'progress',
          'render': function (data, type, row) {
            if (data === '0') {
              return 'Working';
            } else if (data === '1') {
              return 'Completed';
            } else if (data === '2') {
              return 'Pending';
            } else {
              return 'Unknown'; 
            }
          }
        },
        { 'data': 'assign_on' },
        { 'data': 'updated' }
      ]
    });
  }
  


      getallticketlist = () => {
        debugger;
        var data={clientID:localStorage.getItem('clientID')}
        $.ajax({
          url: './Qr/getallticketlist',
          type: 'POST',
          data:data,
          crossDomain: true,
          success: function (result) {
            ticketsdata=result.data
           initializeDataTable(ticketsdata)
          
            // console.log(result.data);
            // try {
            //   if ($.fn.dataTable.isDataTable('#makerTable12')) {
            //     $('#makerTable12').DataTable().destroy();
            //   }
            //   $('#makerTable12').DataTable({
            //     "responsive": true,
            //     'data': filteroutdata,
            //     'aoColumns': [
            //       { 
            //         'data': 'ticket_no',
            //         'createdCell': function (td,celldata) {
            //           $(td).addClass('tooltip'); // Add tooltip class
            //           $(td).append('<span class="tooltiptext">See details</span>'); // Append the tooltip text element
                    
            //           $(td).on('click', function () {
            //             $('#viewlist').show();
            //             $("#edit_form").show();
            //             $('#user_list').hide();
            //             $('#summary_data').hide();
            //             // $('#edit_form').find('input[name="ticket_id"]').val(celldata);
            //             getticketdatabyid(celldata)
            //           });
  
            //         }
            //       },
            //       // { 'data': 'ticket_no' },
            //       {'data':'subject'},
            //       { 'data': 'severity' },
            //       { 'data': 'category' },
            //       { 'data': 'assign_to' },
            //       { 
            //         'data': 'progress',
            //         'render': function (data, type, row) {
            //           if (data === '0') {
            //             return 'Working';
            //           } else if (data === '1') {
            //             return 'Completed';
            //           } else if (data === 2) {
            //             return 'Pending';
            //           } else {
            //             return 'Unknown'; 
            //           }
            //         }
            //       },
            //       {'data':'assign_on'},
            //       {'data':'updated'}
                  
                  
            //     ],
            //   });




            // } catch (err) {
            //   console.log(err);
            // }
      
          }, error: function (error) {
            console.log(error);
          }, complete: function () {
      
          }
        });
      
      }
      getallticketlist() 

      $('#totalticket').on('click',function (){
        getallticketlist()
      });

        $('.summary-item').on('click', function() {
          $('.summary-item').removeClass('active');

          $(this).addClass('active');

          if (this.id === 'totalticket') {
            initializeDataTable(ticketsdata);
          }
           else if (this.id === 'assignticket') {
            var filtereddata = ticketsdata.filter(function(ticket) {
              return ticket.assign_to === name;
            });
            initializeDataTable(filtereddata);
          } 
          else if (this.id === 'pendingticket') {
            var filtereddata = ticketsdata.filter(function(ticket) {
              return ticket.progress === '0' && ticket.assign_to===name;
            });
            initializeDataTable(filtereddata);
          } 
          else if (this.id === 'closedticket') {
            var filtereddata = ticketsdata.filter(function(ticket) {
              return ticket.progress === '2';
            });
            initializeDataTable(filtereddata);
          }
        });
      
      
      function initializeDataTable(data) {
        if ($.fn.dataTable.isDataTable('#makerTable12')) {
          $('#makerTable12').DataTable().destroy();
        }
      
        $('#makerTable12').DataTable({
          "responsive": true,
          'data': data,
          'aoColumns': [
            { 
              'data': 'ticket_no',
              'createdCell': function (td, celldata) {
                $(td).addClass('tooltip'); // Add tooltip class
                $(td).append('<span class="tooltiptext">See details</span>'); // Append the tooltip text element
      
                $(td).on('click', function () {
                  $('#viewlist').show();
                  $("#edit_form").show();
                  $('#user_list').hide();
                  $('#summary_data').hide();
                  getticketdatabyid(celldata);
                });
              }
            },
            { 'data': 'subject' },
            { 'data': 'severity' },
            { 'data': 'category' },
            { 'data': 'assign_to' },
            { 
              'data': 'progress',
              'render': function (data, type, row) {
                if (data === '0') {
                  return 'Working';
                } else if (data === '1') {
                  return 'Completed';
                } else if (data === '2') {
                  return 'Pending';
                } else {
                  return 'Unknown'; 
                }
              }
            },
            { 'data': 'assign_on' },
            { 'data': 'updated' }
          ]
        });
      }
      


      


  getsummarydata = () =>{

    debugger;
    let data = {
        name:localStorage.getItem('name')
    }
    try {
        $.ajax({
            type:'POST',
            url:"Qr/getsummarydataadmin",
            data:data,
            success:function(result){
            var data = result.data[0];
            $('#total_ticket').text(data.total_ticket);
            $('#asssign_ticket').text(data.assign_to);
            $('#pending_tickets').text(data.pending_tickets);
            $('#closed_ticket').text(data.closed_tickets);
            }



        })
        
    } catch (error) {
        
    }


}
getsummarydata()





      getticketdatabyid = (ticketid)=>{
        var data={
       ticketid:ticketid
      }
      debugger;
      try {
          $.ajax({
              type: "POST",
              url: "Qr/getticketdatabyid",
              data:data,
              beforeSend: function () {
              },
              success: function (results) {
                //  console.log(results.data)
                 var result=results.data[0]
                 showticketdatabyid(result)
              }
          })
      } catch (err) {
          $("#loader").removeClass("is-active");
          console.log(err)
      }
      }

      showticketdatabyid = (ticketdata) =>{
        try{
          $("#ticket_id").val(ticketdata.ticket_no);
          $("#subject").val(ticketdata.subject);
          $("#purpose").val(ticketdata.purpose);
          $("#message").val(ticketdata.message);
          $("#category_dd").val(ticketdata.category);
          $("#severity_dd").val(ticketdata.severity);
          // $("#cc_dd").val(ticketdata.cc);
          $("#cc_dd").append('<option>' + ticketdata.cc + '</option>');
          $("#assignto").append('<option>' + ticketdata.assign_to + '</option>');
          // $("#assignto").val(ticketdata.assign_to);
          $("#date").val(ticketdata.assign_on);
          debugger
          if (ticketdata.data) {
            const fileLink = `${ticketdata.data}`;
    
              $("#filePreview").html(`<a href="${fileLink}" target="_blank">${fileLink}</a>`);
            
          } else {
            $("#filePreview").html('No file available');
          }
        } catch (err) {
          console.log(err);
        }
      
      }

     
      })();