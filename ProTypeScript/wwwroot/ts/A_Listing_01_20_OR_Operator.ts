// Empty strings are false
var errorMessage = '';

// results is 'Saved OK'
var result = errorMessage || 'Saved OK';
console.log(result);

// Filled strings are true
errorMessage = 'Error Detected';

// result is 'Error Detected'
result = errorMessage || 'Saved OK';
console.log(result);

var undefinedLogger;

// if the logger isn't initialized., substitute it for the result of the right-had expression
var logger = undefinedLogger || { log: function (msg: string) { console.log(msg); } };

// alerts 'Message'
logger.log('Message');
