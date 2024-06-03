let num = [5,8,2,9,3]

num[5] = 69
num.push(7)

console.log(num)

console.log(`Nosso vetor é o ${num}`)

console.log(`O primeiro valor é ${num[0]}`)

console.log(`A quantidade de elementos é de ${num.length}`)

//É organizado pelo numero maior ou seja 69 é menor que 9 pq 69 conta pelo 6 e 9 pelo 9.
console.log(`Organizando os elementos ${num.sort()}`)