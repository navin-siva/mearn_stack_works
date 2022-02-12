// class student
// {
//     setstudentdetails(c_name,fee,duration)     ==constructor(c_name,fee,duration)
//     {                                                                           |
//         this.course=c_name;                                                     |
//         this.fees=fee;                                                          |
//         this.duraton=duration                                                   |
//     } 
//     printdetails()                                                              |
//     {
//         console.log(this.course,this.fees,this.duraton);                        |
//     }
// }                                                                           ====|====

// var std=new student()            ==========var std=new student("mearnstack",35000,6)
// std.setstudentdetails("mearnstack",35000,6)
// std.printdetails()

// var phy=new student()
// phy.setstudentdetails("phython",50000,7)
// phy.printdetails()



//================================================================================================================================
//--------------------create new class student and print setstudent(rollnumber,stname,course,total)-------------------------------
//================================================================================================================================


class student{
    // setstddetails(r_num,st_name,c_name,total)
  
  constructor(r_num,st_name,c_name,total) //constructor of js
  {
        this.roll=r_num;
        this.studentname=st_name;
        this.course=c_name;
        this.total=total
    }
    printdetails()
    {console.log(this.roll,this.studentname,this.course,this.total);}
}


// var std=new student()
// std.setstddetails(21,"abhay","mearn",315)
var std=new student(21,"abhay","mearn",315)   //constructor is called when the object is created..no need of calling the constructor function
std.printdetails()


// constructor is used to initialise instance variables
