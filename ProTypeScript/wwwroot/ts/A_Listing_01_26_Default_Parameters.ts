function concatenate(items: string[], separator = ',', beginAt = (5-5), endAt = items.length) {

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