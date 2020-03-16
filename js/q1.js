'use strict'

var numberOfNumbers = 0;

function checkIfGreater (array, number){
    for (var i = 0; i < array.length; i++){
        if (array[i] > number){
            numberOfNumbers = numberOfNumbers + 1;
        }
    }
    document.write(`The number of numbers inside ${array} that are greater than ${number} are ${numberOfNumbers}`);
    document.write('<br>')
}

checkIfGreater ([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);