const form = document.querySelector('#register-form');
const usernameInput = document.querySelector('#username');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ageInput = document.querySelector('#age');
const addressInput = document.querySelector('#address');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const usernameError = document.querySelector('#username-error');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const ageError = document.querySelector('#age-error');
const addressError = document.querySelector('#address-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

// Load the users from local storage if they exist
let users = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!usernameInput.checkValidity()) {
    usernameError.textContent = 'Please enter a valid username.';
    return;
  } else {
    usernameError.textContent = '';
  }

  if (!nameInput.checkValidity()) {
    nameError.textContent = 'Please enter a valid name.';
    return;
  } else {
    nameError.textContent = '';
  }

  if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
    return;
  } else {
    emailError.textContent = '';
  }

  if (!ageInput.checkValidity()) {
    ageError.textContent = 'Please enter a valid Age.';
    return;
  } else {
    ageError.textContent = '';
  }

  if (!addressInput.checkValidity()) {
    addressError.textContent = 'Please enter a valid Address.';
    return;
  } else {
    addressError.textContent = '';
  }

  if (!passwordInput.checkValidity()) {
    passwordError.textContent = 'Please enter a valid password.';
    return;
  } else {
    passwordError.textContent = '';
  }

  if (!confirmPasswordInput.checkValidity()) {
    confirmPasswordError.textContent = 'Please confirm your password.';
    return;
  } else {
    confirmPasswordError.textContent = '';
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    return;
  } else {
    confirmPasswordError.textContent = '';
  }

 
    const username = usernameInput.value;
    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;
    const address = addressInput.value;
    const password =  passwordInput.value;

   // Get existing user data from local storage
   var users = JSON.parse(localStorage.getItem("users")) || {};

   // Check if username already exists
   if (users[username]) {
    
      swal({  
          title: "email already exists, please choose a different one.",  
          icon: "error",
          timer: 2000,  
      });

    } else {
      // Add new user to the list
      users[username] = { password: password, name: name , email: email , age: age, address: address};

      // Save updated user list in local storage
      localStorage.setItem("users", JSON.stringify(users));
    
      swal({  
        title: "Registration successful!",  
        icon: "success",  
      }).then((result) => {

        window.location.href = "signin.html";
        
      })

    }
  
    form.reset();

});

