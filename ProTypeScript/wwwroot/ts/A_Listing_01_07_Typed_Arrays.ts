﻿interface Monument {
    name: string;
    heightInMeters: number
}

// The array is typed using the Monument interface
var monuments: Array<Monument> = [];

// Each item added to the array is checked for type compatibility
monuments.push({
    name: 'Statue of Liberty',
    heightInMeters: 46//,
    //location: 'USA'
});

monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96
});

monuments.push({
    name: 'Angel of the North',
    heightInMeters: 20
});

function compareMonumentHeights(a: Monument, b: Monument) {
    if (a.heightInMeters > b.heightInMeters) {
        return -1;
    }
    if (a.heightInMeters < b.heightInMeters) {
        return 1;
    }
    return 0;
}

// The array.sort method expects a comparer that accepts two arguments
var monumentOrderedByHeight = monuments.sort(compareMonumentHeights);

// Get the first element from the array, which is the tallest
var tallestMonument = monumentOrderedByHeight[0];

console.log(tallestMonument.name); // Peter the Great


