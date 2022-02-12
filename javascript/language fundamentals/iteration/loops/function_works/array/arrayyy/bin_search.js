var arr=[10,11,12,13,14,15]
var low=0,upp=arr.length-1,flag=0
var element=14;
 var count=0
while(low<=upp)
{
    let mid=Math.floor((low+upp)/2)
    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid])
    {
        upp=mid-1
    }
    else if(element==arr[mid])
    {
        flag=1;
        break;
    }
    count++;
}
console.log(count);
console.log(flag==0? "element not found" : "found");
