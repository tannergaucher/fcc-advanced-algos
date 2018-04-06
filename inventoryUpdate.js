function updateInventory(arr1, arr2) {
    var values1 = [];
    var keys1 = [];
    var values2 = [];
    var keys2 = [];
    // All inventory must be accounted for or you're fired!

    //refactor to map
    arr1.forEach(function(array) {
        var value = array[0];
        var key = array[1];
        values1.push(value);
        keys1.push(key);
    });

    //refactor to map
    arr2.forEach(function(array) {
        var value = array[0];
        var key = array[1];
        values2.push(value);
        keys2.push(key);
    });

    values1.forEach(function(arr) {
        console.log(keys1[arr]);
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
