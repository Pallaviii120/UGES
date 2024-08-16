

(function () {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Getlist Data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    getlistdata = () => {
        if(localStorage.getItem('pos')=='RSM'){
            $('#bulkupbtn').show();
          }else{
            $('#bulkupbtn').hide();
          }
        debugger;
        let data = {
            id:localStorage.getItem('userID'),
            position:localStorage.getItem('pos'),
            clientID:localStorage.getItem('clientID')
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getcallcyclelistdata",
                data:data,
                beforeSend: function () {
                },
                success: function (results) {
                    var data = results.data;
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
                        'data': data,
                        'aoColumns': [
                            { 'data': 's_region' },
                            { 'data': 's_state' },
                            { 'data': 's_city' },
                            { 'data': 's_asm' },
                            { 'data': 's_so' },
                            { 'data': 's_sr' },
                            { 'data': 'month' },
                            {'data':'year'},
                            { 
                                'render': function (data, type, row, meta) {
                               if(row.status == 0){
                                if(localStorage.getItem('pos')=='RMS' || localStorage.getItem('pos')=='RMS'){
                                    return `<a class="badge bg-dark text-white ms-2" style="background:Orange!important;color:white;font-weight:bolder;" data-bs-toggle="modal" data-bs-target="#updatestatus" onclick="setid(\'`+row.n_callcycle_id+`'\)">Pending For Approval</a>`

                                }else{
                                    return `<a class="badge bg-dark text-white ms-2" style="background:Orange!important;color:white;font-weight:bolder;">Pending For Approval</a>`
                                }

                               }else if(row.status == 1){
                                return `<a class="badge bg-dark text-white ms-2" style="background:green!important;color:white;font-weight:bolder;">Approved</a>`
                               }else{
                                return `<a class="badge bg-dark text-white ms-2" style="background:Red!important;color:white;font-weight:bolder;">Rejected</a>`
                               }
                             } 
                           },
                           { 
                            'render': function (data, type, row, meta) {
                                return `<p style="font-size:11px;">`+(row.s_remark==null || row.s_remark==undefined || row.s_remark==''?'':row.s_remark)+`</p>`
                         } 
                       }
                        ],
                    });
                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }

    }
    getlistdata();

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Getlist Data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 
})();