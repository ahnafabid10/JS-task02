function  bestTeam( player1, player2 ){
    const team01 = player1.foul + player1.cardY + player1.cardR
    const team02 = player2.foul + player2.cardY + player2.cardR
    if(team01 < team02){
        return player1.name
    }
    else if (team02 < team01){
        return player2.name
    }
    else if(team01 = team02){
        return "Tie"
    }
    else{
        return "Invalid"
    }
}

const team = bestTeam ({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
)
console.log(team)

