const fs = require("fs")
const { filterDir, filterDirP, filterDirMyPromise } = require('./filterdir')

/* for (let i = 1; i < 6; i++) {
    fs.mkdirSync(`Folder${i}`)
    fs.writeFileSync(`Folder${i}/file${i}.js`, "console.log('HI')")
} */

async function testerSequential() {
    try {
        const s1 = await filterDirMyPromise("Folder1", ".js");
        const s2 = await filterDirMyPromise("Folder2", ".js");
        const s3 = await filterDirMyPromise("Folder3", ".js");
        const s4 = await filterDirMyPromise("Folder4", ".js");
        const s5 = await filterDirMyPromise("Folder5", ".js");
        console.log("--Seguential--")
        console.log([s1, s2, s3, s4, s5]);
    } catch (err) {
        console.error(err);
    }
}

async function testerParallel() {
    try {
        const p1 = filterDirMyPromise("Folder1", ".js");
        const p2 = filterDirMyPromise("Folder2", ".js");
        const p3 = filterDirMyPromise("Folder3", ".js");
        const p4 = filterDirMyPromise("Folder4", ".js");
        const p5 = filterDirMyPromise("Folder5", ".js");
        const allResults = await Promise.all([p1, p2, p3, p4, p5]);
        console.log("--Parallel--")
        console.log(allResults);
    } catch (err) {
        console.error(err);
    }
}

testerSequential();
testerParallel();

