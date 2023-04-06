// access to html elements (form)
const form = document.querySelector('form') //form
// buttons
const tryButton = document.querySelector('#try') //try button
const submitButton = document.querySelector('#submit') //submit button
console.log(submitButton.value)
// inputs
const firstname = document.querySelector('#first-name') // first-name input
const lastname = document.querySelector('#last-name') // last-name input
const email = document.querySelector('#email') // email input
const password = document.querySelector('#last-password') // password input

// eventListener submit
form.addEventListener("submit", (event) => {

    event.preventDefault();
    // firstname
    if (firstname.value) {
        console.log('le prénom est rempli')
    } else {
        console.error('le prénom est manquant')
    }
    // lastname
    if (lastname.value) {
        console.log('le nom est rempli')
    } else {
        console.error('le nom est manquant')
    }
    // email
    if (email.value) {
        console.log('le mail est rempli')
    } else { 
        console.error('le mail est manquant')
    }
    if (password.value) {
        console.log('le mdp est rempli')
    } else {
        console.error('le mdp est manquant')
    }
})
