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
var ContaBanco = /** @class */ (function () {
    function ContaBanco() {
    }
    return ContaBanco;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PessoaFisica.prototype.abrirConta = function (dados) {
        console.log("=========");
        console.log("Nova conta P.Fisica criada com sucesso " + dados.nome);
        console.log("=========");
        return true;
    };
    return PessoaFisica;
}(ContaBanco));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PessoaJuridica.prototype.abrirConta = function (dados) {
        console.log("=========");
        console.log("Nova conta P.Juridica criada com sucesso " + dados.nome);
        console.log("=========");
        return true;
    };
    return PessoaJuridica;
}(ContaBanco));
var joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "1029-x",
    endereco: "Rua 15, bairro centro"
});
var sujeitoprogramador = new PessoaJuridica();
sujeitoprogramador.abrirConta({
    nome: "Matheus Fraga",
    numero: "90201-x",
    endereco: "Avenida dez, centro"
});
