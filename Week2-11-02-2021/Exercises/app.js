console.log("****opg1****");
const simpleOS = require('./simple-os-file');

console.log(simpleOS);


console.log("****opg2****");
const DOS_Detector = require('./dosDetector');
const dos_dect = new DOS_Detector(1000);

dos_dect.on('DOS_Detector: ', (eventArg) => console.log('Event found an object with URL and time: ', eventArg));

dos_dect.addUrl('www.url1.dk');
dos_dect.addUrl('www.url2.dk');
dos_dect.addUrl('www.url3.dk');

setTimeout(() => dos_dect.addUrl('www.url1.dk'), 500);
setTimeout(() => dos_dect.addUrl('www.url2.dk'), 750);


console.log("****opg3****");
const http = require('http');