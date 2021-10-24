// Node js does not have window object as there is no browser
// instead we have Global variables



//__dirname = current working DIRECTORY
// __filename = current filename being executed
// require
// module = info about current module
// process = info about current env where prog is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log("Hello after 2 sec");
},2000)