// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToEuro = (dollarToEuro) =>{
    return dollarToEuro/oneEuroIs.USD;
}

const fromYenToEuro = (yenToEuro) =>{
    return yenToEuro/oneEuroIs.JPY;
}

const fromDollarToYen = (dollarToYen) =>{
    return fromDollarToEuro(dollarToYen)*oneEuroIs.JPY;
}

const fromEuroToDollar = (euroToDollar) =>{
    return euroToDollar*oneEuroIs.USD;
}

const fromYenToPound = (yenToPound) =>{
    return fromYenToEuro(yenToPound)*oneEuroIs.GBP;
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToEuro, fromYenToEuro, fromDollarToYen, fromEuroToDollar, fromYenToPound };


