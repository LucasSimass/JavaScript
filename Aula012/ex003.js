var agora = new Date()
var dia_sem = agora.getDay()


switch(dia_sem){

    case 0:
        console.log('Hoje é domingo')
        break
    case 1: 
        console.log('Hoje é segunda')
        break
    case 2: 
        console.log('Hoje é terça-feira')
        break
    case 3: 
        console.log('Hoje é quarta-feira')
        break
    case 4: 
        console.log('Hoje é quinta-feira')
        break
    case 5 :
        console.log('Hoje é sexta')
        break
    case 6: 
        console.log('Hoje é sabado')
        break
    default:
        console.log("(ERROR) Dia invalido")
    }