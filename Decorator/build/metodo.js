"use strict";
// Decorator Método, ele só é chamado quando nosso método for chamado em algum local.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function verificaPessoa(idade) {
    return function (target, key, descriptor) {
        // console.log("Target: ", target);
        // console.log("Key: ", key);
        // console.log("Descriptor: ", descriptor);
        var metodoOriginal = descriptor.value; // Salvar nosso metodo original
        // Reescrever nosso método.
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Estamos cadastrando como Pessoa menor de idade");
                // Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }
            else {
                console.log("Adulto cadastrado no sistema");
                // Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }
        };
    };
}
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.cadastrarPessoa = function () {
        console.log("Bem vindo " + this.nome + " ao sistema.");
    };
    __decorate([
        verificaPessoa(16)
    ], Pessoa.prototype, "cadastrarPessoa", null);
    return Pessoa;
}());
var pessoa1 = new Pessoa("Matheus F");
pessoa1.cadastrarPessoa();
