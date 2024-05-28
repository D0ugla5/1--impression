interface soma{
    (v1: number, v2: number):number;
}

let somar: soma = (v1: number, v2: number):number =>{
    console.log("Resusltado", v1+v2);

    return v1+v2
}

const resultado = somar(87, 21)

console.log('Resultado da variavél é : ', resultado)