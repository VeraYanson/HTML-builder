const fs = require('fs');
const path = require ('path')
const process = require('process');
const readline = require('readline')

const { stdin: input, stdout: output } = require('process');
const { text } = require('stream/consumers');

function createFile(){
    fs.open('text.txt', 'a', (err) => {
    if(err) throw err;
    });
}
createFile()

fs.createWriteStream("text.txt")

const rl = readline.createInterface({ input, output });
rl.question('Пожалуйста, введите текст: ', (text) => {
  
});




 fs.appendFile('text.txt', "text", (err) => {
           if(err) throw err;
    })

