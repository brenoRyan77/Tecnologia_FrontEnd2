var btn = document.querySelector("#btn-somar");

btn.addEventListener("click", function(event){
    event.preventDefault();

    var formulario = document.querySelector("#form");
    
    var n1 = parseInt(formulario.n1.value);
    var n2 = parseInt(formulario.n2.value);

    var soma = n1 + n2;
    console.log(soma)

    window.document.write("O resultado da soma entre os valores é de: " + soma);

})