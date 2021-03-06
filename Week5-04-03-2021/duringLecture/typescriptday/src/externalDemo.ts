import * as _ from "lodash"; //import all as _ from lodash //Skal hentes som en type: npm install @types/lodash --save-dev

let numbers: number[] = [1,2,3,4,5]

let shufled = _.shuffle(numbers);

console.log(shufled);