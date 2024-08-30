//Aula 30/08/2024
console.log("Funcionou!")

//For 
//Ex1: Exibir numeros de 1 a 5
/*document.write ("Números de 1 a 5: <br>"); //para escreve no html
    for(let i = 1; i <= 5; i++){
        //console.log(i);
        document.write (i + "<br>"); //para escreve no html
}*/

//Ex2: Criar um programa que solicita ao usuário uma qtd de numeros 
/*  let quantidade = parseFloat (prompt ("Qtd de numeros: "));  //abre o pop up. O parse float serve para forçar a troca do tipo
    console.log(typeof quantidade); //ver no console se fez a troca do tipo
    for(let i = 1; i <= quantidade; i++){
        document.write (i + "<br>"); //para escreve no html
}*/

//Ex3: solicitar um numero e calcular a soma de todos os numeros. Soma os numeros até o limite informado pelo usuário
/*    let limite = parseInt (prompt("Quantos numeros quer colocar dentro do laço: ")); //pergunta quantos numeros quer colocar dentro do laço
    let soma = 0;
    for(let i = 1; i <= limite; i++){
        let numero = parseInt (prompt("Numero: "));
        document.write("Numero: " + numero + "<br>");
        soma += numero;
    }
    document.write("Soma dos numeros: " + soma);
*/

//Exemplos com While
//Ex1:
    // let contador = 1; //incializar o contador
    // document.write("Números de 1 a 5: <br>");
    // while (contador <= 5){
    //     document.write (contador + "<br>");
    //     contador++;
    // }

//Ex2: somar os numeros positivos

    let soma = 0; 
    let numero = 0;
    let numeroDigitado = ""; //aspas pra colocar os numeros em uma string

    while (numero >= 0){
        numero = parseFloat( prompt ("Digite um numero ou um numero negativo para encerrar o programa: "));
        if(numero >= 0){
            soma+= numero;
            numeroDigitado += "<br>" + numero;
        }
    }

    document.write("Numero digitados: " + numeroDigitado + "<br>");

    document.write("Soma: " + soma);
