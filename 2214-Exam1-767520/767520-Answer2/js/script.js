
function validateMe(){
    var fullname = document.getElementById("767520_FullName").value;
    var email = document.getElementById("767520_Email").value;

    var fullnameSpan = document.getElementById("767520_FullName").nextElementSibling.firstChild;
    var emailSpan = document.getElementById("767520_Email").nextElementSibling.firstChild;

    var outputSpan = document.getElementById("767520_output");

    var isData = false;

    if (fullname == ""){
        fullnameSpan.nodeValue = "Please enter Full Name";
        isData = true;
    } else {
        fullnameSpan.nodeValue = "";
    }
    if (email == ""){
        emailSpan.nodeValue = "Please enter Email Address";
        isData = true;
    }else{
        emailSpan.nodeValue = "";
    }

    if (isData == false){
        outputSpan.innerHTML = "767520_" + fullname + " -  " + email  ;
    }

}

function resetForm(){
    var fullname = document.getElementById("767520_FullName");
    var email = document.getElementById("767520_Email");

    var fullnameSpan = document.getElementById("767520_FullName").nextElementSibling.firstChild;
    var emailSpan = document.getElementById("767520_Email").nextElementSibling.firstChild;

    fullname.value = "";
    email.value = "";
    fullnameSpan.nodeValue = "* Mandatory Field";
    emailSpan.nodeValue = "* Mandatory Field";


}