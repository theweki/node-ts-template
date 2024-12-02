import mongoose from "mongoose";
import { MONGO_URI } from "../configs/env.js";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI!);
    console.log(`database connected { host: ${connection.host} }`);
  } catch (error) {
    if (error instanceof Error) {
      console.error({ name: error.name, message: error.message });
    } else {
      console.error(error);
    }
    process.exit(1);
  }
};

export { connectDB };
