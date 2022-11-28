
function enviarForm(){
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
}

function limparForm(){
  window.location.reload(true);
}
