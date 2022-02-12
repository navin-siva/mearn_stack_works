// var sig="12%3*6+8"
// console.log(eval(sig));
function add(num1,num2)
{
return num1+num2;
}
console.log(add(12,13));

//-----------------------------------------------------------------
function sub(num1,num2)
{
    return num1-num2;

}
console.log(sub(19,43));

//-----------------------------------------------------------------------


function cube(num1)
{
    return num1**3
}
console.log(cube(3));


//----------------------------------------------------------------------------

function numchk(num)
//  {
//     if(num%2==0)
// {
//     return "even"
// }
//     else 
//     {
//     return "odd"
//     }
// }
// console.log(numchk(23));
{
return num%2==0?"even":"odd";
}
console.log(numchk(12));



//---------------------SMART SUB---------------------------------


function smsub(num1,num2)
{
    return num1>num2?num1-num2:num2-num1
}
console.log(smsub(10,20));