const array= [5,3,9,4,8,2,1,6];

//   5394   8216
//  53   94  8216
// 5  3  94  8216
//  35  9  4 8216
//  35   49  8216
//   3459   1268

function mergeSort(arr, low, high){
    if(low >= high) return;
    const mid = Math.floor((high+low)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
    return arr;
}

function merge(arr, low, mid, high){
    const arr1 = arr.slice(low, mid+1); // low to mid 
    const arr2 = arr.slice(mid+1, high+1); // mid+1 to high
    console.log({arr1, arr2});
    const sortedArray = [];
    let p1=0, p2=0;
    for(let i=0; i<low; i++){
        sortedArray.push(0);
    }
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]<=arr2[p2]){
            sortedArray.push(arr1[p1]);
            p1++;
        }
        else{
            sortedArray.push(arr2[p2]);
            p2++;
        }
    }
    while(p1 < arr1.length){
        sortedArray.push(arr1[p1]);
        p1++;
    }
    while(p2 < arr2.length){
        sortedArray.push(arr2[p2]);
        p2++;
    }
    
    console.log({sortedArray});
    
    for(let i=low; i<=high; i++){
        console.log("====here", i, sortedArray[i])
        // arr[i]=sortedArray[i-low];
        arr[i]=sortedArray[i];
    }
    console.log({arr});
}

mergeSort(array, 0, array.length-1);
