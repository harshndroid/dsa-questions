// Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s) {
        // your code here
        // 1 2 3 7 6 => 12
        // return [2, 4]
        let sum=0, i=0, j=0, found=false, map={};
        for(i=0; i<n; i++){
            sum+=arr[i];
            if(sum === s){
                found=true;
                break;
            }
            if(map[sum-s] !== undefined){
                found=true;
                j=map[sum-s]+1
                break;
            }
            map[sum] = i;
        }
        if(found) return [j+1, i+1];
        return [-1];
    }
