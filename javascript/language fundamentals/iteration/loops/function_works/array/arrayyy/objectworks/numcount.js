// var pat="10,10,20,20,30,30,40,40,50,50,50"

var pat=[10,10,20,20,30,30,40,40,50,50,50]
// var words=pat.split(",")
// console.log(words);
var wordcount={}
// for(let word of words)
// {
//  if(word in wordcount)
//  {
//      wordcount[word]+=1
//  }
//  else
//  {
//      wordcount[word]=1
//  }
// }
// console.log(wordcount);


pat.map(num=>num in wordcount?wordcount[num]+=1:wordcount[num]=1)
console.log(wordcount);