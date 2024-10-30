// Importar la función sum del archivo app.js
const { sum, fromDollarToEuro, fromYenToEuro } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    let expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 156.5 Yens", () => {
    // Importo la funcion desde app.js
    const { fromYenToEuro } = require('./app.js');

    // Uso la función como debe ser usada
    const dollarToEuro = fromYenToEuro(3.5);

    // Si 1 euro son 156.5 Yens, entonces 3.5 Yens deben ser (3.5 / 156.5)
    let expected = 3.5 / 156.5;

    // Hago mi comparación (la prueba)
    expect(fromYenToEuro(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 Yens deberían ser = (3.5 / 156.5)
})

test("One Euro should be 1.07 Dollars, and One euro should be 156.5 Yens", () => {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollarToYen = fromDollarToYen(3.5);

    // Si 1 euro son 156.5 Yens, entonces 3.5 Dolares a Yens deben ser ((3.5/1.07) * 156.5)
    let expected = fromDollarToEuro(3.5) * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 Yens deberían ser = (3.5 / 156.5)
})

test("One Euro should be 156.5 Yens, and One euro should be 0.87 Pounds", () => {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yenToPound = fromYenToPound(3.5);

    // Si 1 euro son 156.5 Yens, entonces 3.5 Yens a Pounds deben ser ((3.5/156.5) * 0.87)
    let expected = fromYenToEuro(3.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 Yens deberían ser = (3.5 / 156.5)
})
