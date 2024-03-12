import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const URI =  process.env.MONGO_URI_TEST;


export { PORT, URI };