import { MongoClient } from "mongodb";
import "dotenv/config";

const CONFIG = JSON.parse(process.env.DB);

const URI = `mongodb+srv://${CONFIG.user}:${CONFIG.password}@practica.4b4nkjj.mongodb.net/${CONFIG.database}`;
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function connDB() {
  const client = new MongoClient(URI, OPTIONS);
  try {
    await client.connect();
    const db = client.db();
    return db;
  } catch (error) {
    throw new Error({ message: "Connection refused", error: error });
  }
}
