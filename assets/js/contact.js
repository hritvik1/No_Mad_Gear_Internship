function disp_search() {
  var search_str = document.getElementById("search_field").value;
  window.alert("You Searched For: "+search_str);
  document.getElementById("form_search").reset();
}

function clr_search() {
  document.getElementById("form_search").reset();
}

function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
    
  error_message.style.padding = "10px";
    
  var text;
  var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!name && !phone && !email && !message){
    text = "Error! Empty Form.."
    error_message.innerHTML = text;
    return false;
  }
  if(name.length < 4){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(!regexp.test(email)) {
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 5){
    text = "Please Enter More Than 5 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Thanks For Contacting No Mad Gear. We Will Get In Touch With You Soon....");
  return true;
}