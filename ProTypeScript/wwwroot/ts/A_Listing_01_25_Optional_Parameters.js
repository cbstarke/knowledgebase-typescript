function getAverage2(a, b, c) {
    var total = a;
    var count = 1;
    total += b;
    count++;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var average = total / count;
    return 'The average is ' + average;
}
var result1 = getAverage2(4, 6); // The average is 5;
console.log(result1);
var result2 = getAverage2(8, 8, 8); // The average is 8;
console.log(result2);
//# sourceMappingURL=A_Listing_01_25_Optional_Parameters.js.map