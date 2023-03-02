/* 1 - Expressões e Operadores

- Expressions
- Operations
    * Binary 
    * Unary
    * Ternary
*/

// let number;

// criar uma função auto executável

// let number = 1;

// (function(){
//   console.log('alo')
// })()

// OPERADORES
// binary = binário (preciso de dois valores para que o operador esteja entre eles)

// let number = 1;
// console.log(number + 1);

// unary = unário (só tem um elemento)

// let number = 1;
// console.log(++number);
// console.log(--number);
// console.log(typeof number);

// ternary = ternário (possui três expressões)
// único caso

// console.log(true ? 'alo' : 'nada');

/* 2 - NEW 
    * left-hand-side expression
    * criar um novo objeto
*/

// let name = new String('Isabela');
// let age = new Number(29);
// console.log(name, age);

// let date = new Date('2023-12-01');
// console.log(date.__proto__);

/* 4 - Typeof Delete

    * Operadores unários
    * typeof = tipo de dado
    * delete = será deletada uma propriedade do objeto
*/

// console.log(typeof "isabela");

// const person = {
//     name: 'Isabela',
//     age: 29,
// }

// delete person.age;

/* 5 - Operadores aritméticos 
    * multiplicação = *
    * divisão = /
    * soma = +
    * subtração = -
    * resto da divisão = %
    * incremento = ++
    * decremento = --
    * exponencial = **
*/

/* resto da divisão: sinal % */
// let remainder
// remainder = 11 % 9
// console.log(remainder)

/* incremento: sinal ++ */
// let increment = 0
    // increment++
// console.log(++increment)
// console.log(increment)

/* decremento: sinal -- */
// let decrement = 0
// decrement--
// console.log(decrement)

/* exponencial: sinal ** */
// console.log(2 ** 3)

/* 6 - Grouping operator
        * operador que agrupa expressões = () 
*/

// let total = 2 + 3 * 5
// console.log(total)
//com essa precedência, nosso resultado é 17.

// let total = (2 + 3) * 5
// console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

/* 7 - Operadores de comparação

    * Irá comparar valores e retornar um Boolean como resposta à comparação
*/

// let one = 1
// let two = 2

// igual a -> ==
// console.log( two == 1)
// console.log( one == "1")

// diferente de -> !=
// console.log( one != two)
// console.log( one != 1)
// console.log( one != "1")

// estritamente igual a -> ===
// console.log( two === 1)
// console.log( one === "1")

// estritamente diferente de => !==
// console.log( two !== "2")
// console.log( two !== 2)

// maior que -> >
// console.log( one > two)

// maior igual a -> >=
// console.log(one >= 1)
// console.log(two >= 1)

// menor que -> <
// console.log(one < two)

// menor igual a -> <=
// console.log(one <= two)
// console.log(one <= 1)
// console.log(one <= 0)

/* 8 - Operadores de Atribuição */

// Operadores de atribuição (Assignment)
// let x

// assignment normal:
// x = 1

// addition assignment (adição):
// x += 2

// subtraction assignment (subtração):
// x -= 1

// multiplication assignment (multiplacação):
// x *= 2

// division assignment (divisão):
// x /= 2

// exponetiation assignment (exponenciação):
// x **= 2

// remainder assignment (resto de divisão):
// x %= 2

// console.log(x);

/* 9 - Operadores lógicos (logical operators) */

// 2 operadores booleanos, quando verificados, resultará em verdadeiro ou falso 

// let pao = true;
// let queijo = false;

// AND - &&
// console.log(pao && queijo);
// só será verdadeiro se ambas variáveis forem verdadeiras

// OR - ||
// console.log(pao || queijo);
// só será falso se ambas variáveis forem falsas

// NOT - !
// console.log(!pao);
// negando a variável

/* 10 - Operador condicional (ternário) */
// Dependendo da condição, nós receberemos valores diferentes.
// Condição então valor 1, senão valor 2
// Exemplo de uso:

// Café da manhã top
// let pao = false;
// let queijo = false;

// const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

// console.log(niceBreakfast);

// Maior de 18

// let age = 16;
// const carDrive = age >= 18 ? 'can drive' : "can't drive";

// console.log(carDrive);

/* 11 - Operador de string (string operator) */
// - comparison (conparação)
// console.log('a' == 'a');

// concatenation (concatenação)
// retorna a união de duas strigs

// let alpha = 'alpha';
// console.log(alpha + 'bet');
// alpha += 'bet';

// console.log(alpha += 'bet');

// console.log(alpha + 346);

/* 12 - Falsy e truthy */

/*
    FALSY
	Todos os valores abaixo seriam representados como false em um boolean.
	
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// console.log( NaN ? 'verdadeiro' : 'falso' );

/* 
    TRUTHY
	Todos os valores abaixo seriam representados como true em um boolean.
	
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

// console.log( Infinity ? 'verdadeiro' : 'falso' );

/* 13 - Precedência de operadores 
- Operators precedence
*/

// De cima para baixo, do mais importante ao menos importante.

// * grouping                      ( )
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           && 
// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %= 