const fs = require('fs');
const readline = require("readline");

const config = require('./config.json');
const configName = './config.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = async function() {
    rl.question("Please enter your Aseprite.exe path: ", function(path) {
        rl.close();

        config.path = path;

        fs.writeFile(configName, JSON.stringify(config, null, 4), function writeJSON(err) {
            if (err) return console.log(err);
        });
    });
}