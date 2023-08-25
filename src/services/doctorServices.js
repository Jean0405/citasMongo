import { connDB } from "../databases/connectDB.js";

export const getDoctorsBySpecialty = async(specialty)=>{
  let db = await connDB();
  let collection = await db.collections("doctors");

  let data = collection.find({"specialty.name": specialty}).toArray();
  return data;
}