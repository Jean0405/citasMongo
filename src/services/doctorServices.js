import { connDB } from "../databases/connectDB.js";

export const getAllDoctors = async () => {
  let db = await connDB();
  let collection = db.collection("doctors");
  let data = await collection.find().toArray();
  return data;
};

export const getDoctorsBySpecialty = async (specialty) => {
  let db = await connDB();
  let collection = db.collection("doctors");
  let data = await collection.find({ "specialty.name": specialty }).toArray();
  return data;
};
