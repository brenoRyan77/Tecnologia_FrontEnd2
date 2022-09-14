
function somar(){
    var soma = 0
    for (var i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }
    return soma;
}

console.log(somar(1, 2, 3, 4))

const somar2 = (...arguments) => {
    var soma2 = 0
    for (var i = 0; i < arguments.length; i++) {
        soma2 += arguments[i]
    }
    return soma2;
}

console.log(somar2(2, 4, 8, 10))