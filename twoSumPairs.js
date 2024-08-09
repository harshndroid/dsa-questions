getPairsCount(arr, k) {
        // code here
        
        let map={};
        arr.forEach(ele=>{
            if(map[ele]) map[ele]++;
            else map[ele]=1;
        })

        let sum=0, count=0;
        for(let i=0; i<arr.length; i++){
            sum=arr[i];
            if(map[k - sum]>0){
                if((k - sum) === sum && map[k - sum] >= 2){
                    count=count+map[k - sum]-1;
                    map[sum]-=1;

                }
                else if((k - sum) > sum){
                    count+=map[k - sum];
                    map[sum] -=1;
                }
                
            }

        }
        return count;
    }
