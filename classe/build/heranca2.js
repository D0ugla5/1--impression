"use strict";
// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)
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
/*
  >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da
  classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

  >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
  Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

  >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
  nao podemos alterar ele.
*/
var Usuario = /** @class */ (function () {
    function Usuario(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    return Usuario;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, nome, email, cargo, nivel) {
        var _this = 
        // Chamando o cosntrutor da classe pai.
        _super.call(this, id, nome, email) || this;
        _this.cargo = cargo;
        _this.nivel = nivel;
        return _this;
    }
    Admin.prototype.mudarCargo = function (cargo) {
        console.log("ALTERANDO CARGO PARA: ", cargo);
        console.log("ID DO USUARIO: ", this.id);
    };
    Admin.prototype.acessarAdmin = function () {
        this.mudarCargo("Designer");
    };
    return Admin;
}(Usuario));
var usuario1 = new Admin(123, "Matheus", "matheus@teste.com", "Programador", 2);
usuario1.acessarAdmin();
