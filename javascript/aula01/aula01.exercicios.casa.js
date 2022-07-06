// 1) Exiba no console/terminal a mensagem 'Hello World!'
console.log('Hello World!');


// 2) Armazene em variáveis as informações do seu setup, como por exemplo: Nome do processador, total de memória, tamanho do HD/SSD e se é um notebook ou não.
const nomeProcessador = 'AMD 9700x';
const totalMemoria = 16;
const tamanhoSsd = 240;
const isNotebook = false;


// 3) Analise a seguinte função e diga se ela irá executar, caso sim, qual será o valor exibido no console/terminal?
/*
    function showMyName() {
        console.log(name);
        var name = 'Pedro Henrique';
    }

    showMyName();

    R: Função executa e irá imprimir undefined por causa do Hoisting do var.
*/

// 4)  Analise a seguinte função e diga se ela irá executar, caso sim, qual será o valor exibido no console/terminal?
/*
    function showMyName() {
        const name = 'Pedro Henrique';
        name = 'Fuskinha';
        console.log(name);
    }

    showMyName();

    R: Não vai executar porque eu não posso alterar o valor de um variável const.
*/

// 5) Qual será o resultado exibido no console/terminal?
/*
    function getMyFavoriteIDE() {
        let ide = 'Visual Studio Code';
        return ide;
    }

    console.log(ide);

    R: Irá dar error porque a variável ide só existe dentro da função getMyFavoriteIDE.
*/

// 6) Crie uma função que receba 2 números como parâmetro e retorne a multiplicação entre eles.
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}


// 7) Crie uma arrow function que receba 1 número como parâmetro e retorne o quadrado dele. Exemplo: 4² = 16
const quadrado = (numero) => {
    return numero ** 2;
}


// 8) Crie uma função de callback que receba o resultado de uma equação e exiba no console/terminal.
function dividir(n1, n2, callback) {
    callback(n1 / n2);
}

dividir(10, 2, (resultado) => {
    console.log(resultado);
});


// 9) Instancie três objetos do tipo Carro.
function Carro(proprietario) {
    this.proprietario = proprietario;
}

const bmw = new Carro('Sergio');
const fiat = new Carro('Pedro');
const pegeaut = new Carro('Felipe');


// 10) Instancie dois objetos do tipo Cliente informando o nome, email e idade. 
class Cliente {
    nome;
    email;
    idade;

    constructor(name, email, idade) {
        this.nome = name;
        this.email = email;
        this.idade = idade;
    }
}

const pedro = new Cliente('Pedro Henrique', 'pedro@gmail.com', 19);
const felipe = new Cliente('Felipe Mendes', 'felipe@gmail.com', 28);