"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.mostraId = function () {
        console.log("ID DO USUARIO: ", this.id);
    };
    return Pessoa;
}());
var ana = new Pessoa("Ana Carol", 29);
console.log("ID DA ANA: ", ana.id);
// console.log(ana);
