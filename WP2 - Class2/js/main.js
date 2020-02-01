
function calculateGrade() {
	var fullName = document.getElementById("fullName").value;
	var markPercentage = document.getElementById("markPercentage").value;
	
	if (fullName == ""){
		fullName = "There"
	}
	
	var gradeLetter = '';
	if (markPercentage >= 94 && markPercentage <= 100){
		gradeLetter = 'A+';
	}else if (markPercentage >= 87 && markPercentage <= 93){
		gradeLetter = 'A';
	}else if (markPercentage >= 80 && markPercentage <= 86){
		gradeLetter = 'A-';
	}else if (markPercentage >= 77 && markPercentage <= 79){
		gradeLetter = 'B+';
	}else if (markPercentage >= 73 && markPercentage <= 76){
		gradeLetter = 'B';
	}else if (markPercentage >= 70 && markPercentage <= 72){
		gradeLetter = 'B-';
	}else if (markPercentage >= 67 && markPercentage <= 69){
		gradeLetter = 'C+';
	}else if (markPercentage >= 63 && markPercentage <= 66){
		gradeLetter = 'C';
	}else if (markPercentage >= 60 && markPercentage <= 62){
		gradeLetter = 'C-';
	}else if (markPercentage >= 50 && markPercentage <= 59){
		gradeLetter = 'D';
	}else if (markPercentage <= 49){
		gradeLetter = 'F';
	}
	
	document.getElementById("gradeLetter").innerHTML = "Hi " + fullName + ", your grade is: " + gradeLetter;
}


function doSomething(){
	var a = 4;
	var b = 12;
	var adding = a + b;
	var substraction = a - b;
	var multiplication = a * b;
	var division = b != 0 ? a / b : 0;
	var exponent = a ** b;
	
	console.log("Adding: " + adding);
	console.log("Substraction: " + substraction);
	console.log("Multiplication: " + multiplication);
	console.log("Division: " + division);
	console.log("Exponent: " + exponent);
	
	
	//	return false;
}
function doSomethingElse(){
	alert("I clicked on Do Something Else");
	return false;
}