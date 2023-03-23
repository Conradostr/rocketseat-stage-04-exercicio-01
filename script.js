/*

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/

let numberOne = Number(prompt("Digite o Primeiro Numero:"))
let numberTwo = Number(prompt("Digite o Segundo numero Numero:"))

alert(`A soma é: ${numberOne + numberTwo}`)
alert(`A Subtração é: ${numberOne - numberTwo}`)
alert(`A Multplicação é: ${numberOne * numberTwo}`)
alert(`A divisão é: ${numberOne / numberTwo}`)
alert(`O resto é: ${numberOne % numberTwo}`)

if((numberOne + numberTwo) % 2 == 0){
  alert("A soma dos numeros é par")
}else {
  alert("A soma dos numeros é impar")
}

if(numberOne == numberTwo){
  alert("Os numeros são iguais")
}else{
  alert("Os numeros são diferentes")
}