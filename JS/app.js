let ofert_email = document.getElementById("ofert_email")
let principalPage = document.getElementById("principalPage")
let pageLogin = document.getElementById("pageLogin")
let pageRegister = document.getElementById("pageRegister")
let pagePrincipalPerfil = document.getElementById("pagePrincipalPerfil")
let pageCompras = document.getElementById("pageCompras")
let pageProdutos = document.getElementById("pageProdutos")
let pageFavoritos = document.getElementById("pageFavoritos")
let pagePagamento = document.getElementById("pagePagamento")
let pageConfiguracoes = document.getElementById("pageConfiguracoes")
let pageAjuda = document.getElementById("pageAjuda")

let titlePage = document.querySelector("title")


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

//Redirecionando para a pagina de Cadastro

function paginaCadastro(){
    principalPage.classList.add("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.remove("ocult")
    titlePage.innerHTML = "Cadastre-se"
}

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