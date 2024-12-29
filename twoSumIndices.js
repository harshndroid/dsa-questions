var twoSumIndices = function(nums, target) {
    let map={};

    for(let i=0; i<nums.length; i++){
        let comp = target-nums[i];
        if(map[comp] !== undefined){
            return [map[comp], i];
        }
        else{
            map[nums[i]]=i;
        }
    }
};
