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
    Loja.prototype.criarLoja = function () {
        console.log("Loja " + this.nome + ", categoria: " + this.categoria);
    };
    Loja.prototype.emitirPedido = function (mesa) {
        var pedidos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            pedidos[_i - 1] = arguments[_i];
        }
        pedidos.map(function (pedido) {
            console.log("Saindo novo pedido: " + pedido);
        });
        return "Pedido na mesa: " + mesa;
    };
    Loja.prototype.mudarStatus = function (status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        }
        else {
            console.log("LOJA FECAHDA!");
        }
    };
    return Loja;
}());
var redBurguer = new Loja("Red Burguer", "lanches");
//  console.log(redBurguer.nome)
// redBurguer.criarLoja()
// const retornoLoja = redBurguer.emitirPedido(48, "Suco Gelado", "Hamburguer duplo", "Coca 2L")
// console.log(retornoLoja);
redBurguer.mudarStatus("FECHADO");
