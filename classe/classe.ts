

/*
 ### O que é  uma classe? ###
 >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
 >> Ou seja conjunto de atributos e metodos.
 */

 class Loja{
    //Atributos da nossa classe.
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){
      this.nome = nome;
      this.categoria = categoria;
    }

 }

 const redBurguer = new Loja("Red Buruger", "lanches");

 const sucos = new Loja("Sucao Gelado", "sucos");

//  console.log(redBurguer.nome)
console.log(redBurguer.categoria)

console.log(sucos.nome);