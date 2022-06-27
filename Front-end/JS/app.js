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
let inputCad = document.getElementsByClassName("inputCad")
let campo = document.getElementsByClassName("campo")

console.log("funcionando");

//zerando valor no campo de email

ofert_email.addEventListener("click", () => {
    ofert_email.value = ""
})

//Redirecionando para a pagina de Perfil//

function paginaPerfil() {
    window.location.replace("http://127.0.0.1:5500/Front-end/HTML/perfil.html")
}

//Redirecionando pra a pagina de Login

function paginaLogin() {
    principalPage.classList.add("ocult")
    pageRegister.classList.add("ocult")
    pageLogin.classList.remove("ocult")
    titlePage.innerHTML = "Login"
}

//Fazendo login//

login.addEventListener("click", function() {
    
    if(authEmail.value.length == 0 && authPassword.value.length == 0){
        erroLogin.classList.remove("ocult")
    }
    
    const data = dataLogin()
    console.log(data)
    const url = "http://localhost:3000/auth"
    
    const getUserAll = () => {
        fetch(`${url}/get`)
        .then((response) => {
            return response.json()
            .then((data) => {
                return console.log(data)
            })
        })
        .catch((e) => {
            return console.error(e)
        })
    }

    getUserAll()    

    // fetch(`${url}/login`, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     credentials: "same-origin"
    // })
    //     .then((response) => {
    //         // window.location.href = "../HTML/perfil.html"
    //     })
    //     .catch((e) => {
    //         return console.error(e)
    //     })
})

const dataLogin = () => {
    return {
        "email": authEmail.value,
        "password": authPassword.value
    }
}

// Redirecionando para a pagina de Cadastro

function paginaCadastro(){
    principalPage.classList.add("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.remove("ocult")
    titlePage.innerHTML = "Cadastre-se"
}

//FAZENDO CADASTRO

const init = () => {
    document.getElementById("cadastro").addEventListener("click", submitform);
}

const submitform = (e) => {
    e.preventDefault();

    const data = accessData()
    console.log(data)    
    const url = "http://localhost:3000/auth"

    if(!data) {
        return
    }

    fetch(`${url}/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then((response) => {
            window.location.href = "../HTML/perfil.html"
            return alert("Cadastro realizado com sucesso!")
        })
        .catch((e) => {
            return console.error(e)
        })
}

const accessData = () => {
    return{
        "name": nome.value,
        "sobrenome": sobrenome.value,
        "email": email.value,
        "celular": celular.value,
        "password": senha.value,
        "cep": cep.value
    }

}

init()

//Checando input Cadastro

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