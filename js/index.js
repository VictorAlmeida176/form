const btnLogin = document.querySelector("#btnLogin").addEventListener("click",()=>{
    let labelEmail = document.querySelector("#labelEmail")
    let email = document.querySelector("#inputEmail")

    let labelSenha = document.querySelector("#labelSenha")
    let senha =document.querySelector("#inputSenha")

    let error = document.querySelector("#error")

    let listaUser = []

    let userValid = {
        nome:"",
        email:"",
        senha:""
    }

    listaUser = JSON.parse(localStorage.getItem("listaUser"))

    listaUser.forEach((item)=>{
        if(email.value == item.emailCad && senha.value == item.senhaCad){
            userValid = {
                nome:item.nomeCad ,
                email:item.emailCad , 
                senha:item.senhaCad

            }
        }
    })

    if(email.value == userValid.email && senha.value == userValid.senha && email.value !="" && senha.value!=""){
        
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token',token)

        localStorage.setItem("userLogado", JSON.stringify(userValid))

        if(localStorage.token == token){
            window.location.href = "html/telaInicio.html"

        }

    }else{
        labelEmail.setAttribute("style", "color:red")
        labelSenha.setAttribute("style", "color:red")
        error.innerHTML = 'Email ou senha invalido. <br/> Preencha todos os campos corretamente '
        error.setAttribute("style" , "color:red; font-size:20px;")
        email.focus()
    }

})