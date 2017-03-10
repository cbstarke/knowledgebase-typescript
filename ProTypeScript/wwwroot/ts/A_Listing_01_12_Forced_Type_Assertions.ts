var roadName: string = 'Avenue Road';

// Error: Cannot convert 'string' to 'number'
// var bedrooms: number = <number>roadName;

// Works
var bedrooms: number = <number><any>roadName;
console.log(bedrooms);