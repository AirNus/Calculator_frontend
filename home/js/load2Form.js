function load2Form(map) {
    
    // ["VAF", VAF], ["UFP", UFP], ["DFP", DFP], ["SLOC", SLOC], ["KLOC", KLOC]
    // ["PM", PM], ["TDEV", TDEV]    

    let paramsArray = ["VAF","UFP","DFP","SLOC","KLOC","PM","TDEV"];

    let resultLabels = document.querySelectorAll(paramsArray);

    for (let index = 0; index < resultLabels.length; index++) {
        paramsArray.forEach( function(item,i,paramsArray) {
            if(item == resultLabels[index].id) {
                resultLabels.value = map[item];
            }
        });    
    }
};

export default load2Form;