let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let valor3 = document.getElementById("valor3");
let valor4 = document.getElementById("valor4");
let operador1 = document.getElementById("operador1");
let conta1 = document.getElementById("conta1");
let operador2 = document.getElementById("operador2");
let conta2 = document.getElementById("conta2");

function calculadoraAritmetica(operador, v1, v2) {
    if (operador == '+') {
        return v1 + v2;
    } else if (operador == '-') {
        return v1 - v2;
    } else if (operador == '*') {
        return v1 * v2;
    } else if (operador == '/') {
        return v1 / v2;
    }
}

function calculoLogico(operador, v1, v2) {
    const num1 = Number(v1);
    const num2 = Number(v2);

    if (operador == '&') {
        return num1 & num2;
    } else if (operador == '|') {
        return num1 | num2;
    }
}

function atualizarAritmetico() {
    const num1 = Number(valor1.value);
    const num2 = Number(valor2.value);
    conta1.textContent = calculadoraAritmetica(operador1.value, num1, num2);
}
valor1.addEventListener('input', atualizarAritmetico);
valor2.addEventListener('input', atualizarAritmetico);
operador1.addEventListener('input', atualizarAritmetico);

function atualizarLogico() {
    const r = calculoLogico(operador2.value, valor3.value, valor4.value);
    conta2.textContent = r;
}
valor3.addEventListener('input', atualizarLogico);
valor4.addEventListener('input', atualizarLogico);
operador2.addEventListener('input', atualizarLogico);
