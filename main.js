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



// control if input.values are not empty
inputAll = document.querySelectorAll("input")
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
    errorMark.style.visibility = 'hidden'



    // when submit, add error-message content forEach input that has empty value
    form.addEventListener('submit', (e) => { // add event listener here because can't link errorMessage to external listener
        e.preventDefault()
        if (!input.value) { // if there is no value in the input
            errorMark.innerText = '!'
            errorMark.style.visibility = 'visible'
            error.innerText = `"${input.name}" cannot be empty`// add content in error message
        } else {
            error.innerText = `` // else return erro message empty
            errorMark.style.visibility = 'hidden'
        }
    })
})