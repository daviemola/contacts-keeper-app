const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const app = express()

// app.get('/', (req, res) => res.json({ msg: 'Welcome to contact keeper api' }))

connectDB()

//init middleware
app.use(express.json({ extended: false }))

if (process.env.NODE_ENV === 'production') {
  //set statif folder
  app.use(express.static(`client/build`))

  app.get(`*`, (req, res) =>
    res.sendFile(path.resolve(__dirname, `client`, `build`, `index.html`)),
  )
}

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
  //close server & exit process
  server.close(() => process.exit(1))
})
