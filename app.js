import express from "express"
import cors from "cors"
import { config } from "dotenv"

import connectDatabase from "./src/database/database.js"

import usuarioRouter from "./src/routes/usuarioRouter.js"
import authRouter from "./src/routes/authRouter.js"
import filmeRouter from "./src/routes/filmeRouter.js"
import salaRouter from "./src/routes/salaRouter.js"
config()

const app = express();

const port = process.env.PORT || 3000

console.log("Conectando ao banco de dados...")
connectDatabase()
.then(() =>{
    console.log("Conectado ao MongoDB!")
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost/${port}`)
    })

})
.catch((err) => console.log(`Erro ao conectar com MongoDB: ${err}`));

app.use(express.json())
app.use(cors())

app.use("/usuarios", usuarioRouter)
app.use("/auth", authRouter)
app.use("/filmes", filmeRouter)
app.use("/salas", salaRouter)
