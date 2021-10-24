const {readFile, writeFile} = require('fs');

// read first file
readFile('./contents/first.txt','utf8', (err,res) => {
    if(err){
        console.log(err);
        return;
    }
    const first = res;
    // if success in first, read second file
    readFile('./contents/second.txt','utf8', (err,res) =>{
        if(err)
        {
            console.log(err);
            return;
        }
        const second = res;
    // if successful in reading both files, write to third file
    writeFile('./contents/result-async.txt',
     `This results in = ${first}, ${second}`,
     (err,res)=>{
         if(err){
             console.log(err);
             return;
         }
         console.log(res);
     });
        
    });

});