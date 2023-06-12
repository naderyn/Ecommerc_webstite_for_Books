function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Get user data from local storage
    var users = JSON.parse(localStorage.getItem("users"));
    
    // Check if user exists and password matches
    
    // console.log(users[username].password);

    if (users && users[username] && users[username].password === password) {
    // Login successful, save user info in session storage
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("name", users[username].name);
      sessionStorage.setItem("email", users[username].email);

    // Save user data in a cookie with a day expiration
    var now = new Date();
    var expirationDate = new Date(now.getTime() + ( 24 * 60 * 60 * 1000));
    document.cookie = "username=" + username + "; expires=" + expirationDate.toUTCString() + "; path=/";
    document.cookie = "name=" + users[username].name + "; expires=" + expirationDate.toUTCString() + "; path=/";
    document.cookie = "email=" + users[username].email + "; expires=" + expirationDate.toUTCString() + "; path=/";

      // Redirect to Home page

        swal({  
            title: "Loged IN successfully",  
            icon: "success",  
            timer: 2000,  
        }).then((result) => {

            window.location.href = "all-books.html";
            
          })


    } else {

        swal({  
            title: "Invalid username or password!",  
            icon: "error",
            timer: 2000,  
        });
    }
}