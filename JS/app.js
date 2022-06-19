let ofert_email = document.getElementById("ofert_email")
let principalPage = document.getElementById("principalPage")
let pageLogin = document.getElementById("pageLogin")
let pageRegister = document.getElementById("pageRegister")


console.log("funcionando");

//zerando valor no campo de email

ofert_email.addEventListener("click", () => {
    ofert_email.value = ""
})

//Redirecionando pra a pagina de Login

function paginaLogin() {
    principalPage.classList.add("ocult")
    pageRegister.classList.add("ocult")
    pageLogin.classList.remove("ocult")
}

//Redirecionando para a pagina de Cadastro

function paginaCadastro(){
    principalPage.classList.add("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.remove("ocult")
}

// redirecionando para a pagina Principal

function paginaHome() {
    principalPage.classList.remove("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.add("ocult")
}