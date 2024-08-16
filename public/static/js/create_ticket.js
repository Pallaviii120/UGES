


getuserlist = () => {
    debugger;
    try {
        $.ajax({
            type: "POST",
            url: "Qr/getuserlist",
            // data:data,
            beforeSend: function () {
            },
            success: function (results) {
                var data = results.data;
                var ehtml = `<option value="">Select CC</option>`;
                var assignto = `<option value="">Select User</option>`;

                data.forEach(item => {
                    ehtml += `<option value="${item.name}">${item.name}</option>`;
                });
                $("#cc_dd").html(ehtml);

                data.forEach(item => {
                    assignto += `<option value="${item.name}">${item.name}</option>`;
                });
                $("#assignto").html(assignto);
                
                // $("#s_sample_point").trigger("change");
            }
        })
    } catch (err) {
        $("#loader").removeClass("is-active");
        console.log(err)
    }

}   

let uploadfilepath=null

handleFileUpload = async (event) =>{
    debugger;
    const fileInput = event.target;
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    try {
        const response = await fetch('/uploadfileforticket', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        const filePath = result.file;

        if (filePath) {
            uploadfilepath = filePath; // Store the file path
            console.log('File uploaded successfully:', filePath);
            document.getElementById('file_submit_result').innerText = result.message;
        } else {
            console.log('File upload failed.');
            document.getElementById('file_submit_result').innerText = 'File upload failed.';
        }
    } catch (err) {
        document.getElementById('file_submit_result').innerText = 'File upload failed.';
        console.log('Error uploading file:', err);
    }
};


saveticketdetails = async () => {
    debugger

    if (!uploadfilepath) {
        console.log('No file uploaded.');
        return;
    }
    
            var data={
        ticketno:Math.floor(100000 + Math.random() * 900000),
        owner:localStorage.getItem("email"),
        purpose:$('#purpose').val(),
        sub:$('#subject').val(),
        message:$('#message').val(),
        assignto:$('#assignto').val(),
        assigndate:$('#date').val(),
        progress:'0',
        createddate:new Date(),
        severity:$('#severity_dd').val(),
        cc:$('#cc_dd').val(),
        file: uploadfilepath,
        category: $('#category_dd').val()
       
    }
    debugger;
    try {
        $.ajax({
            type: "POST",
            url: "Qr/saveticketdetails",
            data:data,
            beforeSend: function () {
            },
            success: function (results) {
                window.location.href = "/main#/view_tickets";
                window.location.reload();
            }
        })
    } catch (err) {
        $("#loader").removeClass("is-active");
        console.log(err)
    }
   
    
}



getuserlist()