export function nameValidation() {
    let regex = /^[a-zA-Z\s]+$/;
    let nameInput = document.getElementById("nameInput");
    if (regex.test(nameInput.value)) {
      document
        .getElementById("nameValidation")
        .classList.replace("d-block", "d-none");
  
      return true;
    } else {
      document
        .getElementById("nameValidation")
        .classList.replace("d-none", "d-block");
  
      return false;
    }
  }
  
export  function emailValidation() {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailInput = document.getElementById("emailInput");
    if (regex.test(emailInput.value)) {
      document
        .getElementById("emailValidation")
        .classList.replace("d-block", "d-none");
      console.log("reeeeee");
      return true;
    } else {
      document
        .getElementById("emailValidation")
        .classList.replace("d-none", "d-block");
      console.log("Moooo");
      return false;
    }
  }
  
export  function phoneValidation() {
    let regex = /^01[0125][0-9]{8}$/;
    let phoneInput = document.getElementById("phoneInput");
    if (regex.test(phoneInput.value)) {
      document
        .getElementById("phoneValidation")
        .classList.replace("d-block", "d-none");
      console.log("reeeeee");
      return true;
    } else {
      document
        .getElementById("phoneValidation")
        .classList.replace("d-none", "d-block");
      console.log("Moooo");
      return false;
    }
  }
export  function ageValidation() {
    let regex = /^[0-9][0-9]$/;
    let ageInput = document.getElementById("ageInput");
    if (regex.test(ageInput.value)) {
      document
        .getElementById("ageValidation")
        .classList.replace("d-block", "d-none");
      console.log("reeeeee");
      return true;
    } else {
      document
        .getElementById("ageValidation")
        .classList.replace("d-none", "d-block");
      console.log("Moooo");
      return false;
    }
  }
  
export  function passValidation() {
    let regex = /^^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    let passInput = document.getElementById("passInput");
  
    if (regex.test(passInput.value)) {
      document
        .getElementById("passValidation")
        .classList.replace("d-block", "d-none");
      console.log("reeeeee2");
      return true;
    } else {
      document
        .getElementById("passValidation")
        .classList.replace("d-none", "d-block");
      console.log("Moooo2");
      return false;
    }
  }
  
export  function repassValidation() {
    console.log(password2);
    let repassInput = document.getElementById("repassInput");
  
    if (password2 == repassInput.value) {
      document
        .getElementById("repassValidation")
        .classList.replace("d-block", "d-none");
      console.log("reeeeee");
      return true;
    } else {
      document
        .getElementById("repassValidation")
        .classList.replace("d-none", "d-block");
      console.log("Moooo");
      return false;
    }
  }