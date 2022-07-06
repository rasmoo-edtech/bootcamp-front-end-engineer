// Convertendo Strings para Numbers
const stringNumber = '10';
const number = Number(stringNumber)
console.log(stringNumber); // 10
console.log(number); // 10

console.log(Number('')); // 10
console.log(Number('Eu vou entrar no mercado de trabalho.')); // NaN = Not a Number
console.log(Number('100 85')); // NaN = Not a Number


// Convertendo Numbers para Strings
console.log(String(862)); // '862'
console.log(String(1099.55)); // '1099.55'
console.log(String(10 * 5)); // '50'


// Convertendo Booleans para Numbers
console.log(Number(true)); // 1
console.log(Number(false)); // 2


// Convertendo Booleans para Strings
console.log(String(true)); // 'true'
console.log(String(false)); // 'false'


// Type Conversion VS. Type Coercion
/*
    Type Coercion é a forma automática ou implicita de converter valores de um tipo para outro.
    Type Conversion é bem parecido com Type Coercion, pois ambos são utilizado para conversões, a única diferença
    é que o Type Conversion ele pode ser tanto implicito quanto explicito.
*/


// Manipulando Strings
let nome = 'Sergio';

const totalLetrasNome = nome.length;
console.log('Total de letras: ', totalLetrasNome); // 6

nome = nome.concat('Resende');
console.log('Meu nome é: ', nome); // 'SergioResende'

// nome = nome.concat(' ', 'Resende');
// console.log('Meu nome é: ', nome);

const indexS = nome.indexOf('S');
console.log('Index da letra S: ', indexS); // 0 = Primeira posição

const indexs = nome.indexOf('s');
console.log('Index da letra s: ', indexs); // 8

const nomeMaiusculo = nome.toUpperCase();
console.log('Meu nome em caixa alta é: ', nomeMaiusculo); // 'SERGIORESENDE'

const lasIndexS = nomeMaiusculo.lastIndexOf('S');
console.log('Index da letra S: ', lasIndexS); // 8

const nomeMinusculo = nomeMaiusculo.toLowerCase();
console.log('Meu nome em caixa baixa é: ', nomeMinusculo); // 'sergioresende'

const hasR = nome.includes('r');
console.log('Meu nome possui a letra r? ', hasR); // true 

const hasd = nome.includes('d');
console.log('Meu nome possui a letra d? ', hasd); // true

const hasD = nomeMaiusculo.includes('D');
console.log('Meu nome em caixa alta possui a letra D? ', hasD); // true

const hasResende = nome.includes('Resende');
console.log('Meu nome possui a palavra Resende? ', hasResende); // true

const nomeReplace = nome.replace('e', '@');
console.log('Meu nome trocando a letra e por @ é: ', nomeReplace); // 'S@rgioResende'

const nomeTerminaLetraE = nome.endsWith('e');
console.log('Meu nome termina com a letra e? ', nomeTerminaLetraE); // true

const nomeTerminaLetraD = nome.endsWith('d');
console.log('Meu nome termina com a letra d? ', nomeTerminaLetraD); // false

const fraseMotivacional = '  Não desista!! Eu sei que você é capaz!           ';
console.log('Frase original: ', fraseMotivacional); // '  Não desista!! Eu sei que você é capaz!           '
console.log('Frase alterada: ', fraseMotivacional.trim()); // 'Não desista!! Eu sei que você é capaz!'
console.log('Frase alterada no inicio: ', fraseMotivacional.trimStart()); // 'Não desista!! Eu sei que você é capaz!           '
console.log('Frase alterada no final: ', fraseMotivacional.trimEnd().concat('Teste')); // '  Não desista!! Eu sei que você é capaz!Teste'

const fraseSplit = fraseMotivacional.trim().split(' ');
console.log('Minha frase transformada em Array é: ', fraseSplit); // [ 'Não', 'desista!!', 'Eu', 'sei', 'que', 'você', 'é', 'capaz!' ]


// Manipulando Numbers
const priceIphone = 9989.878;
console.log('O preço do Iphone é: ', priceIphone); // 9989.878
console.log('O valor arredondado do preço do Iphone é: ', priceIphone.toFixed()); // '9990'
console.log('O valor arredondado do preço do Iphone com uma casa decimal é: ', priceIphone.toFixed(1)); // '9989.9'
console.log('O valor arredondado do preço do Iphone com duas casas decimais é: ', priceIphone.toFixed(2)); // '9989.88'
console.log('O valor do Iphone convertido para String é: ', priceIphone.toString()); // '9989.878'
console.log('Retorna o maior valor possível para um Number: ', Number.MAX_VALUE); // 1.7976931348623157e+308


// Manipulando Booleans
const isSold = false;
console.log('Retorna o valor atribuido a variável, convertida para string: ', isSold.toString()); // 'false'

