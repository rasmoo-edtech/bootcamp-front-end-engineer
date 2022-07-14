// Recuperando elementos no HTML através do Javascript
/*
    // getElementById
    Retorna a referência do elemento (HTMLElement) através do seu ID.

    var elemento = document.getElementById(id);
    elemento.style.color = 'blue';
    

    // getElementsByClassName
    Retorna um HTMLCollection de elementos que possuem o nome da classe informada. Quando invocado no 
    objeto document, o documento é examinado por completo, incluindo o nó raiz. É possível também invocar 
    getElementsByClassName() em qualquer elemento, retornando somente os elementos  que são descendentes 
    do nó raiz especificado.

    const elements = document.getElementsByClassName(className);

    Array.from(elements).forEach(element => {
        element.style.color = 'red';
    });

    for (const element of elements) {
        element.style.color = 'red';
    }


    // getElementsByTagName
    Retorna um HTMLCollection de elementos que possuem o nome da tag informada. O documento completo é pesquisado,
    incluindo o nó raiz.

    const buttons = document.getElementsByTagName('button');
    
    Array.from(buttons).forEach((button) => {
        button.style.color = 'yellow';
        button.style.backgroundColor = '#771AC9';
    });

      for (const element of elements) {
        element.style.color = 'red';
    }


    // querySelector
    Retorna o primeiro elemento dentro do documento que corresponde ao grupo especificado de seletores.
    Sintaxe: element.querySelector(CSS selectors)


    // querySelectorAll
    Retorna uma lista de elementos presentes no documento que coincidam com o grupo de seletores especificado.
    O objeto retornado é uma NodeList.
    Sintaxe: element.querySelectorAll(CSS selectors)
*/


// Manipulando o DOM
/*
    // innerText
    É uma propriedade que permite recupera ou inserir um texto no elemento.
    Sintaxe:
        element.innerText
        element.innerText = text


    // innerHTML
    É uma propriedade que permite recupera ou inserir uma sintaxe HTML no elemento.
    Sintaxe:
        element.innerHTML
        element.innerHTML = text


    // setAttribute
    Adiciona um novo atributo ou modifica o valor de um atributo existente em um determinado elemento.
    Sintaxe: element.setAttribute(name, value)


    // getAttribute
    Retorna o valor do atributo referente ao nome informado. Se o atributo não existir, o valor retornado será null ou "".
    Sintaxe: element.getAttribute(name)


    // removeAttribute
    Remove o atributo do elemento a partir do nome informado.
    Sintaxe: element.removeAttribute(name)


    // style
    Retorna os valores do atributo style de determinado elemento.
    Sintaxe: element.style.property


    // classList
    Propriedade que retorna uma coleção (DOMTokenList) ativa dos nomes de classes do elemento.
    Métodos:
        .length
        .forEach();
        .add("my-class");
        .remove("my-class");
        .contains("my-class");

    
    // createElement
    Método responsável pro criar um elemento
    Sintaxe: document.createElement(type)

    const btn = document.createElement("button");
    btn.innerHTML = "Hello Button";
    document.body.appendChild(btn);

    // appendChild
    Método responsável por adicionar um elemento como último filho.
    Sintaxe: element.appendChild(node)
*/


// Trabalhando com eventos
/*
    // addEventListener
    Anexa um manipulador de eventos a um elemento.
    Sintaxe: element.addEventListener(event, function)
    Eventos:
        - click
        - change
        - mouseover
        - mouseout
        - keydown
        - keyup
*/