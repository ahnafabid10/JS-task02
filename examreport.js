 function resultReport(marks) {
  if (!Array.isArray(marks) || marks.length === 0) {
    return "Invalid";
  }

  let sum = 0;
  let pass = 0;
  let fail = 0;

  for(const mark of marks){
    sum += mark;
    if(mark >= 40){
      pass++;
    } 
    else{
      fail++;
    }
  }

  let fullScore = Math.round(sum / marks.length);

  return {
    fullScore: fullScore,
    pass: pass,
    fail: fail
  }
}

const report = resultReport([19, 89, 87, 26, 90, 91, 92 ]);
console.log(report);
