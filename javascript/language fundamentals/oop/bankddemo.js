class bank
{
    createaccount(acno,pname,pan,branch,phone,bal)
    {
        this.accountnum=acno;
        this.personname=pname;
        this.pan=pan;
        this.branch=branch;
        this.phone=phone;
        this.bal=bal
    }
    withdraw(amount)
    {
        if(amount>this.bal)
    {
      console.log(`transaction failed. insufficient balance in ${this.accountnum}`);
    }
    else
    {
        this.bal-=amount
        console.log(`an amount of Rs${amount} has been debitted from your account number ${this.accountnum} and available balance is ${this.bal}`);
    }
        

    }
    deposit(amount)
    {
        this.bal+=amount
        console.log(`your account ${this.accountnum} has been creditted with Rs.${amount} and current balance is ${this.bal}`);
    }
    balanceenquiry()
    {
        console.log(`available balance is ${this.bal}`);
    }
}

var obj=new bank()
obj.createaccount(10001,"vishal",1122,"kannur",123456789,2000)
obj.deposit(5000)
obj.withdraw(8000)
obj.balanceenquiry()