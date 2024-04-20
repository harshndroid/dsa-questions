// sort 0, 1, 2 in ascending order

const arr = [1, 2, 0, 2, 1, 1, 0];

let p0 = 0, p1 = 0, p2 = arr.length-1;

while(p1<=p2){
    if(arr[p1] === 0){
        [arr[p1], arr[p0]] = [arr[p0], arr[p1]];
        p0++;
        p1++;
    }
    else if(arr[p1] === 1){
       p1++; 
    }
    else if(arr[p1] === 2){
       [arr[p1], arr[p2]]=[arr[p2], arr[p1]];
       p2--;
    }
}
