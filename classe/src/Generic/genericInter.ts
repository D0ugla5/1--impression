
interface NewProduct<v extends number>{
  nome: string;
  preço: v;
  formatar(valor: v ): string;
}

const arroz: NewProduct<number> = {
  nome: "Arroz Branco",
  preço: 1500,
  formatar(valor: number): string{ 

    let valorForm = valor.toLocaleString('pt-br', 
    {
      style: "currency",
      currency: "BRL",
    }
  )
  return valorForm
  }
}
console.log(arroz)

console.log(arroz.formatar(1500))