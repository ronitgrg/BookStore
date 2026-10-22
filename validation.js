function validateForm() {
    var name = document.forms["regForm"]["fullname"].value.trim();
    var email = document.forms["regForm"]["email"].value.trim();
    var phone = document.forms["regForm"]["phone"].value.trim();
    var password = document.forms["regForm"]["password"].value;

    var nameRegex = /^[A-Za-z\s]{6,}$/;
    if (!nameRegex.test(name)) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        document.forms["regForm"]["fullname"].focus();
        return false;
    }


    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid Email ID (e.g., name@domain.com).");
        document.forms["regForm"]["email"].focus();
        return false;
    }


    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        document.forms["regForm"]["phone"].focus();
        return false;
    }


    if (password.length < 6) {
        alert("Password must be at least 6 characters in length.");
        document.forms["regForm"]["password"].focus();
        return false;
    }

    alert("Registration Successful!");
    return true;
}