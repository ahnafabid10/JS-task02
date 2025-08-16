function  resultReport( marks ) {
    let sum = 0;
    for (const mark of marks){
        sum = (sum + mark)
        fullScore = sum / marks.length  
    }
    return ("fullScore", ( Math.round(fullScore)));
}




const report = resultReport([98, 87, 67, 91, 92, 33, 87])
console.log(report)

