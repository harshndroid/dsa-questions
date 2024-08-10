let p1=0, p2=0, p3=0, mySet=new Set();
// ignore duplicates
        
while(p1 < arr1.length && p2 < arr2.length && p3 < arr3.length){
    if(arr1[p1] === arr2[p2]){
        if(arr1[p1] === arr3[p3]){
            mySet.add(arr1[p1]);
            p1++;
            p2++
            p3++;
        }
        else if(arr1[p1] < arr3[p3]){
            p1++;
            p2++;
        }
        else p3++;
    }
    else if(arr1[p1] < arr2[p2]) p1++;
    else p2++;
}
return [...mySet];
