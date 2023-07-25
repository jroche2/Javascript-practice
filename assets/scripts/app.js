const defaultResult = 0;
let currentResult = defaultResult;

function add()

currentResult = currentResult + 10;

let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription);