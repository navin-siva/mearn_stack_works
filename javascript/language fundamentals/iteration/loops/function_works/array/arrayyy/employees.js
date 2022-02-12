var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
// console.log(employees.map(emp=>emp[1]));
// var developers=employees.filter(emp=>emp[2]=="developer")
// console.log(developers);
var totalsal=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(totalsal);
//reduceRight======takes first data..... reduce takes the last data if same data occurs
var min=employees.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1[4]:emp2[4])
console.log(min);

var max=employees.reduce((emp1,emp2)=>emp2[4]>emp1[4]?emp2:emp1)
console.log(max);

var lexp=employees.reduce((emp1,emp2)=>emp1[5]<emp2[5]?emp1:emp2)
console.log(lexp[1]);