let number1 = Number(prompt("Digite o primeiro número: "));
let number2 = Number(prompt("Digite o segundo número: "));

let sum = number1 + number2;

let sub = number1 - number2;

let mult = number1 * number2;

let div = number1 / number2;

let rest = number1 % number2;

let sumPair =  sum % 2 === 0;

if (sumPair) {
  alert("A soma dos números é gera um número par!")
} else {
  alert("A soma dos números gera um número ímpar!")
}

let equals = number1 === number2;

if(equals) {
  alert("Os números são diferentes!");
} else {
  alert("Os números não são iguais!");
}

alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + sub);
alert("A multiplicação dos dois números é: " + mult);
alert("A divisão dos dois números é: " + div);
alert("O resto da divisão dos dois números é: " + rest);


