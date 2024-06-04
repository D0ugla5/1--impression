"use strict";
/*  >> DECORATORS <<
  Class
  Propriedade
  Métodos
  Parametros ( BEM POUCO USADO )
  GETTERS / SETTERS ( BEM POUCO USADO )
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target = receber o construtor da nossa classe.
// function logInfo(target: any){
//   console.log("Sistema está online!");
// }
// >>> Padrao factory (Fabrica) |  Função que vai retornar a criação do decorator.
function logInfo(mensagem) {
    return function (target) {
        console.log(mensagem + ", " + target);
    };
}
var Sistema = /** @class */ (function () {
    function Sistema() {
    }
    Sistema = __decorate([
        logInfo("Servidor está rodando!")
    ], Sistema);
    return Sistema;
}());
