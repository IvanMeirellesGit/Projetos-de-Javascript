//Objeto

let pessoa = {
    nome: `Ana Beatriz`,
    idade: 22,
    feliz: true,
    pets: [`Gato Black`, `Gato Carreirinha`],
    carros: {
        camaro: {
            placa: `123456`,
            cor: `Amarelo`
            ano: 2020
        }
        Cite: {
            placa: `654321`
            cor: `Preto`
            ano: 2022
        }
    }
}

console.log(pessoa)
console.log(`O nome da pessoa é: ${pessoa.nome}`)
console.log(`A idade de ${pessoa.nome} é de ${pessoa.idade} Anos.`)
console.log(`${pessoa.nome} tem ${pessoa.pets.length} gatos. ${pessoa.pets[0]} e ${pessoa.pets[1]}`)