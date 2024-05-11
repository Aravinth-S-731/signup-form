# Signup Form

A modern and professional signup form with dynamic password validation, built using HTML, CSS, and JavaScript.

## Table of Contents

- [Signup Form](#signup-form)

## Overview

This project is a signup form designed to provide a seamless user experience for creating new accounts. It includes dynamic password validation to ensure strong passwords are chosen and confirmation of password match.

## Features

- Responsive design
- Dynamic password validation (minimum length, uppercase letter, symbol, and number)
- Toggle visibility of password input
- Confirmation of password match

## Getting Started

To get started with this project, you can simply clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/signup-form.git
```

## File Structure

```
SIGNUP-FORM
|
|-----  css
|       |-----  images
|       |-----  style.css
|
|-----  javascript
|       |-----  app.js
|
|-----  index.html
```

## JavaScript

### 1. Password Validation
The `validatePassword()` function is a JavaScript function responsible for validating a password entered by the user in a signup form.

### JavaScript Code:
```javascript
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
```

#### Get Password Value:
The function retrieves the password value entered in the password input field with the id `'password'` using `document.getElementById('password').value` and stores it in the variable `password`.

#### Log Password Value (Optional):
Optionally, the password value can be logged to the console using `console.log(password)` for debugging purposes.

#### Password Validation Rules:
The function applies several validation rules to the password:
- Contains at least one uppercase letter.
- Contains at least one symbol from a predefined list.
- Contains at least one numeric digit.
- Has a minimum length of 8 characters.

#### Toggle Validation Icons:
The function calls another function `toggleValidationIcon()` for each validation rule to toggle validation icons based on the validation results.

---
### 2. Password Validation Display
The `toggleValidationIcon()` function is responsible for toggling validation icons based on the validation results.

### JavaScript Code:
```javascript
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
```
The `toggleValidationIcon()` function accepts two parameters: id (the ID of the validation element) and isValid (a boolean indicating whether the validation rule is satisfied or not).
- It retrieves the icon element using document.querySelector('#' + id + ' .validation-icon i').
- If the validation rule is satisfied (isValid is true), it removes the "fa-times" class, adds the "fa-check" class, and changes the color to green.
- If the validation rule is not satisfied (isValid is false), it removes the "fa-check" class, adds the "fa-times" class, and changes the color to red.

---
### 3. Password and Confirm Password
The `validateConfirmPassword()` function is responsible for validating the confirm password input field in a signup form.

### JavaScript Code:
```javascript
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
```

The `validateConfirmPassword()` function compares the value of the password input field with the confirm password input field to ensure they match. If the passwords do not match or if the confirm password field is empty, it changes the background color of the confirm password input field to orange-red to indicate an error. Otherwise, it resets the background color to the default.

---
### 4. Show / Hide Password (Toggle)
The `togglePasswordVisibility()` function toggles the visibility of the password input field in a signup form.

### JavaScript Code:

```javascript
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
```

The `togglePasswordVisibility()` function accepts an inputId parameter, which represents the ID of the password input field. It also finds the associated toggle icon element.
- If the current type of the input field is "password", it changes it to "text" to make the password visible and updates the icon accordingly.
- If the current type of the input field is not "password" (i.e., it is "text"), it changes it back to "password" to hide the password and updates the icon accordingly.


# Screen Captures
#### Desktop View

![Desktop View](/css/images/desktop%20view.png)
![Mobile View](/css/images/mobile%20view.jpg)
