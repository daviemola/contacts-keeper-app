const express = require('express')
const connectDB = require('./config/db')
const app = express()

app.get('/', (req, res) => res.json({ msg: 'Welcome to contact keeper api' }))

connectDB()

//init middleware
app.use(express.json({ extended: false }))

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
