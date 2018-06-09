const fs = require('fs');
var homedir = require('os').homedir();
var thething = JSON.parse(fs.readFileSync(homedir + '/circumvaulttemp.json', 'utf8'));
var exec = thething.CFBundleExecutable;
console.log(exec);
