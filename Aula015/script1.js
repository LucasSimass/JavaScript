function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value == 0 || fano.value > ano){
        window.alert("verifique os dados e tente novamente")
    }else{
        var sexo = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById("foto")
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 11){
                img.src ="imgs/meninocriança.jpg"
            }else{
                if (idade <18){
                    img.src ="imgs/meninoadolecente.jpg"
                }else{
                    if (idade < 60){
                        img.src ="imgs/homemadulto.jpg"
                    }else{
                        img.src ="imgs/homemidoso.jpg"
                    }
                }
            }
        }else{
            if (sexo[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade <= 11){
                    img.src ="imgs/pexels-pixabay-36755.jpg"
                }else{
                    if (idade <18){
                        img.src ="imgs/meninaadolecente.jpg"
                    }else{
                        if (idade < 50){
                            img.src ="imgs/mulheradulta.jpg"
                        }else{
                            img.src ="imgs/mulheridosa.jpg"
                        }
                    }
                }
            }else{
                if (fano.value.lenght = 0){
                    res.innerHTML= `*Houve um erro,verifique seus dados*!`
                }
        }
        }
        res.innerHTML= `Detectamos: ${genero} de ${idade} anos!`
    }
}