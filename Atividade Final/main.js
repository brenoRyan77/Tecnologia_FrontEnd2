
var btn = document.querySelector("#btnEnviar");

btn.addEventListener("click", function (event){
  event.preventDefault();

  var form = document.querySelector("#formulario");

  var dados = {}

  dados.nome = form.name.value;
  dados.email = form.email.value;
  dados.msg = form.msg.value;
  dados.maiorIdade = form.mIdade.checked;
  dados.newsletter = form.checkbox.checked;
  dados.idade = parseInt(form.idade.value);

  console.log(dados);
})

var limpar = document.querySelector("#btnLimpar");

limpar.addEventListener("click", function (event){
  window.location.reload(true);
})
