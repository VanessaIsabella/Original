/*
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
Case sensitive=reconhece letras maiúsculas e minúsculas
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
if (nome.value.length < 3) {
txtNome.innerHTML='Nome Inválido'
txtNome.style.color = 'red'
   } else {
    txtNome.innerHTML='Nome Válido'
    txtNome.style.color = 'green'
   }
}

function validaEmail(){
let txtEmail=document.querySelector('#txtEmail')
if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
txtEmail.innerHTML= 'E-mail Inválido'
txtEmail.style.color='red'
} else {
    txtEmail.innerHTML= 'E-mail Válido'
txtEmail.style.color='green'
}

}

function validaAssunto(){
    let txtAssunto=document.querySelector('#txtAssunto')
if (assunto.value.lenght >= 100){
    txtAssunto.innerHTML= 'Digite no máximo 100 caracteres'
    txtAssunto.style.color='red'
}
}