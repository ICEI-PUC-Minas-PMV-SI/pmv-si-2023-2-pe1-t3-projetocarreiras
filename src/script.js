// --------------------- Botão de Login -------------------------------
const input = document.querySelector('.nome')
const input2 = document.querySelector('.senha')
const button = document.querySelector('.login_button')
const button2 = document.querySelector('.Criarlogin_button')

document.querySelector('.senha').style.display = "none"
document.querySelector('.login_criar').style.display = "none"
document.querySelector('.Tela_login').style.display = "none"

const validateInput = ({ target }) => {
    if (target.value.length > 6) {
      button.removeAttribute('disabled')
      return
    }
  
    button.setAttribute('disabled', '')
  }

function confir_senha() {
    document.querySelector('.senha').style.display = "block"
    input.setAttribute('disable', '')
    document.querySelector('.login_button').innerHTML = "LOGIN"
}

function TelaCriarConta() {
    document.querySelector('.login').style.display = "none"
    document.querySelector('.registrarse').style.display = "none"
    document.querySelector('.login_criar').style.display = "flex"
    document.querySelector('.Tela_login').style.display = "block"
}

function TelaFazerLogin() {
  location.reload()
    document.querySelector('.login').style.display = "flex"
    document.querySelector('.registrarse').style.display = "block"
    document.querySelector('.login_criar').style.display = "none"
    document.querySelector('.Tela_login').style.display = "none"
}

function Criar_Conta() {

  var key = Math.floor(Math.random() * 100)

  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i)
    if (id == key) {
      Criar_Conta()
    }
  }

  var retorno = 0

  var nome = document.getElementById("_nome").value
  var email = document.getElementById("_email").value
  if (validEmail()) {
    retorno = 1
  }
  var telefone = document.getElementById("_telefone").value
  var cpf = document.getElementById("_cpf").value
  if (validCPF()) {
    retorno = 1
  }
  var senha = document.getElementById("_senha").value
  var conf_senha = document.getElementById("conf_senha").value
  

  if (nome.length < 3) {
    document.getElementById('_nome').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_nome').style.border = "2px solid #15c22c"
  }
  if (senha.length < 6) {
    document.getElementById('_senha').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_senha').style.border = "2px solid #15c22c"
  }
  if ((conf_senha != senha) || (conf_senha.length < 4)) {
    document.getElementById('conf_senha').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('conf_senha').style.border = "2px solid #15c22c"
  }
  if (telefone.length < 15) {
    document.getElementById('_telefone').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_telefone').style.border = "2px solid #15c22c"
  }
  if (retorno > 0) {
    return
  }

  var usuario = {
              nome_ : nome,
              email_ : email,
              tel_ : telefone,
              cpf_ : cpf,
              senha_ : senha
              };
  
  // Armazenar os dados no Local Storage do Navegador
  localStorage.setItem(key, JSON.stringify(usuario))
  
  localStorage.setItem('id_login', key)
  const time = setTimeout(abrir, 800)
    function abrir(){
      window.location = './pages/loading.html'
  }
}

function validEmail() {
  var email = document.getElementById("_email").value

  if (email.length < 7) {
    document.getElementById('_email').style.border = "2px solid #e80c0c"
    return true
  } else {
    document.getElementById('_email').style.border = "2px solid #15c22c"
  }

  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i)
    let dados = localStorage.getItem(id)
    let user
    try {
      user = JSON.parse(dados)
    } catch(e) {
      user = ""
    }

    if (email == user.email_) {
      document.getElementById('_email').style.border = "2px solid #e80c0c"
      return true
    }
  }
  return false
}

function validCPF() {
  var cpf = document.getElementById("_cpf").value

  if (cpf.length < 14) {
    document.getElementById('_cpf').style.border = "2px solid #e80c0c"
    return true
  } else {
    document.getElementById('_cpf').style.border = "2px solid #15c22c"
  }
  
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i)
    let dados = localStorage.getItem(id)
    let user
    try {
      user = JSON.parse(dados)
    } catch(e) {
      user = ""
    }

    if (cpf == user.cpf_) {
      document.getElementById('_cpf').style.border = "2px solid #e80c0c"
      return true
    }
  }
  return false
}

function verifica_login() {

  const email = document.querySelector('.nome').value
  const senha = document.querySelector('.senha').value
  
  for (let i = 0; i < localStorage.length; i++) {
  let id = localStorage.key(i)
  let dados = localStorage.getItem(id)
  let user
  try {
    user = JSON.parse(dados)
  } catch(e) {
    user = ""
  }


  if (email == user.email_) {
      document.querySelector('.msg1').innerHTML = ""
      confir_senha()
      if (senha != "") {
        if (senha == user.senha_) {
          localStorage.setItem('id_login', id)
          const time = setTimeout(abrir, 800)
            function abrir(){
              window.location = './pages/loading.html'
          }
        } else {
          document.querySelector('.msg1').innerHTML = "Senha incorreta"
          document.querySelector('.senha').value = ""
        }
      }
      return
  } else {
      document.querySelector('.msg1').innerHTML = "Usuário incorreto ou inexistente"
  }
  }
  if (document.querySelector('.msg1').innerHTML == "Usuário incorreto ou inexistente") {
    document.querySelector('.nome').value = ""
  }

}
// var input_tel = document.querySelector("input[type=tel]");
var input_tel = document.getElementById('_telefone');
input_tel.addEventListener('keyup', mask_tel);

// var input_cpf = document.querySelector("input[type=text]");
var input_cpf = document.getElementById('_cpf');
input_cpf.addEventListener('keyup', mask_cpf);

function mask_tel(e){
    var caractere = e.target.value.replace(/\D/g,""); 
    caractere = caractere.replace(/^(\d\d)(\d)/g,"($1) $2");
    caractere = caractere.replace(/(\d{5})(\d)/,"$1-$2");

    e.target.value = caractere;

}

function mask_cpf(e){
    var caractere = e.target.value.replace(/\D/g,"");
    caractere = caractere.replace(/(\d{3})(\d)/,"$1.$2");
    caractere = caractere.replace(/(\d{3})(\d)/,"$1.$2");
    caractere = caractere.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

    e.target.value = caractere;

}
  
input.addEventListener('input', validateInput)


// Menu Hamburguer 

function openNav(){
  document.getElementById("myNav").style.width = '100%'; 
}

function closeNav(){
  document.getElementById("myNav").style.width = '0'; 
}