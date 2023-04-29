//Função: Trecho de code que só executa quando e chamamdo/Invocado

//Função void(vazia)
//Função com Parâmetro(s)
//Função Return
//Função Arrow / Arrow Function

//Função Vazia
/*
let valor = 20

function incrementar() {
    valor = valor + 30
}

incrementa()
console.log(`O valor atual é: ${valor}`)
*/

//Função Com Parâmetros
/*
function soma(n1, n2) {
    const somaNumeros = n1 + n2
    console.log(somaNumeros)
}

soma(10, 5)
soma(44, 55)
*/

//Função return
/*
function soma(n1, n2) {
    const somadosNumeros = n1 + n2
    return somadosNumeros
}

const meusNumeros = soma(20, 40)
console.log(meusNumeros)
*/

//Arrow Function

/*
const multi = (n1, n2) => {
    const multiplicacao = n1 * n2
    return multiplicacao
}
console.log(multi(20,2))
*/
const multi = (n1, n2) => n1 * n2 //Na Arrow Function se eu escrever tudo na mesma linha eu nao preciso de return

console.log(multi(90, 2))
