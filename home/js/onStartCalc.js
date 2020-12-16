
function onStartCalc(nameMethod) {

    let paramsArray = ["VAF", "UFP", "DFP", "SLOC/KLOC", "PM", "TDEV"];
    for (let index = 0; index < paramsArray.length; index++) {

        document.getElementById(paramsArray[index]).textContent = 'Результат будет тут';

        document.getElementById(paramsArray[index] + '_checkbox').checked = false;
    }

    if (nameMethod == 'FPA') {
        result = calcFPA2();
    }
    else {
        result = calcCOCOMO();
    }

    load2Form(result);

};
