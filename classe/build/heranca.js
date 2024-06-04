"use strict";
// Herança > quando nós temos uma classe que herda de outra classe
// ClassePAI tem seus atributos e a classe FILHA vai herdar todos atributos do pai alem dos seus proprios atributos
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
var Usuario = /** @class */ (function () {
    function Usuario(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    return Usuario;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(nome, email, cargo, nivel) {
        var _this = 
        // Chamando o cosntrutor da classe pai.
        _super.call(this, nome, email) || this;
        _this.cargo = cargo;
        _this.nivel = nivel;
        return _this;
    }
    return Admin;
}(Usuario));
var usuario1 = new Admin("Matheus", "matheus@teste.com", "Programador", 2);
console.log(usuario1);
console.log(usuario1.nome);
