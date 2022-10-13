const form = document.querySelector('form')
const email = document.getElementById('email')
const country = document.getElementById('country')
const passwordInput = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm')
const emailSpan = document.querySelector('.emailError');
const countrySpan = document.querySelector('.countryError');
const passwordSpan = document.querySelector('.passwordError');
const passwordConfirmSpan = document.querySelector('.passwordConfirmError');
const submitError = document.querySelector('.submitError');

form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!email.validity.valid || !country.validity.valid || !passwordInput.validity.valid || !passwordConfirm.validity.valid) {
      submitError.textContent = 'Please fill out all the fields as required'
      event.preventDefault();
    }
  });


email.addEventListener('input', (event) =>{
    if (email.validity.valid) {
        emailSpan.textContent = '';
        emailSpan.className = 'error';
    }

else {
    showError(email, emailSpan, 'email Address')
 }
})

country.addEventListener('input', (event)=>{
    if(country.validity.valid){
        countrySpan.textContent = ''
        countrySpan.className = 'error'
    }

    else{
        showError(country, countrySpan, 'country name')
    }
})

passwordInput.addEventListener('input', (event) =>{
    if (passwordInput.validity.valid){
        passwordSpan.className = 'error';
        passwordSpan.textContent = ''

    }

    else {
        showError(passwordInput, passwordSpan, 'password with atlest 8 charectors')
    }
})

passwordConfirm.addEventListener('input', (event)=>{
if(passwordInput.value === passwordConfirm.value) {
    passwordConfirmSpan.textContent = '';
    passwordConfirmSpan.className = "error";

    console.log('check')
}

else {passwordMatchError()}

})

function passwordMatchError (){
    passwordConfirmSpan.textContent = 'Passwords must match'
    passwordConfirmSpan.className = "error active";

}




function showError (input, span, error) {

if (input.validity.typeMismatch) {
    span.textContent = `Entered value needs to be a ${error} `
    ;
  }
 else if (email.validity.valueMissing) {
    span.textContent = `You need to enter a ${error} `
}
span.className = "error active";
} 