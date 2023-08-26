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
    .find({ "user.ID": Number(userID) })
    .sort({ date: 1 })
    .toArray();
  return data[0];
};

export const getQuoteByDoctorId = async (doctorID) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  let data = await collection.find({ "doctor.ID": Number(doctorID) }).toArray();
  return data;
};

export const getQuotesByGenre = async (genre) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  const genreUpper = genre.toUpperCase();
  if (genreUpper !== "M" && genreUpper !== "F")
    throw new Error("Invalid order paramenter");

  let genreOption = genreUpper == "M" ? "masculino" : "femenino";
  let data = await collection
    .aggregate([
      {
        $match: {
          "user.genre": genreOption,
          state: "realizada",
        },
      },
    ])
    .toArray();
  return data;
};

export const getQuoteByDate = async (date) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  date = new Date(date);
  date.setUTCHours(0, 0, 0, 0);
  date.toISOString();

  let data = await collection.find({ date: new Date(date) }).toArray();
  return data;
};

export const getNumberOfQuotes = async (doctorID, date) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  date = new Date(date);
  date.setUTCHours(0, 0, 0, 0);
  date.toISOString();

  let data = await collection
    .aggregate([
      {
        $match: { "doctor.ID": Number(doctorID), date: new Date(date) },
      },
      {
        $group: {
          _id: {
            ID: "$doctor.ID",
            name: "$doctor.name",
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $project: {
          _id: 0,
          ID: "$_id.ID",
          name: "$_id.name",
          count: 1,
        },
      },
    ])
    .toArray();
  return data;
};

export const getRejectedQuotesByDate = async (startDate, endDate) => {
  let db = await connDB();
  let collection = db.collection("quotes");

  startDate = new Date(startDate);
  endDate = new Date(endDate);
  startDate.setUTCHours(0, 0, 0, 0);
  endDate.setUTCHours(0, 0, 0, 0);
  startDate.toISOString();
  startDate.toISOString();

  let data = collection
    .aggregate([
      {
        $match: {
          state: "rechazada",
          date: {
            $gte: new Date(startDate),
            $lt: new Date(endDate),
          },
        },
      },
    ])
    .toArray();
  return data;
};
