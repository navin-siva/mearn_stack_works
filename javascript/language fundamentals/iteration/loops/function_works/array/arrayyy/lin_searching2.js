var arr=[10,21,34,2,4,6,8]
var element=6
flag=0
for(let index in arr)  //"in" to get position
{
    if(element==arr[index])
    {
        console.log("position is",index);
        flag=1;
        break;
    }
}
console.log(flag==0?"---not found---":"---found---");

