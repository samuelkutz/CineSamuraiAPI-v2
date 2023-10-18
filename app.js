import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {config} from "dotenv"
import UsuariosController from "./src/controllers/UsuariosController.js"
import PrecoController from "./src/controllers/PrecoController.js"
import EnderecoController from "./src/controllers/EnderecoController.js"
import FilmesController from "./src/controllers/FilmesController.js"
import IngressoController from "./src/controllers/IngressoController.js"
import PoltronaController from "./src/controllers/PoltronaController.js"
import ProgramacaoGeralController from "./src/controllers/ProgramacaoGeralController.js"
import SalaController from "./src/controllers/SalaController.js"
import SessaoController from "./src/controllers/SessaoController.js"

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


UsuariosController.rotas(app)
PrecoController.rotas(app)
EnderecoController.rotas(app)
FilmesController.rotas(app)
IngressoController.rotas(app)
PoltronaController.rotas(app)
ProgramacaoGeralController.rotas(app)
SalaController.rotas(app)
SessaoController.rotas(app)