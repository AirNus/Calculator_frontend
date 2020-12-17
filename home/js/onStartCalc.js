
function onStartCalc(nameMethod) {

    let isAllEnter = true;
    let result = undefined;

    let paramsArray = ["VAF", "UFP", "DFP", "SLOC/KLOC", "PM", "TDEV"];
    for (let index = 0; index < paramsArray.length; index++) {

        document.getElementById(paramsArray[index]).textContent = 'Результат будет тут';

        document.getElementById(paramsArray[index] + '_checkbox').checked = false;
    }

    if (nameMethod == 'FPA') {
        let inputsFPA = document.querySelectorAll('[data-ifpugFPA="true"]');
        let language = document.getElementById("language").value;

        inputsFPA.forEach(function (item, i, arr) {
            if (item.value == "") {
                isAllEnter = false;
            }
        });
        if (isAllEnter) {
            result = calcFPA2(inputsFPA, language);
        }
    }
    else {
        let inputsSF = document.querySelectorAll('[data-ifpugCOCOMO_SF="true"]');
        let inputsEM = document.querySelectorAll('[data-ifpugCOCOMO_EM="true"]');
        let SLOC = document.getElementById('SLOC').value;

        inputsSF.forEach(function (item, i, arr) {
            if (item.value == "") {
                isAllEnter = false;
            }
        });

        inputsEM.forEach(function (item, i, arr) {
            if (item.value == "") {
                isAllEnter = false;
            }
        });
        if (isAllEnter) {
            result = calcCOCOMO(inputsSF, inputsEM, SLOC);
        }
    }

    try {
        load2Form(result);
    }
    catch (err) {
        alert("Заполните все поля!")
    }
};
