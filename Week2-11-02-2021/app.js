//Gets log from logger
const Logger = require('./logger');

//prints module
//console.log(log);

//Uses the log funtion in logger
//log('Message');

//path module
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: ' + totalMemory)
//template string - ES6
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

//fs module
const fs = require('fs');
const files = fs.readdirSync('./')
console.log(files);
//with callback
fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err)
    else console.log('Result', files)
});

//event module
const EventEmitter = require('events');
const emitter = new EventEmitter();

//const log = require('./logger'); //used once therefor outcommented'
const logger = new Logger();

emitter.on('messageLogged', (arg) => { //e, event, eventArg
    console.log('Listener called', arg)
});
logger.log('message');

//Http module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world')
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000...')
