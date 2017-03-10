var Size;
(function (Size) {
    Size[Size["S"] = 0] = "S";
    Size[Size["M"] = 1] = "M";
    Size[Size["L"] = 2] = "L";
    Size[Size["XL"] = 3] = "XL";
})(Size || (Size = {}));
var size = Size.S;
++size;
console.log(Size[size]); // M
var size2 = Size.XL;
size2--;
console.log(Size[size2]); // L
var size3 = Size.XL;
size3++;
console.log(Size[size3]); // undefined
//# sourceMappingURL=A_Listing_01_14_Increment_And_Decrement_Of_Enumerations.js.map