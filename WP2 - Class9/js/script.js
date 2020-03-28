$(document).ready(function(){
    $("#drag1").draggable({ axis: "y" });
    $("#drag2").draggable({ axis: "x" });
    $("#drag3").draggable();
    $( "#drop" ).droppable({
        accept: "#drag3",
        drop: function( event, ui ) {
          $( this )
            .addClass( "drop-successfully" )
            .find( "span" )
            .html( "Successfully Dropped!" );
        }
    });

    $("#drag4").draggable({ containment: "#containment-wrapper", scroll: false });
    $("#drag5").draggable({ containment: "parent" });

    $( "#sortable" ).sortable({
        revert: true
    });
    $( "#draggable" ).draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
});