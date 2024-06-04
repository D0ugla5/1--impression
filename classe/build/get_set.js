"use strict";
// Caso de uso de um JOGO
var Jogo = /** @class */ (function () {
    function Jogo(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    Object.defineProperty(Jogo.prototype, "getServidorIP", {
        //Metodo GET = Para pegar o valor ao inves de acessar diretamente a propriedade
        get: function () {
            console.log("== METODO GET ==");
            return this.servidor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jogo.prototype, "setServidorIP", {
        //Metodo SET = Passar / alterar algum atributo.
        set: function (novoIp) {
            if (this.servidor === novoIp) {
                throw new Error("O novo IP deve ser diferente do IP antigo.");
            }
            this.servidor = novoIp;
        },
        enumerable: true,
        configurable: true
    });
    return Jogo;
}());
var GTA5 = new Jogo("192.168.5.10");
try {
    GTA5.setServidorIP = "192.250.155.10";
}
catch (error) {
    console.log("ERROR: ", error.message);
}
console.log(GTA5.getServidorIP);
