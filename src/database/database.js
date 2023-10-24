import mongoose from "mongoose";

function connectDatabase() {
  mongoose
    .connect(process.env.DATABASE_URI, { // note that dotenv needs to be imported ONLY where connectDatabase() runs
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch((err) => console.log(`Erro ao conectar com MongoDB: ${err}`));
}

export default connectDatabase;