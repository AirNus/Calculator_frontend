function calcCOCOMO() {

    let Calc_dataObject = new CalcData();
    let inputsSF = document.querySelectorAll('[data-ifpugCOCOMO_SF="true"]');
    let inputsEM = document.querySelectorAll('[data-ifpugCOCOMO_EM="true"]');
    let SLOC = document.getElementById('SLOC').value;

    let arraySF = new Array(inputsSF.length);
    for (let index = 0; index < inputsSF.length; index++) {
        arraySF[index] = document.getElementById(inputsSF[index].id).value * 1;
    }

    let arrayEM = new Array(inputsEM.length);
    for (let index = 0; index < inputsEM.length; index++) {
        arrayEM[index] = document.getElementById(inputsEM[index].id).value * 1;
    }

    Calc_dataObject.calcCOCOMO2(arraySF, arrayEM, SLOC);

    let result = Calc_dataObject.resultCOCOMO;

    return result;
};