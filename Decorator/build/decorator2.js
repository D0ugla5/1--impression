"use strict";
/*  >> DECORATORS <<
  Class
  Propriedade
  Métodos
  Parametros ( BEM POUCO USADO )
  GETTERS / SETTERS ( BEM POUCO USADO )
 */
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
// function logInfo(mensagem: string){
//   return (target: any) => {
//     console.log(`${mensagem}, ${target}`)
//   }
// }
// @logInfo("Servidor está rodando!")
// class Sistema{
// }
/// ============ PRATICANDO ============
function setIpServidor(novoIp) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ip = novoIp;
                return _this;
            }
            return class_1;
        }(target));
    };
}
var Servidor = /** @class */ (function () {
    function Servidor() {
    }
    Servidor = __decorate([
        setIpServidor("192.168.50.900")
    ], Servidor);
    return Servidor;
}());
var servidor1 = new Servidor();
console.log(servidor1);
