
function contar(...numero: number[]){
    console.log(numero)
}

//contar(1, 2, 3, 87, 21, 31)

function nomes(...nomes: string[]){
    console.log(nomes.length)

    nomes.map(nome => {
        console.log(nome);
    })
}

nomes("Red", "dead", "Redemption")