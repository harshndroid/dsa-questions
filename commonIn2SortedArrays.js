const arr0 = [0, 1, 3, 6, 8, 20, 22, 23];
const arr1 = [0, 2, 3, 4, 6, 7, 8, 9, 20, 23];

let p0=0, p1=0, res=[];

while(p0<arr0.length && p1<arr1.length){
    if(arr0[p0]===arr1[p1]){
        res.push(arr0[p0]);
        p0++;
        p1++;
    }
    else if(arr0[p0]>arr1[p1]) p1++;
    else p0++;
}
