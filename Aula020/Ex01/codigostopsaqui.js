let lista = document.getElementById("lista")
let filtro = []
let textos = document.getElementById('texto')
let soma  = 0
let quant = 0

function clicar(){
    let numero = document.getElementById("numero")
    numero = Number(numero.value)
    const option1 = document.createElement('option')
    option1.value = numero
    option1.textContent = `VALOR ${numero} ADICIONADO`
    if (filtro.includes(numero) || numero < 1 || numero > 100 ){
    alert("*Utilize um numero valido ou que não esteja na lista*")
    }else{
        lista.appendChild(option1)
        filtro.push(numero)
        soma += numero
        quant++
    }
   
}
function clicar1(){
    const texto = document.createElement("div")
    const texto1 = document.createElement('div')
    const texto2 = document.createElement('div')
    const texto3 = document.createElement('div')
    const texto4 = document.createElement('div')
    const media = soma/quant
    const menorNumero = Math.min(...filtro)
const maiornumero = Math.max(...filtro);
    texto.innerHTML = `Ao todo,foram registrados <strong>${quant}</strong> `   
    texto1.innerHTML = `O menor numero é <strong>${menorNumero}</strong>`
    texto2.innerHTML = `O maior numero é <strong>${maiornumero}</strong>`
    texto3.innerHTML = `A soma de todos os numeros da <strong>${soma}</strong>`
    texto4.innerHTML = `A media dos numeoros é <strong>${media}</strong>`
    if (filtro != ""){
    textos.appendChild(texto)   
    textos.appendChild(texto1)
    textos.appendChild(texto2)
    textos.appendChild(texto3)
    textos.appendChild(texto4)
    }else{
        alert("*Adicione um numero antes de finalizar!*")  
    }
    
}