/*
    1) Criar 2 funções que retornam o resultado das seguintes operações: multiplicar e dividir.
    2) Armazenar o retorno dessas funções em variáveis.
    3) Imprimir no terminal a soma dessas variáveis.
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


/*
    1) Criar 2 funções que retornam o resultado das seguintes operações: multiplicar e dividir.
    2) Armazenar o retorno dessas funções em variáveis.
    3) Imprimir no terminal a soma dessas variáveis.
*/


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