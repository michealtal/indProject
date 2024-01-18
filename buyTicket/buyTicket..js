let login = document.querySelector("#btn1")
login.addEventListener("click",function () {
    document.querySelector("#myOverlay").style.display = "block";
    document.querySelector("#container").classList.add("bodyOpacity")
})

let closeButton = document.querySelector("#closebtn")
closeButton.addEventListener("click",function () {
    document.querySelector("#myOverlay").style.display = "none";
    document.querySelector("#container").classList.remove("bodyOpacity")
})



let users = document.getElementById('logedInNav')
    users.style.display = "none";
let buttonForm = document.getElementById('form-button');
let continueButton = document.getElementById('continue');
let isLoggedIn = continueButton.textContent;

continueButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (users.style.display === "none") {
        buttonForm.style.display = "none";
        users.style.display = "flex";

    } else {
        buttonForm.style.display = "flex";
        users.style.display = "none";
    }
    
    localStorage.setItem('isLoggedIn', isLoggedIn);
    // window.location.reload();
});

// const storedState = localStorage.getItem('isLoggedIn');
// if (storedState) {
//     let continueButton = document.getElementById('continue');
//     continueButton.textContent = storedState;
// }
let clickButton = document.getElementById("clickButton")
let condition = document.getElementById("condition")
clickButton.addEventListener('click',() => {
 if (condition.style.display === "none") {
    condition.style.display = "block";
 }else{
    condition.style.display = "none" ;
 }
})