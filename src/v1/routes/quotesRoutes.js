import { Router } from "express";
import * as quotesController from "../../controllers/quoteControllers.js";

const v1Quotes = Router();

v1Quotes
  .get("/", quotesController.getAllQuotes)
  .get("/order/:order", quotesController.getAllQuotesInOrder)
  .get("/next_quote/:userID", quotesController.getNextDateByUserId)
  .get("/genre/:genre", quotesController.getQuotesByGenre);

export default v1Quotes;
