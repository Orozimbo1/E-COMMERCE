let pagePrincipalPerfil = document.getElementById("pagePrincipalPerfil")
let pageCompras = document.getElementById("pageCompras")
let pageProdutos = document.getElementById("pageProdutos")
let pageFavoritos = document.getElementById("pageFavoritos")
let pagePagamento = document.getElementById("pagePagamento")
let pageConfiguracoes = document.getElementById("pageConfiguracoes")
let pageAjuda = document.getElementById("pageAjuda")
let inputDadosPerfil = document.getElementsByClassName("input_dados_perfil")
let alterarDadosPerfil = document.getElementById("alterarDadosPerfil")
let salvarDadosPerfil = document.getElementById("salvarDadosPerfil")

console.log("funcionando")

//TOPICOS PAGINA DE PERFIL//

//Perfil//

function paginaPerfilPrincipal() {
    pagePrincipalPerfil.classList.remove("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")    
}

//Dados do Perfil

let confirm = 0
alterarDadosPerfil.addEventListener("click", () => {

    if(confirm == 0) {
        for (let i = 0; i < inputDadosPerfil.length; i++) {
            inputDadosPerfil[i].removeAttribute("disabled")
        }
        alterarDadosPerfil.innerHTML = "Cancelar"
        confirm = 1
    }else{
        // for (let i = 0; i < inputDadosPerfil.length; i++) {
        //     inputDadosPerfil[i].setAttribute("disabled", "disabled")
        // }
        // alterarDadosPerfil.innerHTML = "Alterar"
        // confirm = 0
        location.reload()
    }
})

salvarDadosPerfil.addEventListener("click", () => {
    for (let i = 0; i < inputDadosPerfil.length; i++) {
        inputDadosPerfil[i].setAttribute("disabled", "disabled")
    }    
    alterarDadosPerfil.innerHTML = "Alterar"
    confirm = 0
})

//Compras//

function paginaCompras() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.remove("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")     
}

//Produtos//

function paginaProdutos() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.remove("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")     
}

//Favoritos//

function paginaFavoritos() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.remove("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")     
}

//Pagamento//

function paginaPagamento() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.remove("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.add("ocult")    
}

//Configuracoes//

function paginaConfiguracoes() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.remove("ocult") 
    pageAjuda.classList.add("ocult")
}

//Ajuda//

function paginaAjuda() {
    pagePrincipalPerfil.classList.add("ocult")
    pageCompras.classList.add("ocult")
    pageProdutos.classList.add("ocult") 
    pageFavoritos.classList.add("ocult")
    pagePagamento .classList.add("ocult")
    pageConfiguracoes.classList.add("ocult") 
    pageAjuda.classList.remove("ocult")     
}