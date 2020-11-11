/* Primeiro passo 
 - definir uma const e chamar o readline */

const notinhas = require("readline-sync");

/* Segundo passo
- inserir os inputs para as notas*/


console.log ('>>>Será que deu bom? Entre com o valor das notas<<< ')
const Nota1 = notinhas.question ('---Insira a primeira nota---: ')
const Nota2 = notinhas.question ('---Insira a segunda nota---: ')
const Nota3 = notinhas.question ('---Insira a terceira nota---:')
const Nota4 = notinhas.question ('---Insira a quarta nota---:')
const Nota5 = notinhas.question ('---Insira a quinta nota---: ')
const Nota6 = notinhas.question ('---Insira a sexta nota--- :')

/* Terceiro passo
- Estabelecendo a regra para a soma total;
ParseInt = Analisa um argumento string, e retorna um numero inteiro.
toFixed = Esse método converte um número em uma string, arredondando 
esse número ao número de casa decimais passado por argumento.*/

const total = parseInt(Nota1) + parseInt(Nota2) + parseInt(Nota3) + parseInt(Nota4) + parseInt(Nota5) + parseInt(Nota6) 
console.log ('--- Soma das médias ---: ' +total.toFixed(2))

const mediaFinal = total/6
console.log('---Média Final--- ' + mediaFinal.toFixed(2)) 


/* Quarto passo
- if = se a condição for verdadeira, o código aqui dentro será executado.
- else if = se a condição anterior não for verdadeira e a condição atual for, o código aqui dentro será executado
- else = se as condições anteriores não forem verdadeiras, o código aqui dentro será executado */

if(mediaFinal >= 5 && mediaFinal <7) {
    console.log ('===Quase, ein?! Vamos de recuperação!===' )
} else if (mediaFinal >=7 ) {
    console.log ('=== Aprovadíssimeeeeee!!!')
} else {
    console.log ('=== Não deu pra te ajudar, migue! Está reprovade :(')
}
