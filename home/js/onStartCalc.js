
function onStartCalc(nameMethod) {

    if (nameMethod == 'FPA') {
        result = calcFPA2();
    }
    else {
        result = calcCOCOMO();
    }

    load2Form(result);

};
