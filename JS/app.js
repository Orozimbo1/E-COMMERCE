let ofert_email = document.getElementById("ofert_email")
let register = document.getElementById("register")

console.log("funcionando");

//zerando valor no campo de email

ofert_email.addEventListener("click", () => {
    ofert_email.value = ""
})

// efeito temporario

register.addEventListener("mousemove", () => {
    register.style.backgroundColor = "#f11319fe"
})

register.addEventListener("mouseleave", () => {
    register.style.backgroundColor = "#ff002bfd"
})

register.addEventListener("mousedown", () => {
    register.style.backgroundColor = "#ac132cfd"
})

register.addEventListener("mouseup", () => {
    register.style.backgroundColor = "#ff002bfd"
})