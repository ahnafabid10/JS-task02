function totalFine( fare ) {
    if(fare <= 0 || typeof fare === 'string'){
        return 'Invalid'
    }
        totalFine = fare + fare * (20 / 100 ) + 30;
        return totalFine;
}

const fine = totalFine(0);
console.log(fine);


