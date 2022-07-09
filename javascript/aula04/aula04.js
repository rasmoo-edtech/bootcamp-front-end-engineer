// Operadores Aritméticos
    const aritmetico1 = 10 + 5; // 15
    const aritmetico2 = 10 - 5; // 5
    const aritmetico3 = 10 * 5; // 50
    const aritmetico4 = 10 / 5; // 2

    // Módulo
    const aritmetico5 = 12 % 5; // 12 / 5 = 2 * 5 = 10 para 12 = resta 2
    console.log(aritmetico5);

    // Incremento
    let x = 10;
    console.log(++x); // 11
    console.log(x++); // 11
    console.log(x);// 12

    // Decremento
    let y = 10;
    console.log(--y); // 9
    console.log(y--); // 9
    console.log(y);

    // Exponenciação
    let z = 10;
    console.log(z ** 2); // 100


// Operadores de string
    // Concatenação
    const nome = 'Sergio';
    console.log(nome + 'Resende');
    console.log(nome);


// Operadores de atribuição
    // Atribuição
    let preco = 100;

    // Atribuição de adição
    console.log(preco += 5); // preco = preco + 5; 105

    // Atribuição de subtração
    console.log(preco -= 10); // preco = preco - 10; 95

    // Atribuição de multiplicação
    console.log(preco *= 2); // preco = preco * 2; 190

    // Atribuição de divisão
    console.log(preco /= 2); // preco = preco / 2; 95

    // Atribuição de resto
    console.log(preco %= 4); // preco = preco % 3; 95/3, resto = 3;

    // Atribuição exponencial
    console.log(preco **= 3);// preco = preco ** 3; 27


// Operadores de comparação
    // Igual
    console.log(10 == 10); // true

    // Não igual
    console.log(8 != 10); // true

    // Estritamente igual
    console.log(8 == '8'); // true
    console.log(8 === '8'); // false

    // Estritamente não igual
    console.log(15 != '15'); // false
    console.log(15 !== '15'); // true

    // Maior que
    console.log(100 > 98); // true

    // Menor que
    console.log(100 < 98); // false

    // Maior ou igual que
    console.log(100 >= 100); // true

    // Menor ou igual que
    console.log(200 <= 199); // false


// Operadores lógicos
    const notebook = false;
    const dinheiro = false;

    // AND
    console.log('Posso comprar o notebook: ', notebook && dinheiro);

    // OU
    console.log('Posso comprar o notebook 2: ', notebook || dinheiro);

    // NOT
    console.log('A loja está vendendo o notebook? ', !notebook);


// Operadores condicionais (ternário)
    const idadeAna = 10;
    console.log(idadeAna >= 18 ? 'Ela pode comprar a bebida.' : 'Ela não pode comprar a bebiba.');


// Falsy e Truphy
    // null = false
    // undefined = false
    // 0 = false
    // NaN = false
    // '' = false

    // 'qualquer string' = true
    // {} = true
    // [] = true
    // 100 = true
    // 3.83912312 = true
    // -97 = true


// Estruturas condicionais e controle de fluxo
// If...else
    const media = 8;

    if (media >= 8) {
        console.log('Aprovado!!!!');
    } else if (media > 5 && media < 8) {
        console.log('Em recuperação!!!!');
    } else {
        console.log('Reprovado!');
    }

// Switch
    const situacao = 'APROVADO';

    switch (situacao) {
        case 'APROVADO': {
            console.log('Logado');
            break;
        }
        case 'EM_ANALISE':
        case 'PENDENTE': {
            console.log('Aguardando aprovação.');
            break;
        }
        case 'REPROVADO': {
            console.log('Tente novamente daqui a 90 dias.');
            break;
        }
        default: {
            console.log('Ixi!! Não sei que fruta é essa.');
        }
    }

// Try...catch
    const aluno = undefined;

    try {
        if (!aluno) {
            throw new SyntaxError('Erro interno. Por favor tente novamente mais tarde.'); s
        }

        if (!aluno.nome || !aluno.idade) {
            throw new TypeError('Usuário não preencheu todas as informações obrigatórias.');
        }

        console.log('Aluno salvo com sucesso!');
        console.log('Aluno: ', aluno);
    } catch (error) {
        if (error instanceof TypeError) {
            console.log(`Erro ocorrou do lado do cliente: ${error.message}`);
        }

        if (error instanceof SyntaxError) {
            console.log(`Programador fez besteira: ${error.message}`);
        }

    } finally {
        console.log('Sempre serei executado!');
    }


// Estruturas de repetição
    const paises = ['Brasil', 'Argentina', 'Alemanha', 'Italia'];
    paises.forEach((pais) => {
        console.log(pais);
    });

    console.log('------------------------------------');

    // For
    for (let i = 0; i < paises.length; i++) {
        console.log(paises[i]);
    }

    console.log('------------------------------------');

    // For of
    for (let pais of paises) {
        console.log(pais);
    }

    console.log('------------------------------------');

    function Cliente(nome, email, idade) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    const clientePedro = new Cliente('Pedro', 'pedro@gmail.com', 30);

    // For in
    for (let prop in clientePedro) {
        console.log(prop, clientePedro[prop]);
    }

    console.log('------------------------------------');

    // While
    let count = 0;

    while (count < 10) {
        console.log(count);
        count++;
    }

    console.log('------------------------------------');

    // Do while
    do {
        console.log('Opa!');
        count++;
    } while (count < 20); 