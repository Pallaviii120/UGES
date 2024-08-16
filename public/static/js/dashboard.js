(function(){
    debugger;
    getdashdata=()=>{
        debugger;
        let data = {
            userid:localStorage.getItem('userID'),
            zone:localStorage.getItem('region'),
            position:localStorage.getItem('pos')
        }
        try {
            $.ajax({
                type:'POST',
                url:"Qr/getdashdata",
                data:data,
                success:function(result){
                var data = result.data[0];
                $('#pending').text(data.pending);
                $('#approved').text(data.approved);
                $('#rejected').text(data.rejected);
                $('#total').text(data.total);
                }
    
    
    
            })
            
        } catch (error) {
            
        }
    
    }
    getdashdata();
    })()