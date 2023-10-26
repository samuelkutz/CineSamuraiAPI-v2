// SCRIPT FOR POPULATING THE DB

import { usuarios, filmes, salas } from "./populations.js";

import axios from "axios";

const url = "http://localhost:3000"

async function postUser(user){
    await axios.post(url + "/usuarios", user).then((res) => console.log(res.data)).catch((err) => console.log(err))
}

for (let i = 0; i < usuarios.length; i++) {
    postUser(usuarios[i])
}

async function postFilme(filme){
    return await axios.post(url + "/filmes", filme).then((res) => console.log(res.data)).catch((err) => console.log(err))
}

// for (let i = 0; i < filmes.length; i++) {
//     postFilme(filmes[i])
// }s

async function postSala(sala){
    return await axios.post(url + "/salas", sala).then((res) => console.log(res.data)).catch((err) => console.log(err))
}

// for (let sala of salas) {
//     postSala(sala)
// }