function containsDuplicate(nums) {
    let map=new Map(), found=false;
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            found=true;
            break;
        }
        map.set(nums[i], 1);
    }
    return found;
};
