function load2Form(array) {
    
    let inputs = document.getElementsByClassName(""); 
    for( let i = 0; i < inputs ; i = i + 1) {
        inputs[i].value = array[i];
    }
};

export default load2Form;