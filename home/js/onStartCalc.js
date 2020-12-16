
function onStartCalc(nameMethod) {

    // let isFPAMethod = document.getElementById('kt_tab_pane_11_1');
    // let result;

    // let test = isFPAMethod.getAttribute("className");

    // if (isFPAMethod.getAttribute("className") == "tab-pane fade active show")
    //     result = calcFPA();
    // else {
    //     result = calcCOCOMO();
    // }   
    if (nameMethod == 'FPA') {
        result = calcFPA2();
    }
    else {
        result = calcCOCOMO();
    }

    load2Form(result);

};

function load2Form(map) {

    // ["VAF", VAF], ["UFP", UFP], ["DFP", DFP], ["SLOC", SLOC], ["KLOC", KLOC]
    // ["PM", PM], ["TDEV", TDEV]    

    let paramsArray = ["VAF", "UFP", "DFP", "SLOC/KLOC", "PM", "TDEV"];

    let SLOCKLOC;

    if (map.find(item => item[0] == "SLOC")) {
        for (let indexMap = 0; indexMap < map.length; indexMap++) {
            let valueMap = map[indexMap];
            if (valueMap[0] == "SLOC") {
                SLOCKLOC = valueMap[1];
            }
            if (valueMap[0] == "KLOC") {
                SLOCKLOC = SLOCKLOC / valueMap[1];
            }
        }
        map[map.length] = ["SLOC/KLOC", SLOCKLOC];
    }
    for (let index = 0; index < paramsArray.length; index++) {
        for (let indexMap = 0; indexMap < map.length; indexMap++) {
            let valueMap = map[indexMap];
            if (paramsArray[index] == valueMap[0]) {
                document.getElementById(paramsArray[index]).textContent = valueMap[1].toFixed(1);
                document.getElementById(paramsArray[index] + '_checkbox').checked = true;
            }
        }
    }
};

function calcCOCOMO() {

    let Calc_dataObject = new CalcData();
    let inputsSF = document.querySelectorAll('[data-ifpugCOCOMO_SF="true"]');
    let inputsEM = document.querySelectorAll('[data-ifpugCOCOMO_EM="true"]');

    let arraySF = new Array(inputsSF.length);
    for (let index = 0; index < inputsSF.length; index++) {
        arraySF[index] = document.getElementById(inputsSF[index].id).value * 1;
    }

    let arrayEM = new Array(inputsEM.length);
    for (let index = 0; index < inputsEM.length; index++) {
        arrayEM[index] = document.getElementById(inputsEM[index].id).value * 1;
    }

    Calc_dataObject.calcCOCOMO2(arraySF, arrayEM);

    let result = Calc_dataObject.resultCOCOMO;

    return result;
};

function calcFPA2() {

    let Calc_dataObject = new CalcData();
    let inputsFPA = document.querySelectorAll('[data-ifpugFPA="true"]');
    let language = document.getElementById("language").value;

    let arrayFPA = new Array(inputsFPA.length);
    for (let index = 0; index < inputsFPA.length; index++) {
        arrayFPA[index] = inputsFPA[index].value * 1;
    }

    Calc_dataObject.calcFPA(arrayFPA, language);

    let result = Calc_dataObject.resultFPA;

    return result;
};




class CalcData {

    constructor() {
        this.resultFPA = new Map();
        this.resultCOCOMO = new Map();
    }


    /* START FPA IFPUG METHOD */

    //VAF function
    getVAF(array) {
        let sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return (sum * 0.01) + 0.65;
    }

    //AFP function
    getAFP(UFP, VAF) {
        return UFP * VAF;
    }

    //AFP function
    getAFP(UFP, VAF) {
        return UFP * VAF;
    }

    //DFP function
    //CFP - функциональные точки, подсчитанные для дополнительной функциональности,
    //которая потребуется при установке продукта, например, миграции данных.
    getDFP(UFP, CFP = 0, VAF) {
        return (UFP + CFP) * VAF;
    }

    //SLOC function
    getSLOC(language, DFP) {
        let languages = [["Assembly", 320], ["C++", 55], ["Java", 53]];

        for (let index = 0; index < languages.length; index++) {
            let value = languages[index];
            if (value[0] == language) {
                language = value[1] * 1;
            }
        }
        return language * DFP;
    }

    /* END - FPA IFPUG METHOD */

    /* START - COCOMO II METHOD */

    //SF function
    getSF(array) {
        let SF = 0;
        for (let i = 0; i < array.length; i++) {
            SF += array[i];
        }
        return SF;
    }

    //E function
    getE(SF) {
        return 0.91 + 0.01 * SF;
    }

    //EM function
    getEM(array) {
        let EM = 1;
        for (let i = 0; i < array.length; i++) {
            EM *= array[i];
        }
        return EM;
    }

    //PM function
    getPM(SLOC, E, EM) {
        return 2.94 * Math.pow(Math.round(SLOC / 1000), E) * EM;
    }

    //TDEV function
    getTDEV(PM, SF) {
        return 3.67 * Math.pow(PM, 0.28 + 0.02 * 0.01 * SF);
    }

    /* END - COCOMO II METHOD */

    // MAIN BODY
    calcFPA(array, language) {
        let VAF = this.getVAF(array);
        //What is UFP???
        let UFP = 14;
        let AFP = this.getAFP(UFP, VAF);
        let DFP = this.getDFP(UFP, 0, VAF);
        let SLOC = this.getSLOC(language, DFP);
        let KLOC = Math.round(SLOC / 1000);
        this.resultFPA = ([
            ["VAF", VAF], ["UFP", UFP], ["AFP", AFP], ["DFP", DFP], ["SLOC", SLOC], ["KLOC", KLOC]
        ]);
    }

    calcCOCOMO2(array1, array2) {
        let SF = this.getSF(array1);
        let E = this.getE(SF);
        let EM = this.getEM(array2);
        let PM = this.getPM(2, E, EM);
        let TDEV = this.getTDEV(PM, SF);
        this.resultCOCOMO = ([
            ["SF", SF], ["E", E], ["EM", EM], ["PM", PM], ["TDEV", TDEV]
        ]);
    }
}
