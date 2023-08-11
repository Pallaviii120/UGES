(function () { 

    refresh=()=>{
        debugger;
        alertify.success('Data Refreshed Successfully');
        var date = new Date();
        $('#synctime').text(date.toDateString()+','+date.toLocaleTimeString());
    }

})()