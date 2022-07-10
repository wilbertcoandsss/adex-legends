function firstNameValidation() {
    let firstName = document.getElementById("first-name").value;

    if (firstName.length == 0) {
        validation("Input your name", "first-name-validation", "first-name", "red", "red");
        return false;
    }

    for (let i = 0; i < firstName.length; i++) {
        if (!(firstName[0] >= 'A' && firstName[0] <= 'Z')) {
            validation("Input uppercase in the beginning", "first-name-validation", "first-name", "red", "red");
            return false;
        }
    }

    if (!firstName.match(" ")) {
        validation("Input your last name too!", "first-name-validation", "first-name", "red", "red");
        return false;
    }

    validation("", "first-name-validation", "first-name", "white", "green");
    return true;
}


function dateValidation() {
    let date = document.getElementById("date").value;


    if (date == "" || date.length == 0) {
        validation("Input your birthdate!", "date-error", "date", "red", "red");
        return false;
    }

    validation("", "date-error", "date", "white", "green");
    return true;
}

function emailValidation() {

    let email = document.getElementById("email").value;

    if (email.length == 0) {
        validation("Input your email", "email-error", "email", "red", "red");
        return false;
    }

    if (!email.match("@")) {
        validation("@ is required", "email-error", "email", "red", "red");
        return false;
    }

    if (!email.endsWith("@gmail.com") && !email.endsWith("@binus.ac.id")){
        validation("Only @gmail.com and @binus.ac.id is acceptable", "email-error", "email", "red", "red");
        return false;
    }

    validation("", "email-error", "email", "white", "green");
    return true;
}

function phoneValidation() {

    let phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        validation("Input your phone number", "phone-error", "phone", "red", "red");
        return false;
    }


    if (phone.length < 12) {
        validation("Input 12 numbers", "phone-error", "phone", "red", "red");
        return false;
    }


    if (phone.length != 12) {
        validation("Input no more than 12 numbers", "phone-error", "phone", "red", "red");
        return false;
    }

    validation("", "phone-error", "phone", "white", "green");
    return true;

}

function countryValidation() {
    let country = document.getElementById("country").value;
    if (country == "") {
        validation("Choose country!", "country-error", "country", "red", "red");
        return false;
    }
    validation("", "country-error", "country", "white", "green");
    return true;
}

function addressValidation() {
    let address = document.getElementById("address").value;

    if (address.length == 0) {
        validation("Address (15- 75)", "add-error", "address", "red", "red");
        return false;
    }

    if (address.length > 75) {
        validation("Maximal reached! ", "add-error", "address", "red", "red");
        return false;
    }

    if (address.length < 15) {
        validation("Minimum not reached! ", "add-error", "address", "red", "red");
        return false;
    }
    validation("", "add-error", "address", "white", "green");
    return true;
}


function passwordValidation() {
    let password = document.getElementById("password").value;

    if (password.length == 0) {
        validation("Enter your password", "password-error", "password", "red", "red");
        return false;
    }

    if (password.length < 8) {
        validation("Password must be atleast 8 characters", "password-error", "password", "red", "red");
        return false;
    }

    if (password.length > 15) {
        validation("Password must not exceed 15 characters", "password-error", "password", "red", "red");
        return false;
    }

    validation("", "password-error", "password", "white", "green");
    return true;
}

function passwordConfirmValidation() {
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password-confirm").value;


    if (password == "") {
        validation("Input password first!", "password-confirmation-error", "password-confirm", "red", "red");
        return false;
    }

    else if (password2 == "" || password2.length == 0) {
        validation("Input again your password", "password-confirmation-error", "password-confirm", "red", "red");
        return false;
    }

    if (!password2.match(password)) {
        validation("Password doesn't match", "password-confirmation-error", "password-confirm", "red", "red");
        return false;
    }

    if (password2.match(password)) {
        validation("", "password-confirmation-error", "password-confirm", "white", "green");
        return true;
    }
}

function visiblePw() {
    var visiblePw = document.getElementById("password");

    if (visiblePw.type === "password") {
        visiblePw.type = "text";
    }
    else {
        visiblePw.type = "password";
    }
}

function genderValidation() {
    var radio1 = document.getElementById("male").checked;
    var radio2 = document.getElementById("female").checked;
    var radio3 = document.getElementById("others").checked;

    if ((radio1 == false) && (radio2 == false) && (radio3 == false)) {
        validation("Choose one", "gender-error", "gender", "red", "red");
        return false;
    }
    else {
        validation("", "gender-error", "gender", "white", "green");
        return true;
    }
}

function termsValidation() {
    var terms = document.getElementById("terms").checked;

    if (terms == true) {
        validation("", "terms-error", "terms", "white", "green");
        return true;
    }
    else {
        validation("Check in the box", "terms-error", "terms", "red", "red");
        return false;
    }
}


function validateEveryForm() {
    if (!firstNameValidation() || !dateValidation() || !emailValidation() || !phoneValidation() || !countryValidation() || !addressValidation() || !passwordValidation() || !passwordConfirmValidation() || !genderValidation() || !termsValidation()) {
        return false;
    }
    else {
        return true;
    }
}

function validateForm() {
    let res = validateEveryForm()
    if (res == false) {
        alert("Please fill in all the form!")
        return false;
    }
    else {
        alert("Account succesfully registered!");
        document.getElementById("form-registration").reset();
        return true;
    }
}


function validation(message, spanLocation, borderLocation, spanColor, borderColor) {
    document.getElementById(spanLocation).innerHTML = message;
    document.getElementById(spanLocation).style.color = spanColor;
    document.getElementById(borderLocation).style.borderColor = borderColor;
    document.getElementById(borderLocation).style.borderWidth = 2;
}