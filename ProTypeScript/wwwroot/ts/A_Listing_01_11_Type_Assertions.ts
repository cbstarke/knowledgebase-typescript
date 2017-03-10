interface House {
    bedrooms: number;
    bathrooms: number;
}

interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}

var avenueRoad: House = {
    bedrooms: 11,
    bathrooms: 10
};

// Errors: Cannot convert House to Mansion
//var mansion: Mansion = avenueRoad;

// Works
var mansion2: Mansion = <Mansion>avenueRoad;
mansion2.butlers = 1;
console.log(mansion2);
