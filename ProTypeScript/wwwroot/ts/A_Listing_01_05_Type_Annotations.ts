// primitive type annotations
var myName: string = 'Steve';
var heightInCentimeters: number = 182.88;
var isActive: boolean = true;

// array type annotations
var names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];

// function annotations with parameter type annotation and return type annotation
var sayHello: (name: string) => string;

// implementin the sayHello function
sayHello = function (name: string) {
    return "Hello " + name;
}

// object type annotation
var person: { name: string, heightInCentimeters: number; };

// implementing the person object
person = { name: 'Mark', heightInCentimeters: 183 };
