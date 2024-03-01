const number = require("readline-sync");

let n = number.questionInt("enter number: ");
let count = 0 ;
let sum = 0;
let m = n;
let p = m;

while(m>0){
    r =m%10;
    count++;
    m= Math.floor(m/10);}

    while(n>0){
        k=n%10;
        sum = sum + k**count;
        n= Math.floor(n/10);
    }

    if(sum==p){
        console.log("sum is armstron",sum);
    }
    else {console.log("sum is not armstron",sum);}


