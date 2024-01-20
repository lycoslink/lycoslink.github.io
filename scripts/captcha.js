function validateCaptcha(event) {
    event.preventDefault();
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        document.getElementById("captcha-error").style.display = "block";
    } else {
        // Submit the form
        document.getElementById("captcha-error").style.display = "none";
        document.forms[0].submit();
    }
}
