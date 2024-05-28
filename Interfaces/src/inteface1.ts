interface Nova{
    nome?: string //undefiened
    idade: number
    vouf: boolean
}

const Name: Nova = {
    nome: "Red dead Redemption",
    idade: 21,
    vouf: true,
}

//console.log(Name)

function nam({nome,idade,vouf}:Nova): void{
    console.log(`Seu nome é ${nome}`);
    console.log(`Sua idade é ${idade}`);
    console.log(`Você é ${vouf}`);
    console.log('=========================')
}

nam({nome:"Red dead redemption", idade:6, vouf: true})
nam({idade:20, vouf:true})