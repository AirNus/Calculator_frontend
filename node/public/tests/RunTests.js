function RunTests() {
    var test1 = document.createElement("button");
    var test2 = document.createElement("button");
    test1.id = "test1";
    test1.type = "reset";
    test1.className = "btn btn-success mr-2";
    test1.style = "background: #0bb783";
    test1.innerText = "testFPA";

    test2.id = "test2";
    test2.type = "reset";
    test2.className = "btn btn-success mr-2";
    test2.style = "background: #0bb783";
    test2.innerText = "testCOCOMO";

    document.body.appendChild(test1);
    document.body.appendChild(test2);

    var test1F = document.getElementById('test1');
    test1F.addEventListener('click', testFPA, false);
    var test2F = document.getElementById('test2');
    test2F.addEventListener('click', testCOCOMO, false);
}