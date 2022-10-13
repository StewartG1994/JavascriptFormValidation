const form = document.querySelector('.form')
const email = document.getElementById('email')
const country = document.getElementById('country')
const passwordInput = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm')
const emailSpan = document.querySelector('.emailError');
const countrySpan = document.querySelector('.countryError');
const passwordSpan = document.querySelector('.passwordError')


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
        passwordSpan.textContent = ''
        passwordSpan.className = 'error';
    }

    else {
        showError(passwordInput, passwordSpan, 'Password')
    }
})



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