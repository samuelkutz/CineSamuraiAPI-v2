import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {config} from "dotenv"

config()

const app = express();

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const DB_USER = process.env.DB_USER 
const DB_PASSWORD = process.env.DB_PASSWORD    

mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cinesamurai.hsmeuxb.mongodb.net/?retryWrites=true&w=majority`,

    ).then(        
        app.listen(port, ()=>{
            console.log(`Conectado ao banco de dados pelo usuario ${DB_USER} \n`)
            console.log(`Servidor disponível em http://localhost:${port}`)
        })
    ).catch((err) => console.log(err))
