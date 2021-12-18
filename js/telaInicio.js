let btnSair = document.querySelector("#btnSair")
let nomeUSer = document.querySelector("#nomeUser")

let userLogado = JSON.parse(localStorage.getItem("userLogado"))

nomeUSer.innerHTML = `Olá ${ userLogado.nome}`

if(localStorage.getItem("token")==null){
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../index.html"
}

btnSair.addEventListener("click",()=>{
    localStorage.removeItem("token")
    window.location.href = "../index.html"

})