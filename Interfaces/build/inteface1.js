"use strict";
var Name = {
    nome: "Red dead Redemption",
    idade: 21,
    vouf: true,
};
//console.log(Name)
function nam(_a) {
    var nome = _a.nome, idade = _a.idade, vouf = _a.vouf;
    console.log("Seu nome \u00E9 " + nome);
    console.log("Sua idade \u00E9 " + idade);
    console.log("Voc\u00EA \u00E9 " + vouf);
    console.log('=========================');
}
nam({ nome: "Red dead redemption", idade: 6, vouf: true });
nam({ idade: 20, vouf: true });
