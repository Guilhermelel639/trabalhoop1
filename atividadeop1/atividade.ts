const entrada = require("readline-sync")
let totalv = 0
let totalp = 0

for (let i = 0; i < 15; i++) {
    let valor = parseFloat(entrada.question("digite o valor da venda: "));
    let tipo = entrada.question("A venda foi a vista ou parcelada? (V/P): ");

    if (tipo == "v" || tipo == "V") {
        totalv = totalv + valor;
    }
    else if (tipo == "p" || tipo == "P") {
        totalp = totalp + valor
    }
    else{
        console.log("Tipo invalido! Tente novamente.");
        i--;
    }
}