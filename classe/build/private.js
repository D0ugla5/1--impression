"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta() {
        //Private: Ele nao pode ser acessado ou modificado fora da classe
        this.limite = 450;
    }
    Conta.prototype.aumentarLimit = function (quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log("Agora seu limite \u00E9: " + this.limite);
        }
        else {
            console.log("Infelizmente seu limite foi reprovado");
        }
    };
    Conta.prototype.solicitarLimite = function (quantidade) {
        return this.aumentarLimit(quantidade);
    };
    Conta.prototype.solicitarLimiteApp = function (estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimit(quantidade);
        }
        else {
            return false;
        }
    };
    return Conta;
}());
var BancoAfiliado = /** @class */ (function (_super) {
    __extends(BancoAfiliado, _super);
    function BancoAfiliado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BancoAfiliado.prototype.limiteAfiliado = function () {
        return this.solicitarLimite(950);
    };
    return BancoAfiliado;
}(Conta));
var fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
console.log("=================");
// console.log(fulano);
var joao = new BancoAfiliado();
joao.limiteAfiliado();
console.log(joao);
