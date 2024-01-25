import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect(process.env.DB_URI_MONGO);

  return mongoose.connection;
}

// const connectDB = async () => {
//   console.log("URI:: ");
//   console.log(DB_URI_MONGO);
//   mongoose.connect(DB_URI_MONGO);

//   return mongoose.connection;
// };

export default connectDB;
