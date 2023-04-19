const prompt = require('prompt-sync')();

var alturas = []

for (var i = 1; i <= 10; i++) {
  var altura = parseFloat(prompt("Digite sua altura: "));

  alturas.push(altura);
}

for (var i = 0; i <= 9; i++) {
  var contador = 0;
  for (var k = 0; k <= 9; k++) {
    if (alturas[i] > alturas[k]) {
      contador = contador + 1;
    }
  }
  console.log("Aluno: " + i + " Maior que " + contador + " alunos")
}

