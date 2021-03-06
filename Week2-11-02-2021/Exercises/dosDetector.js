const { EventEmitter } = require("events");

class DOS_Detector extends EventEmitter {
    constructor(timeValue) {
        super();  //Figure out what it is you have to extend (use moshes video)
        this.urls = new Map();
        this.TIME_BETWEEN_CALLS = timeValue;
    }
    addUrl = (url) => {
        const time = new Date().getTime();
        if (this.urls.has(url)) {
            const deltaTime = time - this.urls.get(url)
            if (deltaTime < this.TIME_BETWEEN_CALLS) {
                //console.log("TODO: Fire the 'DosDetected' event")
                //Add this info to the event {url:url,timeBetweenCalls:deltaTime}
                this.emit('DOS_Detector: ', { url: url, timeBetweenCalls: deltaTime })
            }
        }
        //Sets the irl and time in map for lookup
        this.urls.set(url, time);
    }
}
// Export the class using nodes CommonJS module system (require/exports)
module.exports = DOS_Detector;
