"use strict";
var arroz = {
    nome: "Arroz Branco",
    preço: 1500,
    formatar: function (valor) {
        var valorForm = valor.toLocaleString('pt-br', {
            style: "currency",
            currency: "BRL",
        });
        return valorForm;
    }
};
console.log(arroz);
console.log(arroz.formatar(1500));
