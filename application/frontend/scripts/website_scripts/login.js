/*
* Demonstration login with mock session username
*
* */
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // For demo purposes, assume any non-empty username and password combination is valid
    if (username && password) {
        // Use mock username in session storage
        sessionStorage.setItem('username', username);
        console.log(window.location.href);
        alert('You are logged in as: ' + username);
        window.location.href = '../../index.html';
        console.log('User is logged in as:', username);
    } else {
        alert('Please enter a username and password');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginButton').addEventListener('click', login);
    document.getElementById('password').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            login();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let avatarLink = document.querySelector('.avatar-link');
    // let loginBtn = document.getElementById('loginBtn');

    if (sessionStorage.getItem('username')) {
        avatarLink.style.display = 'block';
    } else {
        avatarLink.style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
});

