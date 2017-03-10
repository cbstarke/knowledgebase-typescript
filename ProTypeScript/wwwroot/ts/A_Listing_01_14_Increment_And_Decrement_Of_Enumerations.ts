enum Size {
    S,
    M,
    L,
    XL
}

var size: Size = Size.S;
++size;
console.log(Size[size]); // M

var size2: Size = Size.XL;
size2--;
console.log(Size[size2]); // L

var size3: Size = Size.XL;
size3++;
console.log(Size[size3]); // undefined