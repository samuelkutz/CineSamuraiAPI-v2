import express from "express"
import cors from "cors"
import { config } from "dotenv"

import connectDatabase from "./src/database/database.js"

import usuarioRouter from "./src/routes/usuarioRouter.js"
import authRouter from "./src/routes/authRouter.js"
import filmeRouter from "./src/routes/filmeRouter.js"

config()

const app = express();

const port = process.env.PORT || 3000

console.log("Conectando ao banco de dados...")
connectDatabase()

app.use(express.json())
app.use(cors())

app.use("/usuarios", usuarioRouter)
app.use("/auth", authRouter)
app.use("/filmes", filmeRouter)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost/${port}`)
})