var arr=[10,11,1,2,3,14]
var element=5
flag=0
for(let val of arr)
{
if(val==element)
{
    flag=1;
    break;

}
}
console.log(flag==0?"---not found---":"---found---");
