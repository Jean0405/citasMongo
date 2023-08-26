import { Router } from "express";
import * as quotesController from "../../controllers/quoteControllers.js";
import { verifyToken } from "../../JWT/token.js";

const v1Quotes = Router();

v1Quotes
  .get("/", quotesController.getAllQuotes)
  .get("/order/:order", quotesController.getAllQuotesInOrder)
  .get("/next_quote/:userID", quotesController.getNextDateByUserId)
  .get(
    "/doctor/:doctorID",
    verifyToken("mid_level"),
    quotesController.getQuoteByDoctorId
  )
  .get("/genre/:genre", quotesController.getQuotesByGenre)
  .get("/date/:date", quotesController.getQuoteByDate)
  .get(
    "/statistics/doctor=:doctorID&date=:date",
    verifyToken("mid_level"),
    quotesController.getNumberOfQuotes
  )
  .get(
    "/rejected/starDate=:startDate&endDate=:endDate",
    verifyToken("read"),
    quotesController.getRejectedQuotesByDate
  );

export default v1Quotes;
