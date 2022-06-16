//1 - crie uma função que exiba uma mensagem no console
    function mensagem(){
        console.log('Mensagem recebida');
    }
    mensagem();
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
    function nome(nome){
        return console.log(nome);
    }
    nome('Felipe');

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
    function dados(nome,idade,estiloMusicalpreferido){
        return console.log('ola!, eu sou o', nome,'tenho',idade,'anos e gosto muito de',estiloMusicalpreferido);
    }
    dados('Felipe',18,'soul');
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
    function Entretenimento(filme,musica){
        return console.log('o Filme é', filme,'e a musica é',musica);
    }

    Entretenimento('Arremesso Alto','Stayed on him');

//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
    function triplo(numero){
        return numero*3;
    }
    console.log(triplo(7));