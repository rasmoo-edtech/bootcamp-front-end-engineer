/*
    1) Desenvolva:
        a) Crie 2 funções que retornem o resultado das seguintes operações: multiplicar e dividir.
        b) Armazene o retorno dessas funções em variáveis.
        c) Imprima no terminal a soma dessas variáveis.
*/

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

const resultadoDivisao = dividir(20, 2); // 10
const resultadoMultiplicacao = multiplicar(10, 5); // 50

console.log(resultadoDivisao + resultadoMultiplicacao); // 60


// 1) A partir do código abaixo, instancie um objeto do tipo Address informando os seguintes valores: cidade, estado e pais

class Address {
    cidade;
    estado;
    pais;
}

class Aluno {
    name;
    email;
    birthday;
    address;

    constructor(name, email, birthday, address) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.address = address;
    }
}

const addressPedro = new Address();
addressPedro.cidade = 'Rio de Janeiro';
addressPedro.estado = 'RJ';
addressPedro.pais = 'Brasil';

const alunoPedro = new Aluno('Fuskinha', 'fuska@gmail.com', '28/08/1992', addressPedro);

console.log(alunoPedro);