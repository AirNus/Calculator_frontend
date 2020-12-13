function calcFPA(){

let Calc_dataObject;
let arrayFPA = new Array();


for(let i = 0; i < document.getElementsByClassName("").length; i= i+1) {
    arrayFPA[i] = document.getElementById(SF).value;
}

let result = Calc_dataObject.calcFPA(arrayFPA);

return result;
};

export default calcFPA;