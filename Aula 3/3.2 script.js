//como o butão imprimir que irá iniciar o programa 
//criando uma variável para acessar o imprimir 
// usa o var pq é uma função

    var botao = document.getElementById("imprimirButton") //pega o butão imprimir do html

//função
    botao.onclick = function(){ // é a função para capturar o evento de clicar
        //recuperar o valor informado no formulario
        var quantidade = document.getElementById("quantidadeInput").value;
        console.log(quantidade); 

        var resultado = document.getElementById ("resultado");
        var numeros = " "; //variavel para armazenar os numeros 
        
        //laço de repetição
        for (var i = 1; i <= quantidade; i++){
            if(i % 2 == 0){
                numeros += i + " ";
            } 
        }

        resultado.textContent = numeros;


    }
