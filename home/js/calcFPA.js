function calcFPA2(inputsFPA,language) {

    let Calc_dataObject = new CalcData();  

    let arrayFPA = new Array(inputsFPA.length);
    for (let index = 0; index < inputsFPA.length; index++) {
        arrayFPA[index] = inputsFPA[index].value * 1;
    }

    Calc_dataObject.calcFPA(arrayFPA, language);

    let result = Calc_dataObject.resultFPA;

    return result;
};