/*
* This script allows a user to register for a mock account.
*
* */

const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    let isValid = true;
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (!username.value.trim()) {
        usernameError.textContent = 'Username is required';
        isValid = false;
    }

    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    if (!password.value.trim()) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert('Registration successful!');
        console.log('Redirecting to login page...');
        window.location.href = '../../html/website_html/login.html';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
