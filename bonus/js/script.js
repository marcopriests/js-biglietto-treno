//--------------------------------------------------------------------------------------------- TESTA O CROCE ----------------------------------------------------------------------------------
// let userChoice = prompt("Testa o Croce?");
// let coin = Math.floor(Math.random() * 9 + 1);
// let coinResult;

// console.log(coin)

// if (coin % 2 != 0 && userChoice == "croce") {
//     console.log("HAI VINTO!")
// } else {
//     console.log("HAI PERSO...")
// };




//------------------------------------------------------------------------------------------ PARI O DISPARI ---------------------------------------------------------------------------------------
// let userChoice = prompt("Pari o dispari?")
// let userNumber = parseInt(prompt("Scegli un numero da 1 a 9"))
// let cpuNumber = Math.floor(Math.random() * 9 + 1)
// let result = userNumber + cpuNumber

// console.log(userNumber, cpuNumber, result)

// if (result % 2 == 0 && userChoice == "pari") {
//     console.log("HAI VINTO!")
// } else if (result % 2 != 0 && userChoice == "dispari") {
//     console.log("HAI VINTO!")
// } else {
//     console.log("HAI PERSO...")
// }





//------------------------------------------------------------------------------------------ MORRA CINESE ------------------------------------------------------------------------------------------
let userChoice = prompt("Scegli tra: sasso, carta o forbice. Mi raccomando, tutto in minuscolo!")
let cpuChoice = Math.floor(Math.random() * 3) //0 = SASSO - 1 = CARTA - 2 = FORBICE

console.log(cpuChoice)


if (cpuChoice == 0) {
    console.log("sasso")
    if (userChoice == "sasso") {
        console.log("PAREGGIO")
    } else if (userChoice == "carta") {
        console.log("HAI VINTO!")
    } else if (userChoice == "forbice") {
        console.log("HAI PERSO...")
    } else {
        console.log("Scelta non valida")
    }
}

if (cpuChoice == 1) {
    console.log("carta")
    if (userChoice == "sasso") {
        console.log("HAI PERSO...")
    } else if (userChoice == "carta") {
        console.log("PAREGGIO")
    } else if (userChoice == "forbice") {
        console.log("HAI VINTO!")
    } else {
        console.log("Scelta non valida")
    }
}

if (cpuChoice == 2) {
    console.log("forbice")
    if (userChoice == "sasso") {
        console.log("HAI VINTO!")
    } else if (userChoice == "carta") {
        console.log("HAI PERSO...")
    } else if (userChoice == "forbice") {
        console.log("PAREGGIO")
    } else {
        console.log("Scelta non valida")
    }
}
