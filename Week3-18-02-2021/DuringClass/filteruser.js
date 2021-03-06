const { filterDir, filterDirP, filterDirMyPromise } = require('./filterdir')

/* filterDir(__dirname, ".js", (err, files) => {
  if (err) {
    return console.log(err)
  }
}) */

/* filterDirP(__dirname,".js")
.then(files=>console.log(files))
.catch(e=>console.error(e))
 */

async function tester() {
    try {
        const files = await filterDirMyPromise(__dirname, ".js")
        console.log(files)
    } catch {
        console.log(err)
    }
}
tester()


/* async function tester() {
    try {
        const files = await filterDirMyPromise(__dirname, ".json");
        console.log(files);
    } catch (err) {
        console.log(err);
    }
}
tester();

filterDirMyPromise(__dirname, ".js")
    .then(files => console.log(files))
    .then(e => console.log(e))
 */