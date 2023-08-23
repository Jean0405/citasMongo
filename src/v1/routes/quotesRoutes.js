import { Router } from "express";
import * as quotesController from "../../controllers/quotesControllers.js";

const v1Quotes = Router();

v1Quotes
  .get("/", quotesController.getAllQuotes)
  .get("/order=:order", quotesController.getAllQuotesInOrder)
  .get("/genre=:genre", quotesController.getQuotesByGenre);

export default v1Quotes;
