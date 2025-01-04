function twoSumIndices(nums, target) {
    let map = new Map(), start=0, end=0;
    for(let i=0; i<nums.length; i++){
        const ele = nums[i];
        if(map.has(target-ele)){
            // 2 sum found
            start = map.get(target-ele);
            end = i;
            break;
        }
        else map.set(ele, i)
    }
    return [start, end];
};
