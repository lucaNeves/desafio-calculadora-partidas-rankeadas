var wins = 82
var losses = 35

function playerLevel(numberWins){
    if(numberWins<=10){
        return "Ferro"
    }else if(numberWins>=11 && numberWins<=20){
        return "Bronze"
    }else if(numberWins>=21 && numberWins<=50){
        return "Prata"
    }else if(numberWins>=51 && numberWins<=80){
        return "Ouro"
    }else if(numberWins>=81 && numberWins<=90){
        return "Diamante"
    }else if(numberWins>=91 && numberWins<=100){
        return "Lendário"
    }else if(numberWins>=101){
        return "Imortal"
    }
}

function finalMessage(numberWins,numberLosses){
    let winningBalance = numberWins - numberLosses
    let level = playerLevel(numberWins)
    return `O Herói tem saldo de ${winningBalance} e está no nível de ${level}`
}

console.log(finalMessage(wins,losses))