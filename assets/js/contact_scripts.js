$(document).ready(function(){

    "use strict";

  
    /*
     ----------------------------------------------------------------------
     Forms
     ----------------------------------------------------------------------
     */

    /* Email validation */
    function valid_email_address(email) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(email);
    }

    /*
     ----------------------------------------------------------------------
     Contact form validation
     ----------------------------------------------------------------------
     */

    $("#contact-form").submit( function() {


        if ( !valid_email_address( $("#user-email").val() ) || $("#user-name").val().length <= 2  )  {

            if ( !valid_email_address( $("#user-email").val() ) ) {
                $("#user-email").addClass("error");
            }
            if ( $("#user-name").val().length <= 2 ){
                $("#user-name").addClass("error");
            }

        } else {

            var data_of_form = $(this).serialize();

            $.ajax({
                url: 'php/freecontactformprocess.php',
                data: data_of_form,
                type: 'POST',
                success: function(data) {
                    if ( data == "success" )
                    {
                        $("#user-name").val("");
                        $("#user-email").val("");
                        $("#user-message").val("");

                        $(".info-message-form p").text("Message sent!");
                        $(".info-message-form").addClass('success');
                        setTimeout(
                            function(){
                                $(".info-message-form").removeClass('success');
                                $(".info-message-form p").text("");
                            }, 5000
                        );
                    } else {
                        $(".info-message-form p").text("Error");
                        $(".info-message-form").addClass('error');
                        setTimeout(
                            function(){
                                $(".info-message-form").removeClass('error').fadeOut(500);
                                $(".info-message-form p").text("");
                            }, 5000
                        );
                    }
                },
                error: function(){
                    $(".info-message-form p").text("Error");
                    $(".info-message-form").addClass('error');
                    setTimeout(
                        function(){
                            $(".info-message-form").removeClass('error');
                            $(".info-message-form p").text("");
                        }, 5000
                    );
                }
            });

        }

        return false;
    });

    $(".close-msg").on("click", function() {
        $(this).parent().removeClass("error");
    });

    $("#user-name, #user-email").on("click", function() {

        $(this).removeClass("error");

    });


}); // End $(document).ready(function(){