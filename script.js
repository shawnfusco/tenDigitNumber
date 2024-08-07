// script.js

function calculateAndDisplay() {
    // variable to collect results
    var result = "List of numbers:\n";

    // for loop?
    //for (var i = 1000500000; i < 9999599999; i++) {
    for (var i = 100; i < 1000; i++) {
        //result += i + "\n";

        var lastTwo = i % 100
        if (lastTwo % 9 == 0) {
            console.log(i + " -> " + lastTwo);
        }
    }
    
    // prints it to the page
    //document.getElementById('numberDisplay').innerText = result;

}