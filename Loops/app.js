/* Loops:
for in
for of
*/
let aparelhos = [`Celular`, `Fone de Ouvido`, `Microfone`, `Mouse`]
let fruta = {
    nome: `Banana`,
    preço: 9.99,
    unidade: 1,
}

for (let valor in fruta) {
    console.log(fruta[valor])
}
console.log()

for (let valor of aparelhos) {
    console.log(valor)
}