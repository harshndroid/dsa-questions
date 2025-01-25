twoSumPairsCount(arr, k) {        
        let map={}, count=0;
        arr.forEach(ele=>{
            if(map[ele]) map[ele]++;
            else map[ele]=1;
        });

        for(let i=0; i<arr.length; i++){
            if(map[k - arr[i]]){
                if((k - arr[i]) === arr[i]){
                    if(map[k - arr[i]] > 1) count=count+map[k - arr[i]]-1;
                }
                else{
                    count+=map[k - arr[i]];
                }
                map[arr[i]]-=1;
            }
        }
        return count;
    }
