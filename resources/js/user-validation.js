/* Credits
regular expression 101 | regex101.com

link to email regex https://regex101.com/r/WCXPcP/1
link to password regex https://regex101.com/r/ivDsvJ/1

*/
console.log('JS OK')

// !REGISTER FORM

// |GET INTERESTED DOCUMENT ELEMENTS
// Get the form element for user registration.
const registerForm = document.getElementById('register-form')

// Get input fields for restaurant data.
const restaurantName = document.getElementById('name'); // Restaurant name.
const restaurantAddress = document.getElementById('address'); // Restaurant address.
const PIVA = document.getElementById('piva'); // VAT (PIVA).
const restaurantImg = document.getElementById('logo'); // Restaurant logo.

// Get checkbox for restaurant types
const restaurantTypes = document.getElementById('types'); // Restaurant types.

// Get input fields for restaurant owner credentials.
const email = document.getElementById('email'); // Email.
const password = document.getElementById('password'); // Password.
const confirmPassword = document.getElementById('password-confirm'); // Confirm password.

// Email validation.
const validateEmail = (email) =>
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);

const isValidEmail = value => validateEmail(value) || "Please provide a valid email address.";


// Password validation arrow function.
const validatePassword = (password) =>
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/.test(password);

const isValidPassword = value =>
    validatePassword(value) || "Password must be at least 8 characters long, containing at least one letter, one number and one non-alpha numeric number.";

// Restaurant name validation arrow function.
const validateName = name => name.length > 0 && name.length <= 40;
const isValidName = value => (value && validateName(value)) || "Name is required and must not exceed 40 characters.";


// |ADD EVENT LISTENER
// Add submit event listener to the registration form
registerForm.addEventListener('submit', function (event) {
    // Prevent default submission to apply client-side validation
    event.preventDefault();

    // Validation errors array
    const errors = [];

    // Validate restaurant name
    if (restaurantName.value.trim() === '') {
        errors.push('Restaurant name is required.');
    };

    // Validate restaurant address
    if (restaurantAddress.value.trim().length < 5) {
        errors.push('Restaurant address must be at least 5 characters long.');
    };

    if (registerPassword.value.trim() !== confirmPassword.value.trim()) {
        errors.push('Passwords do not match.');
    };

    if (errors.length > 0) {
        console.error('Validation errors:', errors);
    } else {
        console.log('Form is valid!');
        registerForm.submit();
    };

    const validationMess = emailValidation(email);

    if (validationMess !== true) {
        console.log(validationMess);
    } else {
        console.log("Email valida");
    };

});
