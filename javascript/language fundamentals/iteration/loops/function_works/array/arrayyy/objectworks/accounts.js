var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]







  //  q1  total number accounts

//    console.log(accounts.length);
//q2  print all account numbers whose ac-type savings

// accounts.filter(acc=>acc.ac_type=="savings").forEach(acc=>console.log(acc.acno))

//q3 print balance of acno=1000
// var bal=accounts.find(acc=>acc.acno=="1000").balance
// console.log(bal);


//q4 print all g-pay transaction details
// var gpaytrans=accounts.map(acc=>acc.transactions).flat().filter(t=>t.method=="g-pay")
// console.log(gpaytrans);


// print all transaction where transaction amount> 500\\

// accounts.map(data=>data.transactions).flat().filter(t=>t.amount>500).forEach(t=>console.log(t))


//q5 print credit transcation's of 1002

var credittran=accounts.map(data=>data.transactions).flat().filter(t=>t.to=="1002")
console.log(credittran);


var debtran=accounts.find(data=>data.acno==1002).transactions
// console.log(debtran);
//q6 print highest balance account details




//q7 print transaction history of 1002

var transhistory={debittran:debtran,credittransaction:credittran}
console.log(transhistory);

var transactionhistory=[...debtran,...credittran]

//map return a value  foreach is used for iteration--------------------------------------------------------------