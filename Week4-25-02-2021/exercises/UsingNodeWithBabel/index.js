
function messageDelay(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            /*             if (msg.length === 0) {
                            reject("No Message")
                        } */
            const upperCased = msg.toUpperCase();
            resolve(upperCased)
        }, delay);
    });
};

const promises = [
    messageDelay("Hi", 1300),
    messageDelay("Farvel", 900),
    messageDelay("Goddag", 500),
]

/* messageDelay("", 1000)
    .then(uMsg => console.log(uMsg))
    //.catch(err => console.log("Ups ingen streng sendt med")) */

Promise.any(promises).then((upperCased) => console.log(upperCased));