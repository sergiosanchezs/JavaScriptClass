$(document).ready(function(){

    $("#calculateBtn").click(function(){
        var exam1 = $("#exam1").val();
        var exam2 = $("#exam2").val();
        var exam3 = $("#exam3").val();
        
        var spanExam1 = $("#exam1").next();
        var spanExam2 = $("#exam2").next();
        var spanExam3 = $("#exam3").next();

        var exam1InRange = false;
        var exam2InRange = false;
        var exam3InRange = false;
        
        var sum = 0;
        var letter = "F";

        if (exam1 === ""){
            spanExam1.text("Please enter the grade of exam 1")
            spanExam1.removeClass("green").addClass("red");
        } else if ( exam1 >= 1 && exam1 <= 25 ) {
            sum += parseFloat(exam1);
            exam1InRange = true;
            spanExam1.text("Ok");
            spanExam1.addClass("green").removeClass("red");
        } else {
            spanExam1.text("Please enter a number from 1 to 25")
            spanExam1.removeClass("green").addClass("red");
        }

        if (exam2 === ""){
            spanExam2.text("Please enter the grade of exam 2")
            spanExam2.removeClass("green").addClass("red");
        } else if ( exam2 >= 1 && exam2 <= 25 ) {
            sum += parseFloat(exam2);
            exam2InRange = true;
            spanExam2.text("Ok");
            spanExam2.addClass("green").removeClass("red");
        } else {
            spanExam2.text("Please enter a number from 1 to 25")
            spanExam2.removeClass("green").addClass("red");
        }

        if (exam3 === ""){
            spanExam3.text("Please enter the grade of exam 3")
            spanExam3.removeClass("green").addClass("red");
        } else if ( exam3 >= 1 && exam3 <= 100 ) {
            sum += parseFloat(exam3/2);
            exam3InRange = true;
            spanExam3.text("Ok");
            spanExam3.addClass("green").removeClass("red");
        } else {
            spanExam3.text("Please enter a number from 1 to 100")
            spanExam3.removeClass("green").addClass("red");
        }

        if (sum > 80)
            letter = "A";
        else if (sum >= 60 && sum <= 80)
            letter = "B";
            
        message = "Your percentage is " + sum + " and your grade is " + letter;
        // debugger
        if (exam1InRange === true && exam2InRange === true  && exam3InRange === true)
            $("#result").text(message);
    });

});