/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter:

    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

const patients = [
  {
    name: "Luiza",
    age: 29,
    weight: 89,
    height: 170,
  },
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Lauren",
    age: 26,
    weight: 76,
    height: 165,
  },
];

let patientsNames = [];
let patientsAge = [];
let patientsWeight = [];
let patientsHeight = [];


for(let patient of patients) {
  patientsNames.push(patient.name);
  patientsAge.push(patient.age);
  patientsWeight.push(patient.weight);
  patientsHeight.push(patient.height);
}

for(let index = 0; index < patients.length; index++) {
  alert(`O paciente possui o nome ${patientsNames[index]}, tem ${patientsAge[index]} anos, 
possui ${patientsWeight[index]} kg, e tem ${patientsHeight[index]} de altura.`)};


