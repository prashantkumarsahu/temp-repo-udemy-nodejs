
// starting point of any node application

const myFuncs = require('./5-utils');
const names = require('./4-names');

const alternative = require('./6-alternative-flavor');
//console.log(names);
//console.log(myFuncs);

require('./7-mind-grenade'); // code inside the included module is auto-executed

// console.log(alternative.items);

// myFuncs.sayHi(names.john);
// myFuncs.sayHi(names.peter);
// myFuncs.sayHi('hello');