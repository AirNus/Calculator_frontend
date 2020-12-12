const { default: calcCOCOMO } = require("./calcCOCOMO");
const { default: calcFPA } = require("./calcFPA");
const { default: load2Form } = require("./load2Form");

var promise = new Promise(function (resolve, reject) {

    let result;
    if (true == true)
        result = calcFPA();
    else
        result = calcCOCOMO();

});

promise.then(load2Form);