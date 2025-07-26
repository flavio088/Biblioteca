require('dotenv').config()
const express = require('express')
const router = express.Router()
const authRouter = require('./routes/auth')
const apiRouter = require('./routes/api')

const app = express()

app.use(express.json())

app.use('/auth', router);
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))