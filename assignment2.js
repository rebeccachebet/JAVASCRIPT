
//function that aks someone two marks and returns best mark of the two
function testMarks(test1,test2) {
    let bestTestMark = (test1 > test2) ? test1 : test2;

    return bestTestMark;
}

//function to get coursework mark
function courseworkMark(coursework) {
    let courseworkCurrentMark = testMarks(70 , 80) + coursework / 2;
    let curentcourseworkMark =  courseworkCurrentMark * (40 / 100);

    return curentcourseworkMark;
}

//function to calculate our final exam mark
function examMark(computedMark) {
    let generalExamMark = computedMark * (60 / 100)
    let finalMark = generalExamMark + courseworkMark(80)

    console.log('your final exam mark is : ' + finalMark);
}
examMark(90);


