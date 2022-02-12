// for(let row=1;row<=4;row++)
// { let str="";

//     for(let col=1;col<=row;col++)
// {
//     str+="*";

// }
// console.log(str);
// }

//1
//12
//123
//1234

//str+=col  instead of "*"




// for(let row=1;row<=4;row++)
// {
//     let str=""
//     for(let space=1;space<=(4-row);space++)
//     {
//         str+=" "
//     }
//     for(let col=1;col<=row;col++)
//     {
//         str+="* "
//     }
//     console.log(str);
// }








for(let row=1;row<=4;row++)
{
    let str=""
    for(let col=1;col<=7;col++)
    {
        if(row==4 || row+col==5 ||col-row==3)
        {
            str+="*"
        }
        else
        {
            str+=" "
     }
    }
    console.log(str);
}