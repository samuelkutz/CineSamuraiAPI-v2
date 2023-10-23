// SCRIPT FOR POPULATING THE DB

import { usuarios } from "./populations.js";

import axios from "axios";

const url = "http://localhost:3000"

// async function postUser(user){
//     await axios.post(url + "/usuarios", user).then((res) => console.log(res.data.data.message)).catch((err) => console.log(err))
// }

// for (let i = 0; i < usuarios.length; i++) {
//     postUser(usuarios[i])
// }

