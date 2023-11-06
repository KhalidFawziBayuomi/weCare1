import express from 'express'
import { dbConnection } from './database/dbconnection.js'
import { bootstrap } from './src/bootstrab.js'
import cors from 'cors'
const app =express()
const port =3001
app.use(express.json())
app.use(cors())

bootstrap(app)
dbConnection()

app.listen(port,()=> console.log(`example app listening on port ${port}!`))