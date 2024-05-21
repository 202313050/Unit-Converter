const lengthConversions = {
    feet: 0.3048,  
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    inch: 0.0254,  
    miles: 1609.34,
};

const massConversions = {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    oz: 0.0283495,
    lbs: 0.453592,
};

const timeConversions = {
    sec: 1,
    min: 60,
    hours: 3600,
    days: 86400,
};

function convert(value, fromUnit, toUnit, conversionRates) {
    const inBaseUnit = value * conversionRates[fromUnit.toLowerCase()]; 
    return inBaseUnit / conversionRates[toUnit.toLowerCase()]; 
}

function convertLength() {
    const value = parseFloat(document.getElementById('lengthInput').value);
    const fromUnit = document.getElementById('lengthFrom').value;
    const toUnit = document.getElementById('lengthTo').value;
    const result = convert(value, fromUnit, toUnit, lengthConversions);
    document.getElementById('lengthResult').innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertMass() {
    const value = parseFloat(document.getElementById('massInput').value);
    const fromUnit = document.getElementById('massFrom').value;
    const toUnit = document.getElementById('massTo').value;
    const result = convert(value, fromUnit, toUnit, massConversions);
    document.getElementById('massResult').innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertTime() {
    const value = parseFloat(document.getElementById('timeInput').value);
    const fromUnit = document.getElementById('timeFrom').value;
    const toUnit = document.getElementById('timeTo').value;
    const result = convert(value, fromUnit, toUnit, timeConversions);
    document.getElementById('timeResult').innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}
