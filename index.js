const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Car = require('./routes/carRouter')
const conn = require('./db/conn')
const carModel = require('./model/Car')



const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

//configure template handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


//parser para leitura do body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//adicionando CSS
app.use(express.static('public'))




//adicionando rota Car
app.use('/cars', Car)



conn
  .sync()
  .then(() => {
    app.listen(3000)
    console.log('Server Started')
  })
  .catch((err) => {
    console.log(err)
  })


// app.listen(3000, () => {
//   console.log('Server Started')
// })