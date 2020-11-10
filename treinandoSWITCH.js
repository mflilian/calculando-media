/* Treinando o uso do switch
Primeiro caso sem o uso do break, segundo caso usando o break */

const input = require("readline-sync");

console.log(' == Bem-vinde aos animais da arca == ')
var Animal = input.question('Qual animalzinho vc quer, b ??????')

var Animal = 'Girafa';
switch (Animal) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Gato':
    case 'Papagaio':
    case 'Galinha':
    case 'Porco':
        console.log('Esse animal irá para Arca de Noé');
        break;
    case 'Dinossauro':
    case 'Aquaticos':
    case 'Bolsonaro':
    default:
        console.log('Esse animal não vai.');
}

/* Outro exemplinho bem básico */

console.log(' == bem-vinda ao cardapio online do mercadinho organico == ')
const produto = input.question('De qual produto deseja saber o preço? ')

switch (produto) {
  case 'laranja':
    console.log('laranja custa 30 centavos')
    break;
  case 'manga':
    console.log('manga é 3 reais.')
    break;
  case 'mamao':
    console.log('manga e mamão custam 2.79 reais.')
    break;
  case 'limao':
    console.log('limao é 1 real')
    break;
  default:
    console.log('desculpe, nao temos o produto desejado')
}
