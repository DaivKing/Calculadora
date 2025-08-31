const entrada = require('prompt-sync')({sigint: false});

do {
    let num1 = Number(entrada("digite o primeiro número: "));
    let num2 = Number(entrada("digite o segundo número: "));
    console.log("1-soma\n2-subtração\n3-multiplicação\n4-divisão")
    let op = entrada("digite o tipo de operação: ");
    console.log(`O resultado:\n${calculadora(op, num1, num2)}`)
    let fim = entrada("Deseja continuar(sim ou nao)? ")
    if (fim == "nao") break;
} while (true);
console.log("programa encerrado!");

function calculadora(a, x, y) {
    if (a == "1") {
        return x+y;
    } else if (a == "2") {
        return x-y;
    } else if (a == "3") {
        return x*y;
    } else if (a == "4") {
       if (x == 0 || y == 0) {
        return "Impossível dividir por 0";
        } else {
         return x/y;
        }
    } else {
        return "Operação inválida";
    }
}