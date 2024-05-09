/*
* This script allows mock settings to be saved for a user.
*
* */

document.addEventListener('DOMContentLoaded', function () {
    const saveSettingsButton = document.getElementById('saveSettings');

    saveSettingsButton.addEventListener('click', function () {
        const username = document.getElementById('username').innerText;
        const email = document.getElementById('email').innerText;
        const notifications = document.querySelector('input[name="notifications"]:checked').value;

        // Simulate storing settings (dummy data)
        const savedSettings = {
            username: username,
            email: email,
            notifications: notifications
        };

        alert('Settings saved successfully!\n' +
            'Username: ' + savedSettings.username + '\n' +
            'Email: ' + savedSettings.email + '\n' +
            'Receive Notifications: ' + savedSettings.notifications);
    });
});

