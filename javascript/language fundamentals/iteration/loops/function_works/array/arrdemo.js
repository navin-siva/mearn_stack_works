// var arr=[3000,4000,5000,6000,7000]
// console.log(arr[3]);


var expenses=[2300,43000,43500,57540,20,232323]
// for(let amount of expenses)
// {
//     console.log(amount);
// }

// //total expenses

// var total=0
// for(let amount of expenses)
// {
//     total+=amount
// }
// console.log("total exp til now:",total);


//max expenses----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------




// var maxExp=0
// for(let amount of expenses)
// {
//     if(maxExp<amount)
//     {
//         maxExp=amount
//     }
// }
// console.log(maxExp);


//minExp--------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------


var minExp=expenses[0]
for(let amount of expenses)
{
    if(amount<minExp)
    {
        minExp=amount

    }
}console.log(minExp);

