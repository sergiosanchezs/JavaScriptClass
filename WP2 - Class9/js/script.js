$(document).ready(function(){
    // alert("confirm jQuery is working");
    // $("#faqs h1").fadeOut(1000).fadeIn(10000);
    // $("#faqs h2").fadeOut(5000).fadeIn(5000).fadeOut(5000).fadeIn(5000);
    $("#faqs h2 a").animate({
        fontSize:"400%", 
        color:"blue", 
        opacity:.8}, 
        2000,
        "easeOutBounce",
        function(){
            $("#faqs div").animate({
                fontSize:"300%", 
                color:"red", 
                opacity:.6}, 
                5000,
                "easeInBounce");
        });
    
    // $("#faqs h1").animate(
    //     { 
    //         fontSize:"800%",
    //         opacity:.8 
    //     },
    //     10000, 
    //     "easeOutBounce",
    //     function()
    //     {
    //         $("h2 a").animate({fontSize:"200%",opacity:.5, color:"red" },5000, "easeOutBounce",function(){});
            
    //     });
});