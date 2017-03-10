var truthyString = 'Truthy string';
var falseyString: string;

// False, it checks the string but inverts the truth
var invertedTest = !truthyString;
console.log(invertedTest);

// True, the string is not undifened or empty
var truthyTest = !!truthyString;
console.log(truthyTest);

// False, the string is empty
var falseyTest = !!falseyString;
console.log(falseyTest);