var pattern="ABBABCC"
var wc={}
for(let char of pattern)        //take char from pattern
{
    if(char in wc)             //check if there is character in wc
    {
        console.log(`${char} is the first recursive character`);   //if there is a repeating character prints
        break
    }
    else{
        wc[char]=1;              //since no character,it add +1 to it    a=1,b=1,after b becomes 2 as it is already present in wc
    }
}