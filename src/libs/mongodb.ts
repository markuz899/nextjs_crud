import mongoose from "mongoose";

const DB = "mongodb://127.0.0.1:27017/forum";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB || DB);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(`Error in connectMongoDB`, err);
  }
};

export default connectMongoDB;
