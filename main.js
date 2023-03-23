// -----------------MOBILE NAVBAR---------------------//
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  console.log("clicked");
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
  document.body.style.overflow = "hidden";

  if (nav_header.classList.contains("active") === false) {
    //document.body.style.overflow = "auto";
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
  }
};

mobile_nav.addEventListener("click", () => toggleNavbar());