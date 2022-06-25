// Pagina Principal

let titlePage = document.querySelector("title")
let ofert_email = document.getElementById("ofert_email")
let principalPage = document.getElementById("principalPage")

// Pagina de Login

let pageLogin = document.getElementById("pageLogin")
let login = document.getElementById("login")
let authEmail = document.getElementById("authEmail")
let authPassword = document.getElementById("authPassword")
let erroLogin = document.getElementById("erroLogin")

// Pagina de Cadastro

let pageRegister = document.getElementById("pageRegister")
let nome = document.getElementById("nome")
let sobrenome = document.getElementById("sobrenome")
let email = document.getElementById("email")
let celular = document.getElementById("celular")
let senha = document.getElementById("senha")
let confirmSenha = document.getElementById("confirmSenha")
let erroConfirm = document.getElementById("erroConfirm")
let cep = document.getElementById("cep")
let termos = document.getElementById("termos")
let cadastro = document.getElementById("cadastro")
let inputCad = document.getElementsByClassName("inputCad")
let campo = document.getElementsByClassName("campo")

console.log("funcionando");

//Redirecionando para a pagina de Perfil//

function paginaPerfil() {
    window.location.assign("http://127.0.0.1:5500/HTML/perfil.html")
}

//zerando valor no campo de email

ofert_email.addEventListener("click", () => {
    ofert_email.value = ""
})

//Redirecionando pra a pagina de Login

function paginaLogin() {
    principalPage.classList.add("ocult")
    pageRegister.classList.add("ocult")
    pageLogin.classList.remove("ocult")
    titlePage.innerHTML = "Login"
}

//Fazendo login//

login.addEventListener("click", () => {
    if(authEmail.value.length != 0 && authPassword.value.length != 0) {
        paginaPerfil()  
    }else {
        erroLogin.classList.remove("ocult")
    }
})

//Redirecionando para a pagina de Cadastro

function paginaCadastro(){
    principalPage.classList.add("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.remove("ocult")
    titlePage.innerHTML = "Cadastre-se"
}

//Fazendo Cadastro//

cadastro.addEventListener("click", () => {
    
    for (let i = 0; i < inputCad.length; i++) {

        if(inputCad[i].value.length == 0){
            inputCad[i].classList.remove("focus-0")
            inputCad[i].focus()
            campo[i].classList.remove("ocult")
        }else{
            inputCad[i].classList.add("focus-0")
            campo[i].classList.add("ocult")
        }          
    }   

    if (termos.checked === true) { 
    } else {
      termos.focus()
    } 
})

// redirecionando para a pagina Principal

function paginaHome() {
    principalPage.classList.remove("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.add("ocult")
    titlePage.innerHTML = "OnlineShop"
}