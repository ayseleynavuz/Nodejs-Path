global.console.log('hello node.js');

global.console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr

global.setTimeout(() => {  
    console.log('3 saniye sonra çalışır');
}   , 3000);  
