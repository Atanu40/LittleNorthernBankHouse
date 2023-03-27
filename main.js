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

// -----------------PAGE 02 SECTION 02 MOUSEOVER ---------------------//

function mOver() {
  let anchors_1 = document.getElementsByClassName("style1");
  let anchors_2 = document.getElementsByClassName("style2");
  let anchors_3 = document.getElementsByClassName("style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 1;
    //anchors_1[i].style.transform = "scale(1.2)";
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 0.5;
  }
}

function mOver1() {
  let anchors_1 = document.getElementsByClassName("style1");
  let anchors_2 = document.getElementsByClassName("style2");
  let anchors_3 = document.getElementsByClassName("style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 0.5;
  }
}

function mOver2() {
  console.log("mOver2");
  let anchors_1 = document.getElementsByClassName("style1");
  let anchors_2 = document.getElementsByClassName("style2");
  let anchors_3 = document.getElementsByClassName("style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 1;
  }
}

// -----------------PAGE 02 SECTION 02 MOUSEOUT ---------------------//

function mOut() {
  let anchors_1 = document.getElementsByClassName("style1");
  let anchors_2 = document.getElementsByClassName("style2");
  let anchors_3 = document.getElementsByClassName("style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 1;
  }
}

// -----------------PAGE 02 SECTION 03 MOUSEOVER ---------------------//
function sec03mOver() {
  let anchors_1 = document.getElementsByClassName("sec03-style1");
  let anchors_2 = document.getElementsByClassName("sec03-style2");
  let anchors_3 = document.getElementsByClassName("sec03-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 0.5;
  }
}

function sec03mOver1() {
  let anchors_1 = document.getElementsByClassName("sec03-style1");
  let anchors_2 = document.getElementsByClassName("sec03-style2");
  let anchors_3 = document.getElementsByClassName("sec03-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 0.5;
  }
}

function sec03mOver2() {
  let anchors_1 = document.getElementsByClassName("sec03-style1");
  let anchors_2 = document.getElementsByClassName("sec03-style2");
  let anchors_3 = document.getElementsByClassName("sec03-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 1;
  }
}

// -----------------PAGE 02 SECTION 03 MOUSEOUT ---------------------//

function sec03mOut() {
  let anchors_1 = document.getElementsByClassName("sec03-style1");
  let anchors_2 = document.getElementsByClassName("sec03-style2");
  let anchors_3 = document.getElementsByClassName("sec03-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 1.2;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 1;
  }
}

// -----------------PAGE 02 SECTION 04 MOUSEOVER ---------------------//

function sec04mOver() {
  let anchors_1 = document.getElementsByClassName("sec04-style1");
  let anchors_2 = document.getElementsByClassName("sec04-style2");
  let anchors_3 = document.getElementsByClassName("sec04-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 0.5;
  }
}

function sec04mOver1() {
  let anchors_1 = document.getElementsByClassName("sec04-style1");
  let anchors_2 = document.getElementsByClassName("sec04-style2");
  let anchors_3 = document.getElementsByClassName("sec04-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 0.5;
  }
}

function sec04mOver2() {
  let anchors_1 = document.getElementsByClassName("sec04-style1");
  let anchors_2 = document.getElementsByClassName("sec04-style2");
  let anchors_3 = document.getElementsByClassName("sec04-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 0.5;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 1;
  }
}

// -----------------PAGE 02 SECTION 04 MOUSEOUT ---------------------//

function sec04mOut() {
  let anchors_1 = document.getElementsByClassName("sec04-style1");
  let anchors_2 = document.getElementsByClassName("sec04-style2");
  let anchors_3 = document.getElementsByClassName("sec04-style3");

  for (let i = 0; i < anchors_1.length; i++) {
    anchors_1[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_2.length; i++) {
    anchors_2[i].style.opacity = 1;
  }

  for (let i = 0; i < anchors_3.length; i++) {
    anchors_3[i].style.opacity = 1;
  }
}

// -----------------PAGE 02 SECTION 02 link MOUSEOVER ---------------------//

function section02LinkOver() {
  let anchors_1 = document.querySelector(".style1");
  let anchors_2 = document.querySelector(".style2");
  let anchors_3 = document.querySelector(".style3");
  document.querySelector(
    ".products-section-anchor_under-img"
  ).style.opacity = 1;
  anchors_1.style.transform = "scale(1.2)";
  anchors_2.style.opacity = 0.5;
  anchors_3.style.opacity = 0.5;
  anchors_1.classList.add("link-efect");
}


function section02LinkOver2() {
  let anchors_1 = document.querySelector(".style1");
  let anchors_2 = document.querySelector(".style2");
  let anchors_3 = document.querySelector(".style3");
  document.querySelector(
    ".sec2-style2-under-img"
  ).style.opacity = 1;
  anchors_1.style.opacity = 0.5;
  anchors_2.style.transform = "scale(1.3)";
  anchors_3.style.opacity = 0.5;
}

function section02LinkOver3() {
  let anchors_1 = document.querySelector(".style1");
  let anchors_2 = document.querySelector(".style2");
  let anchors_3 = document.querySelector(".style3");
  document.querySelector(
    ".sec2-style3-under-img"
  ).style.opacity = 1;
  anchors_1.style.opacity = 0.5;
  anchors_2.style.opacity = 0.5;
  anchors_3.style.transform = "scale(1.2)";
}

function section02LinkOut() {
  let anchors_1 = document.querySelector(".style1");
  let anchors_2 = document.querySelector(".style2");
  let anchors_3 = document.querySelector(".style3");
  document.querySelector(
    ".products-section-anchor_under-img"
  ).style.opacity = 0;
  document.querySelector(
    ".sec2-style2-under-img"
  ).style.opacity = 0;
  document.querySelector(
    ".sec2-style3-under-img"
  ).style.opacity = 0;
  anchors_1.style.transform = "scale(1)";
  anchors_2.style.transform = "scale(1.2)";
  anchors_3.style.transform = "scale(1)";

  anchors_1.style.opacity = 1;
  anchors_2.style.opacity = 1;
  anchors_3.style.opacity = 1;
}

// -----------------PAGE 02 SECTION 03 link MOUSEOVER ---------------------//

function section03LinkOver() {
  let anchors_1 = document.querySelector(".sec03-style1");
  let anchors_2 = document.querySelector(".sec03-style2");
  let anchors_3 = document.querySelector(".sec03-style3");
  document.querySelector(
    ".sec3-style1-under-img"
  ).style.opacity = 1;
  anchors_1.style.transform = "scale(1.2)";
  anchors_2.style.opacity = 0.5;
  anchors_3.style.opacity = 0.5;
}


function section03LinkOver2() {
  let anchors_1 = document.querySelector(".sec03-style1");
  let anchors_2 = document.querySelector(".sec03-style2");
  let anchors_3 = document.querySelector(".sec03-style3");
  document.querySelector(
    ".sec3-style2-under-img"
  ).style.opacity = 1;
  anchors_1.style.opacity = 0.5;
  anchors_2.style.transform = "scale(1.3)";
  anchors_3.style.opacity = 0.5;
}

function section03LinkOver3() {
  let anchors_1 = document.querySelector(".sec03-style1");
  let anchors_2 = document.querySelector(".sec03-style2");
  let anchors_3 = document.querySelector(".sec03-style3");
  document.querySelector(
    ".sec3-style3-under-img"
  ).style.opacity = 1;
  anchors_1.style.opacity = 0.5;
  anchors_2.style.opacity = 0.5;
  anchors_3.style.transform = "scale(1.2)";
}

function section03LinkOut() {
  let anchors_1 = document.querySelector(".sec03-style1");
  let anchors_2 = document.querySelector(".sec03-style2");
  let anchors_3 = document.querySelector(".sec03-style3");
  document.querySelector(
    ".sec3-style1-under-img"
  ).style.opacity = 0;
  document.querySelector(
    ".sec3-style2-under-img"
  ).style.opacity = 0;
  document.querySelector(
    ".sec3-style3-under-img"
  ).style.opacity = 0;
  anchors_1.style.transform = "scale(1)";
  anchors_2.style.transform = "scale(1.2)";
  anchors_3.style.transform = "scale(1)";

  anchors_1.style.opacity = 1;
  anchors_2.style.opacity = 1;
  anchors_3.style.opacity = 1;
}

// -----------------PAGE 02 SECTION 04 link MOUSEOVER ---------------------//

function section04LinkOver() {
  let anchors_1 = document.querySelector(".sec04-style1");
  let anchors_2 = document.querySelector(".sec04-style2");
  let anchors_3 = document.querySelector(".sec04-style3");
  document.querySelector(
    ".sec4-style1-under-img"
  ).style.opacity = 1;
  anchors_1.style.transform = "scale(1.2)";
  anchors_2.style.opacity = 0.5;
  anchors_3.style.opacity = 0.5;
}


function section04LinkOver2() {
  let anchors_1 = document.querySelector(".sec04-style1");
  let anchors_2 = document.querySelector(".sec04-style2");
  let anchors_3 = document.querySelector(".sec04-style3");
  document.querySelector(
    ".sec4-style2-under-img"
  ).style.opacity = 1;
  anchors_1.style.opacity = 0.5;
  anchors_2.style.transform = "scale(1.3)";
  anchors_3.style.opacity = 0.5;
}

function section04LinkOver3() {
  let anchors_1 = document.querySelector(".sec04-style1");
  let anchors_2 = document.querySelector(".sec04-style2");
  let anchors_3 = document.querySelector(".sec04-style3");
  document.querySelector(
    ".sec4-style3-under-img"
  ).style.opacity = 1;
  anchors_1.style.opacity = 0.5;
  anchors_2.style.opacity = 0.5;
  anchors_3.style.transform = "scale(1.2)";
}

function section04LinkOut() {
  let anchors_1 = document.querySelector(".sec04-style1");
  let anchors_2 = document.querySelector(".sec04-style2");
  let anchors_3 = document.querySelector(".sec04-style3");
  document.querySelector(
    ".sec4-style1-under-img"
  ).style.opacity = 0;
  document.querySelector(
    ".sec4-style2-under-img"
  ).style.opacity = 0;
  document.querySelector(
    ".sec4-style3-under-img"
  ).style.opacity = 0;
  anchors_1.style.transform = "scale(1)";
  anchors_2.style.transform = "scale(1.2)";
  anchors_3.style.transform = "scale(1)";

  anchors_1.style.opacity = 1;
  anchors_2.style.opacity = 1;
  anchors_3.style.opacity = 1;
}