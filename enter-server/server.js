require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/server";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const phonesRouter = require('./routes/phones.routes')
app.use('/api', phonesRouter)

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))