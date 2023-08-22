import { Router } from "express";

const v1Quotes = Router();

v1Quotes.get("/", quotesController.getAllQuotes);

export default v1Quotes;
