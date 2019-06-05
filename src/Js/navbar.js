console.log("Javascript file");
// Declare Navbar toggle Button
let navToggle, navBar;

navBar = document.querySelector(".navbar-collapse");
navToggle = document.getElementById("#toggle");

console.log(navToggle);
if (navToggle !== null) {
  navToggle.addEventListener("click", () => {
    console.log("Nav Toggle CLicked");
    if (navBar.Style.display === "none") {
      navBar.Style.display = "block;";
    }
  });
}
