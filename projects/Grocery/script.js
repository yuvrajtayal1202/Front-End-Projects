const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const inputs = document.querySelectorAll(".input");
const toggleNavbar = () => {
    navbar.classList.toggle("navbargo");
  };
  
 ham.addEventListener("click", () => toggleNavbar());





//  function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });
