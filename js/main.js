$(document).ready(function(){
    $("#contactbtn").click(function() {
        $("#contactbtn").addClass('active')        
        $("#form_contact").addClass('active')        
        $('html, body').animate({
            scrollTop: $("#contantme").offset().top-30
        }, 0);
        $("#name_contact").val('')
        $("#email_contact").val('')
        $("#tel_contact").val('')
        $("#message_contact").val('')
    });
    $("#close_contact").click(function() {
        $("#contactbtn").removeClass('active')        
        $("#form_contact").removeClass('active')        
    });


    $("#name_contact").keyup(function(){
        let name_contact = $("#name_contact").val()
        let email_contact = $("#email_contact").val()
        let tel_contact = $("#tel_contact").val()

        if (name_contact != '' && email_contact != '' && tel_contact != '') {
            $(".btn-sendmail").addClass('active')    
            $(".icon-contactsend").addClass('active')    
            $(".btn-sendmail").prop('disabled', false);
        } else {
            $(".btn-sendmail").removeClass('active')    
            $(".icon-contactsend").removeClass('active')    
            $(".btn-sendmail").prop('disabled', true);
        }
    });
    $("#email_contact").keyup(function(){
        let name_contact = $("#name_contact").val()
        let email_contact = $("#email_contact").val()
        let tel_contact = $("#tel_contact").val()

        if (name_contact != '' && email_contact != '' && tel_contact != '') {
            $(".btn-sendmail").addClass('active')    
            $(".icon-contactsend").addClass('active')    
            $(".btn-sendmail").prop('disabled', false);
        } else {
            $(".btn-sendmail").removeClass('active')    
            $(".icon-contactsend").removeClass('active')    
            $(".btn-sendmail").prop('disabled', true);
        }
    });
    $("#tel_contact").keyup(function(){
        let name_contact = $("#name_contact").val()
        let email_contact = $("#email_contact").val()
        let tel_contact = $("#tel_contact").val()

        if (name_contact != '' && email_contact != '' && tel_contact != '') {
            $(".btn-sendmail").addClass('active')    
            $(".icon-contactsend").addClass('active')    
            $(".btn-sendmail").prop('disabled', false);
        } else {
            $(".btn-sendmail").removeClass('active')    
            $(".icon-contactsend").removeClass('active')    
            $(".btn-sendmail").prop('disabled', true);
        }
    });
});