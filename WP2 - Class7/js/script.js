$(document).ready(function(){
    $("#dialog1").hide();
    $("#dialog2").hide();

    $("#myWidgetAccordion").accordion({
        heightStyle: "content"
    });

    $("#tabs").tabs({event: "mouseover"});

    

    $("#btnClickMe").click(function () {
        $("#dialog1").dialog({
            modal: true,
            buttons: {
                "OK": function() {
                    $("#dialog2").dialog({
                        modal: true,
                        buttons: {
                            Cancel: function() {
                                $( this ).dialog( "close" );
                                }
                        },
                    });
                },
                Cancel: function() {
                    $( this ).dialog( "close" );
                    }
            },
        });
    });
});