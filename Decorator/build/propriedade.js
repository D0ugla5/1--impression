"use strict";
// Propriedade Decorator.
function validaNome(tamanho) {
    // target = cosntrutor da nossa classe
    // key = nossa propriedade
    return function (target, key) {
        var valor = target[key];
        var getter = function () { return valor; };
        var setter = function (value) {
            if (value === "") {
                console.log("Você nao pode deixar em branco");
            }
            else if (value.length < tamanho) {
                // se for menor
                console.log("Você nao pode criar com esse tamanho");
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
var Jogo = /** @class */ (function () {
    function Jogo(nome, titulo) {
        this.nome = nome;
        this.titulo = titulo;
    }
    return Jogo;
}());
var jogo1 = new Jogo("GTA 5 Online", "Jogo");
// console.log(jogo1.nome);
console.log(jogo1.titulo);
