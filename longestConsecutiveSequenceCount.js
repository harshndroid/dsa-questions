function longestConsecutiveSequenceCount(nums) {
    const sortedNums = nums.sort((a, b) => a-b);
    let longestCount=0, currentCount=1;

    for(let i=0; i<sortedNums.length; i++){
        if(sortedNums[i+1]-sortedNums[i] === 1){
            currentCount+=1;
        }
        else if(sortedNums[i+1]-sortedNums[i]>1) {
            currentCount=1;
        }
        longestCount=Math.max(longestCount, currentCount);
    }
    return longestCount;
}
