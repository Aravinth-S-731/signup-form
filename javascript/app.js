function validatePassword() {
    var password = document.getElementById('password').value;
    var containsUpperCase = /[A-Z]/.test(password);
    var containsSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var containsNumber = /[0-9]/.test(password);
    var minLength = password.length >= 8;

    toggleValidationIcon('uppercase', containsUpperCase);
    toggleValidationIcon('symbol', containsSymbol);
    toggleValidationIcon('number', containsNumber);
    toggleValidationIcon('min-length', minLength);
}

function toggleValidationIcon(id, isValid) {
    var iconElement = document.querySelector('#' + id + ' .validation-icon i');
    if (isValid) {
        iconElement.classList.remove('fa-times');
        iconElement.classList.add('fa-check');
        iconElement.style.color = "green";
    } else {
        iconElement.classList.remove('fa-check');
        iconElement.classList.add('fa-times');
        iconElement.style.color = "red";
    }
}

function validateConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var confirmInput = document.getElementById('confirm-password');

    if (password !== confirmPassword || confirmPassword === '') {
        confirmInput.style.backgroundColor = "orangered";
    } else {
        confirmInput.style.backgroundColor = "";
    }
}

function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    var icon = document.querySelector("#" + inputId + " + .toggle-password");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}