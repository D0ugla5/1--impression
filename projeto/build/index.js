"use strict";
/* const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const buttonSoma = document.getElementById('buttonSomar') as HTMLElement;
const buttonSubtrair = document.getElementById('buttonSubtrair') as HTMLElement;

function somar(a: number, b: number): number {
  return a + b;
}

function subtrair(a: number, b: number): number{
  return a - b;
}

buttonSoma.addEventListener('click', function(){
  const resultado = somar(Number(input1.value), Number(input2.value));
  console.log(resultado);
})

buttonSubtrair.addEventListener('click', function(){
  const resultado = subtrair(Number(input1.value), Number(input2.value));
  console.log(resultado);
}) */
//======Functions menos complexo =======
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var buttonSoma = document.getElementById('buttonSomar');
var buttonSubtrair = document.getElementById('buttonSubtrair');
function operacao(_a) {
    var tipo = _a.tipo, a = _a.a, b = _a.b;
    if (tipo === "SOMAR") {
        return a + b;
    }
    else {
        return a - b;
    }
}
buttonSoma.addEventListener('click', function () {
    var resultado = operacao({
        tipo: "SOMAR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
});
buttonSubtrair.addEventListener('click', function () {
    var resultado = operacao({
        tipo: "SUBTRAIR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log(resultado);
});
