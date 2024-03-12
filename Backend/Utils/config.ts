import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const URI =  process.env.MONGO_URI;


export { PORT, URI };