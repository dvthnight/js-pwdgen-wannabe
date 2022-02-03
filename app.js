const userName = prompt("Inserisci il tuo nome")
console.log(userName)

const userSurname = prompt("Inserisci il tuo cognome")
console.log(userSurname)

const userColor = prompt("Inserisci il tuo colore preferito")
console.log(userColor)



const userData = document.getElementById("user_data")
console.log(userData)

userData.innerHTML = `${userName} ${userSurname}`


const passwordGenerata = document.getElementById("password")
console.log(passwordGenerata)

passwordGenerata.innerHTML = `${userName}${userSurname}${userColor}21`




