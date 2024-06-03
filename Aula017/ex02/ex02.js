function clicar(){
        var num = 1
        while (num <= 9){
        var numero = document.getElementById("numero") 
        const tabuada = document.getElementById("tabuada")
        const option1 = document.createElement('option')
        numero = Number(numero.value)
        option1.text = `${numero} x ${num} = ${numero * num}`
        tabuada.appendChild(option1)
        num++
        }
        if (numero == ''){
            alert('Digite um numero valido!')
            document.location.reload()            
        }        
}
function clicar2(){
    window.location.reload()
}


