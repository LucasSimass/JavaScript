let num = [2,4,8,9]

for (let i = 0 ;i < num.length;i++){
    console.log(num[i])
}
console.log("--------------------------------------")
let valores = [2,6,8,9,3,4]
for(var p = 0; p <valores.length; p++){
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}
console.log("---------------------------")
let valores1 = [56,69,13,49,53,24]
for (var pos in valores1){
    console.log(valores1[pos])
}
var a = valores1.indexOf(13)

if ( a >-1 ){
    console.log(`o valor esta na posição ${a}`)
}else{
    console.log(`Não possui esse numero`)
} 