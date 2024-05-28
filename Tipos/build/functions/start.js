"use strict";
var n1 = 87;
var n2 = 21;
function soma(vr1, vr2) {
    var soma = vr1 + vr2;
    if (soma > 100) {
        return "maior que 100";
    }
    else {
        return "Vasco";
    }
}
console.log(soma(n1, n2));
