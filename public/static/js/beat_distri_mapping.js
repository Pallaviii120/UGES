(function () {
    var distributor_data = [];
    $("#update_dist_beat_map").hide()
    $("#user_form").hide()


    add_beat_dist_mapping=()=>{

        debugger;
        $("#user_form").show()
        $("#user_list").hide()
    }

    back=()=>{
        $("#user_form").hide()
        $("#user_list").show()
    }


    getclients = function () {
      
        $.ajax({
            url: '/nextg/getAllData',
            type: 'POST',
            crossDomain: true,

            beforeSend() {
                $("#n_clients").html(`<option value="">Select Client</option>`);
            },
            success(result) {
                debugger;
                var data = result.data;
                data.forEach((element) => {
                    $("#n_clients").append(`<option value="${element.n_c_id}">${element.s_client_name}</option>`);
                });
            },
            complete() {

            }

        })
    }()

    get__distri = function () {


        $.ajax({
            url: '/Qr/getDistributors',
            type: 'POST',
            crossDomain: true,

            beforeSend() {
                $("#s_distributor").html(`<option value="">Select Distributor</option>`);
            },
            success(result) {
                debugger;
                var data = result.data;
                distributor_data = [];

                data.forEach((element) => {
                    distributor_data.push({id:element.siteID,name:element.siteName,sname:element.siteName.replaceAll(' ','')})
                    $("#s_distributor").append(`<option value="${element.siteName.replaceAll(' ','')}">${element.siteName}</option>`);
                });
            },
            complete() {

            }
        })



    }

    get__beat = function () {

        debugger;
        $.ajax({
            url: '/nextg/getallbeats',
            type: 'POST',
            crossDomain: true,

            beforeSend() {
                $("#s_beats").html(`<option value="">Select Beat</option>`);
            },
            success(result) {
                debugger;
                var data = result.data;
                data.forEach((element) => {
                    $("#s_beats").append(`<option value="${element.n_route_id}">${element.s_route_name}</option>`);
                });
            },
            complete() {

            }

        })
    }

    save_validated_dist_mapping= function () {
        debugger;
        if ($("#bt_dst_frm").valid()) { 
            save_dist_mapping();
        }
    }

    save_dist_mapping = function () {
        debugger;
        var data = {
            client: $("#n_clients").val(),
            beat: $("#s_beats").val(),
            dist: $("#s_distributor").val(),
        }

        $.ajax({
            url: '/nextg/save_dist_mapping',
            type: 'POST',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(data),
            dataType: 'json',

            beforeSend() {

            },
            success(result) {
                get_all_dist_mapping()
            },
            complete() {

            }

        })

    }

    get_all_dist_mapping = function () {
        debugger;
        var data={clientID:localStorage.getItem('clientID')}
        $.ajax({
            url: '/Qr/get_all_dist_mapping',
            type: 'POST',
            data:data,
            crossDomain: true,

            beforeSend() {

            },

            success: function (result) {
                var html = '';
                var data = result.data;
                if ($.fn.dataTable.isDataTable('#mappingtable')) {
                    $('#mappingtable').DataTable().destroy();
                }
                table = $('#mappingtable').DataTable({
                    'data': data,
                    "scrollX": true,
                    'aoColumns': [
                        { 'data': 'clientName' },
                        { 'data': 'routeName' },
                        { 'data': 'distributorname' },
                        {
                            'render': function (data, type, row, meta) {
                                var a = `<a><i class="fa fa-edit" onclick="get_beat_Mapping_by_id(${row.ID});" style="font-size:12px"></i></a>`
                                
                                
                                // `<a onclick="get_beat_Mapping_by_id(${row.n_id});" class="btn btn-sm btn-success"><i class="fas fa-edit"></i></a> | <a onclick="delete_dist_mapping(${row.n_id});" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></a>`;
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
    get_all_dist_mapping()

    get_beat_Mapping_by_id = function (id) {
        $("#save_dist_beat_map").hide()
        $("#update_dist_beat_map").show()
        $("#user_form").show()
        $("#user_list").hide()

        debugger;
        $.ajax({
            url: '/Qr/get_beat_Mapping_by_id',
            type: 'POST',
            crossDomain: true,
            data: { ID: id },

            beforeSend() {

            },
            success(result) {

                debugger;
                // getclients()
                // get__beat()
                get__distri()

                data = result.data[0];

                    $("#n_n_clients").text(data.clientName)
                    $("#s_s_beats").text(data.routeName)
                    setTimeout(() => {
                        $("#s_distributor").val(data.distributorname.replaceAll(' ',''))     
                    }, 2000);


                $("#mapping_id").val(data.ID);


            },
            complete() {

            }

        })
    }

    save_validated_dist_mapping= function () {
        debugger;
        if ($("#bt_dst_frm").valid()) { 
            save_dist_mapping();
        }
    }

    update_validated_dist_mapping = function () {
        debugger;
        var val = $("#s_distributor").val()
        var matchingResults = distributor_data.filter(function(x){ return x.sname == val });

        var data = {
            dist: matchingResults[0].name,
            map_id: $("#mapping_id").val(),
        }

        $.ajax({
            url: '/Qr/update_dist_mapping',
            type: 'POST',
            crossDomain: true,
            data: data,

            beforeSend() {

            },
            success(result) {
                $("#user_form").hide();
                $("#user_list").show();
                get_all_dist_mapping()
            },
            complete() {

            }

        })

    }

    delete_dist_mapping = (id) => {

        $.ajax({
            type: 'POST',
            url: '/nextg/delete_dist_mapping',
            crossDomain: true,
            data: { mapid: id },

            success: function (result) {
                callAlert('success', success_handling(result));
                get_all_dist_mapping()
            },
            complete() {

            }
        });
    }

    reset = () => {

        $("#n_clients").val('')
        $("#s_beats").val('')
        $("#s_distributor").val('')
        $("#update_dist_beat_map").hide()
        $("#save_dist_beat_map").show()

    }



})()