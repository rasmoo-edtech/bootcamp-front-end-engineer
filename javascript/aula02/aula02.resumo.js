// Convertendo valores
/*
    Convertendo Strings para Numbers
        Number(''); // 0
        Number('3.14'); // 3.14
        Number('100 53'); // NaN = Not a Number
        Number('Pedro'); // NaN = Not a Number

    Convertendo Numbers para String
        String(862); // '862'
        String(15 + 82); // '97'
        String(16 * 18); // '288'

    Convertendo Booleans para Numbers
        Number(false); // 0
        Number(true); // 1

    Convertendo Booleans para Strings
        String(false); // 'false'
        String(true); // 'true'
*/

// Type Conversion X Type Coercion
/*
    Type Coercion é a forma automática ou implicita de converter valores de um tipo para outro.
    Type Conversion é bem parecido com Type Coercion, pois ambos são utilizado para conversões, a única diferença
    é que o Type Conversion ele pode ser tanto implicito quanto explicito.

    const firstValue = '18';
    const secondValue = 15;
    let sum = firstValue + secondValue;

    console.log(sum); // 1815 - Type Coercion

    sum = Number(firstValue) + secondValue;

    console.log(sum); // 33 - Type Conversion
*/

// Manipulando strings
/*
    .length // Retorna o número de caracteres presentes na string
    .concat('Fuskinha'); // Combina o texto de duas ou mais strings e retorna uma nova string.
    .indexOf('Henrique'); // Retorna o indice da primeira ocorrência da string fornecida como argumento.
    .lastIndexOf('e'); // Retorna o indice da última ocorrência da string fornecida como argumento.
    .toUpperCase(); // Retorna uma nova string que representa a string original convertida em letras maiúsculas.
    .toLowerCase(); // Retorna uma nova string que representa a string original convertida em letras minúsculas.
    .includes('Oliveira'); // Retorna um boolean, true ou false, dependendo se o argumento fornecido for encontrado dentro da string.
    .replace('e', '@'); // Retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres).
    .endsWith('u'); // Retorna um boolean, true ou false, dependendo se a string termina com determinados caracteres.
    .trim(); // Retorna uma nova string que representa a string original sem espaços em branco no início e/ou fim da string.
    .trimEnd(); // Retorna uma nova string que representa a string original sem espaços em branco ao final da string.
    .trimStart(); // Retorna uma nova string que representa a string original sem espaços em branco no começo da string.
    .split(' '); // Retorna um array de strings divididos em cada ponto onde o separador ocorre na string informada.
*/

// Manipulando números
/*
    .toFixed(); // Retorna uma nova string representando o número usando notação em ponto fixo.
    .toString(); // Retorna uma string representando o objeto Number especificado.
    Number.MAX_VALUE; // Representa o maior valor numérico representável em JavaScript. Valores maiores são representados como Infinity.
    Number.MIN_VALUE; // Representa o menor valor positivo numérico representável em JavaScript.
*/

// Manipulando Booleans
/*
    .toString() // Retorna uma string representando o objeto Boolean específico.
*/

// Manipulando arrays
/*
    .join() // Retorna uma string com todos os elementos do array juntos.
*/