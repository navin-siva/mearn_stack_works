var num=523
var str=""
while(num!=0)
{
    let lastDigit=num%10
    str+=lastDigit
    num=Math.floor(num/10)

}
console.log(str);