import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDb Connection error:" + error);
  }
};
