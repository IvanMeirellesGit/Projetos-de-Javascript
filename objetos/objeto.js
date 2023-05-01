//Objeto

let pessoa = {
    nome: `Ana Beatriz`,
    idade: 22,
    feliz: true,
    pets: [`Gato Black`, `Gato Carreirinha`],
    carros: {
        Camaro: {
            nomeCarro: `Camaro`,
            placa: `123456`,
            cor: `Amarelo`,
            ano: 2020
        },
        Cite: {
            nomeCarro: `Cite`,
            placa: `654321`,
            cor: `Preto`,
            ano: 2022
        },
    },
    andar: function (km) {
        console.log(`${pessoa.nome} andou ${km}Km.`)
    }
}

pessoa.andar(20)

console.log(pessoa)
console.log(`O nome da pessoa é: ${pessoa.nome}`)
console.log(`A idade de ${pessoa.nome} é de ${pessoa.idade} Anos.`)
console.log(`${pessoa.nome} tem ${pessoa.pets.length} gatos.${pessoa.pets[0]} e ${pessoa.pets[1]} `)

console.log(`${pessoa.nome} Tambêm tem Carros, um ${pessoa.carros.Camaro.nomeCarro}, placa ${pessoa.carros.Camaro.placa} e um ${pessoa.carros.Cite.nomeCarro} placa ${pessoa.carros.Cite.placa}`)