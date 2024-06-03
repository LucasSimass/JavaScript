
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${horas} horas e ${minutos} minutos!`
    if (horas >= 6 && horas < 12){
        img.src ='pexels-pixabay-53594.jpg'
        document.body.style.backgroundColor = '#3A70DD'
    }else{
        if(horas >=12 && horas <18){
            img.src = 'pexels-hristo-sahatchiev-821357 (1).jpg'
            document.body.style.backgroundColor = '#5D4A2B'
        }else{
            img.src = 'pexels-pixabay-355465 (1).jpg'
            document.body.style.backgroundColor = '#001731'
        }
    }

