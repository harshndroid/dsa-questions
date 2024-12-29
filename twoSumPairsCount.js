twoSumPairsCount(arr, k) {        
        let map={};
        arr.forEach(ele=>{
            if(map[ele]) map[ele]++;
            else map[ele]=1;
        })

        let currVal=0, count=0;
        for(let i=0; i<arr.length; i++){
            currVal=arr[i];
            if(map[k - currVal]>0){
                if((k - currVal) === currVal && map[k - currVal] >= 2){
                    count=count+map[k - currVal]-1;
                }
                else if((k - currVal) > currVal){
                    count+=map[k - currVal];
                }
                map[currVal]-=1;
            }
        }
        return count;
    }
