
function cadastroDaLoja(nome: string, idade: number, cidade = "São josé"): void {
    let data = {nome, idade, cidade};
    console.log(data);
}

cadastroDaLoja("Douglas", 20)