// questao 1:
let a = 15;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log('=== Q. 2 ===')
// questao 2:
let c = 10;
let d = 2;

if (c < d) {
  console.log(d);
} else {
  console.log(c);
}
console.log('=== Q. 3 ===')
// questao 3:
let e = 3;
let f = 5;
let g = 7;
if (e > f && e > g) {
  console.log(e);
}
else if (f > e && f > g) {
  console.log(f);
}
else if (g > e && g > f) {
  console.log(g);
}
console.log('=== Q. 4 ===')
// questao 4:
let tipoDeNumero = 0;
if (tipoDeNumero >= 1) {
  console.log("positivo");
}
else if (tipoDeNumero < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}
console.log('=== Q. 5 ===')
// questao 5:
let ladoTriangulo1 = 50;
let ladoTriangulo2 = 60;
let ladoTriangulo3 = 50;
let somaDosLados = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
let angulosDoTriangulo = 180;

if (somaDosLados === angulosDoTriangulo) {
  console.log(true);
}
else if (somaDosLados !== angulosDoTriangulo) {
  console.log(false);
} else {
  console.log("erro");
}
console.log('=== Q. 6 ===')
// questao 6:
let pecaDoXadrez = "cavalo";
switch (pecaDoXadrez) {
  case "cavalo":
    console.log("O movimento do cavalo é em forma de L: duas casas numa direção e uma para a direita ou esquerda dessa direção, ortogonalmente.")
    break;

  default:
    console.log("Esta peça é inválida. Tente novamente.")
}
console.log('=== Q. 7 ===')
// questao 7:
nota = 75;
if (nota >= 90) {
  console.log("A");
}
else if (nota >= 80) {
  console.log("B");
}
else if (nota >= 70) {
  console.log("C");
}
else if (nota >= 60) {
  console.log("D");
}
else if (nota >= 50) {
  console.log("E");
}
else if (nota < 50) {
  console.log("F");
}
else if (nota < 0 || nota > 100) {
  console.log("Nota inválida");
}
console.log('=== Q. 8 ===')
// questao 8:
let numero1 = 2;
let numero2 = 4;
let numero3 = 7;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log("Você possui ao menos 1 número par.");
}
console.log('=== Q. 9 ===')
// questao 9:
let numero4 = 3;
let numero5 = 4;
let numero6 = 9;

if (numero4 % 2 === 1 || numero5 % 2 === 1 || numero6 % 2 === 1) {
  console.log("Você possui ao menos 1 número ímpar.");
}
console.log('=== Q. 10 ===')
// questao 10:
let custoDoProduto = 10;
let valorDaVenda = 20;
let impostoSobreOCusto = 0.20;
let custoTotal = custoDoProduto + impostoSobreOCusto;
let lucro = valorDaVenda - custoTotal;
let quantidadeVendida = 1000;

if (quantidadeVendida === 1000 && custoDoProduto > 0 && valorDaVenda > 0) {
  console.log(lucro * quantidadeVendida);
}
else if (custoDoProduto <= 0 || valorDaVenda <= 0) {
  console.log("Valores inválidos.")
}
