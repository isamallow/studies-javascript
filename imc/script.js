/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/
/* peso / (altura * altura) */


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

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

// alert(`Paciente ${patients[0].name} possui o IMC de ${(patients[0].weight / ((patients[0].height / 100) ** 2)).toFixed(2)}`);

// function printPatientIMC(patient) {
  //   return `
  //   Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}.
  //   `
  // }
  
function printPatientIMC(patient) {
  return `
  Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}.
  `
}


// fuunção anônima 
// const printPatientIMC = function (patient) {
//   return `
//   Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}.
//   `
// }

// arrow function
// const printPatientIMC = (patient) => {
//   return `
//   Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}.
//   `
// }


for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient);
  alert(IMCmessage);
}

// printPatientIMC(patients[0]);
// printPatientIMC(patients[1]);
// printPatientIMC(patients[2]);
