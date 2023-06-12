// Get the user's data from session storage
const username = sessionStorage.getItem("username");
const Name = sessionStorage.getItem("name");
const Email = sessionStorage.getItem("email");

// // Get the user's data from cookies
// var username = getCookie("username");
// var name = getCookie("name");

function checkLoginStatus() {
    if (username) {
      // user is logged in, show the logout button and hide the login button  
      document.getElementById("logout-btn").style.display = "block";
      document.getElementById("home-page").style.display = "block";
      document.getElementById("books-page").style.display = "block";
      document.getElementById("cart-page").style.display = "block";
      document.getElementById("contact-page").style.display = "block";
      document.getElementById("team-page").style.display = "block";
      document.getElementById("drop-item").style.display = "block";
      document.getElementById("user-name").innerHTML = Name;

      return true;

    } else {

      // user is not logged in, show the login button and hide the logout button
      document.getElementById("register-btn").style.display = "block";
      document.getElementById("login-btn").style.display = "block";

      // here to reload to login page if not logged in and visit any page except register and login
      if(window.location.href.substring(window.location.href.lastIndexOf('/') + 1) != 'signin.html' 
        && window.location.href.substring(window.location.href.lastIndexOf('/') + 1) != 'signup.html' 
        && window.location.href.substring(window.location.href.lastIndexOf('/') + 1) != 'index.html'){
      
        window.location.href = "signin.html";

      }

      console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))

      return false;
    }

}

// this to check the login status when reload a new page 
window.addEventListener("load", checkLoginStatus);


document.getElementById("logout-btn").addEventListener("click", function() {
  // perform logout logic here
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  window.location.href = "index.html";  // checkLoginStatus();
});
