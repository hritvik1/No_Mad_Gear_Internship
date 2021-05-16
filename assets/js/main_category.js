const toTop = document.querySelector(".to-top");
const sidebar = document.querySelector(".sidebar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
  else if (window.pageYOffset > 40) {
    sidebar.classList.add("sidebar_active");
  }
  else {
    toTop.classList.remove("active");
    sidebar.classList.remove("sidebar_active");
  }
});

function pre_load() {
  setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("main_content").style.display = "block";
}

function openNav() {
  document.getElementById("Sidenav").style.width = "280px";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}

var modal_card1 = document.getElementById('modal_card1');
var modal_card2 = document.getElementById('modal_card2');
var modal_card3 = document.getElementById('modal_card3');

window.onclick = function(event) {
  if (event.target == modal_card1 || event.target == modal_card2 || event.target == modal_card3) {
    document.body.style.overflow = "scroll";
    modal_card1.style.display = "none";
    document.getElementById("form_pin_1").reset();
    modal_card2.style.display = "none";
    document.getElementById("form_pin_2").reset();
    modal_card3.style.display = "none";
    document.getElementById("form_pin_3").reset();
  }
}

function disp_search() {
  var search_str = document.getElementById("search_field").value;
  window.alert("You Searched For: "+search_str);
  document.getElementById("form_search").reset();
}

function clr_search() {
  document.getElementById("form_search").reset();
}

function modal_card1_open() {
  document.getElementById("modal_card1").style.display = "block";
  document.body.style.overflow = "hidden";
}

function modal_card1_close() {
  document.getElementById("modal_card1").style.display = "none";
  document.body.style.overflow = "scroll";
  document.getElementById("form_pin_1").reset();
}

function modal_card2_open() {
  document.getElementById("modal_card2").style.display = "block";
  document.body.style.overflow = "hidden";
}

function modal_card2_close() {
  document.getElementById("modal_card2").style.display = "none";
  document.body.style.overflow = "scroll";
  document.getElementById("form_pin_2").reset();
}

function modal_card3_open() {
  document.getElementById("modal_card3").style.display = "block";
  document.body.style.overflow = "hidden";
}

function modal_card3_close() {
  document.getElementById("modal_card3").style.display = "none";
  document.body.style.overflow = "scroll";
  document.getElementById("form_pin_3").reset();
}

function validate_pin_1() {
  var temp_pin = document.getElementById("pincode1").value;

  if (!temp_pin) {
    window.alert("Empty Input!!!");
  }
  else if(isNaN(temp_pin) || temp_pin.length!=6 || temp_pin.includes("e")) {
    window.alert("Invalid Pincode!!");
  }
  else {
    window.alert("Product Delivery Available!!");
  }
}

function validate_pin_2() {
  var temp_pin = document.getElementById("pincode2").value;

  if (!temp_pin) {
    window.alert("Empty Input!!!");
  }
  else if(isNaN(temp_pin) || temp_pin.length!=6 || temp_pin.includes("e")) {
    window.alert("Invalid Pincode!!");
  }
  else {
    window.alert("Product Delivery Available!!");
  }
}

function validate_pin_3() {
  var temp_pin = document.getElementById("pincode3").value;

  if (!temp_pin) {
    window.alert("Empty Input!!!");
  }
  else if(isNaN(temp_pin) || temp_pin.length!=6 || temp_pin.includes("e")) {
    window.alert("Invalid Pincode!!");
  }
  else {
    window.alert("Product Delivery Available!!");
  }
}

function color_chg() {
  var temp_color = document.getElementById("like").style.color;

  if(temp_color=="rgb(94, 88, 88)") {
    document.getElementById("like").style.color = "rgb(255, 0, 0)";
  }
  else {
    document.getElementById("like").style.color = "rgb(94, 88, 88)";
  }
}