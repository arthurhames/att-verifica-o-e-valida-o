/*
gerador 8 numeros aleatorios
adicionar 0001 ao final dos 8 digitos
para gerar o 13 digito: multiplico pelo array 543298765432
somo tudo
faço a divisão
pego o modulo da divisão
verificao se o resultado é menor q dois
*/
let cnpj = Math.floor(Math.random() * 100000000)
cnpj = cnpj.toString() + '0001'
array_cnpj = cnpj.split('')
array_multiplicaçao = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
let soma =0
for(let i=0; i<array_cnpj.length; i++){
    soma += array_cnpj[i] *array_multiplicaçao[i]
}
let resto = soma %11
let digito1
if(resto<2){
    digito1 =0
}else{
    digito1= 11-resto
}
console.log(digito1)