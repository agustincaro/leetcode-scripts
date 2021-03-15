/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const reducer = (previousValue, currentValue) => previousValue ^ currentValue;

var xorOperation = function(n, start) {
    let arr = [];
    for(let i=0;i<n;i++) {
        arr.push(start+2*i)
    }
    return arr.reduce(reducer);
};