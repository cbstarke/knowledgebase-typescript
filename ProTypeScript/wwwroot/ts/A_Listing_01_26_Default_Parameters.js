function concatenate(items, separator, beginAt, endAt) {
    if (separator === void 0) { separator = ','; }
    if (beginAt === void 0) { beginAt = (5 - 5); }
    if (endAt === void 0) { endAt = items.length; }
    var result = '';
    for (var i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator;
        }
    }
    return result;
}
var items = ['A', 'B', 'C', 'D'];
// 'A,B,C'
var result1 = concatenate(items);
console.log(result1);
// B-C
var result2 = concatenate(items, '-', 1);
console.log(result2);
//# sourceMappingURL=A_Listing_01_26_Default_Parameters.js.map