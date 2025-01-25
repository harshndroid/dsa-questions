// Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, target) {
        // your code here
        // 1 2 3 7 6 => 12
        // return [2, 4]
        let sum=0, i=0, j=0, found=false, map={};
        for(i=0; i<n; i++){
            sum+=arr[i];
            if(sum === target){
                found=true;
                break;
            }
            else if(sum > target){
                if(map[sum-target] !== undefined){
                    j=map[sum-target]+1;
                    found = true;
                    break;
                }
            }
            map[sum]=i;
        }
        return found ? [j+1, i+1]: [-1];
    }
