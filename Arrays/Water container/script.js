/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let biggestArea = 0
    let left=0
    let right=height.length-1
    
    while(left < right) {
        let distanceN = distance(left,right)
        let minHeightN = minHeight(height[left],height[right])
        let areaN = area(minHeightN,distanceN)
        biggestArea = areaN > biggestArea ? areaN : biggestArea
        
        //move the limit with smaller height
        if(height[left]>height[right]) {
            right -= 1;
        }
        else {
            left++;
        }
    }
    return biggestArea;
};

let minHeight = function(h1,h2) {
    return Math.min(h1,h2)
}

let distance = function(i, ai) {
    return Math.abs(i-ai)
}

let area = function(height,width)  {
    return height*width
}