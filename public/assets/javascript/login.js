(function () {
    $("#login_btn").click(function (e) {
        debugger
        e.preventDefault();
        localStorage.setItem("email", '');
        localStorage.setItem("name", '');
        //localStorage.setItem("role", '');                     

        localStorage.setItem("id", '');
        localStorage.setItem("role", '');
        localStorage.setItem("profile", '');
        
        $("#form-login").submit();


    })
    $("#form-login").on("submit", function (e) {
        try {
            var data = {
                username: $("#email").val(),
                password: $("#pass").val(),
            };
            // return;
            $.ajax({
                url: '/login',
                type: 'POST',
                crossDomain: true,
                data: data,
                // beforeSend: function () {
                //     $("#loader").addClass("is-active");
                //     document.getElementById("loader").setAttribute("data-text", "Loading...");
                // },
                success: function (result) {
                    var data = result.data
                    alertify.success(result.mess +'\n' +result.mess_body);
                    localStorage.setItem("role",data.role)
                    localStorage.setItem("email",data.username)
                    localStorage.setItem("name",data.name)
                    localStorage.setItem("id",data.id)
                    window.location = "/main.html";
                },
                error: function (err) {
                    // alert(err.responseJSON.mess +'\n'+err.responseJSON.mess_body)
                    alertify.error(err.responseJSON.mess +'\n'+err.responseJSON.mess_body);
                    $("#email").val('');
                    $("#pass").val('');
                    // getnotify('danger', undefined, 1, 'stack_top_right', err.responseJSON.mess, err.responseJSON.mess_body);
                },
                complete: function (response) {
                    $("#loader").removeClass("is-active");
                }
            });
        } catch (error) {
            alert(error);
        }
    });
    chk_cps = function (event) {
        try {
            $("#inputUid_error").text("");
            var x = event.getModifierState("CapsLock");
            if (x == false) {
                $("#inputUid_error").text("");
                return true;
            }
            $("#inputUid_error").text("Caps Lock activated: ");
        } catch (error) {
            console.log(error);
        }
    }
})();