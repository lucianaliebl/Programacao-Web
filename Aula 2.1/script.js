//Mensagens ao usuário
console.log("Aula 23/08/2024");
//alert ("Olá mundo");
document.write("Escrevendo HTML" + "<br>");

//Comparação 
//let num1 = parseFloat (prompt("Digite um número: "));
//let num2 = parseFloat (prompt("Digite um segundo número: "));

//document.write(`Comparação de dois valores: ${num1}` + (num1 == num2) + "<br>"); // impressão literal

//document.write("Comparação de dois valores: " + (num1 === num2) + "<br>");

//document.write("Comparação de dois valores: " + (num1 != num2) + "<br>");

//Estrutura de controle 
/*let interruptor = "off";
    if (interruptor == "on"){
        alert("Lampada ligada!");  // alert gera um poup
        document.write("Ligou");   //document.write escreve na página html
    }
    else {
        alert ("Lampada desligada!");
        document.write("Desligou"); 
    } */

// Leitura via prompt 
let senha = prompt("Digite sua senha: ");
let confirmacaoSenha = prompt("Digite a senha novamente: ");

    if (senha === confirmacaoSenha){
        alert("Senhas iguais");
    }
    else {
        alert("Senhas não coincidem");
    }
