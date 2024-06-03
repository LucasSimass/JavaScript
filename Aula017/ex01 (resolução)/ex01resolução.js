function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass =document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value == '' || fim.value == '' || pass.value == ''){
        //alert('Erro,falta dados!')
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML='Contando <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p == 0){
            window.alert('Passo invalido!Considerando passo = 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(var c = i;c <= f;c+= p){
                res.innerText += `${c} ➡️`
            }
        }else{
            //contagem regressiva
            for(var c = i;c >= f;c -= p){
                res.innerHTML +=`${c} ➡️`
            }
        }
        res.innerHTML += `🏴`
    }}