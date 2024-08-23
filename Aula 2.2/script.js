var botao = document.getElementById('verificaButton');

//criando evento 
botao.onclick = function(){
    var anoNascimento = document.getElementById('idadeInput').value    //captura a idade do formuário 
    // console .log(idade);  //serve para acompanhar para verificar se está funcionando 

    var idade = 2024 - anoNascimento
    document.write(`Sua idade é ${idade}`);
    
    var idade = document.getElementById('resultado'); //precisa criar "resultado" no html

    if (idade >= 18){
        // console.log("Maior de idade");
        document.write = "Você é maior de idade" //pega o resultado para colocar no html
    } else {
        // console.log("Menor de idade");
        document.write = "Você é menor de idade"
    }
    
}
