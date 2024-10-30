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

const fromDollarToYen = (dollarToYen) =>{
    const dollarToEuro = dollarToYen/oneEuroIs.USD;
    return dollarToEuro*oneEuroIs.JPY;
}

const fromEuroToDollar = (euroToDollar) =>{
    return euroToDollar*oneEuroIs.USD;
}

const fromYenToPound = (yenToPound) =>{
    const yenToEuro = yenToPound/oneEuroIs.JPY;
    return yenToEuro*oneEuroIs.GBP;
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };


