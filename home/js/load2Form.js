function load2Form(array) {
    
    // ["VAF", VAF], ["UFP", UFP], ["DFP", DFP], ["SLOC", SLOC], ["KLOC", KLOC]
    // ["PM", PM], ["TDEV", TDEV]    

    let paramsArray = ["VAF","UFP","DFP","SLOC","KLOC","PM","TDEV"];

    let resultLabels = document.querySelectorAll(paramsArray);

    for(let index = 0; index < resultLabels.length; index++) {
        document.getElementById(paramsArray[index]).value = array[paramsArray[index]];
    }
};

export default load2Form;