// a different way to export items from a module

module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob'
}

module.exports.singlePerson = person

//console.log(module.exports)