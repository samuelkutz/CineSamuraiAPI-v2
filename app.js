import express from "express"
import cors from "cors"
import { config } from "dotenv"
import connectDatabase from "./src/database/database.js"
import userRoute from "./src/routes/userRoute.js"
import authRoute from "./src/routes/authRoute.js"

config()

const app = express();

const port = process.env.PORT || 3000

console.log("Conectando ao banco de dados...")
connectDatabase()

app.use(express.json())
app.use(cors())

app.use("/users", userRoute)
app.use("/auth", authRoute)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost/${port}`)
})