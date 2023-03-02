/*

1 - Prototype

  * prototype-based language
  * prototype chain
  * __proto__
*/

// "Mayk".__proto__ 

// "Mayk".length

/* 
2- Type conversion (typecasting) x Type coersion

  * Alteração de um tipo de dado para um outro tipo.

*/

// causou uma concatenação
// o JS transformou o 5 em string, para que o programa não tivesse problema
// isso é um type coersion
// console.log("9" + 5);

// type conversion 
// quando explicitamente faz alteração de um dado para o outro
// console.log(Number('9') +5);

/*
3- Manipulação de Strings e Números
Transformar String em Número e Número em String
*/

// let string = "123";
// console.log(Number(string));

// let number = 321;
// console.log(String(number));

/* 4- Contar quantos caracteres tem uma palavra e quantos dígitos tem um número */

// let word = "Paralelepípedo"
// console.log(word.length);

// let number = 1234;
// console.log(String(number).length);

/* 5 - Transformar um número quebrado com 2 casas decimais
e trocar por ponto e vírgula
*/

// let number = 345.882299;
// console.log(number.toFixed(2).replace(".", ","));
// o replace mudando o ponto, transforma em string

/* 6 - Transforme letras minúsculas em maiúsculas. Faça o inverso também. */

// let word ="Programar é muito bom!";
// console.log(word.toLowerCase());

// let word ="Programar é muito bom!";
// console.log(word.toUpperCase());

/* 7 - Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque */

// let phrase = "Eu quero ser boa no Crossfit!"
// let myArray = phrase.split(" ");
// let phraseWithUnderscore = myArray.join("_");
// console.log(myArray);
// console.log (phraseWithUnderscore.toLowerCase());

/*
9 - Verificar se o texto contém a palavra Crossfit.
 */

// let phrase = "Eu quero ser boa no Crossfit!";
// console.log(phrase.includes("Crossfit"));

/* 10 - Criar Array com construtor */

// let myArray = new Array('a', 'b', 'c');
// console.log(myArray);

/* 11 - Contar elementos de um array */

// console.log(["a", "b", "c"]).lenght;

// console.log([
//   "a",
//   {type: "array"},
//   function() {return "alô"},
// ]).lenght;

/* 12 - Transformar uma cadeia de caracteres em elemenetos de um array */

// let word = "manipulação";
// console.log(Array.from(word));

/* 13 - Manipulando arrays */

// let techs = ["html", "css", "js"];

// adicionar um item no fim
// techs.push("nodejs");
// adicionar no começo
// techs.unshift("sql");
// remover do fim
// techs.pop();
// techs.pop(); // remove o elemento seguinte
// remover do começo
// techs.shift();
// pegar somente alguns elementos do array
// slice = cortar
// console.log(techs.slice(1, 3));
// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 2);
// encontrar posição de um elemento no array
// let index = tehcs.indexOf("css");

// techs.splice(index, 1);
// console.log(index);

// console.log(techs);


