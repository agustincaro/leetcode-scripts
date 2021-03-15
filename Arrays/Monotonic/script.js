/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    return isDecreasing(A) || isIncreasing(A)
};

let isDecreasing = function(A) {
    for(let i=0; i<A.length; i++) {
        if(A[i]<A[i+1]) return false
    }
    return true;
}
    
    let isIncreasing = function(A) {
    for(let i=0; i<A.length; i++) {
        if(A[i]>A[i+1]) return false
    }
    return true;
}