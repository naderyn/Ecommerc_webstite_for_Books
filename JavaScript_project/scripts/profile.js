
// Get user data from local storage
var users = JSON.parse(localStorage.getItem("users"));

var Age = users[username].age;
var Address = users[username].address;

let profile = document.getElementById("profile") ;

console.log(profile)

profile.innerHTML =
 `
    <div class="card-header" style="height: 60px;">
        <h5 class="card-title limit-paragraph-line text-center">${Name}</h5>
    </div>
    <img class="card-img-top" height="400"  src="images/user.png" alt="my profile">
    <div class="card-body d-flex align-items-center">
        <ul class="mr-5">
            <li> 
                <h5 class="card-text text-danger limit-paragraph-line">User Name </h5>
                <p class="card-text limit-paragraph-line">${username}</p>
            </li>
            <li>
                <h5 class="card-text text-danger limit-paragraph-line">Email </h5>
                <p class="card-text limit-paragraph-line">${Email}</p>
            </li>
        </ul>
        <ul class="mx-5">
            <li> 
                <h5 class="card-text text-danger limit-paragraph-line"> Age </h5>
                <p class="card-text limit-paragraph-line">${Age}</p>
            </li>
            <li>
                <h5 class="card-text text-danger limit-paragraph-line"> Address </h5>
                <p class="card-text limit-paragraph-line">${Address}</p>
            </li>
        </ul>
    </div>
 `;

 console.log(Email);