// 1 - FUNCTIONS

//criar um aplicativo de frases motivacionais

// console.log("Estudar é muito bom!");
// console.log("Paciência é persistência");
// console.log("Revisão é mãe do aprendizado!");

// declaration - declaração da função
// function statement

// function createPhrases() {
// console.log("Estudar é muito bom!");
// console.log("Paciência e persistência");
// console.log("Revisão é mãe do aprendizado!");
// }

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
// createPhrases();

// console.log("Fim do programa!");

// 2 - ARGUMENTOS E PARÂMETROS
// function expression
// function anonymous
// parâmetros (paramenters)
// const sum = function(number1, number2) {
//   console.log(number1 + number2)
// }

// sum(2, 3); //arguments = argumentos

// 3 - RETORNANDO VALORES DENTRO DA FUNÇÃO
// const sum = function(number1, number2) {
//   let total = number1 + number2
//   return total
// }

// let number1 = 34;
// let number2 = 25
// sum(number1, number2); //arguments = argumentos
// console.log(`O número 1 é ${number1}`);
// console.log(`O número 2 é ${number2}`);
// console.log(`A soma é ${sum(number1, number2)}`);

// 4 -OUTRA MANEIRA DE ENTENDER FUNÇÕES

// função é um liquidificador

// function fazerSuco(fruta1, fruta2) {
//   return fruta1 + fruta2
// }

// const copo = fazerSuco('banana', 'maçã');

// console.log(copo);

// 5 - FUNCTION SCOPE

// let subject = "create video";

// function createThink(subject) {
//   subject = "study"
//   return subject
// }

// console.log(subject)
// console.log(createThink(subject));

// 6 - FUNCTION HOISTING

// sofre hoisting

// sayMyName();

// function sayMyName() {
//   console.log("Isabela")
// }

// não é elevado

// sayMyName();

// const sayMyName = function() {
//   console.log("Isabela")
// }

// 7 - ARROW FUNCTION (expression)

// const sayMyName = (name) => {
//   console.log(name);
// }

// sayMyName("Isabela");

// 8 - CALLBACK FUNCTION

// function sayMyName(name) {
//   console.log("antes de executar a função callback")
//   name()
//   console.log("depois de executar a callback")
// }

// posso passar qualquer tipo de dado
// sayMyName("Isabela")

// sayMyName(
//   () => {
//     console.log("estou em uma calLback")
//   }
// )

// 9 - FUNÇÕES CONSTRUTURAS (function constructor)

// function Person(name) {
//   this.name = name
//   this.walk = function() {
//     return this.name + "está andando"
//   }
// }

// const isabela = new Person("Isabela");
// const joao = new Person("João");
// console.log(isabela.walk());
// console.log(joao.walk());



