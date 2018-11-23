function unary(fn) {
    return function onlyOneArg(arg) {
        return fn(arg);
    };
}

function identity(v) {
    return v;
}

var words = "   Now is the time for all...  ".split(/\s|\b/);

function output(msg, formatFn = identity) {
    msg = formatFn(msg);
    console.log(msg);
}

function upper(txt) {
    return txt.toUpperCase();
}

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

function partial(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

function add(x, y) {
    return x + y;
}

function reverseArgs(fn) {
    return function argsReversed(...args) {
        return fn(...args.reverse());
    };
}

function partialRight(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...laterArgs, ...presetArgs);
    };
}

function curry(fn, arity = fn.length) {
    return (function nextCurried(prevArgs) {
        return function curried(...nextArgs) {
            var args = [...prevArgs, ...nextArgs];
            if (args.length >= arity) {
                return fn(...args);
            } else {
                return nextCurried(args);
            }
        };
    })([]);
}

console.log([1, 2, 3, ...[4, 6], 5].map(curry(add)(3)));
