
function logout() {
  localStorage.setItem('id_login', "")
  const time = setTimeout(abrir, 800)
    function abrir(){
    window.location = '../index.html'
  }
}

const validateInput = ({ target }) => {
  if (target.value.length > 6) {
    button.removeAttribute('disabled')
    return
  }

  button.setAttribute('disabled', '')
}

window.onload = () => {
    let id = localStorage.getItem('id_login')
    let dados = localStorage.getItem(id)
    let user = JSON.parse(dados)

    let username = user.nome_
    let userdescricao = user.descricao_
    let usercidade = user.cidade_
    let userpais = user.pais_
    let userestado = user.estado_
    let usersite = user.site_
    let useremail = user.email_
    let usercnpj = user.cnpj_
    let usertel = user.tel_
    let usersenha = user.senha_

    document.querySelector('.username').innerHTML = username
    document.querySelector('.user').innerHTML = username
    document.querySelector('._nome').innerHTML = username
    document.querySelector('.userdescricao').innerHTML = userdescricao
    document.querySelector('._descricao').innerHTML = userdescricao
    document.querySelector('._cidade').innerHTML = usercidade
    document.querySelector('._pais').innerHTML = userpais
    document.querySelector('._estado').innerHTML = userestado
    document.querySelector('._site').innerHTML = usersite
    document.querySelector('._email').innerHTML = useremail
    document.querySelector('._cnpj').innerHTML = usercnpj
    document.querySelector('._telefone').innerHTML = usertel    


    document.querySelector('._nome').value = username
    document.querySelector('._descricao').value = userdescricao
    document.querySelector('._cidade').value = usercidade
    document.querySelector('._pais').value = userpais
    document.querySelector('._estado').value = userestado
    document.querySelector('._site').value = usersite
    document.querySelector('._email').value = useremail
    document.querySelector('._cnpj').value = usercnpj
    document.querySelector('._telefone').value = usertel
    document.querySelector('._senha').value = usersenha

    let email = user.email_
    document.querySelector('._email').value = email

    let cnpj = user.cnpj_
    document.querySelector('._cnpj').value = cnpj

    let tel = user.tel_
    document.querySelector('._telefone').value = tel

    let site = user.site_
    document.querySelector('._site').value = site

    let pais = user.pais_
    document.querySelector('._pais').value = pais

    let estado = user.estado_
    document.querySelector('._estado').value = estado

    let cidade = user.cidade_
    document.querySelector('._cidade').value = cidade

    let senha = user.senha_
    document.querySelector('._senha').value = senha
}

function resetDados() {
  document.getElementById('_nome').style.border = ""
  document.getElementById('_senha').style.border = ""
  document.getElementById('conf_senha').style.border = ""
  document.getElementById('_telefone').style.border = ""
  document.getElementById('_email').style.border = ""
  document.getElementById('_site').style.border = ""
  document.getElementById('_pais').style.border = ""
  document.getElementById('_estado').style.border = ""
  document.getElementById('_cidade').style.border = ""
  document.getElementById('_descricao').style.border = ""

  document.getElementById('_nome').removeAttribute('readonly');
  document.getElementById('_senha').removeAttribute('readonly');
  document.getElementById('conf_senha').removeAttribute('readonly');
  document.getElementById('_telefone').removeAttribute('readonly');
  document.getElementById('_email').removeAttribute('readonly');
  document.getElementById('_site').removeAttribute('readonly');
  document.getElementById('_pais').removeAttribute('readonly');
  document.getElementById('_estado').removeAttribute('readonly');
  document.getElementById('_cidade').removeAttribute('readonly');
  document.getElementById('_descricao').removeAttribute('readonly');

  let id = localStorage.getItem('id_login')
    let dados = localStorage.getItem(id)
    let user = JSON.parse(dados)

    let username = user.nome_
    document.querySelector('._nome').value = username

    let email = user.email_
    document.querySelector('._email').value = email

    let cnpj = user.cnpj_
    document.querySelector('._cnpj').value = cnpj

    let tel = user.tel_
    document.querySelector('._telefone').value = tel

    let senha = user.senha_
    document.querySelector('._senha').value = senha

    let descricao = user.descricao_
    document.querySelector('._descricao').value = descricao
    
    let site = user.site_
    document.querySelector('._site').value = site

    let cidade = user.cidade_
    document.querySelector('._cidade').value = cidade

    let estado = user.estado_
    document.querySelector('._estado').value = estado

    let pais = user.pais_
    document.querySelector('._pais').value = pais
}

function salvarDados() {

  let key = localStorage.getItem('id_login')

  let dados = localStorage.getItem(key)
  let user = JSON.parse(dados)

  var senha1 = user.senha_
  var email1 = user.email_
  var cnpj1 = user.cnpj_


  var nome = document.getElementById("_nome").value
  var site = document.getElementById("_site").value
  var tel = document.getElementById("_telefone").value
  var pais = document.getElementById("_pais").value
  var cidade = document.getElementById("_cidade").value
  var estado = document.getElementById("_estado").value
  var descricao = document.getElementById("_descricao").value
  var email = document.getElementById("_email").value
  var cnpj = document.getElementById("_cnpj").value
  var senha = document.getElementById("_senha").value

  if (email == email1) {
    document.getElementById('_email').style.border = "1px solid #15c22c"
  } else {
    if (validEmail()) {
      retorno = 1
    }
  }
  var tel = document.getElementById("_telefone").value
  var cnpj = document.getElementById("_cnpj").value
  if (cnpj == cnpj1) {
    document.getElementById('_cnpj').style.border = "1px solid #15c22c"
  } else {
  if (validCNPJ()) {
    retorno++
  }
}
  var senha = document.getElementById("_senha").value
  var conf_senha = document.getElementById("conf_senha").value

  if (nome.length < 3) {
    document.getElementById('_nome').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_nome').style.border = "2px solid #15c22c"
  }
  if (senha.length < 4) {
    document.getElementById('_senha').style.border = "1px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_senha').style.border = "1px solid #15c22c"
  }
  if (senha != senha1) {
    if ((senha != conf_senha) || (conf_senha.length < 4)) {
      document.getElementById('conf_senha').style.border = "1px solid #e80c0c"
      retorno++
    } else {
      document.getElementById('conf_senha').style.border = "1px solid #15c22c"
    }
  } else {
    document.getElementById('conf_senha').style.border = "1px solid #15c22c"
  }
  if (tel.length < 14) {
    document.getElementById('_telefone').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_telefone').style.border = "2px solid #15c22c"
  }
  if (descricao.length < 1) {
    document.getElementById('_descricao').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_descricao').style.border = "2px solid #15c22c"
  }
  if (pais.length < 3) {
    document.getElementById('_pais').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_pais').style.border = "2px solid #15c22c"
  }
  if (cidade.length < 3) {
    document.getElementById('_cidade').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_cidade').style.border = "2px solid #15c22c"
  }
  if (estado.length < 2) {
    document.getElementById('_estado').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_estado').style.border = "2px solid #15c22c"
  }
  if (site.length < 7) {
    document.getElementById('_site').style.border = "2px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_site').style.border = "2px solid #15c22c"
  }

  var usuario = {
              nome_ : nome,
              email_ : email,
              tel_ : tel,
              cnpj_ : cnpj,
              senha_ : senha,
              descricao_ : descricao,
              pais_ : pais,
              estado_ : estado,
              cidade_ : cidade,
              site_ : site
              };

  localStorage.setItem(key, JSON.stringify(usuario));
  window.location = '/src/html/navegacao/perfil_empresa.html'
}

function validEmail() {
  var email = document.getElementById("_email").value

  if (email.length < 7) {
    document.getElementById('_email').style.border = "1px solid #e80c0c"
    return true
  } else {
    document.getElementById('_email').style.border = "1px solid #15c22c"
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
      document.getElementById('_email').style.border = "1px solid #e80c0c"
      return true
    }
  }
  return false
}

function validCNPJ() {
    var cnpj = document.getElementById("_cnpj").value
  
    if (cnpj.length < 17) {
      document.getElementById('_cnpj').style.border = "2px solid #e80c0c"
      return true
    } else {
      document.getElementById('_cnpj').style.border = "2px solid #15c22c"
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
  
      if (cnpj == user.cnpj_) {
        document.getElementById('_cnpj').style.border = "2px solid #e80c0c"
        return true
      }
    }
    return false
  }

  var input_tel = document.getElementById('_telefone');
  input_tel.addEventListener('keyup', mask_tel);
  
  function mask_tel(e){
    var caractere = e.target.value.replace(/\D/g,""); 
    caractere = caractere.replace(/^(\d\d)(\d)/g,"($1) $2");
    caractere = caractere.replace(/(\d{5})(\d)/,"$1-$2");
  
      e.target.value = caractere;
  }
