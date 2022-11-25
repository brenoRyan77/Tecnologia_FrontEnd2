
var btn = document.querySelector("#btnEnviar");

btn.addEventListener("click", function (event){
  event.preventDefault();

  var form = document.querySelector("#formulario");

  var dados = {
    nome: String,
    email: String,
    msg: String
  }

  dados.nome = form.name.value;
  dados.email = form.email.value;
  dados.msg = form.msg.value;

  console.log(dados);
})
