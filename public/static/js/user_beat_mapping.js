(function(){

    // $("#mapping_form").hide()
    $("#beats_list").show()
    $("#mapping_form").hide()
   
    back=()=>{
        $("#beats_list").show()
        $("#mapping_form").hide();
        $("#sel_routes_div").hide();
    }

    addmapping=()=>{
        debugger;
        $("#beats_list").hide()
        $("#mapping_form").show();
        $("#sel_routes_div").show();
        
    }
    var beats=[];
    var ctrd_html=[]
    var updt_html=[]
    var sel_beats;
    $("#update").hide();
    $("#ttl_info").hide();
    $("#sele_beats").hide();
    $("#add").hide();


    var selectedValuesArray = [];
    var toupdatearray=[];
    var selectedValuesHtml = '';
    $("#multiSelect").on("change", function () {
        $("#sele_beats").show();
        $("#selectedValues").show();
        debugger;
        const selectedtxt= $("#multiSelect option:selected").text()
        const selectedValues = $("#multiSelect option:selected").val()
        var selected={ value:selectedValues, text:selectedtxt}
        var opt=``
        selectedValuesArray.push(selected)
        selectedValuesHtml = selectedValuesArray.map(value =>    
          `<div class="selected-value" id="${value.value}">
                <div class="row" style="margin-top:5px">
                     <div class="col value-column" hidden>${value.value}</div>
                     <div class="col text-column">${value.text}</div>
                     <div class="col remove-column">
                            <button class="btn btn-danger" data-value="${value.value}" id="remove_btn">
                             <i class="fa fa-remove" style="color:white"></i>
                            </button>
                    </div>
                </div>
        </div>`).join("");

        opt+=selectedValuesHtml
       

        add_=()=>{
            debugger
            // $("#selectedValues").remove();
            $("#selectedValues").html(opt);
            opt=''
            $("#multiSelect").prop('disabled', false);
            var cnt=`<i style="background-color: #a07c83;;color: white;">You Have Selected" ${selectedValuesArray.length} " Beats</i>`
                $("#count").html(cnt);
        }
            // ctrd_html.push(selectedValuesHtml)
            $("#s_user").prop('disabled', true);
            $("#multiSelect").prop('disabled', true);
            $("#add").show();      
    }); 

    $(document).on("click", "#remove_btn", function () {
        debugger
        const valueToRemove = $(this).data("value");
        $(this).parent().parent().remove();
        // selectedValuesArray = selectedValuesArray.filter(item => item.value !== valueToRemove);
        for (let i = 0; i < selectedValuesArray.length; i++) {
            if (valueToRemove == selectedValuesArray[i].value) {
                selectedValuesArray.splice(i,1)
                break;
            }
        }    
        $("#multiSelect option[value='" + valueToRemove + "']").prop("selected", false);
        $("#s_user").prop('disabled', false);
        $("#multiSelect").prop('disabled', false);
        // Update count
        var cnt = `<i style="background-color: #a07c83;;color: white;">You Have Selected" ${selectedValuesArray.length} " Beats</i>`;
        $("#count").html(cnt);
    });


    get_all_user_id = function () {
debugger;
        $.ajax({
            url: '/Qr/get_all_user_id',
            type: 'POST',
            crossDomain: true,


            beforeSend() {
            },
            success: function (result) {
                debugger;
                var data = result.data;
                var option1=``;
                var option2=``;
                var option3=``;
debugger;
                data.forEach((element) => {
                  option1+=  `<option value="${element.userID+":"+element.clientID}">${element.emp_code}-${element.firstName}</option>`
                  option2+=  `<option value="${element.userID+":"+element.clientID}">${element.emp_code}-${element.firstName}</option>`
                   option3+= `<option value="${element.userID+":"+element.clientID}">${element.emp_code}-${element.firstName}</option>`
                });
                $("#s_user").html(option1)
                $("#tra_beat_fr").html(option2)
                $("#tra_beat_too").html(option3)


                // $("#s_user").select2({
                //     placeholder: 'Search Employee'
                   
                // });
                $("#tra_beat_fr").select2({
                    placeholder: 'Search Employee'
                   
                });
                $("#tra_beat_too").select2({
                    placeholder: 'Search Employee'
                   
                });
               
            },
            complete() {
                
            }

        })
    }
     get_all_user_id()



    get_all_beats = function () {
        debugger;
        try {

            var data={
                ID:$("#s_user").val()
            }
            $.ajax({
                url: '/Qr/getallbeats',
                type: 'POST',
                crossDomain: true,
                data:data,
                beforeSend() {
                },
                success(result) {
                    debugger;
                    var data=result.data;
                    var option=``
                                data.forEach((element) => {
                                option += `<option value="${element.routeID}">${element.routeName}</option>`;                      
                                  }); 

                                  $("#multiSelect").html(option)
                                  
                                  $("#multiSelect").select2({
                                    placeholder: 'Search Beat'
                                });
                },
                complete() {
                    
                }
            })

        } catch (err) {
            console.log(err)
        }
    }
   


    save_user_beat_mapping=function(){
     debugger;
    const values = selectedValuesArray.map(item => `${item.value}:${item.text}`)
    // values.forEach(element=>{
        var data={
            user:$("#s_user").val(),
            val:values,
            createdby:localStorage.getItem('userID')

        }
        $.ajax({
            url:'/Qr/save_user_beat_mapping',
            type:'POST',
            crossDomain:true,
            contentType: "application/json",
            data:JSON.stringify(data),
            dataType: 'json',

            beforeSend(){
            },
            success(result){
                $('#beats_list').show();
                $('#mapping_form').hide();

                reset();
                get_all_beat_mappings();
                
                
            },
            complete(){   
            }
        })
    // })
                
     }
        
  
    get_all_beat_mappings =function (){

        var dt=new Date()
        var cur_yr=dt.getFullYear();
        var cur_mnth=dt.getMonth()+1;

        var data={
            year:cur_yr,
            month:cur_mnth,
            clientID:localStorage.getItem('clientID')
        }

        $.ajax({
            url:'/Qr/get_all_beat_mappings',
            type:'POST',
            crossDomain:true,
            data:data,
          
            beforeSend(){
                
            }, 
            success: function(result) {
                var html = '';

                debugger;                 
               
                var data = result.data;
                console.log(data);
                if ($.fn.dataTable.isDataTable('#user_beat_mapping')) {
                    $('#user_beat_mapping').DataTable().destroy();
                }
                table = $('#user_beat_mapping').DataTable({
                    'data': data,   
                    "scrollX": true,
                    'aoColumns': [
                        {'data':'firstName'},
                        {'data':'emp_code'},
                        {'data':'routeName'},
                        {
                            'render': function(data, type, row, meta) {
                                var a = `<a><i class="fa fa-edit" onclick="get_beat_mappings_by_id(${row.ID},${row.userID},${row.clientID});" style="font-size:12px"></i></a>`
                                return a;
                            },
                        },
                        
                       
                    ],
                });

            },
            complete(){
                
            }

        })


    }
    get_all_beat_mappings()
    
    
    /*===========================Update mappings ====================== */


    $("#multi_transfr").on("change", function () {
        $("#sel_beat_trnsf").show();
        $("#sele_beats").show();
        $("#selectedValues1").show();
       
        debugger;  
        const selectedtxt= $("#multi_transfr option:selected").text()
        const selectedValues = $("#multi_transfr option:selected").val()
        var selected={ value:selectedValues, text:selectedtxt}
        toupdatearray.push(selected)
       

        selectedValuesHtml = toupdatearray.map(value => `
          <div class="selected-value">
              <div class="value-column" hidden>${value.value}</div>
              <div class="text-column">${value.text}</div>
              <div class="remove-column">
                  <button class="btn btn-danger" data-value="${value.value}">
                      <i class="fa fa-times"></i>
                  </button>
              </div>
          </div>`).join(""); 
          $("#selectedValues1").html(selectedValuesHtml)
    });
    updt_html.push(selectedValuesHtml)


    $(document).on("click", ".btn btn-danger", function () {
        debugger;
        const valueToRemove = $(this).data("value");
        $(this).parent().parent().remove();
        toupdatearray.pop(valueToRemove);
     
        $("#multiSelect option[value='" + valueToRemove + "']").prop("selected", false);
        toupdatearray = toupdatearray.filter(value => value !== (valueToRemove));  
    });


    get_beat_mappings_by_id = (id,userid,clientid) => {
        $('#sel_routes_div').hide();
        get_all_user_id();
        debugger;
        $("#beats_list").hide()
        $("#mapping_form").show()
        $("#sel_beat_trnsf").hide();
        $("#new_mapp").hide();
        $("#update").show();
        $("#save").hide();
        $("#add").hide();
        $("#ttl_info").show();
        $("#sele_beats").hide();
        $("#selectedValues").hide();
        $("#irritating").hide();
        $("#s_user").prop('disabled', true);

        var dt=new Date()
        var cur_yr=dt.getFullYear();
        var cur_mnth=dt.getMonth()+1;

        $.ajax({
            type: 'POST',
            url: '/Qr/get_beat_mappings_by_id',
            crossDomain: true,
            data: { ID: id,userID: userid,clientID: clientid, year:cur_yr,month:cur_mnth },

            beforeSend: function () {
              
            },
            success: function (result) {

                console.log(result);
                data = result.data[0];
                $("#s_user").val(data.userID);
                $("#tra_beat_fr_").text(data.userName); 
                $("#selected_beat").text(data.routeName);
                $("#n_route_id").val(data.routeID); 
                $("#n_id").val(id); 
                $("#n_clientID").val(data.clientID); 

                    // $("#multiSelect").val(data.n_route_id);
                    // $("#mapping_id").val(data.n_bt_map_id);
                    // get_mapped_beats();
                    

            },
            error: function (err) {
              
            },
            complete: function () {
                
               
            }
        });
    }

    update_user_beat_mapping = function () {
        debugger;
            var dataCopy={
                userid:$('#tra_beat_too').val().split(':')[0],
                clientID:$('#tra_beat_too').val().split(':')[1],
                obj_data:{...data }
            }

            $.ajax({

                type: 'POST',
                url: '/Qr/update_user_beat_mapping',
                crossDomain:true,
                data:dataCopy,
                // async: false,
                beforeSend: function () {
                },
                success: function (result) {
                    //
                },
                error: function (err) {
                  
                },
                complete: function () {
                 
                }
            });


        // $("#update").hide();
        // $("#save").show();
        // $("#add").hide();
        // $("#ttl_info").hide();
        // $("#sele_beats").show();
        // $("#selectedValues").show();
        // $("#irritating").show();

    /**============================ */
        // get_all_beat_mappings()
        $("#tra_beat_fr").val("");
        $("#tra_beat_too").val("");
        $("#frm_date").val("");
        $("#to_date").val("");
        // reset()

       
    }

    delete_beat_mappings_by_id = (id) => {
            $.ajax({
                type: 'POST',
                url: '/nextg/delete_beat_mappings_by_id',
                crossDomain: true,
                data: { mapping_id: id },
    
                beforeSend: function () {
                   
                },
                success: function (result) {
                   
                    get_all_beat_mappings()
                },
                error: function (err) {
                  
                },
                complete: function () {
                  
                }
            });
    }

    get_mapped_beats = function () {
        debugger;

            id=$("#tra_beat_fr").val();
        
        $.ajax({
            url: '/nextg/get_mapped_beats',
            type: 'POST',
            crossDomain: true,
            data:{mapped_id:id},

            beforeSend() {
                $("#multi_transfr").html(`<option value="">Select Beat</option>`)
            },
            success: function (result) {
                debugger;
                var data = result.data;
                data.forEach((element) => {
                    $("#multi_transfr").append(`<option value="${element.n_route_id}">${element.beat}</option>`);
                    // $("#s_level_per").append(`<option value="${element.n_emp_id}">${element.s_employee_name}</option>`);
                });
               
            },
            complete() {
               

            }

        })

       
    }
   
    reset=()=>{
        debugger;
        $("#tra_beat_too").val('');
        $("#tra_beat_fr").val('');
        $("#multi_transfr").val('');
        $("#multiSelect").val('');
        $("#s_user").val('');
        $("#sele_beats").hide();
        $("#add").hide()
        //  
        // $("#selectedValues").remove()
        $("#s_user").prop('disabled', false)
        $("#multiSelect").prop('disabled', false)

        ctrd_html.forEach((element)=>{
        const valueToRemove = $(".btn btn-danger").data("value");
        $(".btn btn-danger").parent().parent().remove();
        selectedValuesArray.pop(valueToRemove);
     
        $("#multiSelect option[value='" + valueToRemove + "']").prop("selected", false);
        selectedValuesArray = selectedValuesArray.filter(value => value !== (valueToRemove)); 
         })


         updt_html.forEach((element)=>{
            const valueToRemove = $(".btn btn-danger").data("value");
            $(".btn btn-danger").parent().parent().remove();
            toupdatearray.pop(valueToRemove);
            $("#multiSelect option[value='" + valueToRemove + "']").prop("selected", false);
            toupdatearray = toupdatearray.filter(value => value !== (valueToRemove)); 
         })

       
    }




})()