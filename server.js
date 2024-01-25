
const express = require('express')
const app = express()
const vaatteet = require("./vaatteet.json")
const path = require('path')

// Tehdään polkumääritys frontend kansioon
const fronttipolku = path.join(__dirname, './frontend')


//Sanotaan että em.polkussa on tiedostosisältö
// jota palvelin käyttää kun se saa http requestin 
app.use(express.static(fronttipolku))


// Hello Word
app.get('/api/hello', (req, res) => {
 console.log("Pyyntö tuli")
res.send("Hello Word! I am Express wed servers!")
}
)


// vaate datan lähettäminen 
app.get('/api/vaatteet', (req, res) => {
   res.json(vaatteet)
   }
   )


//Palvelin kuuntelee portissa 3000
app.listen('3000', () =>
console.log("Server is up on port 3000")
)