

(function () {

    // check_file_status=()=> {
    //     debugger;
    //     try {
    //         $.ajax({
    //             type: "POST",
    //             url: "/check_file",
    //             //data:data,
    //             success: function (results) {
    //                 debugger;
    //                 if(results.split == undefined || results.split==null){
    //                     var date = new Date(results.ctime).toLocaleDateString().split('/')[1]+'/'+new Date(results.ctime).toLocaleDateString().split('/')[0]+'/'+new Date(results.ctime).toLocaleDateString().split('/')[2]+' '+new Date(results.ctime).toLocaleTimeString();
    //                     $('#file-msg').text('File Present At Server ' + date);
    //                 } else{
    //                     var data = results.split(',');
    //                     $('#file-msg').text(data[0]+'in a folder. Please Upload Before Start Call Cycle.');
    //                 }

    //         }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    // check_file_status();


    // ~~~~~~~~~~~~~~~~~~~~~~~ RUN CALLCYCLE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // runcallcycle=()=> {
    //     debugger;
    //     try {
    //         $.ajax({
    //             type: "POST",
    //             url: "Qr/updatecallcycledata",
    //             //data:data,
    //             success: function (results) {
    //                 debugger;

    //         }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~END CALLCYCLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





    //     var _validFileExtensions = [".xlsx"];    
    //     Validate=(oForm)=> {
    //     var arrInputs = oForm.getElementsByTagName("input");
    //     debugger;
    //     for (var i = 0; i < arrInputs.length; i++) {
    //         var oInput = arrInputs[i];
    //         if (oInput.type == "file") {
    //             var sFileName = oInput.value;
    //             if (sFileName.length > 0) {
    //                 var blnValid = false;
    //                 for (var j = 0; j < _validFileExtensions.length; j++) {
    //                     var sCurExtension = _validFileExtensions[j];
    //                     if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
    //                         blnValid = true;
    //                         break;
    //                     }
    //                 }

    //                 if (!blnValid) {
    //                     alert("Sorry, " + sFileName.split('\\')[2] + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
    //                     return false;
    //                 }

    //                 if(sFileName.split('\\')[2] !='callcycle.xlsx'){
    //                     alert("Sorry, " + sFileName.split('\\')[2] + " this file name is invalid, allowed name is: callcycle.xlsx");
    //                     return false;  
    //                 }
    //             }
    //         }
    //     }

    //     return true;
    // }


    // function daysInMonth(month, year) {
    //     return new Date(year, month, 0).getDate();
    // }

    // function GFG_Fun() {
    //     debugger;
    //     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //     let date = new Date();
    //     let month = date.getMonth()+1;
    //     let year = date.getFullYear();
    //     let day = weekday[date.getDay()];
    //     console.log(day);
    //     console.log("Number of days in " + month
    //         + "and month of the year " + year
    //         + " is " + daysInMonth(month, year));
    // }
    // GFG_Fun()

    // var getDaysArray = function(year, month) {
    //     debugger;
    //     var monthIndex = month - 1; // 0..11 instead of 1..12
    //     var names = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    //     var outletnames = ["Kavita Pro Store","BASSEIN SUPAR MARKET","asriya condiments","bramhalingeshwara condiments","chowdeshwari mart","kht provision store","Lakshmi venkateshwara provision store","NANDINI milk parlour","sree bakery","annaporna home needs"];
    //     var date = new Date(year, monthIndex, 1);
    //     var result = [];
    //     while (date.getMonth() == monthIndex) {
    //       result.push(date.getDate() + '-' + names[date.getDay()]);
    //       date.setDate(date.getDate() + 1);
    //     }
    //     console.log(result);
    //     html=``;
    //     html+=`<tr><th width="28.7%">Personal Holiday</th>`
    //     result.forEach((element,i) => {
    //         if(i==7 || i==12 || i==21 || i==28){
    //                 html+=`<td style="width: 2%;border: none;background: white;"></td>`  
    //                 html+=`<td><input type="checkbox" id='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`_ph' name='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`_ph' onclick="ph(\'`+element+`\')" /></td>`      
    //         }else{
    //                 html+=`<td><input type="checkbox" id='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`_ph' name='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`_ph' onclick="ph(\'`+element+`\')" /></td>`
    //         }
    //     });
    //     html+=`</tr>`
    //     html+=` <tr>
    //     <th width="28.7%">Beat</th>`
    //     result.forEach((element,j) => {
    //         if(j==7 || j==12 || j==21 || j==28){
    //             html+=`<td style="width: 2%;border: none;background: white;"></td>`
    //             html+=`<th width="2.3%" style="font-size:12px;">`+element.replace('-',' ').split(' ')[0]+`<br><span style="font-size:10px;">`+element.replace('-',' ').split(' ')[1]+`</span></th>`
    //         }else{
    //             html+=`<th width="2.3%" style="font-size:12px;">`+element.replace('-',' ').split(' ')[0]+`<br><span style="font-size:10px;">`+element.replace('-',' ').split(' ')[1]+`</span></th>`
    //         }



    //     });
    //     html+=`</tr>`
    //     html+=`<tr>`

    //     outletnames.forEach(outlet => {
    //         html+=`<td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;">`+outlet+`</b></td>`

    //         result.forEach((element,k) => {
    //             if(k==7 || k==12 || k==21 || k==28){
    //                 html+=`<td style="width: 2%;border: none;background: white;"></td>`
    //                 html+=`<td><input type="checkbox" id='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`' name='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`'/></td>`
    //             }else{
    //                 html+=`<td><input type="checkbox" id='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`' name='`+element.replace('-',' ').split(' ')[0]+`_`+element.replace('-',' ').split(' ')[1]+`'/></td>`
    //             }


    //         });
    //         html+=`</tr>`;
    //     });




    //     $('#callcycle_table').html(html);
    //     return result;

    //   }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Add Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    addcallcycle = () => {
        $('#callcycle_list').hide();
        $('#callcycle_bulk').hide();
        $('#callcycle_form').show();
        $('#showbtn').hide();

        $('#s_region').val('');
        $('#s_state').val('');
        $('#s_asm').val('');
        $('#s_city').val('');
        $('#s_so').val('');
        $('#s_sr').val('');
        $('#s_year_month').val('');

        $('#callcycle_table').html('');

        getzone();

    }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Add Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Back to List ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    back = () => {
        $('#callcycle_list').show();
        $('#callcycle_form').hide();
        $('#callcycle_bulk').hide();
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Back to List ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Getlist Data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    getlistdata = () => {
        debugger;
        var data = [{ region: 'EAST', state: 'ODISHA', city: 'BHUBANESHWAR', date: '24/7/2023' },
        { region: 'WEST', state: 'MAHARASHTRA', city: 'MUMBAI', date: '24/7/2023' },
        { region: 'NORTH', state: 'DELHI', city: 'NEW DELHI', date: '24/7/2023' },
        { region: 'SOUTH', state: 'KARNATAKA', city: 'BANGALORE', date: '24/7/2023' }]
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
                'data': data,
                'aoColumns': [
                    { 'data': 'region' },
                    { 'data': 'state' },
                    { 'data': 'city' },
                    { 'data': 'date' }
                ],
            });
        } catch (err) {
            console.log(err);
        }

    }
    getlistdata();

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Getlist Data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get Zone ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getzone = () => {
        debugger;
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
                        html += `<option value="${element.userID}">${element.firstName}</option>`;

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
            userid: uid
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
                        html += `<option value="${element.positionID}">${element.city}</option>`;

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
        let data = {
            zone: document.getElementById('s_region').value,
            state: document.getElementById('s_state').value,
            userid: document.getElementById('s_asm').value,
            // pid:pid
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
                        html += `<option value="${element.positionID}">${element.firstName}</option>`;

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
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getsr = (pid) => {
        $('#s_sr').val('');
        debugger;
        let data = {
            zone: document.getElementById('s_region').value,
            state: document.getElementById('s_state').value,
            uid: document.getElementById('s_asm').value,
            pid: pid
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
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Personal Holiday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ph = (id) => {
        var beat = localStorage.getItem('beat')
        debugger;
        beat.split(',').forEach(element => {
            var a = document.getElementsByName(id.replace('-', '_') + '_' + element.split(':')[0].replaceAll(' ', '_'));
            var b = document.getElementById(id.replace('-', '_') + '_ph');
            if (b.checked == true) {
                for (var i = 0; i < a.length; i++) {
                    a[i].disabled = true;
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


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get All beat by SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    getbeat = () => {
        debugger;
        if ($('#s_sr').val().split('_')[0] == null || $('#s_sr').val().split('_')[0] == undefined) {
            return alert('SR FIELD IS BLANK')
        }
        if ($('#s_sr').val().split('_')[1] == null || $('#s_sr').val().split('_')[1] == undefined) {
            return alert('SR FIELD IS BLANK')
        }
        let data = {
            userid: $('#s_sr').val().split('_')[0],
            client_id: $('#s_sr').val().split('_')[1],
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
                    results.data.forEach(element => {
                        outletnames.push(element.routeName);
                        localStorage.removeItem('beat');
                        lsoutlet.push(element.routeName+':'+element.routeID);
                    });
                    localStorage.setItem('beat', lsoutlet)
                    let date = new Date();
                    let month = date.getMonth() + 1;
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
                    html += `<tr><th width="28.7%">Personal Holiday</th>`
                    result.forEach((element, i) => {
                        if (i == 7 || i == 14 || i == 21 || i == 28) {
                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked /></td>`
                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                            } else {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
                            }

                        } else {
                            if (element.replace('-', ' ').split(' ')[1] == 'Sun') {
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" checked/></td>`
                                checked_box.push(element.replace('-', ' ').split(' ')[0] )
                            } else {
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_ph' name='` + element.replace('-', ' ').split(' ')[0]  + `_ph' onclick="ph(\'` + element.split('-')[0] + `\')" /></td>`
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
                        html += `<td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;"><a onclick="getclassname(\'` + outlet.replaceAll(' ','_') + `\')"><i class="fa fa-plus-circle" style="font-size:12px"></i>` + outlet + `</a></b></td>`

                        result.forEach((element, k) => {
                            if (k == 7 || k == 14 || k == 21 || k == 28) {
                                html += `<td style="width: 2%;border: none;background: white;"></td>`
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].replaceAll(' ', '_') + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].replaceAll(' ', '_') + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].replaceAll(' ', '_') + `\')"/></td>`
                            } else {
                                html += `<td><input type="checkbox" id='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].replaceAll(' ', '_') + `' name='` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].replaceAll(' ', '_') + `' onclick="checkoutletbybeat(\'` + element.replace('-', ' ').split(' ')[0]  + `_` + outletnames[y].replaceAll(' ', '_') + `\')" /></td>`
                            }


                        });
                        html += `</tr>`;
                        html += `<tr id="outletdata_` + outlet.replaceAll(' ', '_') + `"></tr>`;
                    });
                    $('#callcycle_table').html(html);
                    disable_checkbox(checked_box, outletnames, 'beat');
                    $("#loader").removeClass("is-active");
                    $('#showbtn').show();
                    checkoutletdata(results.data,'beat');
                    getoutletdata(outletnames)
                    return result;

                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Get All beat by SR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get Outlet by beat ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // var flag = true;
    getoutletdata = (route_name) => {
        route_name.forEach(route_name => {
            // if (flag) {
                // flag = false;
                let data = {
                    client_id: $('#s_sr').val().split('_')[1],
                    route_name: route_name,
                    month: new Date().getMonth()+1,
                    year: new Date().getFullYear(),
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
    
                            var outletbybeat = [];
                            results.data.forEach(element => {
                                outletbybeat.push(element.outletName)
                            });
    
                            let date = new Date();
                            let month = date.getMonth() + 1;
                            let year = date.getFullYear();
    
                            var monthIndex = month - 1; // 0..11 instead of 1..12
                            var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                            var date1 = new Date(year, monthIndex, 1);
                            var result1 = [];
                            var checked_box = [];
                            while (date1.getMonth() == monthIndex) {
                                result1.push(date1.getDate() + '-' + names[date1.getDay()] + '_' + route_name.replaceAll(' ', '_'));
                                date1.setDate(date1.getDate() + 1);
                            }
                            console.log(result1);
                            html1 = ``;
                            outletbybeat.forEach(outlet => {
                                html1 += `<tr style="background:#bd9bffb0;display:none;" class="outletdata_` + route_name.replaceAll(' ', '_') + `" ><td style="text-align:start;"><b style="font-style:italic;font-size:12px;text-transform: uppercase;">` + outlet + `</b></td>`
    
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
                                            html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`'/></td>`
                                            checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3])
                                        }else{
                                            html1 += `<td style="width: 2%;border: none;background: white;"></td>`
                                            html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`'/></td>`
                                            checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2])
                                        }
    
                                    } else {
                                        if(element.replace('-', '_').split('_')[3]!=undefined || element.replace('-', '_').split('_')[3]!=null){
                                            html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3]+`'/></td>`
                                            checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`_`+element.replace('-', '_').split('_')[3])
                                        }else{
                                            html1 += `<td><input type="checkbox" id='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`' name='` + element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2]+`'/></td>`
                                            checked_box.push(element.replace('-', '_').split('_')[0]+`_`+element.replace('-', '_').split('_')[2])
                                        }
    
                                    }
    
                                });
                                html1+=`<td><img src="../static/img/icons/arrows-repeat.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#swap_outlet" onclick="beatforswap(\'` + route_name.replaceAll(' ', '_') + `\');" /></td><td><img src="../static/img/icons/trash.png" style="width: 15px;height: 15px;" data-bs-toggle="modal" data-bs-target="#delete_outlet" onclick="beatforinactive(\'` + route_name.replaceAll(' ', '_') + `\');" /></td>`
                                html1 += `</tr>`
                            });
                            // $('#outletdata_'+route_name).html(html1);
                            $('#outletdata_' + route_name.replaceAll(' ', '_')).after(html1);
                            disable_checkbox(checked_box, [route_name], 'outlet');
                            debugger;
                            checkoutletbybeat();
                            checkoutletdata(results.data,'outlet');
                            $("#loader").removeClass("is-active");
                            hideshowoutlet(route_name);
    
                        }
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
                    var a = document.getElementsByName(element + '_' + BO.replaceAll(' ', '_'));
                    var b = document.getElementById(element + '_ph');
                    if (b.checked == true) {
                        for (var i = 0; i < a.length; i++) {
                            a[i].disabled = true;
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
                    if (b.checked == true) {
                        for (var i = 0; i < a.length; i++) {
                            a[i].disabled = true;
                        }
                    } else {
                        for (var i = 0; i < a.length; i++) {
                            a[i].disabled = false;
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
                        }
                    } else {
                        for (var i = 0; i < a.length; i++) {
                            a[i].checked = false;
                        }
                    }
                });

            } else {
                var a = document.getElementsByName(id);
                var b = document.getElementById(id);
                if (b.checked == true) {
                    for (var i = 0; i < a.length; i++) {
                        a[i].checked = true;
                    }
                } else {
                    for (var i = 0; i < a.length; i++) {
                        a[i].checked = false;
                    }
                }

            }

        }

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End Disable Checkbox ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Save Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    savecallcycle = () => {
        debugger;
        var getbeatname=[]
        $("input[type=checkbox]").each(function () {
            var self = $(this);
            if (self.is(':checked')) {
                    getbeatname.push(self.attr("id"));
            }
        });
        getbeatname
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End Save Call Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check outlet callcycle data ~~~~~~~~~~~~~~~~~~~~~~~~~~

    checkoutletdata=(results,text)=>{
debugger;
if(text == 'outlet'){
    var checked_outlet=[];
    results.forEach(element => {
        if(element[1]==1){
            checked_outlet.push('1'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[2]==1){
            checked_outlet.push('2'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[3]==1){
            checked_outlet.push('3'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[4]==1){
            checked_outlet.push('4'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[5]==1){
            checked_outlet.push('5'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[6]==1){
            checked_outlet.push('6'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[7]==1){
            checked_outlet.push('7'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[8]==1){
            checked_outlet.push('8'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[9]==1){
            checked_outlet.push('9'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[10]==1){
            checked_outlet.push('10'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[11]==1){
            checked_outlet.push('11'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[12]==1){
            checked_outlet.push('12'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[13]==1){
            checked_outlet.push('13'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[14]==1){
            checked_outlet.push('14'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[15]==1){
            checked_outlet.push('15'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[16]==1){
            checked_outlet.push('16'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[17]==1){
            checked_outlet.push('17'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[18]==1){
            checked_outlet.push('18'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[19]==1){
            checked_outlet.push('19'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[20]==1){
            checked_outlet.push('20'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[21]==1){
            checked_outlet.push('21'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[22]==1){
            checked_outlet.push('22'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[23]==1){
            checked_outlet.push('23'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[24]==1){
            checked_outlet.push('24'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[25]==1){
            checked_outlet.push('25'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[26]==1){
            checked_outlet.push('26'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[27]==1){
            checked_outlet.push('27'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[28]==1){
            checked_outlet.push('28'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[29]==1){
            checked_outlet.push('29'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[30]==1){
            checked_outlet.push('30'+'_'+element.clientRoute.replaceAll(' ','_'));
        }
        if(element[31]==1){
            checked_outlet.push('31'+'_'+element.clientRoute.replaceAll(' ','_'));
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
    results.forEach(element => {
        if(element[1]==1){
            checked_outlet.push('1'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[2]==1){
            checked_outlet.push('2'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[3]==1){
            checked_outlet.push('3'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[4]==1){
            checked_outlet.push('4'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[5]==1){
            checked_outlet.push('5'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[6]==1){
            checked_outlet.push('6'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[7]==1){
            checked_outlet.push('7'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[8]==1){
            checked_outlet.push('8'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[9]==1){
            checked_outlet.push('9'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[10]==1){
            checked_outlet.push('10'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[11]==1){
            checked_outlet.push('11'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[12]==1){
            checked_outlet.push('12'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[13]==1){
            checked_outlet.push('13'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[14]==1){
            checked_outlet.push('14'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[15]==1){
            checked_outlet.push('15'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[16]==1){
            checked_outlet.push('16'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[17]==1){
            checked_outlet.push('17'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[18]==1){
            checked_outlet.push('18'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[19]==1){
            checked_outlet.push('19'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[20]==1){
            checked_outlet.push('20'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[21]==1){
            checked_outlet.push('21'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[22]==1){
            checked_outlet.push('22'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[23]==1){
            checked_outlet.push('23'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[24]==1){
            checked_outlet.push('24'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[25]==1){
            checked_outlet.push('25'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[26]==1){
            checked_outlet.push('26'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[27]==1){
            checked_outlet.push('27'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[28]==1){
            checked_outlet.push('28'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[29]==1){
            checked_outlet.push('29'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[30]==1){
            checked_outlet.push('30'+'_'+element.routeName.replaceAll(' ','_'));
        }
        if(element[31]==1){
            checked_outlet.push('31'+'_'+element.routeName.replaceAll(' ','_'));
        } 
    });

}

checked_outlet.forEach(cid => {
    var b = document.getElementById(cid);
    b.checked = true;
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

        $('#callcycle_list').hide();
        $('#callcycle_form').hide();
        $('#callcycle_bulk').show();
        $('#excel_data').html('');
        $('#save_data').prop('disabled',true);
        $('#input').val('');

    }


    
    loadoutletdatabyasm=()=>{
        debugger;
        let date = new Date();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let data = {
            month: month,
            year: year,
            userid:localStorage.getItem('userID')
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
                    htm=``;
                    results.data.forEach((element,k) => {
                        htm+=`<tr>`   
                        htm+=`<td>`+element.routeName+`</td>`
                        if(element[1]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[2]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[3]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[4]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[5]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[6]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[7]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[8]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[9]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`                        }
                        if(element[10]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[11]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[12]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[13]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[14]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[15]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[16]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[17]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[18]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[19]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[20]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[21]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[22]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[23]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[24]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[25]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[26]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[27]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[28]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[29]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[30]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }
                        if(element[31]==1){
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`' checked/></td>`
                        }else{
                            htm+=`<td><input type="checkbox" id='` + element.ID+`_`+element.routeName+`' name='` + element.ID+`_`+element.routeName+`'/></td>`    
                        }    
                    });
                    $('#bulkdata').html(htm);


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

    cleardata=()=>{
        $('#excel_data').html('');
        $('#save_data').prop('disabled',true);
        $('#input').val('');
    }

    beatforswap=(route)=>{
        debugger;
    $('#beatname').text('');
    $('#beatname').text(route)
    var beatdata=[];
    beatdata = localStorage.getItem('beat').split(',');
    beatdata = beatdata.filter(function(item) {
        return item.split(':')[0].replaceAll(' ', '_') !== route
    })

    let html = `<option value="">Select Beat</option>`;
    beatdata.forEach(element => {
        html += `<option value="${element.split(':')[1]}">${element.split(':')[0]}</option>`;

    });
    $("#swap_beat").html(html);

    }
    beatforinactive=()=>{

    }




})();