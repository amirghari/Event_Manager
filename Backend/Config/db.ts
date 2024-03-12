import mongoose from "mongoose";
import { URI } from "../Utils/config";

export const connectToMongoDB = async () => {
  const connectionHandler = async () => {
    try {
      await mongoose.connect(URI!);
      return true;
    } catch (error) {
      console.error("Connection to DB failed");
      console.error(error instanceof Error ? error.message : String(error));  // Convert error to string
      return false;
    }
  };

  const connectionResult = await connectionHandler();

  connectionResult
    ? console.log("Connection to DB established")
    : process.exit(1);
};
