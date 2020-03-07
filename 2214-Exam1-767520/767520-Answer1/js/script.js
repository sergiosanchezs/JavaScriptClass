$(document).ready(function(){

    $("#767520-dialog").hide();
    
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };

    $("#767520-accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        icons: icons
    });

    $( "#767520-DOB" ).datepicker();

    $("#767520-OkBtn").click(function(){
        $("#767520-dialog").dialog({
            modal: true,
            buttons: {
                OK: function() {
                    $( this ).dialog( "close" );
                }
            },
        });
    });

});