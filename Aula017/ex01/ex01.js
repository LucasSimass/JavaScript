function clicar(){
    var numero = document.getElementById('numero')
    var numero1 = document.getElementById('numero1')
    var numero2 = document.getElementById('numero2')
    var resultado = document.getElementById('resultado')
    numero = Number(numero.value)
    numero1 = Number(numero1.value)
    numero2 = Number(numero2.value)
    var x = 1
    if(numero == "" || numero1 == ""||numero2 == ""){
        alert("Verique seus numeros")
        n
        document.location.reload()
    }else{
        if(numero2 == 0 || numero2 == ""){
        alert('O passo valera 1')
        numero2 = 1
        }else{
            while(numero < numero1 ){
                alert(`${numero}...`)
                numero += numero2
        }
    }
    
    }
    while(numero >= numero1){
        alert(`${numero}...`)
        numero -= numero2
    }
    
}