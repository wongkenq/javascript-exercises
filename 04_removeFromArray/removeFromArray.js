const removeFromArray = function(...args) {
    let arr = args[0]
    return arr.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
