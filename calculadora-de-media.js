const notinhas = require("readline-sync");

/* [S2] Exercício {reprograma}
Programinha que vai receber 6 notas,
calcular a média e dizer se a aluna foi aprovada, 
reprovada ou ficou em recuperação.

Regras:
- Para ser aprovada a média tem que ser maior ou igual 7;
- Para ser reprovada a média tem que ser menor que 5;
- Para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7; */

console.log ('>>>Será que deu bom? Entre com o valor das notas<<< ')
const Nota1 = notinhas.question ('---Insira a primeira nota---: ')
const Nota2 = notinhas.question ('---Insira a segunda nota---: ')
const Nota3 = notinhas.question ('---Insira a terceira nota---:')
const Nota4 = notinhas.question ('---Insira a quarta nota---:')
const Nota5 = notinhas.question ('---Insira a quinta nota---: ')
const Nota6 = notinhas.question ('---Insira a sexta nota--- :')

const total = parseInt(Nota1) + parseInt(Nota2) + parseInt(Nota3) + parseInt(Nota4) + parseInt(Nota5) + parseInt(Nota6) 
console.log ('--- Soma das médias ---: ' +total.toFixed(2))

const mediaFinal = total/6
console.log('---Média Final--- ' + mediaFinal.toFixed(2)) 

if(mediaFinal >= 5 && mediaFinal <7) {
    console.log ('===Quase, ein?! Vamos de recuperação!===' )
} else if (mediaFinal >=7 ) {
    console.log ('=== Aprovadíssimxxxxx!!!')
} else {
    console.log ('=== Não deu pra te ajudar, migx! Está reprovada :(')
}
