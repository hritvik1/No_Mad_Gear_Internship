/*   CODED BY HRITVIK MAINI   */

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
  setTimeout(showPage, 1000);
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

var modal_login = document.getElementById('modal_1');
var modal_signup = document.getElementById('modal_2');

window.onclick = function(event) {
  if (event.target == modal_login || event.target == modal_signup) {
    modal_login.style.display = "none";
    modal_signup.style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("form_login").reset();
    document.getElementById("form_signup").reset();
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

function login_open() {
  document.getElementById("modal_1").style.display = "block";
  document.body.style.overflow = "hidden";
}

function login_close() {
  document.getElementById("modal_1").style.display = "none";
  document.body.style.overflow = "scroll";
  document.getElementById("form_login").reset();
}

function login_success() {
  window.alert("Log In Successful!!!")
}

function signup_open() {
  document.getElementById("modal_2").style.display = "block";
  document.body.style.overflow = "hidden";
}

function signup_close() {
  document.getElementById("modal_2").style.display = "none";
  document.body.style.overflow = "scroll";
  document.getElementById("form_signup").reset();
}

function signup_success() {

  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var o_pass = document.getElementById("orig_pass").value;
  var r_pass = document.getElementById("re_pass").value;

  error_message.style.padding = "10px";

  var text;
  var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!name && !email && !o_pass && !r_pass){
    text = "Empty Form....";
    error_message.innerHTML = text;
    return false;
  }
  if(name.length < 4){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(!regexp.test(email)){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(o_pass.length<4){
    text = "Password Must be Long!!";
    error_message.innerHTML = text;
    return false;
  }
  if(o_pass!=r_pass){
    text = "Password Don't Match!!";
    error_message.innerHTML = text;
    return false;
  }
  window.alert("Account Created Successfully!!!")
  return true;
}
/*   CODED BY HRITVIK MAINI   */