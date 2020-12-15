const {calcCOCOMO} = require("./calcCOCOMO");
const {calcFPA} = require("./calcFPA");
const {load2Form} = require("./load2Form");


var onStartCalc = new function() {

    let isFPAMethod = document.querySelector('id="kt_tab_pane_11_1"');
    let result;
    if (isFPAMethod.getAttribute("class") == "tab-pane fade show active")
        result = calcFPA();
    else {
        result = calcCOCOMO();
    }   
    load2Form(result);

};
