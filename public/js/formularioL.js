let errors = {};

const formu = document.getElementById("form");
const email = document.getElementById("email");
const pass = document.getElementById("password");


let  emailValidator  = () => {

let feedback = "";

let feedbackElement =email.nextElementSibling;

if ( email.value.trim() == "") {
    feedback = "El email es obligatorio"
}

if (feedback) {
email.classList.add('error-input');
    errors.email = feedback;
}else {
email.classList.remove('error-input');
    delete errors.email;
}

feedbackElement.innerText = feedback;
}

let passValidator= () => {

let feedback =" ";
let feedbackElement = pass.nextElementSibling;

if ( pass.value.trim() == "") {
   feedback = "La constraseña no puede estar vacía"
}else if (pass.value.length < 8) {
   feedback = "La contraseña debe ser de 8 caracteres"
}

if (feedback) {
pass.classList.add('error-input');
    errors.pass = feedback;
}else {
pass.classList.remove('error-input');
delete errors.pass;
        }

feedbackElement.innerText = feedback;
}

formu.addEventListener("submit", (e) => {
emailValidator();
passValidator();


if (Object.keys(errors >=1 ).length) {
e.preventDefault();
} else {
alert(`Bienvenid@ de nuevo!`)
}

});


email.addEventListener("blur", emailValidator);
pass.addEventListener("blur", passValidator);