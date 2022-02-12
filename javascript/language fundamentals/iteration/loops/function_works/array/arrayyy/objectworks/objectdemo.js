var student={
    roll:20,
    std_name:"navin",
    course:"mearn",
    total:450
}
// console.log(student.std_name);
// console.log(student.course);
// console.log(student.total);
console.log("gender" in student);
student["gender"]="male"
student.isvaccinated=true
console.log(student);
student["vaccine"]="covishield" //adding value
console.log(student);
student.vaccine="covaxine"     //updating existing value
console.log(student);
student.total=5000
console.log(student);


student.total+=500
console.log(student);





for(var key in student)
{
console.log(key);
console.log(student[key]);
}