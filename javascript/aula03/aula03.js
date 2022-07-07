const array = ['Pedro', 'Rafael', 'Fernando Franco', 'Fernando Nascimento', 'Jefferson', 'Sergio'];

console.log('Meu Array: ', array);
console.log('Tamanho do Array: ', array.length);

array.push('Felipe');

console.log('Tamanho do Array: ', array.length);
console.log('Meu Array: ', array);

array.unshift('Davi');

console.log('Tamanho do Array: ', array.length);
console.log('Meu Array: ', array);

array.pop();

console.log('Tamanho do Array: ', array.length);
console.log('Meu Array: ', array);

array.shift();

console.log('Tamanho do Array: ', array.length);
console.log('Meu Array: ', array);

console.log(array.slice(2, 4));

array.splice(0, 2);

console.log('Tamanho do Array: ', array.length);
console.log('Meu Array: ', array);

console.log(array.indexOf('Jefferson'));

array.push('Fernando Franco');

console.log('Meu Array: ', array);
console.log(array.indexOf('Fernando Franco'));
console.log(array.lastIndexOf('Fernando Franco'));

const galeraFaltou = ['Rebecca', 'Andreza'];

const novoArray = array.concat(galeraFaltou);
console.log(novoArray);
console.log(novoArray.join());
console.log(novoArray.includes('Rebecca'));

const brands = ['BMW', 'AUDI', 'McDonald', 'Henring', ['Armani', 'Lacoste'], ['Fiat'], [['Teste']]];
// console.log(brands.flat(2));

// console.log(brands.toString());

const findIndex = brands.findIndex((value, index, obj) => {
    return value == 'Henring';
});

//console.log(findIndex);
//console.log(brands.indexOf('Henring'));

function Cliente(name, idade, contacts) {
    this.name = name;
    this.idade = idade;
    this.contacts = contacts;
    this.falar = function () {
        console.log(`O ${this.name} cuja a idade é ${this.idade} falou: Aooobaa!`);
    }
}
const c1 = new Cliente('Pedro', 29, ['21928394176', '21928394173']);
const c2 = new Cliente('Felipe', 26, ['21928394123', '21928394170']);
const c3 = new Cliente('Sergio', 28, ['21928394102', '21928394128']);
const c4 = new Cliente('Fernando Franco', 27, ['21928394001', '21928394002']);
const c5 = new Cliente('Fernando Nascimento', 25, ['21928394003', '21928394004']);
const c6 = new Cliente('Jefferson', 26, ['21928394005', '21928394006']);
const c7 = new Cliente('Rafael', 23, ['21928397788', '21928396652']);

const clientes = [c1, c2, c3, c4, c5, c6, c7];
//clientes[3].falar();
//console.log(clientes[2].name, clientes[2].idade)

console.log(clientes.findIndex((elem) => {
    return elem.idade == 26;
}))

clientes.forEach((item) => {
    //console.log(item.name);
});

const fernandoFranco = clientes.find((item) => {
    return item.name == 'Fernando Franco';
});


console.log(fernandoFranco);


const clientesFiltrados = clientes.filter((cliente) => {
    return cliente.idade > 25;
});

console.log(clientesFiltrados);

const clientesMap = clientes.map((cliente) => {
    return cliente.idade;
});

console.log(clientesMap);

const clientesMap2 = clientes.map((cliente) => {
    return cliente.contacts;
});

console.log(clientesMap2);

const clientesFlatMap = clientes.flatMap((cliente) => {
    return cliente.contacts;
});

console.log(clientesFlatMap);

function Produto(name, categorias) {
    this.name = name;
    this.categorias = categorias;
}

const p1 = new Produto('Iphone', [
    { name: 'SMARTPHONE', subcategorias: ['Bluetooth', 'Wi-Fi'] },
    { name: 'ELETRONICO', subcategorias: ['Pilha', 'Tomada'] }
]);
const p2 = new Produto('Shampoo', [
    { name: 'BELEZA', subcategorias: ['Bonite', 'Linde'] },
    { name: 'HIGIENE', subcategorias: ['Sujo', 'Limpo'] }
]);

const produtos = [p1, p2];

const subcategorias = produtos.flatMap((produto) => {
    return produto.categorias;
}).flatMap((categoria) => {
    return categoria.subcategorias;
});

console.log(subcategorias);

const nomesCategoria = produtos.flatMap((produto) => {
    return produto.categorias;
}).map((categoria) => {
    return categoria.name;
});

console.log(nomesCategoria);