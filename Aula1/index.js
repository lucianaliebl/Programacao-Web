//impressão no console do navegador
console.log ("Bem-vindo a progamação web")

//declaração de variáveis 
var nome = "Fulano"; //escopo global 
console.log (nome);
console.log(typeof nome); //verificar o tipo de variável

let preco1 = 10.33;
let preco2 = 10;
let total = preco1 + preco2;
console.log (total);
console.log(typeof preco1); //verificar o tipo de variável

let cor = "Azul" //escopo local
console.log(cor);

const planeta = "Terra"; // escopo local
console .log (planeta)

nome = "Cicrano";
console.log(nome);
cor= "vermelho";
console.log(cor);


//tipos de dados
let cidade = "Brasilia"; //string
let telefone = 14245789; //number
let status = true;  //booleano (true ou false)
let frutas = ["maça", "uva", "banana"]; //arrays
let pessoa = {nome: "Joao", idade: 15}; //objeto do Java

console.log(typeof cidade);
console.log(typeof telefone);
console.log(typeof status);
console.log(typeof frutas);
console.log(typeof pessoa);

//Modelo de impressão literal
console.log(`O seu nome é ${nome} e sua cidade é ${cidade}`);

//Operadores aritméticos 
let a = 10;
let b = 2;
console.log(a + b); //adição 
console.log(a ** b); //exponenciação 
console.log(a % b) //resto da divisão 
let c = (a + b) / 2; 
console.log(c);



// DOM (introdução) --> Documento orientado objeto 
document.getElementById("myH2").textContent = "Olá!!"; // puxa uma tag do html 
