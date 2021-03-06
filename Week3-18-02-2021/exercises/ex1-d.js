const makeRandom = require("./ex1-b&c");

makeRandom(32)
    .then(res => {
        console.log(res)
    })

const getThatShit = async () => {
    try {
        console.log(await makeRandom(8))
    } catch (err) {
        console.error("Error: " + err)
    }

}

getThatShit();