(function () {
    $('#uploaddirectionphoto').hide();
    $('#uploadactualphoto').hide();

    $('#nextbtn').click(function (){
        $('#uploaddirectionphoto').show();
        $('#mainpage').hide();
        $('#side-panel').hide();
    })
    $('#backbtn').click(function (){
        $('#uploaddirectionphoto').hide();
        $('#mainpage').show();
        $('#side-panel').show();
    })
getstatelist = () => {
    debugger;
    try {
        $.ajax({
            type: "POST",
            url: "Qr/getstatelist",
            // data:data,
            beforeSend: function () {
            },
            success: function (results) {
                var data = results.data;
                var ehtml = `<option value="">Select State</option>`;
              
                data.forEach(item => {
                    ehtml += `<option value="${item.state_id}" id="${item.s_state_code}">${item.s_state_name}</option>`;
                });
                $("#state_name").html(ehtml);
                
            }
        })
    } catch (err) {
        $("#loader").removeClass("is-active");
        console.log(err)
    }

} 

getstatelist()

getobstacle = () => {
    debugger;
    try {
        $.ajax({
            type: "POST",
            url: "Qr/getobstacle",
            // data:data,
            beforeSend: function () {
            },
            success: function (results) {
                var data = results.data;
                var ehtml = `<option value="">Select Obstacle</option>`;
              
                data.forEach(item => {
                    ehtml += `<option value="${item.obstacle_id}">${item.s_obstacle_name} (${item.s_distance} ${item.s_meters} - ${item.s_direction})</option>`;
                });
                $("#major_category").html(ehtml);
                $("#major_falling").html(ehtml);
                $("#major_noise").html(ehtml);
                $("#major_category").html(ehtml);
                $('#overall_risk_major').html(ehtml)
                // var $majorNoise = $("#major_noise");
                //     $majorNoise.html(ehtml);
                //     $majorNoise.multiselect('destroy'); // Destroy any previous instance
                //     $majorNoise.multiselect({
                //         includeSelectAllOption: true,
                //         nonSelectedText: 'None selected',
                //         buttonWidth: '100%'
                //     });
                
            }
        })
    } catch (err) {
        $("#loader").removeClass("is-active");
        console.log(err)
    }

} 

getobstacle()

getlocationno = (stateElement) => {
    debugger;
    var state_code = stateElement.options[stateElement.selectedIndex].id;
    var state_id = stateElement.options[stateElement.selectedIndex].value;
    var loc_name = state_code + '_' + state_id;
    var ehtml = `<option value="">Select Location</option>`;
    ehtml += `<option value="${loc_name}" id="${loc_name}">${loc_name}</option>`;
    $("#location").html(ehtml);
};

getdistrictlist = (selectedstate) =>{
var state = selectedstate.options[selectedstate.selectedIndex].value;
var data={
    state:state
}
try {
    $.ajax({
        type: "POST",
        url: "Qr/getdistrictlist",
        data:data,
        beforeSend: function () {
        },
        success: function (results) {
            var data = results.data;
            var ehtml = `<option value="">Select District</option>`;
          
            data.forEach(item => {
                ehtml += `<option value="${item.district_id}">${item.district_name}</option>`;
            });
            $("#district_name").html(ehtml);
        }
    })
} catch (err) {
    $("#loader").removeClass("is-active");
    console.log(err)
}


}

gettalukalist = (selecteddistrict) =>{
    var district = selecteddistrict.options[selecteddistrict.selectedIndex].value;
    var data={
        district:district
    }
    try {
        $.ajax({
            type: "POST",
            url: "Qr/gettalukalist",
            data:data,
            beforeSend: function () {
            },
            success: function (results) {
                var data = results.data;
                var ehtml = `<option value="">Select Taluka</option>`;
              
                data.forEach(item => {
                    ehtml += `<option value="${item.taluka_id}">${item.taluka_name}</option>`;
                });
                $("#taluka_name").html(ehtml);
            }
        })
    } catch (err) {
        $("#loader").removeClass("is-active");
        console.log(err)
    }
    
    
    }

    getvillagelist = (selectedtaluka) =>{
        var taluka = selectedtaluka.options[selectedtaluka.selectedIndex].value;
        var data={
            taluka:taluka
        }
        try {
            $.ajax({
                type: "POST",
                url: "Qr/getvillagelist",
                data:data,
                beforeSend: function () {
                },
                success: function (results) {
                    var data = results.data;
                    var ehtml = `<option value="">Select Taluka</option>`;
                  
                    data.forEach(item => {
                        ehtml += `<option value="${item.village_id}">${item.village_name}</option>`;
                    });
                    $("#village_name").html(ehtml);
                }
            })
        } catch (err) {
            $("#loader").removeClass("is-active");
            console.log(err)
        }
        
        
        }

        userid= localStorage.getItem('id')

        handleFileUpload = async (event) => {
            debugger
            // const fileInput = event.target;
            // const inputName = fileInput.name;
            // const formData = new FormData();
            
            const inputName=event.target.name
            const fileInput = event.target;
            const formData = new FormData();
            formData.append('field',inputName)
            formData.append('userid',userid)
            formData.append('file', fileInput.files[0]);
            

            // formData.append(inputName, fileInput.files[0]);
        
            try {
                const response = await fetch('/uploadfileforticket', {
                    method: 'POST',
                    body: formData
                });
        
                const result = await response.json();
                const messageElementId = `${inputName}_message`;
                
                
        
                if (result.file) {
                    document.getElementById(messageElementId).innerText = 'File uploaded successfully!';
                    console.log('File uploaded successfully:', result.file);
                    const hiddenInputId = `${inputName}_path`;
                    document.getElementById(hiddenInputId).value = '(' + inputName + ')' + '_' + '(' + userid +')' + '_' + result.file

                } else {
                    document.getElementById(messageElementId).innerText = 'File upload failed.';
                    console.log('File upload failed.');
                }
            } catch (err) {
                document.getElementById(`${inputName}_message`).innerText = 'Error uploading file.';
                console.log('Error uploading file:', err);
            }
        };

        submitdetails = () => {
            debugger
                    var data={
                state:$('#state_name').val(),
                district:$('#district_name').val(),
                taluka:$('#taluka_name').val(),
                village:$('#village_name').val(),
                loc_number:$('#location').val(),
                survey_no:$('#survey_no').val(),
                survey_completed:$('#survey_completed').val(),
                terrain:$('#terrain_no').val(),
                land_path:$('#fileland_path').val(),
                meter_path:$('#filemeter_path').val(),
                major_footprint:$('#major_category').val(),
                risk_footprint: $('#risk_category').val(),

                major_falling:$('#major_falling').val(),
                risk_falling:$('#risk_falling').val(),
                major_noise:$('#major_noise').val(),
                risk_noise:$('#risk_noise').val(),
                overall_risk:$('#overall_risk').val(),
                major_risk:$('#overall_risk_major').val(),
                shifting_req:$('#shifting_req').val(),
                land_type:$('#land_type').val(),
                soil_type:$('#soil_type').val(),
                soil_path:$('#soilfile_path').val(),
                access_road:$('#access_road').val(),
                key_challenges: $('#key_challenge').val(),

                east:$('#east_path').val(),
                west:$('#west_path').val(),
                north:$('#north_path').val(),
                south:$('#south_path').val(),
                north_east:$('#north_east_path').val(),
                south_east:$('#south_east_path').val(),
                south_west:$('#south_west_path').val(),
                north_west:$('#north_west_path').val(),
                house:$('#residential_path').val(),
                dwelling_1:$('#dwelling_1_path').val(),
                dwelling_2:$('#dwelling_2_path').val(),
                dwelling_3: $('#dwelling_3_path').val(),

                culvert:$('#culvert_path').val(),
                LT_line:$('#LT_line_path').val(),
                water_body1:$('#water_body_1_path').val(),
                water_body2:$('#water_body_2_path').val(),
                canal:$('#canal_path').val(),
                username:localStorage.getItem('email'),
                userid:localStorage.getItem('id')
               
            }
            debugger;
            try {
                $.ajax({
                    type: "POST",
                    url: "Qr/savewinddetails",
                    data:data,
                    beforeSend: function () {
                    },
                    success: function (results) {
                      if(results){
                        alert('Data Successfully')
                        window.location.reload();
                      }
                    }
                })
            } catch (err) {
                $("#loader").removeClass("is-active");
                console.log(err)
                alert('Data not Saved!! something is wrong')
            }
           
            
        }
        
})()