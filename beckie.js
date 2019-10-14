// //function having parameters
// function add(a, b) {
//     let c = a + b
//     return c
// }
// //passing on two arguments a = 20, b = 40
// console.log(add(20, 40));


// functions with parameters and their arguments.
function add(a,b,c){
   let total = a + b + c
   return total
}
//console.log('the sum of a,b,c is = ' + add(30,60,100))

function getAdd(){ 
    let getAddResult = add(30,60,100) * 2
    console.log('getAddResult is for multpilying by 2 = ' + getAddResult)
return getAddResult
}
// getAdd();

function getAddResults(){
  let getRemainder = getAdd() % 15
  console.log('this gets remainedr from getAdd function = '  + getRemainder)
  return getRemainder;
}
getAddResults();
