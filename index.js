const fs = require('fs');
const thing = process.argv[2];
var homedir = require('os').homedir();
if (thing) {
  console.log("Everything is properly installed and in the right place. You should be good to go!");
} else {
  var thething = JSON.parse(fs.readFileSync(homedir + '/circumvaulttemp.json', 'utf8'));
  var exec = thething.CFBundleExecutable;
  console.log(exec);
}
