const formBtn = document.getElementById("btn")
const form = document.getElementById("email-form")
const inputEmail = document.getElementById("email")
const errorMessage = document.getElementById("error-message")
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let isFormInputCorrect = true

form.addEventListener("submit", e => {
    e.preventDefault()

    if(inputEmail.value===""){
        isFormInputCorrect = false
        errorMessage.textContent = "Oops! Please add your email"
        if(window.innerWidth <= 767) {
            inputEmail.style.border = "2px solid var(--red)"
        }
        else{
            form.style.border = "2px solid var(--red)"
        }
    }
    else if(!regex.test(inputEmail.value)){
        isFormInputCorrect = false
        errorMessage.textContent = "Oops! Please check your email"
        if(window.innerWidth <= 767) {
            inputEmail.style.border = "2px solid var(--red)"
        }
        else{
            form.style.border = "2px solid var(--red)"
        }
    }
    else{
        isFormInputCorrect = true
        errorMessage.textContent = ""
        if(window.innerWidth <= 767) {
            inputEmail.style.border = "none"
        }
        else{
            form.style.border = "none"
        }
    }
    
    form.reset()

})

function resizeWindow(){
    if(!isFormInputCorrect){
        if(window.innerWidth <= 767){
            form.style.border = "none"
            inputEmail.style.border = "0.125rem solid var(--red)"
        }
        else{
            form.style.border = "0.125rem solid var(--red)"
            inputEmail.style.border = "none"
        }
    }
}

window.onresize = resizeWindow