const users = new Map(); // In-memory storage for demonstration

function validatePassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[\^$*.[\]{}()?"!@#%&/,><':;|_~`]/.test(password);

    let errors = [];

    if (password.length < minLength) {
        errors.push(`Password must be at least ${minLength} characters long.`);
    }
    if (!hasUppercase) {
        errors.push("Password must include at least one uppercase letter.");
    }
    if (!hasLowercase) {
        errors.push("Password must include at least one lowercase letter.");
    }
    if (!hasNumbers) {
        errors.push("Password must include at least one number.");
    }
    if (!hasSpecial) {
        errors.push("Password must include at least one special character.");
    }

    return {
        valid: errors.length === 0,
        errors: errors
    };
}

// Simulates user registration
function registerUser(username, password) {
    const validationResult = validatePassword(password);
    if (!validationResult.valid) {
        displayMessage(validationResult.errors.join('\n'), "red", "registerError");
        return;
    }

    if (users.has(username)) {
        displayMessage("Username already exists. Please choose a different one.", "red", "registerError");
        return;
    }

    users.set(username, password); // Storing plain passwords for demonstration only
    displayMessage("Registration successful!", "green", "registerError");

    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
}

function loginUser(username, password) {
    if (users.has(username) && users.get(username) === password) {
        displayMessage("Login successful!", "green", "loginError");
    } else {
        displayMessage("Invalid username or password.", "red", "loginError");
    }
}

function displayMessage(message, color, containerId) {
    const errorContainer = document.getElementById(containerId);
    errorContainer.textContent = message;
    errorContainer.style.color = color;
}

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value;
    registerUser(username, password);
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    loginUser(username, password);
});

document.getElementById('googleSignIn').addEventListener('click', function () {
    alert('This button is only here for educational purposes :)');
});

document.getElementById('ssoLogin').addEventListener('click', function () {
    alert('This button is only here for educational purposes :)');
});

window.addEventListener('DOMContentLoaded', (event) => {
    // Function to toggle the password visibility
    function togglePassword(checkboxId, passwordInputId) {
        const checkbox = document.getElementById(checkboxId);
        const passwordInput = document.getElementById(passwordInputId);

        checkbox.addEventListener('change', function () {
            // Check if the checkbox is checked
            if (this.checked) {
                // Change the password input type to text
                passwordInput.type = 'text';
            } else {
                // Change the password input type back to password
                passwordInput.type = 'password';
            }
        });
    }

    // Call the function for the login form
    togglePassword('showLoginPassword', 'loginPassword');

    // Call the function for the registration form
    togglePassword('showRegisterPassword', 'newPassword');
});