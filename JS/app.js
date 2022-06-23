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

// Pagina de Perfil

let pagePrincipalPerfil = document.getElementById("pagePrincipalPerfil")
let pageCompras = document.getElementById("pageCompras")
let pageProdutos = document.getElementById("pageProdutos")
let pageFavoritos = document.getElementById("pageFavoritos")
let pagePagamento = document.getElementById("pagePagamento")
let pageConfiguracoes = document.getElementById("pageConfiguracoes")
let pageAjuda = document.getElementById("pageAjuda")


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
    titlePage.innerHTML = "Login"
}

//Fazendo login//

login.addEventListener("click", () => {
    if(authEmail.value.length != 0 || authPassword.value.length != 0) {
        window.location.replace("http://127.0.0.1:5500/HTML/perfil.html");  
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

// Fazendo Cadastro

cadastro.addEventListener("click", () => {
    for (let i = 0; i < inputCad.length; i++) {
            
        if(inputCad[i].value.length == 0){
            inputCad[i].classList.remove("focus-0")
            inputCad[i].focus()
        }else{
            inputCad[i].classList.add("focus-0")
        }

        if (termos.checked === true) { 
        } else {
          termos.focus()
        }          
    }
    
})

// redirecionando para a pagina Principal

function paginaHome() {
    principalPage.classList.remove("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.add("ocult")
    titlePage.innerHTML = "OnlineShop"
}

//TOPICOS PAGINA DE PERFIL//

function paginaPerfilPrincipal() {
    pagePrincipalPerfil.classList.remove("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")
     
}

function paginaCompras() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.remove("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")
     
}

function paginaProdutos() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.remove("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")
     
}

function paginaFavoritos() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.remove("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")
     
}

function paginaPagamento() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.remove("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")
     
}

function paginaConfiguracoes() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.remove("ocult") 
    pageAjuda.classList.add("ocult")
     
}

function paginaAjuda() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.remove("ocult")
     
}