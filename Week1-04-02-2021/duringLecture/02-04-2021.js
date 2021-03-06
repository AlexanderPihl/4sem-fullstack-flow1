// 5 Closures

function makeFunc() {
    var name = "Mozilla";

    function logName() {
        console.log(name);
    }
    return logName;
}

var f = makeFunc();
f();

//Udvidet version som vi lavede i klassen

function makeFunc() {
    var name = "Mozilla";

    function logName() {
        console.log(name);
    }
    function changeName(n) {
        name = n
    }
    return {
        logName,
        changeName
    };
}

var obj = makeFunc();
obj.logName()
obj.changeName("Hi Class")
obj.logName()


