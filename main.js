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
    
    form.forEach((input) => {
        console.log(input)
        if (input.value) {
            return
        } else {
            console.log(input + ' non rempli')
            return
        }

    })
})
