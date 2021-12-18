let errorSuccess = document.querySelector("#error-success")

let nome = document.querySelector("#inputNome")
let labelNome = document.querySelector("#labelNome")
let validaNome = false

let email =document.querySelector("#inputEmail")
let labelEmail = document.querySelector ("#labelEmail")
let validaEmail = false

let senha =document.querySelector("#inputSenha")
let labelSenha =document.querySelector("#labelSenha")
let validaSenha = false

let confirmSenha =document.querySelector("#inputConfirmSenha")
let labelConfirmSenha =document.querySelector("#labelConfirmSenha")
let validaConfirmSenha = false 



// Events
nome.addEventListener("blur",()=>{
    if (nome.value.length <= 2) {
        labelNome.setAttribute("style",'color:red')
        nome.setAttribute("style","border:solid #8B0000 1px" )
        labelNome.innerHTML = "Insira no mínimo três caracteres"
        validaNome = false
    }else {
        labelNome.setAttribute("style",'color:#20ff88')
        nome.setAttribute("style","border:none" )
        labelNome.innerHTML = "Nome:"
        validaNome = true

    }
})
 
email.addEventListener("blur",()=>{

    if(email.value.length <=5 || email.value=="" || email.value.indexOf('@') == -1 ||email.value.indexOf('.com')  == -1  ){
        labelEmail.innerHTML="Insira endereço de email válido"
        email.setAttribute("style","border:solid #8B0000 1px" )
        labelEmail.setAttribute("style",'color:red')
        validaEmail = false

    }else{
        labelEmail.setAttribute("style",'color:#20ff88')
        email.setAttribute("style","border:none" )
        labelEmail.innerHTML="Email:"
        validaEmail = true
    }
})

senha.addEventListener("blur",()=>{
    if (senha.value.length>5 && senha.value.match(/[@#$%&*]/)) {
        labelSenha.innerHTML="Senha:"
        labelSenha.setAttribute("style","color:#20ff88")
        senha.setAttribute("style","border:none" )
        validaSenha = true

    } else {
        labelSenha.innerHTML="Insira uma senha com pelo menos 5 letras e um caractere especial"
        senha.setAttribute("style","border:solid #8B0000 1px" )
        labelSenha.setAttribute("style",'color:red')
        validaSenha = false
    }
})

confirmSenha.addEventListener("blur",()=>{
    if (confirmSenha.value === senha.value){
        labelConfirmSenha.innerHTML="Senha:"
        labelConfirmSenha.setAttribute("style","color:#20ff88")
        validaConfirmSenha = true 
    } else {
        labelConfirmSenha.innerHTML= "As senhas não correspondem"     
        labelConfirmSenha.setAttribute("style",'color:red')
        validaConfirmSenha = false 
        
    }    
})    




// Revelar senha e confirma senha
let eyeSenha = document.querySelector("#eyeSenha")
.addEventListener("click",function(){
    let campoSenha = document.querySelector("#inputSenha")
        if(campoSenha.getAttribute('type')=="password"){
            campoSenha.setAttribute('type','text')
        }else{
            campoSenha.setAttribute('type','password')
        }
})

let eyeConfirmSenha = document.querySelector("#verConfirmSenha")
.addEventListener("click",function(){
    let campoSenha = document.querySelector("#inputConfirmSenha")
    if(campoSenha.getAttribute('type')=="password"){
        campoSenha.setAttribute('type','text')
    }else{
        campoSenha.setAttribute('type','password')
    }
})
// Fim revelar senha

const cadastrar = ()=>{
if(validaNome && validaEmail && validaSenha && validaConfirmSenha){
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push({
        nomeCad:nome.value ,
        emailCad:email.value ,
        senhaCad:senha.value
    })
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    
    errorSuccess.innerHTML="Cadastrando..."
    errorSuccess.setAttribute("style","font-size:25px")
    window.location.href="../index.html"
}else{
    errorSuccess.innerHTML="Preencha todos os campos"
    errorSuccess.setAttribute("style","font-size:20px; color:red")
    }    
}    


