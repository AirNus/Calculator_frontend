function calcCOCOMO () {

let Calc_dataObject;
let arrayCOCOMO = new Array();

for(let i = 0; i < document.getElementsByClassName("inputsCocomo").length; i= i+1) {
    arrayCOCOMO[i] = document.getElementById("inputCocomo").value;
}

let result = calc_dataObject.calcCOCOMO(arrayCOCOMO);

return result;
};

export default calcCOCOMO;