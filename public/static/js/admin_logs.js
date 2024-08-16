(function(){
    getlistdata = () => {

        try {
            $.ajax({
                type: "POST",
                url: "Qr/getcallcyclelogdata",
                // data:data,
                beforeSend: function () {
                },
                success: function (results) {
                    debugger;
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
                            { 'data': 'id' },
                            { 'data': 'createdby' },
                            { 'data': 'updatedby' },
                            { 'data': 'created_date' },
                            { 'data': 'updated_date' },
                            { 'data': 's_remark' },
                            { 
                                'render': function (data, type, row, meta) {
                               if(row.n_status == 0){
                                    return `<a class="badge bg-dark text-white ms-2" style="background:Orange!important;color:white;font-weight:bolder;">Pending For Approval</a>`

                               }else if(row.n_status == 1){
                                return `<a class="badge bg-dark text-white ms-2" style="background:green!important;color:white;font-weight:bolder;">Approved</a>`
                               }else{
                                return `<a class="badge bg-dark text-white ms-2" style="background:Red!important;color:white;font-weight:bolder;">Rejected</a>`
                               }
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
    })()