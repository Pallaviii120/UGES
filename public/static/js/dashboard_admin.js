// (function(){
//     debugger;
//     getclient = () => {
//         debugger;
//         try {
//             $.ajax({
//                 type: "POST",
//                 url: "Qr/getclient",
//                 //data:data,
//                 success: function (results) {
//                     debugger;
//                     let html = `<option value="">Select Client</option>`;
//                     results.data.forEach(element => {
//                         html += `<option value="${element.clientID}">${element.clientName}</option>`;

//                     });
//                     $("#s_client").html(html);

//                 }
//             })
//         } catch (err) {
//             $("#loader").removeClass("is-active");
//             console.log(err)
//         }
//     }



//     getdashdata=(cid)=>{
//         debugger;
//         let data = {
//             clientid:cid
//         }
//         try {
//             $.ajax({
//                 type:'POST',
//                 url:"Qr/admindash",
//                 data:data,
//                 success:function(result){
//                 var data = result.data;
//                 var html=``;
//                 html+=`<table style="font-size:11px;"><th>Position</th><th>Total</th>`
//                 data.forEach(element => {
//                     html+=`<tr>
//                     <td>`+element.position+`</td>
//                     <td>`+element.count+`</td>
//                   </tr>`
//                 });
//               html+=`</table>`
//               $('#totaluser').html(html);
//                 getccassignusers(cid);
//                 admindashregion(cid);
                
//                 }
    
    
    
//             })
            
//         } catch (error) {
            
//         }
    
//     }

    
//     getcount=(cid)=>{
//         debugger;
//         let data = {
//             clientid:cid
//         }
//         try {
//             $.ajax({
//                 type:'POST',
//                 url:"Qr/countbyclient",
//                 data:data,
//                 success:function(result){
//                 var data = result.data[0];
//                 $('#total').text(data.total);
//                 $('#totalcau').text(data.callcycle);
//                 getdashdata(cid);
                
//                 }
    
//             })
            
//         } catch (error) {
            
//         }
    
//     }


//     getccassignusers = (cid)=>{
//         let data = {
//             clientid:cid
//         }
//         try {
//             $.ajax({
//                 type:'POST',
//                 url:"Qr/specificpositionwisedata",
//                 data:data,
//                 success:function(result){
//                 debugger;
//                 var data = result.data;
//                 var html1=``;
//                 html1+=`<table style="font-size:11px;"><th>Position</th><th>Total</th>`
//                 data.forEach(element => {
//                     html1+=`<tr>
//                     <td>`+element.position+`</td>
//                     <td>`+element.cnt+`</td>
//                   </tr>`
//                 });
//                 html1+=`</table>`
//                 $('#dynamictable').html(html1);
                
//                 }


    
    
    
//             })
            
//         } catch (error) {
            
//         }
//     }


//     getdata=()=>{
//         debugger;
//         var clientid = $('#s_client').val();

//         let data = {
//             clientid:clientid
//         }

//         try {
//             $.ajax({
//                 type:'POST',
//                 url:"Qr/getpendingcallcycle",
//                 data:data,
//                 success:function(result){
//                 var data = result.data;
//                 html=``
//                 html+=`
//                 <tr>
//                   <th>Client ID</th>
//                   <th>User ID</th>
//                   <th>Name</th>
//                   <th>ASM</th>
//                 </tr>`
//                 data.forEach(element => {
//                     html+=` <tr>
//                     <td>`+element.clientID+`</td>
//                     <td>`+element.userID+`</td>
//                     <td>`+element.firstName+`</td>
//                     <td>`+element.ASM+`</td>
//                   </tr>`
//                 });

//               $('#vtbldata').html(html)
                
//                 }
    
    
    
//             })
            
//         } catch (error) {
            
//         }
//     }

//     admindashregion=(cid)=>{
//         debugger;

//         let data = {
//             clientid:cid
//         }

//         try {
//             $.ajax({
//                 type:'POST',
//                 url:"Qr/admindashregion",
//                 data:data,
//                 success:function(result){
//                 var data = result.data[0];
//                 $('#east').text(data.EAST);

//                 $('#east_pen').text(data.EAST_PEN);
//                 $('#east_app').text(data.EAST_APP);
//                 $('#east_rej').text(data.EAST_REJ);

//                 $('#west').text(data.WEST);

//                 $('#west_pen').text(data.WEST_PEN);
//                 $('#west_app').text(data.WEST_APP);
//                 $('#west_rej').text(data.WEST_REJ);

//                 $('#north').text(data.NORTH);

//                 $('#north_pen').text(data.NORTH_PEN);
//                 $('#north_app').text(data.NORTH_APP);
//                 $('#north_rej').text(data.NORTH_REJ);

//                 $('#south').text(data.SOUTH);

//                 $('#south_pen').text(data.SOUTH_PEN);
//                 $('#south_app').text(data.SOUTH_APP);
//                 $('#south_rej').text(data.SOUTH_REJ);

//                 $('#ttl_east').text(data.TOTAL_EAST);

//                 $('#ttl_east_pen').text(data.TOTAL_EAST_PEN);
//                 $('#ttl_east_app').text(data.TOTAL_EAST_APP);
//                 $('#ttl_east_rej').text(data.TOTAL_EAST_REJ);

//                 $('#ttl_west').text(data.TOTAL_WEST);

//                 $('#ttl_west_pen').text(data.TOTAL_WEST_PEN);
//                 $('#ttl_west_app').text(data.TOTAL_WEST_APP);
//                 $('#ttl_west_rej').text(data.TOTAL_WEST_REJ);

//                 $('#ttl_north').text(data.TOTAL_NORTH);

//                 $('#ttl_north_pen').text(data.TOTAL_NORTH_PEN);
//                 $('#ttl_north_app').text(data.TOTAL_NORTH_APP);
//                 $('#ttl_north_rej').text(data.TOTAL_NORTH_REJ);

//                 $('#ttl_south').text(data.TOTAL_SOUTH);

//                 $('#ttl_south_pen').text(data.TOTAL_SOUTH_PEN);
//                 $('#ttl_south_app').text(data.TOTAL_SOUTH_APP);
//                 $('#ttl_south_rej').text(data.TOTAL_SOUTH_REJ);

//                 getcallcyclecount(cid);
                
//                 }
    
    
    
//             })
            
//         } catch (error) {
            
//         }
    
//     }



//     getcallcyclecount=(cid)=>{
//         debugger;

//         let data = {
//             clientid:cid
//         }

//         try {
//             $.ajax({
//                 type:'POST',
//                 url:"Qr/getcallcyclecount",
//                 data:data,
//                 success:function(result){
//                 var data = result.data[0];
//                 $('#callcycletotal').text(data.total_callcycle);
//                 $('#callcyclesubmit').text(data.submitted_callcycle);
//                 $('#callcyclepending').text(data.Pending_callcycle);
                
//                 }
    
    
    
//             })
            
//         } catch (error) {
            
//         }
    
//     }
//     getclient();
//     })()


(function(){
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
    })()