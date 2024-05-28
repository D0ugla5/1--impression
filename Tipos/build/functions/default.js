"use strict";
function cadastroDaLoja(nome, idade, cidade) {
    if (cidade === void 0) { cidade = "São josé"; }
    var data = { nome: nome, idade: idade, cidade: cidade };
    console.log(data);
}
cadastroDaLoja("Douglas", 20);
