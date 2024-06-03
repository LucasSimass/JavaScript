let num = document.querySelector('input#fnum')
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n,i){
    if(i.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert("Valor invalido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()      
}
function finalizar(){
    if (valores.length == 0){
        alert("Coloque valores antes de prosseguir")
    }else{
        let soma = 0
        for(let item in valores){
            soma += valores[item]
        }
        let tot = valores.length
        let media = soma / tot
        const maior = Math.max(...valores)
        const menor = Math.min(...valores)
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> número(s) cadastrados.</p> `
        res.innerHTML += `<p>O maior numero é <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor numero é <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A media dos numeros digitados é ${media}</strong>.</p>`  
    }
}