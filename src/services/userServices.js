import { connDB } from "../databases/connectDB.js";

export const getAllUsers = async () => {
  let db = await connDB();
  let collection = db.collection("users");
  let data = await collection.find().toArray();
  return data;
};

export const getUser = async (userId) => {
  let db = await connDB();
  let collection = db.collection("users");
  let data = await collection.find({ ID: Number(userId) }).toArray();
  return data;
};

export const postUser = async (newUser) => {
  let db = await connDB();
  let collection = db.collection("users");

  let data = await collection.insertOne(newUser);
  return data;
};

// let date = new Date("2023-05-01");

// console.log(date.toISOString());
