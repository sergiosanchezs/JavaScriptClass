$(document).ready(function(){
    $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable"
      });
      $( "#draggable" ).draggable({
        connectToSortable: "#sortable1",
        helper: "clone",
        revert: "invalid"
      });
      $( "ul, li" ).disableSelection();
});