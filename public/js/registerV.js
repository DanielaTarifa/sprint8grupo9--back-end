let errors = {};

const formu = document.getElementById("form");
const firstName = document.getElementById("nombre");
const lastName = document.getElementById("apellido");
const uName = document.getElementById("Nombre de usuario");
const uAvatar = document.querySelector("#avatar");
const uTel= document.getElementById("tel");
const email = document.getElementById("e-mail");
const pass = document.getElementById("contraeña");


let firstNameValidator = () => {

    let feedback = "";
    
    let feedbackElement = firstName.nextElementSibling;


    if (firstName.value.trim() == "") {
        feedback = "El nombre no puede estar vacío"
    }else if (firstName.value.length < 2) {
        feedback = "El nombre no puede tener menos de 2 caracteres"
    }


    if (feedback) {
    firstName.classList.add('error-input');
        errors.firstName = feedback;
    }else {
    firstName.classList.remove('error-input');
        delete errors.firstName;
    }

    
    feedbackElement.innerText = feedback;
}


let  lastNameValidator = () => {

    let feedback = "";

    let feedbackElement = lastName.nextElementSibling;

    if (lastName .value.trim() == "") {
        feedback = "El apellido no puede estar vacío"
    }else if (lastName.value.length < 2) {
        feedback = "El apellido no puede tener menos de 2 caracteres"
    }

    if (feedback) {
    lastName .classList.add('error-input');
        errors.lastName  = feedback;
    }else {
lastName.classList.remove('error-input');
        delete errors.lastName ;
    }

    feedbackElement.innerText = feedback;
}

let  userNameValidator = () => {

    let feedback = "";

    let feedbackElement = uName.nextElementSibling;

    if (uName .value.trim() == "") {
        feedback = "El nombre de usuario no puede estar vacío"
    }

    if (feedback) {
    uName .classList.add('error-input');
        errors.uName  = feedback;
    }else {
uName.classList.remove('error-input');
        delete errors.uName ;
    }

    feedbackElement.innerText = feedback;
}

let  telValidator = () => {

    let feedback = "";

    let feedbackElement = uTel.nextElementSibling;

    if (uTel.value.trim() == "") {
        feedback = "El número no puede estar vacío"
    }else if (uTel.value.length < 10) {
        feedback = "El número debe ser de 10 caracteres"
    }

    if (feedback) {
        uTel.classList.add('error-input');
        errors.uTel = feedback;
    }else {
        uTelclassList.remove('error-input');
        delete errors.uTel;
    }

    feedbackElement.innerText = feedback;
}

let  avatarValidator = () => {

    let feedback = "";

    let feedbackElement = uAvatar.nextElementSibling;

    if (uAvatar.files.length == 0) {
        feedback = "Debes elegir una foto de perfil"
    }else if (uAvatar.files[0].type != 'image/jpeg' && uAvatar.files[0].type !='image/png' && uAvatar.files[0].type !='image/gif') {
        feedback = "El formato del archivo debe ser válido (JPG, JPEG, PNG, GIF)"
    }

    if (feedback) {
        uAvatar.classList.add('error-input');
        errors.uAvatar = feedback;
    }else {
        uAvatar.classList.remove('error-input');
        delete errors.uAvatar;
    }

    feedbackElement.innerText = feedback;
}


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
firstNameValidator();
lastNameValidator();
emailValidator();
userNameValidator();
avatarValidator();
telValidator();
passValidator();

if (Object.keys(errors).length ) {
e.preventDefault();
} else {
alert(`se guardaron correctamente los datos, Bienvenid@ !`)

        }

});

firstName.addEventListener("blur", firstNameValidator);
lastName.addEventListener("blur", lastNameValidator);
uName.addEventListener("blur", userNameValidator);
uAvatar.addEventListener("blur", avatarValidator);
uTel.addEventListener("blur", telValidator);
email.addEventListener("blur", emailValidator);
pass.addEventListener("blur", passValidator);