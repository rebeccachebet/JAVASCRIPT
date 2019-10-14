
// using the return fx,no console.log 

function addNum(a,b,c) 
{
 let d = a + b + c
 return d

}
//function subNum()

function subNum(){
   let y = addNum(20,30,40) - 10
//    console.log('the answer is the diff :\t' +y)
   return y 
}
subNum();

function mud()
{
    let ab = subNum()%addNum(12,20,60)
    console.log('hi ' + ab)
}
mud();