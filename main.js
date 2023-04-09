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

// check email format input



// control if input.values are not empty

const inputAll = document.querySelectorAll("input")

inputAll.forEach((input) => {
    // console.log(input)
    let error = document.createElement('p') // create new <p> called error
    error.classList.add('error-message') // add .error-message class for css style
    input.parentNode.append(error) // add the new <p> in HTML after last child's element parent (after this input)


    // add ! mark in input if error
    let errorMark = document.createElement('p') // create div for adding the mark
    errorMark.classList.add('error-mark') // add .error-mark class for css style
    // console.log(errorMark)
    // input.parentNode.append(errorMark)
    input.parentNode.append(errorMark)
    errorMark.innerText = '!'
    errorMark.style.visibility = 'hidden'



    // function to check email format input
    const checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // when submit, add error-message content forEach input that has empty value
    form.addEventListener('submit', (e) => { // add event listener here because can't link errorMessage to external listener
        e.preventDefault()
        if (!input.value) { // if there is no value in the input
            errorMark.style.visibility = 'visible'
            error.innerText = `"${input.name}" cannot be empty`// add content in error message
            input.style.borderColor = 'hsl(0, 100%, 74%)'
        } else if (input.id === 'email' && !(input.value.match(checkMail))) {
            errorMark.style.visibility = 'visible'
            error.innerText = `Looks like this is not an email`// add content in error message
            input.style.color = 'hsl(0, 100%, 74%)'
            input.style.borderColor = 'hsl(0, 100%, 74%)'
        } else if (input.id === 'password' && input.value.length < 6) {
            errorMark.style.visibility = 'visible'
            error.innerText = `Looks like your password is too short`// add content in error message
            input.style.color = 'hsl(0, 100%, 74%)'
            input.style.borderColor = 'hsl(0, 100%, 74%)'
        } else {
            error.innerText = `` // else return erro message empty
            errorMark.style.visibility = 'hidden'
            input.style.borderColor = ''
            input.style.color = ''

        }
    })
})


