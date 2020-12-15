function calcFPA() {

    let Calc_dataObject = new CalcData();
    let inputsFPA = document.querySelectorAll('[data-ifpugFPA="true"]');
    let language = document.getElementById("languageFPA").nodeValue;

    let arrayFPA = new Array(inputsFPA.length);
    for(let index = 0; index < inputsFPA.length; index ++) {
        arrayFPA[index] = inputsFPA[index].nodeValue;
    }

    let result = Calc_dataObject.calcFPA(arrayFPA,language);

    return result;
};

export default calcFPA;