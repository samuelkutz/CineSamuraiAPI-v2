import express from "express"
import cors from "cors"
import {config} from "dotenv"
import connectDatabase from "./src/database/database.js"
import userRoute from "./src/routes/userRoute.js"
config()

const app = express();

const port = process.env.PORT || 3000

connectDatabase()

app.use(express.json())
app.use(cors())

app.use("/users", userRoute)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost/${port}`)
})