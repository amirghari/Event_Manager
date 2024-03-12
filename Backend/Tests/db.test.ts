import mongoose from "mongoose";
import { connectToMongoDB } from "../Config/db"; // Replace with the actual file path

jest.mock("mongoose");

describe("connectToMongoDB", () => {
  it("should connect to MongoDB successfully", async () => {
    // Mock the mongoose.connect function
    (mongoose.connect as jest.Mock).mockResolvedValueOnce(undefined);

    // Call your function
    await connectToMongoDB();

    // Assert that mongoose.connect was called
    expect(mongoose.connect).toHaveBeenCalled();
  });

  it("should handle connection failure", async () => {
    // Mock the mongoose.connect function to simulate a failure
    (mongoose.connect as jest.Mock).mockRejectedValueOnce(new Error("Connection error"));
  
    // Mock the process.exit function
    const exitMock = jest.spyOn(process, "exit").mockImplementationOnce((code?: number) => {
      throw new Error(`process.exit(${code}) called`);
    });
  
    try {
      // Call your function
      await connectToMongoDB();
    } catch (error: any) {
      // Explicitly specify the type of 'error' as 'any'
      // Assert that mongoose.connect was called
      expect(mongoose.connect).toHaveBeenCalled();
      // Assert that process.exit was called with code 1
      expect(exitMock).toHaveBeenCalledWith(1);
      // Assert that the error message contains the expected message
      expect(error.message).toContain("process.exit(1) called");
    }
  });
});