const { default: calcCOCOMO } = require("./calcCOCOMO");
const { default: calcFPA } = require("./calcFPA");
const { default: load2Form } = require("./load2Form");

var promise = new Promise(function (resolve, reject) {

    let checkBox = document.querySelector('id="kt_tab_pane_11_1"');
    let result;
    if (checkBox.getAttribute("class") == "tab-pane fade show active")
        result = calcFPA();
    else
        result = calcCOCOMO();

});

promise.then(load2Form(result));