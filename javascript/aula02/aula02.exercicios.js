// 1) Exiba no console/terminal o total de caracteres que uma palavra possui.
const palavra = 'Quadrado';
console.log(palavra.length);


// 2) Exiba no console/terminal o total de digitos que um número possui.
const numero = 1003921;
const stringNumero = numero.toString();
console.log(stringNumero.length);


// 3) Transforme o seguinte número 3.14159265358979323846 para ter somente 2 casas decimais.
const pi = 3.14159265358979323846;
console.log(pi.toFixed(2));


// 4) Utilize o resultado do exercício 3 e troque o '.' por uma ','.
const stringPi = pi.toFixed(2);
console.log(stringPi.replace('.', ','));


/* 5) Transforme o seguinte e-mail informado pelo usuário para letras minúsculas.
      E-mail: pEdrO@gMaiL.com
*/
const email = 'pEdrO@gMaiL.com';
console.log(email.toLowerCase());


/* 6) Transforme o seguinte nome informado pelo usuário para letras maiúsculas.
      Nome: Pedro
*/
const nome = 'Pedro';
console.log(nome.toUpperCase());


/* 7) Verifique se o seguinte texto possui a palavra 'aplicações'.
    const text = 'Tenho certeza que ao final desse curso serei capaz de desenvolver aplicações para WEB utilizando HTML, CSS, JavaScript e React.';
*/
const text = 'Tenho certeza que ao final desse curso serei capaz de desenvolver aplicações para WEB utilizando HTML, CSS, JavaScript e React.';
console.log(text.includes('aplicações'));


/* 8) Transforme o seguinte texto em um array, onde cada palavra é uma posição desse array. Utilize como critério de separação o ' '.
    const text = 'Sei que sou capaz de entrar no mercado de trabalho.';
*/
const text2 = 'Sei que sou capaz de entrar no mercado de trabalho.';
const arrayText2 = text2.split(' ');
console.log(arrayText2);


// 9) Utilize o resultado do exercício 8 e transforme o array de volta para um string. Porém onde era ' ', utilize _.
console.log(arrayText2.join('_'));