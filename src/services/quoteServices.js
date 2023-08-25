import { connDB } from "../databases/connectDB.js";

export const getAllQuotes = async () => {
  let db = await connDB();
  let collection = db.collection("quotes");
  let data = await collection.find().toArray();
  return data;
};

export const getAllQuotesInOrder = async (order) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  const orderLower = order.toLowerCase();
  if (orderLower !== "asc" && orderLower !== "desc")
    throw new Error("Invalid order parameter");

  let orderQuery = orderLower == "asc" ? 1 : -1;
  let data = await collection
    .find({})
    .sort({ "user.name": orderQuery })
    .toArray();
  return data;
};

export const getNextDateByUserId = async (userID) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  let data = await collection
    .find({"user.ID": Number(userID)}).sort({date: 1}).toArray();
  return data[0];
};

export const getQuotesByGenre = async (genre) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  const genreUpper = genre.toUpperCase();
  if (genreUpper !== "M" && genreUpper !== "F")
    throw new Error("Invalid order paramenter");

  let genreOption = genreUpper == "M" ? "masculino" : "femenino";
  let data = await collection.aggregate([
    {
      $match:{
        "user.genre":genreOption,
        "state": "realizada"
      }
    }
  ]).toArray();
  return data;
};

