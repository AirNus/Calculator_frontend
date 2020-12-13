import CalcData from "../lib/calc_data_object";

function calcCOCOMO () {

let Calc_dataObject = new CalcData();
let inputsSF = document.querySelectorAll('[data-ifpugCOCOMO_SF="true"]');
let inputsEM = document.querySelectorAll('[data-ifpugCOCOMO_EM="true"]');

let arraySF = new Array(inputsSF.length);
for(let index = 0; index < inputsSF.length; index++) {
    arraySF[index] = inputsSF[0].Value;
}

let arrayEM = new Array(inputsEM.length);
for(let index = 0; index < inputsEM.length; index++) {
    arrayEM[index] = inputsEM[0].Value;
}

let result = calc_dataObject.calcCOCOMO(arraySF,arrayEM);

return result;
};

export default calcCOCOMO;