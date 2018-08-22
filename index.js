function unary(fn) {
    return function onlyOneArg(arg) {
        return fn(arg);
    };
}
console.log("without unary: \t\t", ["1", "2", "3", "4"].map(parseInt));
console.log("with unary: \t\t", ["1", "2", "3", "4"].map(unary(parseInt)));

function identity(v) {
    return v;
}

var words = "   Now is the time for all...  ".split(/\s|\b/);

console.log("without identity: \t", words);
console.log("with identity: \t\t", words.filter(identity));

function output(msg, formatFn = identity) {
    msg = formatFn(msg);
    console.log(msg);
}

function upper(txt) {
    return txt.toUpperCase();
}

output("Hello World", upper);
output("Hello World");

function spreadArgs(fn) {
    return function spreadFn(argsArr) {
        return fn(...argsArr);
    };
}

function gatherArgs(fn) {
    return function gatherFn(...argsArr) {
        return fn(argsArr);
    };
}

function combineFirstTwo([v1, v2]) {
    return v1 + v2;
}

console.log([1656, 1169, 1021, 479].reduce(gatherArgs(combineFirstTwo)));
