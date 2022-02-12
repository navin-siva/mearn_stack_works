var a = 12
var b = 42
var c = 44
if (a > b && a > c) {
    console.log(`${a} is greater`);
    if (b > c) {
        console.log(`${b} is second largest`);
        console.log(a,b,c);
    }
    else {
        console.log(`${c} is second largest`);
        console.log(a,c,b);
    }
}
else if (b > a && b > c) {
    console.log(`${b} is greater`);
    if (a > c) {
        console.log(`${a} second largest`);
        console.log(b,a,c);
    }
    else {
        console.log(`${c} second largest`);
        console.log(b,c,a);

    }
}
else if(a==b && a==c)
{
    console.log("all are equal");
}
else {
    console.log(`${c} is greater`);
    if (a > b) {
        console.log(`${a} second largest`);
        console.log(c,a,b);
    }
    else {
        console.log(`${b} second largest`);
        console.log(c,b,a);
    } 
}