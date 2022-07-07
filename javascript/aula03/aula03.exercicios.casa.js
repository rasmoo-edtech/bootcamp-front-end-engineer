// 1) Transforme a seguinte palavra em um array, onde cada caractere é uma posição desse array.
/*
    const word = 'Triângulo';
*/


// 2) Exiba no console/terminal o tamanho total que o seguinte array possui:
/*
    const total = Math.floor(Math.random() * 100);
    const array = new Array(total);
*/


// 3) A partir do seguinte array, faça:
/*
    const colors = ['Red', 'Yellow', 'Blue', 'Red', 'Green'];

    a) Adicione as cores 'Pink' e 'Brown'.
    b) Adicione a cor 'Purple' na primeira posição.
    c) Remova o último elemento.
    d) Remova o primeiro elemento.
    e) Exiba no console/terminal o indice da cor 'Red'.
    f) Exiba no console/terminal o último indice da cor 'Red'.
    g) Adicione todas as cores do seguinte array no array colors.
       const newColors = ['Gold', 'Silver', 'Crystal'];
    h) Transforme todas as cores em uma string, separando cada elemento por ' / '.
    i) Verifique se a cor 'Blue' existe no array.
    j) Transforme o array em uma string.
    l) Remova a cor 'Blue' do array.
*/


// 4) Retorne um novo array com todos os elementos sub-arrays concatenados em um único array.
/*
    const carBrands = ['Fiat', 'BMW', Pegeaut, ['Honda', 'Volkswageb'], [['Audi', 'Hyundai']]];
*/

// 5) A partir do seguinte array, faça:
/*
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    const p1 = new Product('Iphone 13', 9949.90);
    const p2 = new Product('Playstation 5', 4499.99);
    const p3 = new Product('Nintendo Switch', 2399.99);
    const p4 = new Product('Xbox Series X', 5489.00);
    const p5 = new Product('Master System', 259.90);

    const products = [p1, p2, p3, p4, p5];

    a) Retorne o indice do produto que se chama 'Xbox Series X'.
    b) Retorne o produto que possui o valor igual a R$ 2399.99 reais.
    c) Retorne todos os produtos que custam mais de R$ 3000.00 reais.
    d) Exiba no console/terminal o nome de todos os produtos.
    e) Retorne a soma dos preços de todos os produtos. (OBS: Tente usar o método reduce())
    f) Verifique se todos os produtos possuem um preço maior que R$ 300.00 reais. (OBS: Tente usar o método every())
    g) Verifique se existe algum produto que custe mais que R$ 6000.00 reais. (OBS: Tente usar o método some())
*/


// 6) A partir do seguinte array, faça:
/*
    function Car(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price
    }

    function Dealership(name, cars) {
        this.name = name;
        this.cars = cars;
    }

    const c1 = new Car('M3 Competition', 'BMW', 799950.90);
    const c2 = new Car('Civic Sport CVT 2020', 'Honda', 122990.90);
    const c3 = new Car('Fit 1.5 EXL CVT 2020', 'Honda', 99900.90);
    const c4 = new Car('WR-V 1.5 EXL CVT 2021', 'Honda', 114990.90);
    const c5 = new Car('Leaf 40kWh Tekna 2022', 'Nissan', 289900.90);
    const c6 = new Car('Kicks 1.6 Advance CVT 2022', 'Nissan', 117090.90);

    const d1 = new Dealership('BMW Shop', [c1]);
    const d2 = new Dealership('HONDA Shop', [c2, c3, c4]);
    const d3 = new Dealership('NISSAN Shop', [c5, c6]);

    const dealerships = [d1, d2, d3];

    a) Retorne um array contendo somente os nomes das concessionárias.
    b) Retorne um array contendo somente os nomes de todos os carros de todas as concessionária.
    c) Retorne um array contendo somente os nomes de todas as marcas de todos os carros que custam mais de R$ 200000.00 reais.
*/
