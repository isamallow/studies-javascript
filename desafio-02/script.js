const students = [
  {
    name: "Luiza",
    noteOne: 10,
    noteTwo: 4,
  },
  {
    name: "Larissa",
    noteOne: 4,
    noteTwo: 5,
  },
  {
    name: "Lauren",
    noteOne: 6,
    noteTwo: 9,
  },
];

function calcAverage (noteOne, noteTwo) {
  return (noteOne + noteTwo) / 2;
}

function checkApproval (students) {
  let media = calcAverage(students.noteOne, students.noteTwo);

  if (media >= 7) {
    alert(`O(a) estudante ${students.name} teve média de ${media} e foi aprovado(a) no concurso!`);
  } else {
    alert(`O(a) estudante ${students.name} teve média de ${media} e foi reprovado(a) no concurso!`);
  }
}

for(let i = 0; i < students.length; i++) {
  let student = students[i];
  checkApproval(student);
}

