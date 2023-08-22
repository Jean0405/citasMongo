import { connDB } from "../databases/connectDB.js";

export const getAllQuotes = async () => {
  let db = await connDB();
};
