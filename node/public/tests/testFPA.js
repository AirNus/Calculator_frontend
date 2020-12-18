function testFPA() {

    let Calc_dataObject = new CalcData(); 

    let inputsFPA = document.querySelectorAll('[data-ifpugFPA="true"]');

    let arrayFPA = new Array(inputsFPA.length);

    for (let index = 0; index < inputsFPA.length; index++) {
        arrayFPA[index] = between(1, 5);
    }

    var arrayOut = "";

    for (let index = 0; index < inputsFPA.length; index++) {
        arrayOut += arrayFPA[index] + " ";
    }

    Calc_dataObject.calcFPA(arrayFPA, "Assembly");

    let result = Calc_dataObject.resultFPA;

    alert("InData: " + arrayOut);
    alert("OutData: " + result);

    return result;
};

function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};