/* 1 - Controle de fluxo da aplicação

  -  O fluxo padrão vai linha a linha executando todas as linhas, mas nós podemos alterar isso.
*/

// Control flow

// console.log('lavar o copo');
// console.log('servir café');

/* 2- IF e ELSE *

Colaboram para que nossa aplicação tome diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

Sua sintaxe é simples, como pode ver a seguir:

if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}
*/

// aplicação que vai medir temperatura de febre

// let temperature = 36.5;

// if(temperature >= 37) {
//   console.log('Febre')
// } else {
//   console.log('Saudável');
// }

// usando mútiplas  condicionais

// let temperature = 37.4;

// if(temperature >= 37) {
//   console.log('Febre alta')
// } else if(temperature < 37.5 && temperature >= 37) {
//   console.log('Febre moderada')
// } else {
//   console.log('Saudável')
// }

// maneiras de escrever

// let temperature = 36.9;
// let highTemperature = temperature >= 37.5;
// let mediumTemperature = temperature < 37.5 && temperature >= 37;

// if(highTemperature) {
//     console.log('Febre alta')
// } else if(mediumTemperature) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

/* 3 - SWITCH
  - tem um papel muito similar ao if e ao else if
*/

// let expression = 'a'
// switch (expression) {
//   case 'a':
//     console.log('a');
//     //código
//     break
//     case 'b':
//       // código para a expression b
//       console.log('b')
//       default:
//         console.log('default');
//         break
// }

// function calculate(number1, operator, number2) {
//   let result = 0;

//   switch (operator) {
//       case '+':
//           result = number1 + number2
//           break
//       case '-':
//           result = number1 - number2 
//           break
//       case '*':
//           result = number1 * number2
//           break
//       case '/':
//           result = number1 / number2 
//           break
//       default:
//           console.log('não implementado')
//           break
//   }

//   return result
// }

// console.log(calculate(4, '%', 8));

/* 4 - Throw e Try/Catch

- throw: disparar, lançar
- try/catch: tentar pegar

- tentar executar um bloco de código e se tiver um erro será disparado um erro,
e podemos capturar esse erro na aplicação
 */

// throw

// function sayMyName(name = '') {
//   if(name === '') {
//     throw 'Nome é obrigatório!'
    // throw vai parar a execução dessa função
//   }

//   console.log('depois do erro');
// }

// try...catch

// try {
//   sayMyName();
// } catch(e) {
//   console.log(e);
// }

/* 5 - Estrutura de repetição */

// for
// A estrutura de repetição for tem a seguinte sintaxe:
// for(inicialização de uma variável; condição de continuação para o loop; expressão final)
// break - para a execução do loop
// continue - pula a execução do momento 


// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


// for- (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 100; i > 0; i--) {
  // controle
//   if(i === 50) {
//     break;
//   }
// console.log(i);
// }

// for (let i = 10; i > 0; i--) {
  // controle
  // pula a execução do momento
//   if(i === 5) {
//     continue;
//   }
// }

// while (enquanto)
// usamos quando não sabemos o momento da parada

// let i = 0;

// while (i < 10) {
//   console.log(i);

//   i++;
// }

// let i = 783838399;

// while (i < 10) {
//   console.log(i);

//   i /= 35;
// }

// for...of

// let myName = 'Isabela';
// let names = ['João', 'Paulo', 'Luis'];

// for (let char of myName) {
//   console.log(char);
// }

// let myName = 'Isabela';
// let names = ['João', 'Paulo', 'Luis'];

// for (let myName of names) {
//   console.log(char);
// }

// for...in

// let person = {
//   name: 'Isabela',
//   age: 29,
//   weight: 56
// }

// for(let property in person) {
//   console.log(property);
//   console.log(person.name);
//   console.log(person[property]);
// }