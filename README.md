# Exercício e Revisão - Reprograma (Semana 2)



      Uma expressão que será comparada á cada cláusula case.
     Uma cláusula case que será comparada á expressão.

* Sintaxe switch
 switch (expressão) {
 case valueN:
    //Instruções executadas quando o resultado da expressão for igual á valorN
    [break;]
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    [break;]
}

Caso nenhum caso seja correspondido, então o programa procura pela cláusula opicional default, que, se encontrado, tem o controle transferido à ele, executando suas instruções associadas. Se não ouver uma cláusula default, o programa continua a execução da instrução seguindo para o final do switch.
A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada  e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch.


 * Exercício de Treinamento sobre o uso do Switch
Programinhas que vão retornar valores de acordo com cada caso (existindo, ou não, um break)

-

 * Exercício {reprograma}
 Utilizando constantes, if e operacionais. 

Programinha que vai receber 6 notas,
calcular a média e dizer se a aluna foi aprovada, 
reprovada ou ficou em recuperação.

Regras:
- Para ser aprovada a média tem que ser maior ou igual 7;
- Para ser reprovada a média tem que ser menor que 5;
- Para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7; 