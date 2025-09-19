const { user } = required("react");

var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var signUpConfirmPassword = document.getElementById("signUpConfirmPassword");
var signUpButton = document.getElementById("signUpButton");

function add() {
    if (signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === "" || signUpConfirmPassword.value === "") {
        document.getElementById("message").innerHTML = "<p class='text-center'>All fields are required</p>";
    } else if (signUpPassword.value !== signUpConfirmPassword.value) {
        document.getElementById("message").innerHTML = "<p class='text-center'>Password and Confirm Password should be the same</p>";
    
    }
    
    else{ var obj = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value,
        confirmPassword: signUpConfirmPassword.value 

    }
    user.push(obj);
    location.href = "../Login/index.html";
    localStorage.setItem("user", JSON.stringify(user));
    }

    }
