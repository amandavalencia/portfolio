import "/src/scss/style.scss"

//------Hamburger menu-------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
hamburger?.addEventListener("click", () => {
 hamburger?.classList.toggle("active");
 navMenu?.classList.toggle("active");

});


document.querySelectorAll(".navLink").forEach((link) =>
 link.addEventListener("click", () => {
   hamburger?.classList.remove("active");
   navMenu?.classList.remove("active");
 })
);