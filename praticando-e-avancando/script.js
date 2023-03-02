// declaração or declaration
// var name

// assigment or atribuição de valores
// name = "Myke";

// que tipo de dado foi colocado na variável
// console.log(typeof name);

// agrupamento de declarações
// let age, isHuman

// age = 18;
// isHuman = true;

// múltiplos argumentos na função
// console.log(name, age, isHuman);

// escrita de texto + variável
// concatenando valores
// console.log('o ' + name + ' tem ' + age + ' anos.')

// interpolando valores com template literas or template strings
// console.log(`o ${name} tem ${age} anos.`);

// Object
// Para criarmos um objeto utilizamos as chaves envolvendo as propriedades, que são atribuídas com dois pontos, por exemplo: 

// const person = { 
//   name: 'John', 
//   age: 20,
//  weight: 57.00,
//  isAdmin: true 
// }

// console.log(`${person.name} tem ${person.age} anos.`);

// Array
// Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: const animals = [ "Lion", "Monkey" ], para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: console.log(animals[0]). Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: animals.length.

// const animals = [
//   'Lion',
//   'Monkey',
//   'Cat'
// ]

// Acessar valores no Array
// console.log(animals[0]);
// console.log(animals.length) // tamanho do array


//1. Declare uma variável de nome weight

// let weight

// 2. Que tipo de dado é a variável acima?
// R: undefined
// console.log(typeof weight);

// console.log(typeof weight)

// 3. Declare uma varíável e atribua valores para cada um dos dados:
    // * nome: String
    // * age: Number (integer)
    // * stars: Number (float)
    // * isSubscribed: Boolean 

  //  let name = "Isabela"
  //  let age = 29
  //  let stars = 5.7
  //  let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dado?
// R: Object

// let student = {};

// 4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3.

// let student = {
//   name: "Isabela",
//   age: 29,
//   weight: 57.5,
//   isSubscribed: true
// };

// console.log(student);

// 4.2 - Mostre no console a seguinte mensagem:

    // <name> de idade <age> pesa <weight> kg.

    // Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

    // console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente Array vazio.

// let students = [];

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado e inserir ele no Array)

// let student = {
//   name: "Isabela",
//   age: 29,
//   weight: 57.5,
//   isSubscribed: true
// };

// let students = [];

// students = [
//   student
// ]

// console.log(students);

// 7. Coloque no console o valor da posição zero do Array acima

// console.log(students[0]);

// 8. Crie um novo student e coloque na posição 1 do Array students

// let student = {
//   name: "Isabela",
//   age: 29,
//   weight: 57.5,
//   isSubscribed: true
// };

// let students = [];

// students = [
//   student
// ]

// const mayk = {
//   name: "Mayk",
//   age: 48,
//   weight: 72.4,
//   isSubscribed: false
// }

// uma forma de resolver
// students = [
//   student,
//   mayk
// ]

// outra forma de resolver
// students[1] = mayk;

// console.log(students);

// 9. Sem rodar o código responda, qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
// R: undefined, porque a variável a ainda não está criada quando eu leio, só que ela vai sofrer o hosting (elevação) e só depois ela recebe o 1

// console.log(a);
// var a = 1;