
let n1 = 87
let n2 = 21

function soma(vr1:number, vr2:number): string{
    let soma = vr1 + vr2;

    if(soma > 100){
        return "maior que 100"
    }else{
        return "Vasco"
    }
}

console.log(soma(n1, n2))

