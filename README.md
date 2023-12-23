# User Authentication System

This User Authentication System is a front-end simulation designed for educational purposes. It features a simple yet functional interface for user registration and login, mimicking the behavior of a full-scale authentication system. While it showcases the fundamental aspects of handling user credentials, it is important to note that this implementation is purely for demonstration and should not be used as a secure authentication system.

![Screenshot 2023-12-22 195417](https://github.com/danieldotwav/User-Authentication-System/assets/31682816/cc7e49fd-e2d8-4415-b701-67ed033b6f41)

## Features

- **User Registration**: Users can create a new account by entering a username and password. The system checks for password complexity and uniqueness of the username.
- **Password Validation**: Passwords are required to be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special character.
- **User Login**: Users can log in using the registered username and password.
- **Error Handling**: The system displays error messages if login credentials are incorrect or if registration requirements are not met.
- **'Show Password' Checkbox**: For both registration and login, a checkbox allows users to toggle the visibility of their password to check their input before submitting.
- **In-Memory User Storage**: User credentials are temporarily stored in an in-memory JavaScript `Map` object, emulating a database in a real-world application.
- **Educational Alerts**: Clicking on the "Sign in with Google" or "Log in with SSO" buttons triggers an alert informing that these buttons are for educational purposes only.

## Storage Mechanism

User credentials are stored in-memory using a JavaScript `Map` object, which allows us to simulate the storage and retrieval of usernames and hashed passwords. This method is chosen to avoid complexities of setting up a backend and a database. It is crucial to understand that this approach is not persistent or secure as the data will be cleared when the session ends, and it is exposed to the client side, posing significant security risks.

## 'Show Password' Checkbox

The 'Show Password' checkbox is implemented using JavaScript that listens for the change event on the checkbox. When checked, the type of the password input field is changed from `password` to `text`, revealing the password. When unchecked, it reverts back to `password`, hiding the text.

## Educational Alerts

The buttons for "Sign in with Google" and "Log in with SSO" are accompanied by click event listeners that trigger browser alerts. These alerts are a placeholder for actual authentication processes and inform users that the buttons are for demonstration purposes only.

## Usage

To use the system:

1. Navigate to the [GitHub webpage](https://danieldotwav.github.io/User-Authentication-System/) where the project is hosted 
2. To register, fill in the desired username and password according to the password policy and click "Create Account".
3. To login, enter the registered username and password and click "Login".
4. To reveal the password, check the 'Show Password' checkbox.
5. Click on "Sign in with Google" or "Log in with SSO" to view the educational alert.

## Contribution

As this project is for educational purposes, contributions for extending its functionality or improving its simulation of real-world systems are welcome. Please feel free to fork the repository, make changes, and submit a pull request.
