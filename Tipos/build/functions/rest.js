"use strict";
function contar() {
    var numero = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numero[_i] = arguments[_i];
    }
    console.log(numero);
}
//contar(1, 2, 3, 87, 21, 31)
function nomes() {
    var nomes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nomes[_i] = arguments[_i];
    }
    console.log(nomes.length);
    nomes.map(function (nome) {
        console.log(nome);
    });
}
nomes("Red", "dead", "Redemption");
