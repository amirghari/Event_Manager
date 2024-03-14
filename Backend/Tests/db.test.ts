import mongoose from "mongoose";
import { connectToMongoDB } from "../Config/db"; 

jest.mock("mongoose");

describe("connectToMongoDB", () => {
  it("should connect to MongoDB successfully", async () => {

    (mongoose.connect as jest.Mock).mockResolvedValueOnce(undefined);


    await connectToMongoDB();


    expect(mongoose.connect).toHaveBeenCalled();
  });

  it("should handle connection failure", async () => {

    (mongoose.connect as jest.Mock).mockRejectedValueOnce(new Error("Connection error"));
  

    const exitMock = jest.spyOn(process, "exit").mockImplementationOnce((code?: number) => {
      throw new Error(`process.exit(${code}) called`);
    });
  
    try {
      await connectToMongoDB();
    } catch (error: any) {

      expect(mongoose.connect).toHaveBeenCalled();

      expect(exitMock).toHaveBeenCalledWith(1);

      expect(error.message).toContain("process.exit(1) called");
    }
  });
});