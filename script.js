const Validate=()=>{
    // picking the values
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    // picking the errors
    const firstNameError = document.getElementById('firstNameError')
    const lastNameError = document.getElementById('lastNameError')
    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')


if(firstName.value == ''){
    firstName.style.border = "1px solid red";
    firstNameError.innerHTML = "First Name cant be empty";
    firstNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
}
else{
    firstName.style.border = "1px solid black";
    firstNameError.innerHTML = "";
   
}
if (lastName.value == ''){
    lastName.style.border = "1px solid red";
    lastNameError.innerHTML = "Last Name cant be empty";
    lastNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
}
else{
    lastName.style.border = "1px solid black";
    lastNameError.innerHTML = "";

}
if (email.value == ''){
    email.style.border = "1px solid red";
    emailError.innerHTML = "email cant be empty";
    emailError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
}
else{
    email.style.border = "1px solid black";
    emailError.innerHTML = "";

}
if (password.value == ''){
    password.style.border = "1px solid red";
    passwordError.innerHTML = "Please farmer one name can not be empty";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
}
else{
    password.style.border = "1px solid black";
    passwordError.innerHTML = "";

}
}