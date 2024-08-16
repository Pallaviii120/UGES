

(function () {
    global_beats = [];
    global_outlets=[];
    uncheck=[];
    bulkd_=[];
    $('#sts_reason').hide();

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Add Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    addcallcycle = () => {
        $('#opencallcycle').hide();
        $('#closecallcycle').hide();
        $('#s_so').prop('disabled',false);
        $('#s_sr').prop('disabled',false);
        $('#getbeat').show();
        $('#back').show();
        var pos = localStorage.getItem('pos');
        if(pos=='NORSM'){
            $('#callcycle_list').hide();
            $('#callcycle_bulk').hide();
            $('#callcycle_form').show();
            // $('#showbtn').hide();
            $('#savebtn').hide();
            $('#updatebtn').hide();
            $('#resetbtn').hide();
            $('#backbtn').hide();
            var date = new Date().getFullYear()+'-'+("0" + parseInt(new Date().getMonth()+2)).slice(-2);
            $('#s_year_month').val(date);
            $('#callcycle_table').html('');
            $('#opencallcycle').hide();
            $('#closecallcycle').hide();
            


            $('#s_region_hide').hide();
            $('#s_state_hide').hide();
            $('#s_asm_hide').hide();
            $('#s_city_hide').hide();
            getasmdatabyid('asm');
        }else{
            var date = new Date().getFullYear()+'-'+("0" + parseInt(new Date().getMonth()+2)).slice(-2);
            $('#callcycle_list').hide();
            $('#callcycle_bulk').hide();
            $('#callcycle_form').show();
            $('#opencallcycle').hide();
            $('#closecallcycle').hide();
            // $('#showbtn').hide();
            $('#savebtn').hide();
            $('#updatebtn').hide();
            $('#resetbtn').hide();
            $('#backbtn').hide();
    
            $('#s_region').val('');
            $('#s_state').val('');
            $('#s_asm').val('');
            $('#s_city').val('');
            $('#s_so').val('');
            $('#s_sr').val('');
            // $('#s_year_month').val('');
            $('#s_year_month').val(date);
            $('#callcycle_table').html('');
            getzone();
        }


    }


    uncheckallcheckboxes = () => {
        debugger;
        $("#loader").addClass("is-active");
        var checkboxval = $('#closecc').is(':checked')
        if (checkboxval != true) {
            getbeat();
        } else {
            let date = new Date();
            let month = date.getMonth() + 2;
            let year = date.getFullYear();

            var monthIndex = month - 1; // 0..11 instead of 1..12
            var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var date1 = new Date(year, monthIndex, 1);
            var result = [];
            var onlydate = []
            var checked_box = [];
            while (date1.getMonth() == monthIndex) {
                result.push(date1.getDate() + '-' + names[date1.getDay()]);
                onlydate.push(date1.getDate());
                date1.setDate(date1.getDate() + 1);
            }
            console.log(result);
            var beat_data_check = localStorage.getItem('beat').split(';,')
            var sunday = [];

            result.forEach(element => {
                if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                    sunday.push(parseInt(element.replace('-', ' ').split(' ')[0]))
                }

            });

            datedata = onlydate.filter(item => !sunday.includes(item))

            var all_ID = [];

            beat_data_check.forEach(bdc => {
                datedata.forEach(rd => {
                    all_ID.push(rd + '_' + bdc.split('::')[1].replaceAll(';', ''));
                });

            });


            all_ID.forEach(cid => {
                var b = document.getElementById(cid);
                if (b != null) {
                    b.checked = false;
                    checkoutletbybeat(cid);
                }

            });

            onlydate.forEach(cid => {
                var phvalue = $('#' + cid + '_ph').is(':checked')
                if (phvalue == true) {
                    beat_data_check.forEach(bdc => {
                        var a = document.getElementById(cid + '_' + bdc.split('::')[1].replaceAll(';', ''));
                        a.checked = false;
                    });
                }

            });

        }

        $("#loader").removeClass("is-active");
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Add Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Back to List ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    back = () => {

        let text = "Data will be erase!";
        if (confirm(text) == true) {
            $('#callcycle_list').show();
            $('#opencallcycle').hide();
            $('#closecallcycle').hide();
            $('#callcycle_form').hide();
            $('#callcycle_bulk').hide();
            $('#callcycle_table').html('');
          } else {

          }

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Back to List ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Getlist Data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    getlistdata = () => {
        if(localStorage.getItem('pos')=='RSM'){
            $('#bulkupbtn').hide();
          }else{
            $('#bulkupbtn').hide();
          }
        debugger;
        let data = {
            id:localStorage.getItem('userID'),
            position:localStorage.getItem('pos'),
            clientID:localStorage.getItem('clientID'),
            zone:localStorage.getItem('region')
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
                                    return `<a class="badge bg-dark text-white ms-2" style="background:Orange!important;color:white;font-weight:bolder;">Pending For Approval</a>`

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
                       },
                           { 
                            'render': function (data, type, row, meta) {
                                if(localStorage.getItem('pos')=='RSM' || row.status==1 || row.status==0 ){
                                    return `<a data-bs-toggle="modal" data-bs-target="#viewcallcycledata" onclick="getcallcycledatabyid(\'`+row.n_callcycle_id+`\')"><i class="fa fa-eye"></i></a>` 
                                }else{
                                    return `<a onclick="editcallcycledatabyid(\'`+row.n_callcycle_id+`\')"><i class="fa fa-edit"></i></a> | <a data-bs-toggle="modal" data-bs-target="#viewcallcycledata" onclick="getcallcycledatabyid(\'`+row.n_callcycle_id+`\')"><i class="fa fa-eye"></i></a><strong>|</strong>
                                    <a onclick="deletecallcycledatabyid(\'`+ row.n_callcycle_id + `\')"><i class="fa fa-trash" ></i></a>
`
                                }

                         } 
                       },
                        ],
                    });
                    getsosrdata();
                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }

    }
    getlistdata();

    getsosrdata = () => {
        debugger;
        let data ={
            userid:localStorage.getItem('userID')
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getsosrcntbyasm",
                data:data,
                beforeSend: function () {
                },
                success: function (results) {
                    var data = results.data[0];
                    $('#total_so_sr').text(data.total_so_sr);
                    $('#n_so').text(data.so);
                    $('#n_sr').text(data.sr)
                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }

    }




    deletecallcycledatabyid = function (id) {

        debugger;
        var data = {
            callcycle_id: id,
            updatedby:localStorage.getItem('userID')
        }

        $.ajax({
            url: "Qr/deletecallcycledatabyid",
            type: 'POST',
            crossDomain: true,
            data: data,

            beforeSend() {

            },

            success(results) {
                getlistdata();
                alert("Callcycle Data Deleted Successfully!!")
            },
            complete() {

            }
        })


    }
    


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Getlist Data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    editcallcycledatabyid=(id)=>{
        $('#callcycle_list').hide();
        $('#callcycle_form').show();
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getcallcycledatabyid",
                data: {id:id},
                beforeSend: function () {
                getso();
                },
                success: function (results) {
                    debugger;
                var data = results.data[0];
                getsr(data.so_position+'_'+data.soid+'_'+data.clientID,'edit');
                $('#s_region_hide').hide();
                $('#s_state_hide').hide();
                $('#s_asm_hide').hide();
                $('#s_city_hide').hide();
                $('#getbeat').hide();
                $('#back').hide();
                $('#asm_region_s').text(data.s_region);
                $('#n_callcycle_id').val(data.n_callcycle_id);
                $('#asm_state_s').text(data.s_state);
                $('#asm_city_s').text(data.s_city);
                $('#s_year_month').val(data.year+'-'+("0" + parseInt(data.month)).slice(-2));
                $('#s_so').prop('disabled',true);
                $('#s_sr').prop('disabled',true);
                
                var beat_ = JSON.parse(data.beat);
                if(beat_.length==1){
                    beat_=beat_[0]
                }

                // if(data.outlet==undefined || data.outlet==null || data.outlet==''){

                // }else{

                // }
                var outlet_ = JSON.parse(data.outlet);
                // global_beats=[];
                // global_outlets=[];
                // global_beats.push(beat_)
                // global_outlets.push(outlet_)

                var outletnames = [];
                var lsoutlet=[];
                // global_beats = [];

                beat_.forEach(element => {
                    global_beats.push(element);
                    outletnames.push(element.routeName+'::'+element.ID);
                    localStorage.removeItem('beat');
                    lsoutlet.push(element.routeName+'::'+element.ID+';');
                });
                localStorage.setItem('beat', lsoutlet)
                let date = new Date();
                let month = date.getMonth() + 2;
                let year = date.getFullYear();

                var monthIndex = month - 1; // 0..11 instead of 1..12
                var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                var date1 = new Date(year, monthIndex, 1);
                var result = [];
                var checked_box = [];
                while (date1.getMonth() == monthIndex) {
                    result.push(date1.getDate() + '-' + names[date1.getDay()]);
                    date1.setDate(date1.getDate() + 1);
                }
                console.log(result);
                html = ``;
                html += `<tr><th width="28.7%">Holiday/Sunday</th>`
                result.forEach((element, i) => {
                    if (i == 7 || i == 14 || i == 21 || i == 28) {
                        if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                            html += `<td style="width: 2%;border: none;background: white;"></td>`
                            html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked /></td>`
                            checked_box.push(element.replace('-', ' ').split(' ')[0] )
                        } else {
                            html += `<td style="width: 2%;border: none;background: white;"></td>`
                            html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                        }

                    } else {
                        if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                            html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked/></td>`
                            checked_box.push(element.replace('-', ' ').split(' ')[0] )
                        } else {
                            html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                        }
                    }
                });
                html += `</tr>`
                html += ` <tr>
        <th width="28.7%">Beat</th>`
                result.forEach((element, j) => {
                    if (j == 7 || j == 14 || j == 21 || j == 28) {
                        html += `<td style="width: 2%;border: none;background: white;"></td>`
                        html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                    } else {
                        html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                    }



                });
                html += `</tr>`
                html += `<tr>`
                outletnames.forEach((outlet, y) => {
                    html += `<td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;"><a onclick="getclassname(\'` + outlet.split('::')[1] + `\')"><i class="fa fa-plus-circle" style="font-size:12px"></i>` + outlet.split('::')[0] + `&nbsp;&nbsp;(<span id='`+outlet.split('::')[1]+'_'+`outletcnt'></span>)</a></b></td>`

                    result.forEach((element, k) => {
                        if (k == 7 || k == 14 || k == 21 || k == 28) {
                            html += `<td style="width: 2%;border: none;background: white;"></td>`
                            html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `\')"/></td>`
                        } else {
                            html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `\')" /></td>`
                        }


                    });
                    html += `</tr>`;
                    debugger;
                    html += `<tr id="outletdata_` + outlet.split('::')[1] + `"></tr>`;
                });
                $('#callcycle_table').html(html);
                disable_checkbox(checked_box, outletnames, 'beat');
                // $('#showbtn').show();
                $('#savebtn').hide();
                $('#updatebtn').show();
                $('#resetbtn').show();
                $('#backbtn').show();
                // $('#opencallcycle').show();
                checkoutletdata(beat_,'beat');
                setTimeout(() => {
                    var so = data.so_position+'_'+data.soid+'_'+data.clientID
                    var sr = data.srid+'_'+data.clientID
                    $('#s_so').val(so);
                    $('#s_sr').val(sr); 
                    if(outlet_.length!=0){
                        getoutletdata(outletnames,'single','update'); 
                    }
                }, 3000);



                   


                }
            })
        } catch (err) {
            // $("#loader").removeClass("is-active");
            console.log(err)
        }
    }


    setid=(id)=>{
        $('#reject').hide();
        $('#n_status').val('');
        $('#approved').hide();
        $('#n_callcycle_id').val(id);
    }

    getstsval=(sts)=>{
if(sts == 1){
    $('#reject').hide();
    $('#approved').show();
$('#sts_reason').hide();
}else{
    $('#reject').show();
    $('#approved').hide();
    $('#sts_reason').show();
}
    }

    ccapprove=()=>{
        let data = {
            id:$('#n_callcycle_id').val(),
            sts:$('#n_status').val(),
            updatedby:localStorage.getItem('userID')
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/approvecallcycle",
                data:data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");

                },
                success: function (results) {
                    debugger;
                    getlistdata();
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }

    ccreject=()=>{
        var reason = $('#sts_reason').val();
        if(reason==null || reason==undefined || reason==''){
            return alertify.error('Please Enter Reason For Reject')
        }
        let data = {
            id:$('#n_callcycle_id').val(),
            sts:$('#n_status').val(),
            remark:$('#sts_reason').val(),
            updatedby:localStorage.getItem('userID')
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/rejectcallcycle",
                data:data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");

                },
                success: function (results) {
                    debugger;
                    getlistdata();
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get Zone ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getzone = () => {
        debugger;
        $('#s_region').html('');
        $('#s_state').html('');
        $('#s_asm').html('');
        $('#s_city').html('');
        $('#s_so').html('');
        $('#s_sr').html('');
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getzone",
                //data:data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");

                },
                success: function (results) {
                    debugger;
                    let html = `<option value="">Select Region</option>`;
                    results.data.forEach(element => {
                        html += `<option value="${element.zone}">${element.zone}</option>`;

                    });
                    $("#s_region").html(html);
                    $('#s_region').val(localStorage.getItem('region'))
                    // getstate(localStorage.getItem('region'))
                    getasm(localStorage.getItem('region'));
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get Zone ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get State ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    getstate = (zone) => {
        debugger;
        $('#s_state').val('');
        $('#s_asm').val('');
        $('#s_city').val('');
        $('#s_so').val('');
        $('#s_sr').val('');
        let data = {
            zone: zone
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getstate",
                data: data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    let html = `<option value="">Select State</option>`;
                    results.data.forEach(element => {
                        html += `<option value="${element.state}">${element.state}</option>`;

                    });
                    $("#s_state").html(html);
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get State  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    getcallcycledatabyid=(id)=>{
        debugger;
        $('#view_callcycle').html('');
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getcallcycledatabyid",
                data: {id:id},
                beforeSend: function () {
                },
                success: function (results) {
                var data = results.data[0];
                // $('#s_s_region').text(data.s_region);
                // $('#s_s_state').text(data.s_state);
                // $('#s_s_asm').text(data.s_asm);
                // $('#s_s_city').text(data.s_city);
                // $('#s_s_so').text(data.s_so);
                // $('#s_s_sr').text(data.s_sr);
                // $('#s_month').text(data.month);
                // $('#s_year').text(data.year);
                var sts='';
                if(data.status==0){
                    sts = 'Pending For Approval'
                }else if(data.status==1){
                    sts = 'Approved & Callcycle Assigned'
                }else{
                    sts = 'Rejected '
                }

                var beat_data = JSON.parse(data.beat);
                if(beat_data.length==1){
                    beat_data=beat_data[0];
                }
                let date = new Date();
                let month = date.getMonth() + 2;
                let year = date.getFullYear();
                var day = new Date(year, month, 0).getDate();
                // var outlet_data = data.outlet==''?JSON.parse(data.outlet);
               var html=``;

                html+=`<tr>`
                html+=`<th>Details</th>`
                html+=`<th colspan="4"><label class="form-label">Region : <span style="font-size: 11px;font-weight: bolder;">`+data.s_region+`</span></label></th>`
                html+=`<th colspan="4"><label class="form-label">State : <span style="font-size: 11px;font-weight: bolder;">`+data.s_state+`</span></label></th>`
                html+=`<th colspan="4"><label class="form-label">ASM : <span style="font-size: 11px;font-weight: bolder;">`+data.s_asm+`</span></label></th>`
                html+=`<th colspan="4"><label class="form-label">City : <span style="font-size: 11px;font-weight: bolder;">`+data.s_city+`</span></label></th>`
                html+=`<th colspan="4"><label class="form-label">SO : <span style="font-size: 11px;font-weight: bolder;">`+data.s_so+`</span></label></th>`
                html+=`<th colspan="4"> <label class="form-label">SR : <span style="font-size: 11px;font-weight: bolder;">`+data.s_sr+`</span></label></th>`
                html+=`<th colspan="4"><label class="form-label">Month : <span style="font-size: 11px;font-weight: bolder;">`+data.month+`</span></label></th>`
                html+=`<th colspan="4"><label class="form-label">Year : <span style="font-size: 11px;font-weight: bolder;">`+data.year+`</span></label></th>`
                html+=`<th colspan="4"><label class="form-label">Status : <span style="font-size: 11px;font-weight: bolder;">`+sts+`</span></label></th>`
                html+=`</tr>`

                if(day==31){
                    html+=`<tr>`
                    html+=`<th>BEAT</th>`
                    html+=`<th>1</th>`
                    html+=`<th>2</th>`
                    html+=`<th>3</th>`
                    html+=`<th>4</th>`
                    html+=`<th>5</th>`
                    html+=`<th>6</th>`
                    html+=`<th>7</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>8</th>`
                    html+=`<th>9</th>`
                    html+=`<th>10</th>`
                    html+=`<th>11</th>`
                    html+=`<th>12</th>`
                    html+=`<th>13</th>`
                    html+=`<th>14</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>15</th>`
                    html+=`<th>16</th>`
                    html+=`<th>17</th>`
                    html+=`<th>18</th>`
                    html+=`<th>19</th>`
                    html+=`<th>20</th>`
                    html+=`<th>21</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>22</th>`
                    html+=`<th>23</th>`
                    html+=`<th>24</th>`
                    html+=`<th>25</th>`
                    html+=`<th>26</th>`
                    html+=`<th>27</th>`
                    html+=`<th>28</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>29</th>`
                    html+=`<th>30</th>`
                    html+=`<th>31</th>`
                    html+=`</tr>`
                    if(JSON.parse(data.beat).length==1){

                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+beat_data.routeName+`</b></td>`
                            if(beat_data[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(beat_data[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[29]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[30]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[31]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            html+=`</tr>`

                    }else{
                        beat_data.forEach(element => {
                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+element.routeName+`</b></td>`
                            if(element[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(element[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[29]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[30]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[31]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            html+=`</tr>`
        
        
                            
                        });
                    }

                }else if(day==30){
                    html+=`<tr>`
                    html+=`<th>BEAT</th>`
                    html+=`<th>1</th>`
                    html+=`<th>2</th>`
                    html+=`<th>3</th>`
                    html+=`<th>4</th>`
                    html+=`<th>5</th>`
                    html+=`<th>6</th>`
                    html+=`<th>7</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>8</th>`
                    html+=`<th>9</th>`
                    html+=`<th>10</th>`
                    html+=`<th>11</th>`
                    html+=`<th>12</th>`
                    html+=`<th>13</th>`
                    html+=`<th>14</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>15</th>`
                    html+=`<th>16</th>`
                    html+=`<th>17</th>`
                    html+=`<th>18</th>`
                    html+=`<th>19</th>`
                    html+=`<th>20</th>`
                    html+=`<th>21</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>22</th>`
                    html+=`<th>23</th>`
                    html+=`<th>24</th>`
                    html+=`<th>25</th>`
                    html+=`<th>26</th>`
                    html+=`<th>27</th>`
                    html+=`<th>28</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>29</th>`
                    html+=`<th>30</th>`
                    // html+=`<th>31</th>`
                    html+=`</tr>`
                    if(JSON.parse(data.beat).length==1){
                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+beat_data.routeName+`</b></td>`
                            if(beat_data[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(beat_data[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[29]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[30]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            // if(element[31]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            html+=`</tr>`        
                    
                    }else{
                        beat_data.forEach(element => {
                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+element.routeName+`</b></td>`
                            if(element[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(element[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[29]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[30]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            // if(element[31]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            html+=`</tr>`
        
        
                            
                        });
                    }

                }else if(day==28){
                    html+=`<tr>`
                    html+=`<th>BEAT</th>`
                    html+=`<th>1</th>`
                    html+=`<th>2</th>`
                    html+=`<th>3</th>`
                    html+=`<th>4</th>`
                    html+=`<th>5</th>`
                    html+=`<th>6</th>`
                    html+=`<th>7</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>8</th>`
                    html+=`<th>9</th>`
                    html+=`<th>10</th>`
                    html+=`<th>11</th>`
                    html+=`<th>12</th>`
                    html+=`<th>13</th>`
                    html+=`<th>14</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>15</th>`
                    html+=`<th>16</th>`
                    html+=`<th>17</th>`
                    html+=`<th>18</th>`
                    html+=`<th>19</th>`
                    html+=`<th>20</th>`
                    html+=`<th>21</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>22</th>`
                    html+=`<th>23</th>`
                    html+=`<th>24</th>`
                    html+=`<th>25</th>`
                    html+=`<th>26</th>`
                    html+=`<th>27</th>`
                    html+=`<th>28</th>`
                    // html+=`<th style="background:#6200AF;"></th>`
                    // html+=`<th>29</th>`
                    // html+=`<th>30</th>`
                    // html+=`<th>31</th>`
                    html+=`</tr>`
                    if(JSON.parse(data.beat).length==1){
                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+beat_data.routeName+`</b></td>`
                            if(beat_data[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(beat_data[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            // html+=`<td style="background:#6200AF;"></td>`
        
                            // if(element[29]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            // if(element[30]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            // if(element[31]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            html+=`</tr>`
        
        
                    }else{
                        beat_data.forEach(element => {
                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+element.routeName+`</b></td>`
                            if(element[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(element[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            // html+=`<td style="background:#6200AF;"></td>`
        
                            // if(element[29]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            // if(element[30]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            // if(element[31]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            html+=`</tr>`
        
        
                            
                        });
                    }

                }else if(day==29){
                    html+=`<tr>`
                    html+=`<th>BEAT</th>`
                    html+=`<th>1</th>`
                    html+=`<th>2</th>`
                    html+=`<th>3</th>`
                    html+=`<th>4</th>`
                    html+=`<th>5</th>`
                    html+=`<th>6</th>`
                    html+=`<th>7</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>8</th>`
                    html+=`<th>9</th>`
                    html+=`<th>10</th>`
                    html+=`<th>11</th>`
                    html+=`<th>12</th>`
                    html+=`<th>13</th>`
                    html+=`<th>14</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>15</th>`
                    html+=`<th>16</th>`
                    html+=`<th>17</th>`
                    html+=`<th>18</th>`
                    html+=`<th>19</th>`
                    html+=`<th>20</th>`
                    html+=`<th>21</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>22</th>`
                    html+=`<th>23</th>`
                    html+=`<th>24</th>`
                    html+=`<th>25</th>`
                    html+=`<th>26</th>`
                    html+=`<th>27</th>`
                    html+=`<th>28</th>`
                    html+=`<th style="background:#6200AF;"></th>`
                    html+=`<th>29</th>`
                    // html+=`<th>31</th>`
                    html+=`</tr>`
                    if(JSON.parse(data.beat).length==1){
                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+beat_data.routeName+`</b></td>`
                            if(beat_data[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(beat_data[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(beat_data[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(beat_data[29]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            // if(element[31]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            html+=`</tr>`
        
        
                            
                    }else{
                        beat_data.forEach(element => {
                            html+=`<tr>`
                            html+=`<td><b style="font-size:11px;">`+element.routeName+`</b></td>`
                            if(element[1]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[2]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[3]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[4]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[5]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[6]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[7]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;" ></td>`
        
                            if(element[8]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[9]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[10]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[11]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[12]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[13]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[14]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[15]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[16]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[17]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[18]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[19]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[20]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[21]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[22]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[23]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[24]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[25]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[26]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[27]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            if(element[28]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
        
                            html+=`<td style="background:#6200AF;"></td>`
        
                            if(element[29]==1){
                                html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            }else{
                                html+=`<td></td>`
                            }
                            // if(element[31]==1){
                            //     html+=`<td style="font-weight:bolder;">&#10003;</td>`
                            // }else{
                            //     html+=`<td></td>`
                            // }
                            html+=`</tr>`
        
        
                            
                        }); 
                    }

                }

    
                
                $('#view_callcycle').html(html);
                    
                if(data.status==0 && localStorage.getItem('pos')=="RSM"){
                    var html1=``;
                    html1+=`<a type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#updatestatus" onclick="setid('`+id+`')">Callcycle Action</a>
                    <button type="button" class="btn btn-success" onclick="ExportToExcel('xlsx')">Export to excel</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`
                        
                    $('#view_callcyclebtn').html(html1);
                }else{
                    var html1=``;
                    html1+=`
                    <button type="button" class="btn btn-success" onclick="ExportToExcel('xlsx')">Export to excel</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`
                        
                    $('#view_callcyclebtn').html(html1); 
                }

                }
            })
        } catch (err) {
            // $("#loader").removeClass("is-active");
            console.log(err)
        }
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~ Excel Convert ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     ExportToExcel=(type, fn, dl)=> {
        var elt = document.getElementById('view_callcycle');
        var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
        return dl ?
          XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
          XLSX.writeFile(wb, fn || ('callcycle.' + (type || 'xlsx')));
     }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get ASM  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get ASM  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getasm = (state) => {
        $('#s_asm').val('');
        $('#s_city').val('');
        $('#s_so').val('');
        $('#s_sr').val('');
        debugger;
        let data = {
            zone: document.getElementById('s_region').value,
            state: state

        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getasm",
                data: data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    let html = `<option value="">Select ASM</option>`;
                    results.data.forEach(element => {
                        html += `<option value="${element.userID+'::'+element.positionID}">${element.firstName}</option>`;

                    });
                    $("#s_asm").html(html);
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get ASM  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get City  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getcity = (uid) => {
        debugger;
        $('#s_city').val('');
        $('#s_so').val('');
        $('#s_sr').val('');
        let data = {
            zone: document.getElementById('s_region').value,
            state: document.getElementById('s_state').value,
            userid: uid.split('::')[0]
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getcity",
                data: data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    let html = `<option value="">Select City</option>`;
                    results.data.forEach(element => {
                        html += `<option value='${element.positionID}'>${element.city}</option>`;

                    });
                    $("#s_city").html(html);
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get City ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get SO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getso = () => {
        debugger;
        $('#s_so').val('');
        $('#s_sr').val('');
        if(localStorage.getItem('pos')=='RSM'){
            var data = {
                pid:$('#s_asm').val().split('::')[1],
                clientID:localStorage.getItem('clientID')
            }   
        }else{
            var data = {
                pid:localStorage.getItem('positionID'),
                clientID:localStorage.getItem('clientID')
            }
        }

        try {
            $.ajax({
                type: "POST",
                url: "Qr/getso",
                data: data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    let html = `<option value="">Select SO</option>`;
                    results.data.forEach(element => {
                        html += `<option value="${element.positionID+'_'+element.userID + '_' + element.clientID}">${element.firstName}</option>`;

                    });
                    $("#s_so").html(html); 
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get SO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    clearsr=()=>{
        $("#callcycle_table").html('');
        $('#savebtn').hide();
        $('#updatebtn').hide();
        $('#resetbtn').hide();
        $('#backbtn').hide();
        $('#opencallcycle').hide();
        $('#closecallcycle').hide();
        $("#callcycle_table").html('');
        var checkboxval = $('#opencc').is(':checked')
        var checkboxval1 = $('#closecc').is(':checked')
        if(checkboxval==true){
            document.getElementById('opencc').checked=false;
        }
        if(checkboxval1 == true){
            document.getElementById('closecc').checked=false;
        }

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getsr = (pid,text) => {
        $('#s_sr').val('');
        if(text=='edit'){
            let data = {
                // zone: document.getElementById('s_region').value,
                // state: document.getElementById('s_state').value,
                // uid: document.getElementById('s_asm').value,
                zone: document.getElementById('s_region').value==null||document.getElementById('s_region').value==undefined || document.getElementById('s_region').value==''?$('#asm_region_s').text():document.getElementById('s_region').value,
                // state: document.getElementById('s_state').value==null||document.getElementById('s_state').value==undefined || document.getElementById('s_state').value==''?$('#asm_state_s').text():document.getElementById('s_state').value,
                uid: document.getElementById('s_asm').value==null||document.getElementById('s_asm').value==undefined||document.getElementById('s_asm').value==''?localStorage.getItem('userID'):document.getElementById('s_asm').value,
                pid: pid.split('_')[0]
            }
            try {
                $.ajax({
                    type: "POST",
                    url: "Qr/getsr",
                    data: data,
                    beforeSend: function () {
                        $("#loader").addClass("is-active");
                    },
                    success: function (results) {
                        debugger;
                        let html = `<option value="">Select SR</option>`;
                        results.data.forEach(element => {
                            html += `<option value="${element.userID + '_' + element.clientID}">${element.firstName}</option>`;
    
                        });
                        $("#s_sr").html(html);
                        $("#loader").removeClass("is-active");
    
                    }
                })
            } catch (err) {
                $("#loader").removeClass("is-active");
                console.log(err)
            }
        }else{
            let data = {
                // zone: document.getElementById('s_region').value,
                // state: document.getElementById('s_state').value,
                // uid: document.getElementById('s_asm').value,
                zone: document.getElementById('s_region').value==null||document.getElementById('s_region').value==undefined || document.getElementById('s_region').value==''?$('#asm_region_s').text():document.getElementById('s_region').value,
                // state: document.getElementById('s_state').value==null||document.getElementById('s_state').value==undefined || document.getElementById('s_state').value==''?$('#asm_state_s').text():document.getElementById('s_state').value,
                uid: document.getElementById('s_asm').value==null||document.getElementById('s_asm').value==undefined||document.getElementById('s_asm').value==''?localStorage.getItem('userID'):document.getElementById('s_asm').value,
                pid: pid.split('_')[0]
            }
            try {
                $.ajax({
                    type: "POST",
                    url: "Qr/getsr",
                    data: data,
                    beforeSend: function () {
                        $("#loader").addClass("is-active");
                    },
                    success: function (results) {
                        debugger;
                        let html = `<option value="">Select SR</option>`;
                        results.data.forEach(element => {
                            html += `<option value="${element.userID + '_' + element.clientID}">${element.firstName}</option>`;
    
                        });
                        $("#s_sr").html(html);
                        $("#callcycle_table").html('');
                        $('#savebtn').hide();
                        $('#updatebtn').hide();
                        $('#resetbtn').hide();
                        $('#backbtn').hide();
                        $("#loader").removeClass("is-active");
    
                    }
                })
            } catch (err) {
                $("#loader").removeClass("is-active");
                console.log(err)
            }
        }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Personal Holiday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ph = (id) => {
        var beat = localStorage.getItem('beat')
        debugger;
        beat.split(';,').forEach(element => {
            var a = document.getElementsByName(id.replace('-', '_') + '_' + element.split('::')[1].replaceAll(';',''));
            var b = document.getElementById(id.replace('-', '_') + '_ph');
            global_beats.forEach(element => {
                element[b.id.split('_')[0]]=0;
            });
            if (b.checked == true) {
                for (var i = 0; i < a.length; i++) {
                    a[i].disabled = true;
                    a[i].checked = false;
                }
            } else {
                for (var i = 0; i < a.length; i++) {
                    a[i].disabled = false;
                }
            }
        });

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Personal Holiday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    // getbeat=()=>{
    //     debugger;
    //     let data ={
    //         userid:$('#s_sr').val(),
    //         client_id:document.getElementById('s_state').value,
    //     }
    //     try {
    //         $.ajax({
    //             type: "POST",
    //             url: "Qr/getsr",
    //             data:data,
    //             success: function (results) {
    //                 debugger;
    //             let html = `<option value="">Select SR</option>`;
    //             results.data.forEach(element => {
    //                 html += `<option value="${element.userID}">${element.firstName}</option>`;

    //             });
    //             $("#s_sr").html(html);

    //         }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    checkallcheckbox=()=>{
        debugger;
            $("#loader").addClass("is-active");
            var checkboxval = $('#opencc').is(':checked')
            if(checkboxval != true){
                getbeat();
            }else{
            let date = new Date();
            let month = date.getMonth() + 2;
            let year = date.getFullYear();
        
            var monthIndex = month - 1; // 0..11 instead of 1..12
            var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var date1 = new Date(year, monthIndex, 1);
            var result = [];
            var onlydate =[]
            var checked_box = [];
            while (date1.getMonth() == monthIndex) {
                result.push(date1.getDate() + '-' + names[date1.getDay()]);
                onlydate.push(date1.getDate());
                date1.setDate(date1.getDate() + 1);
            }
            console.log(result);
            var beat_data_check = localStorage.getItem('beat').split(';,')
            var sunday=[];
    
            result.forEach(element => {
                if(element.replace('-', ' ').split(' ')[1] == 'Sun'){
                    sunday.push(parseInt(element.replace('-', ' ').split(' ')[0]))
                }
    
            });
    
            datedata = onlydate.filter(item => !sunday.includes(item))
        
        
        
            var all_ID = [];
        
            beat_data_check.forEach(bdc => {
                datedata.forEach(rd => {
                    all_ID.push(rd+'_'+bdc.split('::')[1].replaceAll(';',''));
                });
                
            });
        
        
            all_ID.forEach(cid => {
                var b = document.getElementById(cid);
                if(b!=null){
                    b.checked = true;
                    checkoutletbybeat(cid);
                }
            
            });
    
            onlydate.forEach(cid => {
                var phvalue = $('#'+cid+'_ph').is(':checked')
                if(phvalue==true){
                    beat_data_check.forEach(bdc => {
                        var a = document.getElementById(cid+'_'+bdc.split('::')[1].replaceAll(';',''));
                        a.checked=false;
                    });
                }
            
            });
    
        }
    
        $("#loader").removeClass("is-active");
    }
    

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get All beat by SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getbeat = () => {
        if($('#s_so').val().split('_')[1]==undefined || $('#s_so').val().split('_')[1]==null || $('#s_so').val().split('_')[1]==''){
            return alert('Please Select SO First')
        }
        
let data={
    so:$('#s_so').val().split('_')[1],
    sr:$('#s_sr').val().split('_')[0],
    month: new Date().getMonth()+2,
    year: new Date().getFullYear()
}
        try {
            $.ajax({
                type: "POST",
                url: "Qr/validatecallcyclewithuser",
                data:data,
                success: function (results) {
                    debugger;
                    if(results.data.length==0){
                        global_outlets=[];
                        global_beats=[];
                        debugger;
                        if ($('#s_so').val() == null || $('#s_so').val() == undefined ) {
                            return alert('SO FIELD IS BLANK')
                        }
                        if ($('#s_sr').val() == null || $('#s_sr').val() == undefined ) {
                            return alert('SR FIELD IS BLANK')
                        }
                        let data = {
                            userid: $('#s_sr').val().split('_')[0]==null||$('#s_sr').val().split('_')[0]==undefined||$('#s_sr').val().split('_')[0]==''?$('#s_so').val().split('_')[1]:$('#s_sr').val().split('_')[0],
                            client_id: localStorage.getItem('clientID'),
                            month: new Date().getMonth()+1,
                            year: new Date().getFullYear()
                        }
                        try {
                            $.ajax({
                                type: "POST",
                                url: "Qr/getbeatdata",
                                data: data,
                                crossDomain: true,
                                beforeSend: function () {
                                    $("#loader").addClass("is-active");
                                },
                                success: function (results) {
                                    debugger;
                                    $('#opencallcycle').hide();
                                    $('#closecallcycle').hide();
                                    $('#savebtn').prop('disabled',false);
                                    var outletnames = [];
                                    var lsoutlet=[];
                                    // global_beats = [];
                
                                    results.data.forEach(element => {
                                        global_beats.push(element);
                                        outletnames.push(element.routeName+'::'+element.ID);
                                        localStorage.removeItem('beat');
                                        lsoutlet.push(element.routeName+'::'+element.ID+';');
                                    });
                                    localStorage.setItem('beat', lsoutlet)
                                    let date = new Date();
                                    let month = date.getMonth() + 2;
                                    let year = date.getFullYear();
                
                                    var monthIndex = month - 1; // 0..11 instead of 1..12
                                    var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                    var date1 = new Date(year, monthIndex, 1);
                                    var result = [];
                                    var checked_box = [];
                                    while (date1.getMonth() == monthIndex) {
                                        result.push(date1.getDate() + '-' + names[date1.getDay()]);
                                        date1.setDate(date1.getDate() + 1);
                                    }
                                    console.log(result);
                                    html = ``;
                                    html += `<tr><th width="28.7%">Holiday/Sunday</th>`
                                    result.forEach((element, i) => {
                                        if (i == 7 || i == 14 || i == 21 || i == 28) {
                                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked /></td>`
                                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                                            } else {
                                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                                            }
                
                                        } else {
                                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked/></td>`
                                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                                            } else {
                                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                                            }
                                        }
                                    });
                                    html += `</tr>`
                                    html += ` <tr>
                            <th width="28.7%">Beat</th>`
                                    result.forEach((element, j) => {
                                        if (j == 7 || j == 14 || j == 21 || j == 28) {
                                            html += `<td style="width: 2%;border: none;background: white;"></td>`
                                            html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                                        } else {
                                            html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                                        }
                
                
                
                                    });
                                    html += `</tr>`
                                    html += `<tr>`
                                    outletnames.forEach((outlet, y) => {
                                        html += `<td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;"><a onclick="getclassname(\'` + outlet.split('::')[1] + `\')"><i class="fa fa-plus-circle" style="font-size:12px"></i>` + outlet.split('::')[0] + `&nbsp;&nbsp;(<span id='`+outlet.split('::')[1]+'_'+`outletcnt'></span>)</a></b></td>`
                
                                        result.forEach((element, k) => {
                                            if (k == 7 || k == 14 || k == 21 || k == 28) {
                                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `\')"/></td>`
                                            } else {
                                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `\')" /></td>`
                                            }
                
                
                                        });
                                        html += `</tr>`;
                                        debugger;
                                        html += `<tr id="outletdata_` + outlet.split('::')[1] + `"></tr>`;
                                    });
                                    $('#callcycle_table').html(html);  
                                    var new_data=[];
                                    var callcycle_data=[];
                                    var today = new Date();
                                    var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                    var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                                    var cal = 31

                                    results.data.forEach((element,idx) => {
                                        for(i=1;i<cal;i++){
                                                    element[i]=0;
                                        } 
                                    });

                                    results.data.forEach((element,idx) => {
                                        if(idx<12){
                                            new_data.push(element);
                                        }
                                    });
                                    var new_data1=[];

                                    new_data.forEach((element,idx) => {
                                        if(idx>firstDayOfMonth.getDay()){
                                            new_data1.push(element);
                                        }
                                    });
                                    results.data.forEach((element,idx) => {
                                        if(idx<=firstDayOfMonth.getDay()){
                                            new_data1.push(element);
                                        }
                                    });
                                    var sunday=[];
                                    result.forEach(element => {
                                        if(element.replace('-', ' ').split(' ')[1] == 'Sun'){
                                            sunday.push(element.replace('-', ' ').split(' ')[0])
                                        }

                                    });

                                    var datedata = [];

                                    result.forEach(element => {
                                            datedata.push(element.replace('-', ' ').split(' ')[0])
                                        
                                    });
                                    
                                    datedata = datedata.filter(item => !sunday.includes(item))

                                    // var dte_data = ["1:15:29","2:16:30","3:17:31","4:18","5:19","6:20","7:21","8:22","9:23","10:24","11:25","12:26","13:27","14:28"]
                                    var dte_data=[];
                                    datedata.forEach(element => {
                                        if(parseInt(element)<=14){
                                            if((parseInt(element)+14+14)<=result.length){
                                                dte_data.push(element+'::'+(parseInt(element)+14)+'::'+(parseInt(element)+14+14))
                                            }else{
                                                dte_data.push(element+'::'+(parseInt(element)+14))
                                            }

                                        }

                                        
                                    });
                                    

                                    new_data1.forEach((element,idx) => {
                                            for(i=1;i<cal;i++){
                                                    if(dte_data[idx].split('::')[0]==i){
                                                        element[dte_data[idx].split('::')[0]]=1;
                                                    }else if(dte_data[idx].split('::')[1]==i){
                                                        element[dte_data[idx].split('::')[1]]=1;
                                                    }else if(dte_data[idx].split('::')[2]==i){
                                                        element[dte_data[idx].split('::')[2]]=1;
                                                    }else{
                                                        element[i]=0;
                                                    }
                                                // else{
                                                //     if(dte_data[idx].split('::')[0]==i){
                                                //         element[dte_data[idx].split('::')[0]]=1;
                                                //     }else if(dte_data[idx].split('::')[1]==i){
                                                //         element[dte_data[idx].split('::')[1]]=1;
                                                //     }else if(dte_data[idx].split('::')[2]==i){
                                                //         element[dte_data[idx].split('::')[2]]=1;
                                                //     }else{
                                                //         element[i]=0;
                                                //     }
                                                // }

                                            } 
                                        });

                
                
                                    checkoutletdata(results.data,'beat');
                                    // $('#savebtn').show();
                                    // $('#updatebtn').hide();
                                    // $('#resetbtn').show();
                                    // $('#backbtn').show();
                                    disable_checkbox(checked_box, outletnames, 'beat');
                                    getoutletdata(outletnames,'single');
                                    $("#loader").removeClass("is-active");
                                    // return result;
                
                                }
                            })
                        } catch (err) {
                            $("#loader").removeClass("is-active");
                            console.log(err)
                        }
                    }else{

                        alert('Callcycle Already Submitted');
                        $('#s_so').val('');
                        $('#s_sr').val('');
                        $('#s_so').html('');
                        $('#s_sr').html('');
                        getso();
                    }


            }
            })
        } catch (err) {
            console.log(err)
        }

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get All beat by SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




    // Refresh Beat

    refreshbeat = () => {
        
    debugger;
        global_outlets=[];
        global_beats=[];
        debugger;
        if ($('#s_so').val() == null || $('#s_so').val() == undefined ) {
            return alert('SO FIELD IS BLANK')
        }
        if ($('#s_sr').val() == null || $('#s_sr').val() == undefined ) {
            return alert('SR FIELD IS BLANK')
        }
        let data = {
            userid: $('#s_sr').val().split('_')[0]==null||$('#s_sr').val().split('_')[0]==undefined||$('#s_sr').val().split('_')[0]==''?$('#s_so').val().split('_')[1]:$('#s_sr').val().split('_')[0],
            client_id: localStorage.getItem('clientID'),
            month: new Date().getMonth()+1,
            year: new Date().getFullYear()
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getbeatdata",
                data: data,
                crossDomain: true,
                beforeSend: function () {
                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    var outletnames = [];
                    var lsoutlet=[];
                    // global_beats = [];

                    results.data.forEach(element => {
                        global_beats.push(element);
                        outletnames.push(element.routeName+'::'+element.ID);
                        localStorage.removeItem('beat');
                        lsoutlet.push(element.routeName+'::'+element.ID+';');
                    });
                    localStorage.setItem('beat', lsoutlet)
                    let date = new Date();
                    let month = date.getMonth() + 2;
                    let year = date.getFullYear();

                    var monthIndex = month - 1; // 0..11 instead of 1..12
                    var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    var date1 = new Date(year, monthIndex, 1);
                    var result = [];
                    var checked_box = [];
                    while (date1.getMonth() == monthIndex) {
                        result.push(date1.getDate() + '-' + names[date1.getDay()]);
                        date1.setDate(date1.getDate() + 1);
                    }
                    console.log(result);
                    html = ``;
                    html += `<tr><th width="28.7%">Holiday/Sunday</th>`
                    result.forEach((element, i) => {
                        if (i == 7 || i == 14 || i == 21 || i == 28) {
                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked /></td>`
                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                            } else {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                            }

                        } else {
                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked/></td>`
                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                            } else {
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                            }
                        }
                    });
                    html += `</tr>`
                    html += ` <tr>
            <th width="28.7%">Beat</th>`
                    result.forEach((element, j) => {
                        if (j == 7 || j == 14 || j == 21 || j == 28) {
                            html += `<td style="width: 2%;border: none;background: white;"></td>`
                            html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                        } else {
                            html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                        }



                    });
                    html += `</tr>`
                    html += `<tr>`
                    outletnames.forEach((outlet, y) => {
                        html += `<td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;"><a onclick="getclassname(\'` + outlet.split('::')[1] + `\')"><i class="fa fa-plus-circle" style="font-size:12px"></i>` + outlet.split('::')[0] + `&nbsp;&nbsp;(<span id='`+outlet.split('::')[1]+'_'+`outletcnt'></span>)</a></b></td>`

                        result.forEach((element, k) => {
                            if (k == 7 || k == 14 || k == 21 || k == 28) {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `\')"/></td>`
                            } else {
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].split('::')[1] + `\')" /></td>`
                            }


                        });
                        html += `</tr>`;
                        debugger;
                        html += `<tr id="outletdata_` + outlet.split('::')[1] + `"></tr>`;
                    });
                    $('#callcycle_table').html(html);  
                    var new_data=[];
                    var callcycle_data=[];
                    var today = new Date();
                    var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                    var cal = 31

                    results.data.forEach((element,idx) => {
                        for(i=1;i<cal;i++){
                                    element[i]=0;
                        } 
                    });

                    results.data.forEach((element,idx) => {
                        if(idx<12){
                            new_data.push(element);
                        }
                    });
                    var new_data1=[];

                    new_data.forEach((element,idx) => {
                        if(idx>firstDayOfMonth.getDay()){
                            new_data1.push(element);
                        }
                    });
                    results.data.forEach((element,idx) => {
                        if(idx<=firstDayOfMonth.getDay()){
                            new_data1.push(element);
                        }
                    });
                    var sunday=[];
                    result.forEach(element => {
                        if(element.replace('-', ' ').split(' ')[1] == 'Sun'){
                            sunday.push(element.replace('-', ' ').split(' ')[0])
                        }

                    });

                    var datedata = [];

                    result.forEach(element => {
                            datedata.push(element.replace('-', ' ').split(' ')[0])
                        
                    });
                    
                    datedata = datedata.filter(item => !sunday.includes(item))

                    // var dte_data = ["1:15:29","2:16:30","3:17:31","4:18","5:19","6:20","7:21","8:22","9:23","10:24","11:25","12:26","13:27","14:28"]
                    var dte_data=[];
                    datedata.forEach(element => {
                        if(parseInt(element)<=14){
                            if((parseInt(element)+14+14)<=result.length){
                                dte_data.push(element+'::'+(parseInt(element)+14)+'::'+(parseInt(element)+14+14))
                            }else{
                                dte_data.push(element+'::'+(parseInt(element)+14))
                            }

                        }

                        
                    });
                    

                    new_data1.forEach((element,idx) => {
                            for(i=1;i<cal;i++){
                                    if(dte_data[idx].split('::')[0]==i){
                                        element[dte_data[idx].split('::')[0]]=1;
                                    }else if(dte_data[idx].split('::')[1]==i){
                                        element[dte_data[idx].split('::')[1]]=1;
                                    }else if(dte_data[idx].split('::')[2]==i){
                                        element[dte_data[idx].split('::')[2]]=1;
                                    }else{
                                        element[i]=0;
                                    }
                                // else{
                                //     if(dte_data[idx].split('::')[0]==i){
                                //         element[dte_data[idx].split('::')[0]]=1;
                                //     }else if(dte_data[idx].split('::')[1]==i){
                                //         element[dte_data[idx].split('::')[1]]=1;
                                //     }else if(dte_data[idx].split('::')[2]==i){
                                //         element[dte_data[idx].split('::')[2]]=1;
                                //     }else{
                                //         element[i]=0;
                                //     }
                                // }

                            } 
                        });



                    checkoutletdata(results.data,'beat');
                    // $('#savebtn').show();
                    // $('#updatebtn').hide();
                    // $('#resetbtn').show();
                    // $('#backbtn').show();
                    disable_checkbox(checked_box, outletnames, 'beat');
                    getoutletdata(outletnames,'single');
                    $("#loader").removeClass("is-active");
                    // return result;

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    


            }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get Outlet by beat ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // var flag = true;
    getoutletdata = (route_name,ldata,func) => {
        // $("#loader").addClass("is-active");
        // if(data == 'bulk'){
        //     var client_id = localStorage.getItem('clientID');
        // }else{
        //     var client_id = $('#s_sr').val().split('_')[1]
        // }
        var cntroute = route_name.length;
        var no = 1;
        route_name.forEach(route_name => {
            // if (flag) {
                // flag = false;
                let data = {
                    client_id: localStorage.getItem('clientID'),
                    route_name: route_name.split('::')[0],
                    month: new Date().getMonth()+1,
                    year: new Date().getFullYear(),
                    userid:($('#s_sr').val().split('_')[0]==undefined || $('#s_sr').val().split('_')[0]=='' ||$('#s_sr').val().split('_')[0]==null)?$('#s_so').val().split('_')[1]:$('#s_sr').val().split('_')[0]
                }
                try {
                    $.ajax({
                        type: "POST",
                        url: "Qr/getoutletbybeat",
                        data: data,
                        crossDomain: true,
                        beforeSend: function () {
                            $("#loader").addClass("is-active");
                        },
                        success: function (results) {
                            debugger;
                            if(no == cntroute){
                                if(func=='update'){
                                    $('#savebtn').hide();
                                    $('#updatebtn').show();
                                    $('#resetbtn').show();
                                    $('#backbtn').show();
                                    $('#opencallcycle').show();
                                    $('#closecallcycle').show();
                                }else{
                                    $('#savebtn').show();
                                    $('#updatebtn').hide();
                                    $('#resetbtn').show();
                                    $('#backbtn').show();
                                    $('#opencallcycle').show();
                                    $('#closecallcycle').show();
                                }


                                var cnt = results.data.length
                                $('#'+route_name.split('::')[1]+'_'+'outletcnt').text(cnt)
                                var outletbybeat = [];
                                results.data.forEach(element => {
                                    global_outlets.push(element)
                                    outletbybeat.push(element.outletName+'::'+element.ID+'_'+element.outletid)
                                });
        
                                let date = new Date();
                                let month = date.getMonth() + 2;
                                let year = date.getFullYear();
        
                                var monthIndex = month - 1; // 0..11 instead of 1..12
                                var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                var date1 = new Date(year, monthIndex, 1);
                                var result1 = [];
                                var checked_box = [];
                                while (date1.getMonth() == monthIndex) {
                                    result1.push(date1.getDate() + '-' + names[date1.getDay()] + '_' + route_name.split('::')[1]);
                                    date1.setDate(date1.getDate() + 1);
                                }
                                console.log(result1);
                                html1 = ``;
                                outletbybeat.forEach(outlet => {
                                    html1 += `<tr style="background:#bd9bffb0;display:none;" class="outletdata_` + route_name.split('::')[1] + `" ><td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;">` + outlet.split('::')[0] + `</b></td>`
        
                                    result1.forEach((element, k) => {
                                        // debugger;
                                        // if(k==7 || k==14 || k==21 || k==28){
                                        //     html1+=`<td style="width: 2%;border: none;background: white;"></td>`
                                        //     html1+=`<td><input type="checkbox" /></td>`
                                        // }else{
                                        //     html1+=`<td><input type="checkbox" /></td>`
                                        // }
        
                                        if (k == 7 || k == 14 || k == 21 || k == 28) {
                                            if(element.replace('-', '_').split('_')[3]!=undefined || element.replace('-', '_').split('_')[3]!=null){
                                                html1 += `<td style="width: 2%;border: none;background: white;"></td>`
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3])
                                            }else{
                                                html1 += `<td style="width: 2%;border: none;background: white;"></td>`
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2])
                                            }
        
                                        } else {
                                            if(element.replace('-', '_').split('_')[3]!=undefined || element.replace('-', '_').split('_')[3]!=null){
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3])
                                            }else{
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2])
                                            }
        
                                        }
        
                                    });
                                    html1+=`<td><img src="../static/img/icons/arrows-repeat.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#swap_outlet" onclick="beatforswap(\'` + route_name+'_'+outlet.split('_')[1]+ `\');" /></td><td><img src="../static/img/icons/trash.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#delete_outlet" onclick="beatforinactive(\'` + route_name+'_'+outlet.split('_')[1] + `\');" /></td>`
                                    html1 += `</tr>`
                                });
                                // $('#outletdata_'+route_name).html(html1);
                                $('#outletdata_' + route_name.split('::')[1]).after(html1);
                                disable_checkbox(checked_box, [route_name], 'outlet');
                                debugger;
                                checkoutletbybeat();
                                // checkoutletdata(results.data,'outlet');
                                hideshowoutlet(route_name);
                                $("#loader").removeClass("is-active");
                            }else{
                                $('#savebtn').hide();
                                $('#updatebtn').hide();
                                $('#resetbtn').hide();
                                $('#opencallcycle').hide();
                                $('#closecallcycle').hide();
                                no++
                                var cnt = results.data.length
                                $('#'+route_name.split('::')[1]+'_'+'outletcnt').text(cnt)
                                var outletbybeat = [];
                                results.data.forEach(element => {
                                    global_outlets.push(element)
                                    outletbybeat.push(element.outletName+'::'+element.ID+'_'+element.outletid)
                                });
        
                                let date = new Date();
                                let month = date.getMonth() + 2;
                                let year = date.getFullYear();
        
                                var monthIndex = month - 1; // 0..11 instead of 1..12
                                var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                var date1 = new Date(year, monthIndex, 1);
                                var result1 = [];
                                var checked_box = [];
                                while (date1.getMonth() == monthIndex) {
                                    result1.push(date1.getDate() + '-' + names[date1.getDay()] + '_' + route_name.split('::')[1]);
                                    date1.setDate(date1.getDate() + 1);
                                }
                                console.log(result1);
                                html1 = ``;
                                outletbybeat.forEach(outlet => {
                                    html1 += `<tr style="background:#bd9bffb0;display:none;" class="outletdata_` + route_name.split('::')[1] + `" ><td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;">` + outlet.split('::')[0] + `</b></td>`
        
                                    result1.forEach((element, k) => {
                                        // debugger;
                                        // if(k==7 || k==14 || k==21 || k==28){
                                        //     html1+=`<td style="width: 2%;border: none;background: white;"></td>`
                                        //     html1+=`<td><input type="checkbox" /></td>`
                                        // }else{
                                        //     html1+=`<td><input type="checkbox" /></td>`
                                        // }
        
                                        if (k == 7 || k == 14 || k == 21 || k == 28) {
                                            if(element.replace('-', '_').split('_')[3]!=undefined || element.replace('-', '_').split('_')[3]!=null){
                                                html1 += `<td style="width: 2%;border: none;background: white;"></td>`
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3])
                                            }else{
                                                html1 += `<td style="width: 2%;border: none;background: white;"></td>`
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2])
                                            }
        
                                        } else {
                                            if(element.replace('-', '_').split('_')[3]!=undefined || element.replace('-', '_').split('_')[3]!=null){
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3])
                                            }else{
                                                html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+'_'+outlet.split('::')[1]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`'/></td>`
                                                checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2])
                                            }
        
                                        }
        
                                    });
                                    html1+=`<td><img src="../static/img/icons/arrows-repeat.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#swap_outlet" onclick="beatforswap(\'` + route_name+'_'+outlet.split('_')[1]+ `\');" /></td><td><img src="../static/img/icons/trash.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#delete_outlet" onclick="beatforinactive(\'` + route_name+'_'+outlet.split('_')[1] + `\');" /></td>`
                                    html1 += `</tr>`
                                });
                                // $('#outletdata_'+route_name).html(html1);
                                $('#outletdata_' + route_name.split('::')[1]).after(html1);
                                disable_checkbox(checked_box, [route_name], 'outlet');
                                debugger;
                                checkoutletbybeat();
                                // checkoutletdata(results.data,'outlet');
                                hideshowoutlet(route_name);
                                $("#loader").removeClass("is-active");
                            }
                            // $("#loader").addClass("is-active");


    
                        },
                    })
                } catch (err) {
                    $("#loader").removeClass("is-active");
                    console.log(err)
                }
            // }
            // else {
            //     debugger;
            //     // alert('remove')
            //     // alert('0');
            //     // $('#outletdata_'+route_name).remove(); 
            //     $("#loader").addClass("is-active");
            //     $('.outletdata_' + route_name.replaceAll(' ', '_')).remove()
            //     flag = true;
            //     $("#loader").removeClass("is-active");
            // } 
        });



    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get Outlet by beat ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    hideshowoutlet=(outlet)=>{
        debugger;
        // document.getElementsByClassName('outletdata_'+outlet.replaceAll(' ','_')).style.display = "none";
            $('.outletdata_'+outlet.replaceAll(' ','_')).hide();
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Disable Checkbox ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    disable_checkbox = (checked_box, data, text) => {
        debugger;
        if (text == 'beat') {
            data.forEach(BO => {
                checked_box.forEach(element => {
                    var a = document.getElementsByName(element + '_' + BO.split('::')[1]);
                    var b = document.getElementById(element + '_ph');
                    if (b.checked == true) {
                        for (var i = 0; i < a.length; i++) {
                            a[i].disabled = true;
                            uncheck.push(element + '_' + BO.split('::')[1]);
                            a[i].checked = false;
                        }
                    } else {
                        for (var i = 0; i < a.length; i++) {
                            a[i].disabled = false;
                        }
                    }
                });
            });
        } else {
            data.forEach(BO => {
                checked_box.forEach(element => {
                    var a = document.getElementsByName(element);
                    var b = document.getElementById(element.split('_')[0]+ '_ph');
                    if(b!=null){
                    if (b.checked == true) {
                        for (var i = 0; i < a.length; i++) {
                            a[i].disabled = true;
                            uncheck.push(element + '_' + BO.split('::')[1]);
                            a[i].checked = false;
                        }
                    } else {
                        for (var i = 0; i < a.length; i++) {
                            a[i].disabled = false;
                        }
                    }
                }
                });
            });
        }

        checkoutletbybeat = (id) => {
            debugger;
            if (id == undefined || id == null) {
                var checkbox_id = []
                $("input[type=checkbox]").each(function () {
                    var self = $(this);
                    if (self.is(':checked')) {
                        if (self.attr("id").split('_')[1] != 'Sun') {
                            checkbox_id.push(self.attr("id"));
                        }

                    }
                });
                console.log(checkbox_id);
                checkbox_id.forEach(cid => {
                    var a = document.getElementsByName(cid);
                    var b = document.getElementById(cid);
                    if (b.checked == true) {
                        for (var i = 0; i < a.length; i++) {
                            a[i].checked = true;
                            var bval = uncheck.includes(id)
                            if(bval==true){
                                uncheck = uncheck.filter(item => item !== id)
                            }
                        }
                    } else {
                        for (var i = 0; i < a.length; i++) {
                            a[i].checked = false;
                            var bval = uncheck.includes(id)
                            if(bval==false){
                                uncheck.push(id);
                            }
                        }
                    }
                });

            } else {
                var a = document.getElementsByName(id);
                var b = document.getElementById(id);
                if (b.checked == true) {
                    for (var i = 0; i < a.length; i++) {
                        a[i].checked = true;
                        var bval = uncheck.includes(id)
                        if(bval==true){
                            uncheck = uncheck.filter(item => item !== id)
                        }
                        
                    }
                } else {
                    for (var i = 0; i < a.length; i++) {
                        a[i].checked = false;
                        var bval = uncheck.includes(id)
                        if(bval==false){
                            uncheck.push(id);
                        }

                    }
                }

            }

        }

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Disable Checkbox ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    transferoutlet=()=>{
        var swap_beat = $('#swap_beat').val();
        var swap_reason = $('#swap_reason').val();
        if(swap_beat=='' || swap_beat==null || swap_beat==undefined){
            return alert('Please Select Transfer Beat')
        }
        if(swap_reason=='' || swap_reason==null || swap_reason==undefined){
            return alert('Please Enter Transfer Reason')
        }
        debugger;
        var e = document.getElementById("swap_beat");
        var swap_beat = e.options[e.selectedIndex].text;

        let data = {
            date:$('#d_from_date').val(),
            beat_name_from:$('#beatname').text(),
            beat_name_to:swap_beat,
            swap_reason:$('#swap_reason').val(),
            n_outlet_id:$('#n_outlet_id').val(),
            s_name:'Transfer Outlet',
            created_by:localStorage.getItem('userID')

        }

        try {
            $.ajax({
                type: "POST",
                url: "Qr/transferoutlet",
                data:data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");

                },
                success: function (results) {
                    debugger;
                    $('#swap_outlet').modal('hide');
                    refreshbeat();
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }

    inactiveoutlet=()=>{
debugger;
        var inactive_reason= $('#inactive_reason').val()
        if(inactive_reason=='' || inactive_reason==null || inactive_reason==undefined){
            return alert('Please Enter Transfer Reason')
        }
        let data = {
            date:$('#d_from_date_in').val(),
            inactive_reason:$('#inactive_reason').val(),
            n_outlet_id:$('#n_outlet_id').val(),
            s_name:'Inactive Outlet',
            beat_name_from:$('#beatname').text(),
            created_by:localStorage.getItem('userID')

        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/inactiveoutlet",
                data:data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");

                },
                success: function (results) {
                    debugger;
                    $('#delete_outlet').modal('hide');
                    refreshbeat();
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Save Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    savecallcycle = () => {
        debugger
        var getbeats = localStorage.getItem('beat').split(';,');
        let date = new Date();
        let month = date.getMonth() + 2;
        let year = date.getFullYear();
        var day = new Date(year, month, 0).getDate();
        var ttl =[]

        for (let index = 1; index < day; index++) {

            for (let i = 0; i < getbeats.length; i++) {
                let val = $('#'+index+'_'+getbeats[i].split('::')[1].replaceAll(';','')).is(":checked");
                if(val==true){
                    ttl.push(1)
                }else{
                    ttl.push(0)
                }
            }

                const sum = ttl.reduce((partialSum, a) => partialSum + a, 0);
                var phval = $('#'+index+'_'+'ph').is(":checked")
                if(sum==0){
                    if(phval != true){
                        ttl=[];
                        return alert('Please Lock Beat on '+index+'th of Date');
                    }
                }
                // else if(sum>1){
                //     return alert('You have selected more than one beat! Please Lock Beat on date ' + index + 'of Month');
                // }
                ttl=[];
        }




        let text = "Are You Sure You Want To Submit CallCycle ?";
        if (confirm(text) == true) {
        $('#savebtn').prop('disabled',true);
        //   text = "You pressed OK!";
        global_outlets;
        global_beats;


        var getbeatname=[]
        $("input[type=checkbox]").each(function () {
            var self = $(this);
            if (self.is(':checked')) {
                    getbeatname.push(self.attr("id"));
            }
        });
        
        outletdata=[]
        beatdata=[]
        getbeatname.forEach(element => {
            if(element.split('_')[1]!='ph'){
                if(element.split('_').length==2){
                    beatdata.push(element);
                }else{
                    if(element.split('_')[1]!=undefined){
                        outletdata.push(element);
                    }

                }
            }
        });
        // getbeatname.forEach(element => {
        //     if(element.split('_')[1]!='ph'){
        //         if(element.split('_').length==2){
        //             beatdata.push(element);
        //         }else{
        //             outletdata.push(element);
        //         }
        //     }
        // });
        uncheck.forEach(element => {
            var index = global_beats.findIndex(function(item, i){
                return item.ID === element.split('_')[1]
              });
              if(index !=-1){
                global_beats[index][parseInt(element.split('_')[0])]=0
              }

    
        });
        beatdata.forEach(element => {
            var index = global_beats.findIndex(function(item, i){
                return item.ID === element.split('_')[1]
              });
              if(index !=-1){
                global_beats[index][parseInt(element.split('_')[0])]=1
              }
    
        });
        outletdata.forEach(element => {
            var index = global_outlets.findIndex(function(item, i){
                return item.ID === element.split('_')[2]
              });
              if(index !=-1){
                global_outlets[index][parseInt(element.split('_')[0])]=1
              }


        });

        global_outlets.forEach((el,x) =>{
        global_outlets[x]['1']=0;
        global_outlets[x]['2']=0;
        global_outlets[x]['3']=0;
        global_outlets[x]['4']=0;
        global_outlets[x]['5']=0;
        global_outlets[x]['6']=0;
        global_outlets[x]['7']=0;
        global_outlets[x]['8']=0;
        global_outlets[x]['9']=0;
        global_outlets[x]['10']=0;
        global_outlets[x]['11']=0;
        global_outlets[x]['12']=0;
        global_outlets[x]['13']=0;
        global_outlets[x]['14']=0;
        global_outlets[x]['15']=0;
        global_outlets[x]['16']=0;
        global_outlets[x]['17']=0;
        global_outlets[x]['18']=0;
        global_outlets[x]['19']=0;
        global_outlets[x]['20']=0;
        global_outlets[x]['21']=0;
        global_outlets[x]['22']=0;
        global_outlets[x]['23']=0;
        global_outlets[x]['24']=0;
        global_outlets[x]['25']=0;
        global_outlets[x]['26']=0;
        global_outlets[x]['27']=0;
        global_outlets[x]['28']=0;
        global_outlets[x]['29']=0;
        global_outlets[x]['30']=0;
        global_outlets[x]['31']=0;
        })

        outletdata.forEach((elm,n)=>{
            var date = elm.split('_')[0];
            var id = elm.split('_')[2];
            var outletcode = elm.split('_')[3];

            var index = global_outlets.findIndex(function(item, i){
                return item.ID === id && item.outletCode===outletcode
              });

            global_outlets[index][date]=1;




        })



        var e = document.getElementById("s_city");

        if(e==undefined || e==null){
            var city = '';
        }else{
            var city = e.options[e.selectedIndex].text;
        }

        if(global_outlets==undefined || global_outlets==null ||global_outlets==''){
            return alert('Please load callcycle again ! outlet data not loaded properly');
        }
        var asm = ($('#s_asm').val()==undefined || $('#s_asm').val()==null)?localStorage.getItem('userID'):$('#s_asm').val().split('::')[0];
        let data = {
            month:parseInt($('#s_year_month').val().split('-')[1]),
            year:parseInt($('#s_year_month').val().split('-')[0]),
            beat: global_beats,
            outlet: global_outlets,
            s_region: $('#s_region').val()==''||$('#s_region').val()==null||$('#s_region').val()==undefined ?$('#asm_region_s').text(): $('#s_region').val(),
            s_state: $('#s_state').val()==''||$('#s_state').val()==null||$('#s_state').val()==undefined ?$('#asm_state_s').text(): $('#s_state').val(),
            s_asm: $('#s_asm').val()==''||$('#s_asm').val()==null||$('#s_asm').val()==undefined?localStorage.getItem('userID'):asm,
            s_city: city==undefined || city==null||city==''?$('#asm_city_s').text():city,
            s_so: $('#s_so').val().split('_')[1],
            s_sr: $('#s_sr').val().split('_')[0]==undefined?0:$('#s_sr').val().split('_')[0],
            createdby:localStorage.getItem('userID'),
            created_date:new Date().toLocaleString(),
            status:0,
            clientID:localStorage.getItem('clientID'),
            asm_pos:localStorage.getItem('positionID'),
            so_pos:$('#s_so').val().split('_')[0]
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/savecallcycle",
                data: data,
                beforeSend: function () {

                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    uncheck=[];
                    alertify.success('Data Save Successfully !');  
                    $('#callcycle_list').show();
                    $('#callcycle_form').hide();
                    getlistdata();
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }



        } else {
        //   text = "You canceled!";
        alertify.error('Data Will Not Save !');  
        }

        

    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End Save Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    updatecallcycle = () => {
        var getbeats = localStorage.getItem('beat').split(';,');
        let date = new Date();
        let month = date.getMonth() + 2;
        let year = date.getFullYear();
        var day = new Date(year, month, 0).getDate();
        var ttl =[]

        for (let index = 1; index < day; index++) {

            for (let i = 0; i < getbeats.length; i++) {
                let val = $('#'+index+'_'+getbeats[i].split('::')[1].replaceAll(';','')).is(":checked");
                if(val==true){
                    ttl.push(1)
                }else{
                    ttl.push(0)
                }
            }

                const sum = ttl.reduce((partialSum, a) => partialSum + a, 0);
                var phval = $('#'+index+'_'+'ph').is(":checked")
                if(sum==0){
                    if(phval != true){
                        ttl=[];
                        return alert('Please Lock Beat on '+index+'th of Date');
                    }
                }
                ttl=[];
        }
        debugger
        let text = "Are You Sure You Want To Update CallCycle ?";
        if (confirm(text) == true) {
        //   text = "You pressed OK!";
        global_outlets;
        global_beats;


        var getbeatname=[]
        $("input[type=checkbox]").each(function () {
            var self = $(this);
            if (self.is(':checked')) {
                    getbeatname.push(self.attr("id"));
            }
        });
        
        outletdata=[]
        beatdata=[]

        getbeatname.forEach(element => {
            if(element.split('_')[1]!='ph'){
                if(element.split('_').length==2){
                    beatdata.push(element);
                }else{
                    outletdata.push(element);
                }
            }
        });
        beatdata.forEach(element => {
            var index = global_beats.findIndex(function(item, i){
                return item.ID === element.split('_')[1]
              });
              global_beats[index][parseInt(element.split('_')[0])]=1



    
        });
        uncheck.forEach(element => {
            var index = global_beats.findIndex(function(item, i){
                return item.ID === element.split('_')[1]
              });
              global_beats[index][parseInt(element.split('_')[0])]=0
        });

        outletdata.forEach(element => {
            var index = global_outlets.findIndex(function(item, i){
                return item.ID === element.split('_')[2]
              });
              global_outlets[index][parseInt(element.split('_')[0])]=1

        });

        global_outlets.forEach((el,x) =>{
            global_outlets[x]['1']=0;
            global_outlets[x]['2']=0;
            global_outlets[x]['3']=0;
            global_outlets[x]['4']=0;
            global_outlets[x]['5']=0;
            global_outlets[x]['6']=0;
            global_outlets[x]['7']=0;
            global_outlets[x]['8']=0;
            global_outlets[x]['9']=0;
            global_outlets[x]['10']=0;
            global_outlets[x]['11']=0;
            global_outlets[x]['12']=0;
            global_outlets[x]['13']=0;
            global_outlets[x]['14']=0;
            global_outlets[x]['15']=0;
            global_outlets[x]['16']=0;
            global_outlets[x]['17']=0;
            global_outlets[x]['18']=0;
            global_outlets[x]['19']=0;
            global_outlets[x]['20']=0;
            global_outlets[x]['21']=0;
            global_outlets[x]['22']=0;
            global_outlets[x]['23']=0;
            global_outlets[x]['24']=0;
            global_outlets[x]['25']=0;
            global_outlets[x]['26']=0;
            global_outlets[x]['27']=0;
            global_outlets[x]['28']=0;
            global_outlets[x]['29']=0;
            global_outlets[x]['30']=0;
            global_outlets[x]['31']=0;
            })
    
            outletdata.forEach((elm,n)=>{
                var date = elm.split('_')[0];
                var id = elm.split('_')[2];
                var outletcode = elm.split('_')[3];
    
                var index = global_outlets.findIndex(function(item, i){
                    return item.ID === id && item.outletCode===outletcode
                  });
    
                global_outlets[index][date]=1;
    
    
    
    
            })

debugger;
        var e = document.getElementById("s_city");
        if(e==undefined || e==null ){
            var city = '';
        }else{
            var e = document.getElementById("s_city");
            var city = e.options[e.selectedIndex].text;
        }


        let data = {
            // month:parseInt($('#s_year_month').val().split('-')[1]),
            // year:parseInt($('#s_year_month').val().split('-')[0]),
            beat: global_beats,
            outlet: global_outlets,
            // s_region: $('#s_region').val()==''||$('#s_region').val()==null||$('#s_region').val()==undefined ?$('#asm_region_s').text(): $('#s_region').val(),
            // s_state: $('#s_state').val()==''||$('#s_state').val()==null||$('#s_state').val()==undefined ?$('#asm_state_s').text(): $('#s_state').val(),
            // s_asm: $('#s_asm').val()==''||$('#s_asm').val()==null||$('#s_asm').val()==undefined?localStorage.getItem('userID'):$('#s_asm').val(),
            // s_city: city==undefined || city==null||city==''?$('#asm_city_s').text():city,
            // s_so: $('#s_so').val().split('_')[1]==undefined?'':$('#s_so').val().split('_')[1],
            // s_sr: $('#s_sr').val().split('_')[0]==undefined?0:$('#s_sr').val().split('_')[0],
            createdby:localStorage.getItem('userID'),
            created_date:new Date().toLocaleString(),
            status:0,
            clientID:localStorage.getItem('clientID'),
            asm_pos:localStorage.getItem('positionID'),
            so_pos:$('#s_so').val().split('_')[0],
            n_callcycle_id:$('#n_callcycle_id').val()
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/updatecallcycle",
                data: data,
                beforeSend: function () {

                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    alertify.success('Data Save Successfully !');  
                    $('#callcycle_list').show();
                    $('#callcycle_form').hide();
                    getlistdata();
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }



        } else {
        //   text = "You canceled!";
        alertify.error('Data Will Not Save !');  
        }

        

    }

















    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check outlet callcycle data ~~~~~~~~~~~~~~~~~~~~~~~~~~

    checkoutletdata=(results,text)=>{
debugger;
if(text == 'outlet'){
    var checked_outlet=[];
    results.forEach(element => {
        if(element[1]==1){
            checked_outlet.push('1'+'_'+element.ID);
        }
        if(element[2]==1){
            checked_outlet.push('2'+'_'+element.ID);
        }
        if(element[3]==1){
            checked_outlet.push('3'+'_'+element.ID);
        }
        if(element[4]==1){
            checked_outlet.push('4'+'_'+element.ID);
        }
        if(element[5]==1){
            checked_outlet.push('5'+'_'+element.ID);
        }
        if(element[6]==1){
            checked_outlet.push('6'+'_'+element.ID);
        }
        if(element[7]==1){
            checked_outlet.push('7'+'_'+element.ID);
        }
        if(element[8]==1){
            checked_outlet.push('8'+'_'+element.ID);
        }
        if(element[9]==1){
            checked_outlet.push('9'+'_'+element.ID);
        }
        if(element[10]==1){
            checked_outlet.push('10'+'_'+element.ID);
        }
        if(element[11]==1){
            checked_outlet.push('11'+'_'+element.ID);
        }
        if(element[12]==1){
            checked_outlet.push('12'+'_'+element.ID);
        }
        if(element[13]==1){
            checked_outlet.push('13'+'_'+element.ID);
        }
        if(element[14]==1){
            checked_outlet.push('14'+'_'+element.ID);
        }
        if(element[15]==1){
            checked_outlet.push('15'+'_'+element.ID);
        }
        if(element[16]==1){
            checked_outlet.push('16'+'_'+element.ID);
        }
        if(element[17]==1){
            checked_outlet.push('17'+'_'+element.ID);
        }
        if(element[18]==1){
            checked_outlet.push('18'+'_'+element.ID);
        }
        if(element[19]==1){
            checked_outlet.push('19'+'_'+element.ID);
        }
        if(element[20]==1){
            checked_outlet.push('20'+'_'+element.ID);
        }
        if(element[21]==1){
            checked_outlet.push('21'+'_'+element.ID);
        }
        if(element[22]==1){
            checked_outlet.push('22'+'_'+element.ID);
        }
        if(element[23]==1){
            checked_outlet.push('23'+'_'+element.ID);
        }
        if(element[24]==1){
            checked_outlet.push('24'+'_'+element.ID);
        }
        if(element[25]==1){
            checked_outlet.push('25'+'_'+element.ID);
        }
        if(element[26]==1){
            checked_outlet.push('26'+'_'+element.ID);
        }
        if(element[27]==1){
            checked_outlet.push('27'+'_'+element.ID);
        }
        if(element[28]==1){
            checked_outlet.push('28'+'_'+element.ID);
        }
        if(element[29]==1){
            checked_outlet.push('29'+'_'+element.ID);
        }
        if(element[30]==1){
            checked_outlet.push('30'+'_'+element.ID);
        }
        if(element[31]==1){
            checked_outlet.push('31'+'_'+element.ID);
        } 
    });

    // checked_outlet.forEach(cid => {
    //     var a = document.getElementsByName(cid);
    //     var b = document.getElementById(cid);
    //     if (b.checked == true) {
    //         for (var i = 0; i < a.length; i++) {
    //             a[i].checked = true;
    //         }
    //     } else {
    //         for (var i = 0; i < a.length; i++) {
    //             a[i].checked = false;
    //         }
    //     }
    // });

}else{

    var checked_outlet=[];


    results.forEach((element,idx) => {
            if(element[1]==1){
                checked_outlet.push('1'+'_'+element.ID);
            }
            if(element[2]==1){
                checked_outlet.push('2'+'_'+element.ID);
            }
            if(element[3]==1){
                checked_outlet.push('3'+'_'+element.ID);
            }
            if(element[4]==1){
                checked_outlet.push('4'+'_'+element.ID);
            }
            if(element[5]==1){
                checked_outlet.push('5'+'_'+element.ID);
            }
            if(element[6]==1){
                checked_outlet.push('6'+'_'+element.ID);
            }
            if(element[7]==1){
                checked_outlet.push('7'+'_'+element.ID);
            }
            if(element[8]==1){
                checked_outlet.push('8'+'_'+element.ID);
            }
            if(element[9]==1){
                checked_outlet.push('9'+'_'+element.ID);
            }
            if(element[10]==1){
                checked_outlet.push('10'+'_'+element.ID);
            }
            if(element[11]==1){
                checked_outlet.push('11'+'_'+element.ID);
            }
            if(element[12]==1){
                checked_outlet.push('12'+'_'+element.ID);
            }
            if(element[13]==1){
                checked_outlet.push('13'+'_'+element.ID);
            }
            if(element[14]==1){
                checked_outlet.push('14'+'_'+element.ID);
            }
            if(element[15]==1){
                checked_outlet.push('15'+'_'+element.ID);
            }
            if(element[16]==1){
                checked_outlet.push('16'+'_'+element.ID);
            }
            if(element[17]==1){
                checked_outlet.push('17'+'_'+element.ID);
            }
            if(element[18]==1){
                checked_outlet.push('18'+'_'+element.ID);
            }
            if(element[19]==1){
                checked_outlet.push('19'+'_'+element.ID);
            }
            if(element[20]==1){
                checked_outlet.push('20'+'_'+element.ID);
            }
            if(element[21]==1){
                checked_outlet.push('21'+'_'+element.ID);
            }
            if(element[22]==1){
                checked_outlet.push('22'+'_'+element.ID);
            }
            if(element[23]==1){
                checked_outlet.push('23'+'_'+element.ID);
            }
            if(element[24]==1){
                checked_outlet.push('24'+'_'+element.ID);
            }
            if(element[25]==1){
                checked_outlet.push('25'+'_'+element.ID);
            }
            if(element[26]==1){
                checked_outlet.push('26'+'_'+element.ID);
            }
            if(element[27]==1){
                checked_outlet.push('27'+'_'+element.ID);
            }
            if(element[28]==1){
                checked_outlet.push('28'+'_'+element.ID);
            }
            if(element[29]==1){
                checked_outlet.push('29'+'_'+element.ID);
            }
            if(element[30]==1){
                checked_outlet.push('30'+'_'+element.ID);
            }
            if(element[31]==1){
                checked_outlet.push('31'+'_'+element.ID);
            } 

    });

}

checked_outlet.forEach(cid => {
    var b = document.getElementById(cid);
    if(b!=null){
        b.checked = true;
    }

});

    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End outlet callcycle data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    getclassname=(id)=>{
        debugger;
        var sts = $('.outletdata_'+id).is(":hidden");
        if(sts == true){
            $('.outletdata_'+id).show();
        }else{
            $('.outletdata_'+id).hide();
        }

        // var elms = document.getElementsByClassName('outletdata_'+id);

        // Array.from(elms).forEach((x) => {
        //   if (x.style.display === "none") {
        //     x.style.display = "block";
        //   } else {
        //     x.style.display = "none";
        //   }
        // })

    }




    bulkuploadcallcycle=()=>{
        $('#callcycle_table').html('');
        var date = new Date().getFullYear()+'-'+("0" + parseInt(new Date().getMonth()+2)).slice(-2);
        $('#s_year_month_bulk').val(date);
        $('#bulkdata').html('');
        $('#callcycle_list').hide();
        $('#callcycle_form').hide();
        $('#callcycle_bulk').show();
        $('#excel_data').html('');
        $('#save_data').prop('disabled',true);
        $('#input').val('');
        getasmdatabyid();


    }

    getasmdatabyid=(role)=>{

        try {
            $.ajax({
                type: "POST",
                url: "Qr/getasmdatabyid",
                data: {uid:localStorage.getItem('userID')},
                beforeSend: function () {
                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    var state = results.data[0].state
                    var city = results.data[0].city
                    var region = results.data[0].zone
                    if(role=='asm'){
                        $('#asm_state_s').text(state)
                        $('#asm_city_s').text(city)
                        $('#asm_region_s').text(region)
                        getso();
                    }else{
                        $('#asm_state').text(state)
                        $('#asm_city').text(city)
                        $('#asm_region').text(region)
                    }
                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }

    }


    
    loadoutletdatabyasm=()=>{
        debugger;
        bulkd_=[];
        let date = new Date();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let data = {
            pid:localStorage.getItem('positionID'),
            month: month,
            year: year,
            clientID:localStorage.getItem('clientID')
        }

        try {
            $.ajax({
                type: "POST",
                url: "Qr/getbeatdatabyasm",
                data: data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");
                },
                success: function (results) {
                    debugger;
                    var outletnames = [];
                    var lsoutlet=[];
                    var res = results.data;
                    bulkd_.push(res);
                    results.data.forEach(element => {
                        outletnames.push(element.routeName+'::'+element.ID);
                        localStorage.removeItem('beat');
                        lsoutlet.push(element.routeName+'::'+element.ID+';');
                    });
                    localStorage.setItem('beat', lsoutlet)
                    let date = new Date();
                    let month = date.getMonth() + 2;
                    let year = date.getFullYear();

                    var monthIndex = month - 1; // 0..11 instead of 1..12
                    var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    var date1 = new Date(year, monthIndex, 1);
                    var result = [];
                    var checked_box = [];
                    while (date1.getMonth() == monthIndex) {
                        result.push(date1.getDate() + '-' + names[date1.getDay()]);
                        date1.setDate(date1.getDate() + 1);
                    }
                    console.log(result);
                    html = ``;
                    html += `<tr><th width="28.7%">Holiday/Sunday</th>`
                    result.forEach((element, i) => {
                        if (i == 7 || i == 14 || i == 21 || i == 28) {
                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked /></td>`
                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                            } else {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                            }

                        } else {
                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked/></td>`
                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                            } else {
                                html += `<td><input class="sb-checkbox__label sb-checkbox__label--red" type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                            }
                        }
                    });
                    html += `</tr>`
                    html += ` <tr>
            <th width="28.7%">Beat</th>`
                    result.forEach((element, j) => {
                        if (j == 7 || j == 14 || j == 21 || j == 28) {
                            html += `<td style="width: 2%;border: none;background: white;"></td>`
                            html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                        } else {
                            html += `<th width="2.3%" style="font-size:12px;">` + element.replace('-', ' ').split(' ')[0] + `<br><span style="font-size:10px;">` + element.replace('-', ' ').split(' ')[1] + `</span></th>`
                        }
                    });
                    html += `</tr>`
                    var user_ = [];
                    res.forEach((outlet, y) => {
                        let index = user_.indexOf(outlet.userID);
                        if(index==-1){
                            user_.push(outlet.userID)
                            html += `<tr style="height:20px;"></tr>`
                            html += `<tr style="background-color: #6200af8c;color: white;">`
                            html += `<td style="text-align:center;" colspan="36"><b style="font-style:italic;font-size:12px;text-transform: uppercase;">` + outlet.firstName + `</b></td>`

                            // result.forEach((element, k) => {
                            //     if (k == 7 || k == 14 || k == 21 || k == 28) {
                            //         html += `<td style="width: 2%;border: none;background: white;"></td>`
                            //         html += `<td><input type="checkbox" /></td>`
                            //     } else {
                            //         html += `<td><input type="checkbox" /></td>`
                            //     }
    
    
                            // });
                            html+=`</tr>`;
                            
                        }
                        html += `<tr>`
                        html += `<td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;"><a onclick="getclassname(\'` + outlet.ID + `\')">` + outlet.routeName + `</a></b></td>`

                        result.forEach((element, k) => {
                            if (k == 7 || k == 14 || k == 21 || k == 28) {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + res[y].ID + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + res[y].ID + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + res[y].ID + `\')"/></td>`
                            } else {
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + res[y].ID + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + res[y].ID + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + res[y].ID + `\')" /></td>`
                            }


                        });
                        html += `</tr>`;

                    });
                    $('#bulkdata').html(html);
                    checkoutletdata(results.data,'beat');
                    $("#loader").removeClass("is-active");
                    // $('#showbtn').show();
                    disable_checkbox(checked_box, outletnames, 'beat');
                    $('#save_data').prop('disabled',false);
                    //getoutletdata(outletnames,'bulk')
                    // return result;

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }

    }
    beatforswap=(route)=>{
        debugger;
    $('#beatname').text('');
    $('#d_from_date').val(new Date().toISOString().split('T')[0])
    $('#beatname').text(route.split('::')[0])
    $('#n_outlet_id').val(route.split('_')[1]);
    var beatdata=[];
    beatdata = localStorage.getItem('beat').split(';,');
    beatdata = beatdata.filter(function(item) {
        return item.split('::')[0] !== route.split('::')[0]
    })

    let html = `<option value="">Select Beat</option>`;
    beatdata.forEach(element => {
        html += `<option value="${element.split('::')[1]}">${element.split('::')[0]}</option>`;

    });
    $("#swap_beat").html(html);

    }

    cleardata=()=>{
        $('#excel_data').html('');
        $('#save_data').prop('disabled',true);
        $('#input').val('');
    }


    beatforinactive=(route)=>{
        $('#beatnamein').text('');
        $('#d_from_date_in').val(new Date().toISOString().split('T')[0])
        $('#beatnamein').text(route.split('::')[0])
        $('#n_outlet_id').val(route.split('_')[1]);
    }

    savebulk=()=>{
        debugger;
        var  bulkdata = bulkd_
        if(bulkdata.length==1){
            var  bulkdata = bulkd_[0]
        }

        
        var getbeatname=[]
        $("input[type=checkbox]").each(function () {
            var self = $(this);
            if (self.is(':checked')) {
                    getbeatname.push(self.attr("id"));
            }
        });
        
        outletdata=[]
        beatdata=[]

        getbeatname.forEach(element => {
            if(element.split('_')[1]!='ph'){
                if(element.split('_').length==2){
                    beatdata.push(element);
                }else{
                    outletdata.push(element);
                }
            }
        });
        beatdata.forEach(element => {
            var index = bulkdata.findIndex(function(item, i){
                return item.ID === element.split('_')[1]
              });
              bulkdata[index][parseInt(element.split('_')[0])]=1
    
        });
        // outletdata.forEach(element => {
        //     var index = bulkdata.findIndex(function(item, i){
        //         return item.ID === element.split('_')[2]
        //       });
        //       bulkdata[index][parseInt(element.split('_')[0])]=1
        // });


        let date = new Date();
        bulkdata.forEach(element => {
            element['clientID']=parseInt(localStorage.getItem('clientID'));
            element['year']=parseInt(date.getFullYear());
            element['month']=parseInt(date.getMonth() + 2);
            element['status']=1;
            element['createdBy']=localStorage.getItem('userID');
            element['deleted']=0;
            
        });
        uncheck.forEach(element => {
            var index = bulkdata.findIndex(function(item, i){
                return item.ID === element.split('_')[1]
              });
              bulkdata[index][parseInt(element.split('_')[0])]=0
    
        });

        let data={
            s_region:$('#asm_region').text(),
            s_state:$('#asm_state').text(),
            s_city:$('#asm_city').text(),
            s_asm:localStorage.getItem('userID'),
            s_so:'',
            s_sr:'',
            outlet:'',
            beat:bulkdata,
            month:parseInt($('#s_year_month_bulk').val().split('-')[1]),
            year:parseInt($('#s_year_month_bulk').val().split('-')[0]),
            status:0,
            createdby:localStorage.getItem('userID'),
            clientID:localStorage.getItem('clientID'),
            asm_pos:localStorage.getItem('positionID'),
            so_pos:''
        }

        try {
            $.ajax({
                type: "POST",
                url: "Qr/savecallcycle",
                data:data,
                beforeSend: function () {
                    $("#loader").addClass("is-active");

                },
                success: function (results) {
                    debugger;
                    // back();
                    $('#callcycle_list').show();
                    $('#callcycle_form').hide();
                    $('#callcycle_bulk').hide();
                    $('#callcycle_table').html('');
                    $('#bulkdata').html('');
                    getlistdata();

                    $("#loader").removeClass("is-active");

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Bulk Excel ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let selectedFile;
    console.log(window.XLSX);
    document.getElementById('input').addEventListener("change", (event) => {
        selectedFile = event.target.files[0];
    })
    
    let data=[{
        "name":"jayanth",
        "data":"scd",
        "abc":"sdef"
    }]
    
    
    document.getElementById('load_excel').addEventListener("click", () => {
        if($('#input').val()=='' || $('#input').val()==undefined ||$('#input').val()==null ){
            selectedFile='';
            return alert('Please upload Excel First')
        }
        XLSX.utils.json_to_sheet(data, 'out.xlsx');
        if(selectedFile){
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (event)=>{
             let data = event.target.result;
             let workbook = XLSX.read(data,{type:"binary"});
             const firstSheetName = workbook.SheetNames[0];
             const worksheet = workbook.Sheets[firstSheetName];
             const options = { header: 1 };
             const sheetData2 = XLSX.utils.sheet_to_json(worksheet, options);
             const header = sheetData2.shift();
             console.log(header);
             console.log(workbook);
             excel_data=[];
             workbook.SheetNames.forEach(sheet => {
                  let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                  debugger
                  console.log(rowObject);
                  excel_data.push(rowObject)

             });

             createtable(header,excel_data)
            }
        }
    });

    createtable=(header,rowObject)=>{
    var edata=``;
    edata+=`<tr>`
    header.forEach(header => {
        if(header == 8 || header == 15 || header == 22 || header == 29){
            edata+=`<th style="width: 2%;border: none;background: white;"></th>` 
        }else{

        }
        edata+=`<th style="width: 2%;">`+header+`</th>` 
    });
    edata+=`</tr>`
    rowObject[0].forEach(rdata=>{
        edata+=`<tr>`
        header.forEach(header => {
            if(header == 8 || header == 15 || header == 22 || header == 29){
                edata += `<td style="width: 2%;border: none;background: white;"></td>`
                if(header==1||header==2 ||header==3 ||header==4 ||header==5||header==6||header==7||header==8||header==9||header==10||header==11|header==12||header==13||header==14||header==15||header==16||header==17||header==18||header==19||header==20||header==21||header==22||header==23||header==24||header==25||header==26||header==27||header==28||header==29||header==30||header==31){
                    if(rdata[header]==1){
                     edata+=`<td><input type="checkbox" checked></input></td>`;
                    }else{
                     edata+=`<td><input type="checkbox"></input></td>`;
                    } 
                 }else{
                     edata+=`<td>`+rdata[header]+`</td>`
                 }
            }else{
                if(header==1||header==2 ||header==3 ||header==4 ||header==5||header==6||header==7||header==8||header==9||header==10||header==11|header==12||header==13||header==14||header==15||header==16||header==17||header==18||header==19||header==20||header==21||header==22||header==23||header==24||header==25||header==26||header==27||header==28||header==29||header==30||header==31){
                    if(rdata[header]==1){
                     edata+=`<td><input type="checkbox" checked></input></td>`;
                    }else{
                     edata+=`<td><input type="checkbox"></input></td>`;
                    } 
                 }else{
                     edata+=`<td>`+rdata[header]+`</td>`
                 }
            }

 
        });
        // edata+=`<td><img src="../static/img/icons/arrows-repeat.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#swap_outlet" onclick="beatforswap();" /></td><td><img src="../static/img/icons/trash.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#delete_outlet" onclick="beatforinactive();" /></td>`
        edata+=`</tr>`
    })

    $('#excel_data').html(edata);
    $('#save_data').prop('disabled',false);
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Bulk Excel End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
})();