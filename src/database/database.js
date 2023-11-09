import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect(process.env.DATABASE_URI)
    // .connect(process.env.DATABASE_URI, { // note that dotenv needs to be imported ONLY where connectDatabase() runs
    //   useNewUrlParser: true,
    //   // useUnifiedTopology: true,
    // })
    
}

export default connectDatabase;