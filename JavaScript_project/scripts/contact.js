const form = document.querySelector('#contact-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');


const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');


let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

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

    if (!messageInput.checkValidity()) {
        messageError.textContent = 'Please enter a valid Message.';
        return;
    } else {
        messageError.textContent = '';
    }


    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;


   var contacts = JSON.parse(localStorage.getItem("contacts")) || {};

   if (contacts[email]) {
    
      swal({  
          title: "you have contact us before.",  
          icon: "error",
          timer: 2000,  
      });

    } else {

      contacts[email] = { name: name , email: email , message: message };

      localStorage.setItem("contacts", JSON.stringify(contacts));
    
      swal({  
        title: "Your Message Sent Successfully!",  
        icon: "success",  
      })

    }
  
    form.reset();

});

