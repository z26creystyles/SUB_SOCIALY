
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// SWITCH TO SIGN UP
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

// SWITCH TO SIGN IN
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});