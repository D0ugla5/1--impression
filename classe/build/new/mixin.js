"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applyMixin_1 = require("./mixin/applyMixin");
var Automovel = /** @class */ (function () {
    function Automovel() {
    }
    Automovel.prototype.ligar = function () {
        console.log("AUTOMOVEL LIGADO COM SUCESSO!");
    };
    Automovel.prototype.desligar = function () {
        console.log("DESLIGANDO AUTOMOVEL");
    };
    return Automovel;
}());
var Especificacao = /** @class */ (function () {
    function Especificacao(descricao) {
        this.descricao = descricao;
    }
    return Especificacao;
}());
var Carro = /** @class */ (function () {
    function Carro(nome) {
        this.nome = nome;
    }
    return Carro;
}());
applyMixin_1.applyMixins(Carro, [Automovel, Especificacao]);
var gol = new Carro("Gol 1.6");
gol.ligar();
gol.descricao = "Modelo completo, automatico";
console.log(gol);
gol.desligar();
