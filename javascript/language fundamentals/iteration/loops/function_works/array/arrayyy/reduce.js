arr=[1,2,3,4,5,6,7]
var total=arr.reduce((n1,n2)=>n1+n2)
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
var max=arr.reduce((n1,n2)=>n2>n1?n2:n1)
console.log(total);
console.log(min);
console.log(max);