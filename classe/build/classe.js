"use strict";
/*
 ### O que é  uma classe? ###
 >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
 >> Ou seja conjunto de atributos e metodos.
 */
var Loja = /** @class */ (function () {
    function Loja(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    return Loja;
}());
var redBurguer = new Loja("Red Buruger", "lanches");
var sucos = new Loja("Sucao Gelado", "sucos");
//  console.log(redBurguer.nome)
console.log(redBurguer.categoria);
console.log(sucos.nome);
