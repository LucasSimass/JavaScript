function tabuada(){
    var num = document.getElementById('txtn')
    let tab = document.getElementById('tabuada')
    if (num.value == ""){
        alert("Digite um numero valido")
    }else{
        var c = 1
        tab.innerHTML = ''
        while (c < 10 ){
            let item = document.createElement('option')
            item.text = `${num.value} x ${c} = ${num.value * c} `
            tab.appendChild(item)
            c++
        }
        

    }
}
