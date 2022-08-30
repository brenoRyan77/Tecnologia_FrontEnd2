
var dados = [ sexoTodos = [], alturaH = [], sexoH = [], alturaM = [], sexoM = [] ];
var sexoHouM;
var alturaHouM;
var soma = 0;

while (sexoTodos.length < 15) {
    sexoHouM = prompt('Digite o seu sexo M ou F: ');
    sexoTodos.push(sexoHouM);

    if (sexoHouM == 'M') {
        sexoH.push(sexoHouM);
        alturaHouM = parseFloat(prompt('Digite a sua altura: '));
        alturaH.push(alturaHouM);
    } else if (sexoHouM == 'F') {
        sexoM.push(sexoHouM);
        alturaHouM = parseFloat(prompt('Digite a sua altura: '));
        alturaM.push(alturaHouM);
    }
}

var todasAlturas = alturaH.concat(alturaM);
todasAlturas.sort((a, b) => a - b);
alert(`A maior altura é ${todasAlturas[14]}cm e a menor altura é de ${todasAlturas[0]}cm`);
console.log(todasAlturas)

for(var i = 0; i < alturaH.length; i++) {
    soma += alturaH[i];
}
var mediaAlturaHomens = soma / alturaH.length;
alert(`A média de altura dos homens é de ${mediaAlturaHomens.toFixed(2)}cm`);

var numeroMulheres = sexoM.length;
alert(`Existem ${numeroMulheres} mulheres!`);
