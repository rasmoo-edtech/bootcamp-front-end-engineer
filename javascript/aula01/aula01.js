// Comando que imprime no console/terminal o valor informado
/*
    console.log('Hello World!');
    console.log('Merlhor curso de Front-End que você já viu!');
*/

// Tipos de dados:
/*
    string: sequência de caracteres. Como por exemplo textos, palavras, letras...
    number: números inteiros ou com casas decimais
    boolean: tipo de dado lógico que pode armazenar um dos dois valores: verdadeiro ou falso
    object: Coleção de dados e/ou funcionalidades relacionadas. Consistem em diversas variáveis e funções,
            que são chamadas de propriedades/atributos e métodos.
    undefined: Representa um valor indefinido. Como por exemplo:
        - uma variável que não teve um valor atribuído
        - uma função quando um valor não for retornado
    null: Representa um valor nulo ou "vazio", que aponta para um objeto inexistente por exemplo

    Qual a diferença entra null e undefined?
        O undefined vai aparecer sempre que iniciarmos uma variável e não setarmos valor para ela, a variável existe mas não está definida.
        No caso do null, a variável está definida, mas não aponta para nenhum lugar na memória, ou seja, está definida com um valor vazio.

        const idade;
        const pessoa = null;

        No primeiro caso, "idade" é uma variável que não foi definida, portanto, irá retornar undefined.
        No segundo caso, pessoa foi definida com o valor null, o que significa que ela não irá apontar para nenhum espaço na memória.
*/

// Como declarar e inicializar variáveis?
/*
    var name = 'Pedro';
    var age = 18;
    var isInstructor = true;
    var teacher = {
        name: 'Pedro',
        age: 18,
        isInstructor: true
    }

    OBS: Tipagem é dinâmica. O tipo é determinado em tempo de execução (runtime) de acordo com o valor do dado, e não a partir da variável.
    O programa observa qual é o tipo de cada dado que está sendo atribuido e, a partir disso, determina a tipagem.
*/

// Diferença entre var, let e const?
/*
    var:
        - Possui escopo global ou escopo de função
        - Podem ser redeclaras e atualizadas
        - Sofrem Hoisting e possuiem suas declerações inicializadas com undefined

            function testingVar() {
                console.log(message); // undefined

                if (true) {
                    var message = 'Hello World!';
                }

                console.log(message); // Hello World!
            };

            testingVar();

    let:
        - Possui escopo de bloco, ou seja, uma variável declarada com let em um bloco estará disponível apenas dentro daquele bloco
        - Podem ser atualizadas, mas não declaradas novamente.
        - Também sofrem Hoisting, porém as declarações feitas com let não são inicializadas

            function testingLet() {
                console.log(message); // ReferenceError: message is not defined

                if (true) {
                    console.log(message); // ReferenceError: Cannot access 'message' before initialization
                    let message = 'Hello World!';
                }

                console.log(message); // ReferenceError: message is not defined
            };

            testingLet();

            OBS: Entre a declaração da variável até sua atribuição existe o TDZ (Temporal Dead Zone). Qualquer acesso feito à variável nesse espaço de tempo irá resultar em ReferenceError.

    const:
        - Possui escopo de bloco, ou seja, uma variável declarada com const em um bloco estará disponível apenas dentro daquele bloco
        - Não podem ser atualizadas e nem declaradas novamente.
        - Também sofrem Hoisting, porém as declarações feitas com let não são inicializadas

            function testingConst() {
                console.log(message); // ReferenceError: message is not defined

                if (true) {
                    const message = 'Hello World!';
                    message = 'Hello Wooooooorld!!'; // TypeError: Assignment to constant variable
                }

                console.log(message); // ReferenceError: message is not defined
            };

            testingConst();
*/

// Trabalhando com funções
/*
    Declaração:
        Sintaxe: function nomeDaFuncao(parâmetros...) corpo da função

        function add(n1, n2) {
            console.log(n1 + n2);
        } 

    Argumentos e parâmetros:

        As variáveis n1 e n2 são parâmetros da função add 
        function add(n1, n2) {
            console.log(n1 + n2);
        }

        Os valores 50 e 25 são argumentos fornecidos para função add
        add(50, 25);

    Retornando valores:
        function add(n1, n2) {
            return n1 + n2;
        }

        console.log(add(50, 25)); // 75

    Arrow functions:
        const add = (n1, n2) => {
            return n1 + n2;
        }

        const add = (n1, n2) => n1 + n2;

        console.log(add(15, 15)); // 30

    Callback functions:
        Uma função callback é uma função passada a outra função como argumento, que é então invocada dentro da função externa.

        const showResult = (result) => console.log('Result is: ', result);

        const add = (n1, n2, callback) => {
            const result = n1 + n2;
            callback(result);
        }

        const subtract = (n1, n2, callback) => {
            const result = n1 - n2;
            callback(result);
        }

        add(10, 5, showResult);

        subtract(50, 45, (result) => {
            console.log('Result is: ', result);
        });

    Constructor functions:
        function Professor(name, email) {
            this.name = name;
            this.email = email;
        }

        const professor = new Professor('Ana', 'ana@gmail.com');
        
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

        const aluno = new Aluno('Fuskinha', 'fuska@gmail.com', '28/08/1992', null);
*/
