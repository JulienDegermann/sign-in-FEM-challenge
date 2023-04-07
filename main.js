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


inputAll = document.querySelectorAll("input")

inputAll.forEach((input) => {
    // console.log(input)
    let error = document.createElement('p')
    error.classList.add('error-message')
    input.parentNode.append(error)
    console.log(error)
    form.addEventListener('submit', (e) => { //add event listener here because can't link errorMessage to external listener
        e.preventDefault()
        if(!input.value) {
            error.innerText = `Le champ ${input.name} doit être rempli`
        } else {
            error.innerText = ``
        }
    })
})






// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     inputAll.forEach((input) => {
//         if(!input.value) {
//             error.innerText = `Le champ ${input.name} doit être rempli`
//         } else {
//             error.innerText = ``
//         }
//     })
    // inputAll.forEach((input) => {
    //     if(!input.value)
    //     {
    //         let error = document.createElement('p')
    //         error.innerText = `Le champ ${input.name} doit être rempli`
    //         error.classList.add('error-message')
    //         input.parentNode.append(error)
    //     }
    // })
    // })

/* 
// eventListener submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // firstname
    if (!firstname.value) {
        let error = document.createElement('p')
        error.innerText = `Le champ ${firstname.name} doit être rempli`
        error.classList.add('error-message')
        firstname.parentNode.append(error)
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
*/