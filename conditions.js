// let num = (a,b)=>{
// let c = a+b
// console.log("the sum of the numbers is   " +c)
// }
// num(200,875)
// num(78999756,78263682882376382)
// // num(878656,7678782373896789378)/*  */
// num(874,7899)

// let num1 = 20 , num2 = 40
// if (num1>num2){
//     console.log("you have passed")
// }
// else{
// console.log("heaven is not for you")
// }
// an employee is subjected to 30% PAYE of his salary only if his pay is greater than 130,000.write a finction that takes someones pay as a parameter

//PAYE
// let paye = (sal) => {
//     if (sal >= 130000) {
//         let payee = sal * (30 / 100)
//         console.log("this finds the amount of tax paid by the employee  " + payee)
//         return payee
//     }
    
//     else {
//         console.log("these employees have the priviledge of not paying tax  ")
//     }
// }
//     paye(700000)



//create a function  that compares two employees salaries PAYE and computes them to see who pays more PAYE using //es6 
let salary = (salo,salo1) => {
        let totaltax = salo *(30/100)
        let totaltaxx = salo1 *(30/100)
        console.log("this computes the tax paid by employee1  " +totaltax)
        console.log("this computes the tax paid by employee2  " +totaltaxx)

if (totaltaxx>totaltax){
    console.log("this shows the employee that pays a higher tax in comparison to the other employee  ")
}
    else {
        console.log("this employee pays a lesser tax")
    }
}
salary(300000,850000)