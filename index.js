const prompt = require("prompt-sync")();
let pin = "1234";
let balance = 10000;
let userpin;

while (userpin !==pin) {
    userpin=prompt("Enter your pin:");
    if (userpin !== pin) {
console.log("invalid pin try again");
 }
 else{console.log("Login Succesfully");
 }
}
let choice;
do {
    
    console.log("Press 1:Check your balance");
    console.log("Press 2:Widthdraw Money");
    console.log("Press 3:Deposit Money");
    console.log("Press 4:Exit");

choice = prompt("pick your choice");
if (choice == 1) {
    console.log("Your current balance is:"+ balance);
} else if (choice == 2){
        
    let widthdrawlamount =Number(prompt("Enter your widthdrawl amount"));
    
        if (widthdrawlamount>0) {
            if (widthdrawlamount<=balance) {
                balance -=widthdrawlamount;
                console.log("Widthdrawl Succesfull! Reamining balance:"+balance);
            }else{
                    console.log("insufficient balance")
                }
                
            }
                
            }
            else if (choice == 3) {
                let depositeamount = Number(prompt("Enter deposite amount"));
                if (depositeamount>0) {
                    balance += depositeamount;
                    console.log("Deposite Succesfully:"+balance);
                    
                }
            }
            else if (choice == 4) {
                console.log("Thank your for yousing our ATM");
                
                
            }
            else{
                console.log("invalid choice")
            
            
            }
    }while (choice!=4);

    
    
