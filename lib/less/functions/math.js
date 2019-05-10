var functionRegistry = require('./function-registry'),
    mathHelper = require('./math-helper.js');

var mathFunctions = {
    // name,  unit
    ceil:  null,
    floor: null,
    sqrt:  null,
    abs:   null,
    tan:   '',
    sin:   '',
    cos:   '',
    cot:   '',
    sec:   '',
    csc:   '',
    tanh:   '',
    sinh:   '',
    cosh:   '',
    coth:   '',
    sech:   '',
    csch:   '',
    atan:  'rad',
    asin:  'rad',
    acos:  'rad',
    acot:  'rad',
    asec:  'rad',
    acsc:  'rad',
    atanh:  'rad',
    asinh:  'rad',
    acosh:  'rad',
    acoth:  'rad',
    asech:  'rad',
    acsch:  'rad'
};

for (var f in mathFunctions) {
    if (mathFunctions.hasOwnProperty(f)) {
        mathFunctions[f] = mathHelper._math.bind(null, Math[f], mathFunctions[f]);
    }
}

mathFunctions.round = function (n, f) {
    var fraction = typeof f === 'undefined' ? 0 : f.value;
    return mathHelper._math(function(num) { return num.toFixed(fraction); }, null, n);
};

functionRegistry.addMultiple(mathFunctions);
