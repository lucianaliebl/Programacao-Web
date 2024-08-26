//Atividade 1 - if e else
var botao = document.getElementById('verificaButton');

//criando evento 
botao.onclick = function(){
    var anoNascimento = document.getElementById('idadeInput').value    //captura a idade do formuário 
    // console .log(idade);  //serve para acompanhar para verificar se está funcionando 

    var idade = 2024 - anoNascimento
    
    var resultado = document.getElementById('idade'); //precisa criar "resultado" no html

    if (idade >= 18){
        resultado.textContent = `Sua idade é ${idade} anos. Você é maior de idade`;
    } else {
        resultado.textContent = `Sua idade é ${idade} anos. Você é menor de idade`; 
    }
    
}
