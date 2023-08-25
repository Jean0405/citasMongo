import * as quotesServices from "../services/quoteServices.js";

export const getAllQuotes = async (req, res) => {
  try {
    let data = await quotesServices.getAllQuotes();
    res
      .status(200)
      .send({ status: 200, message: "CORRECTLY OBTAINED DATA", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR IN OBTAINING DATA", error: error.message },
    });
  }
};

export const getAllQuotesInOrder = async (req, res) => {
  try {
    let data = await quotesServices.getAllQuotesInOrder(req.params.order);
    res
      .status(200)
      .send({ status: 200, message: "CORRECTLY OBTAINED DATA", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR IN OBTAINING DATA", error: error.message },
    });
  }
};

export const getNextDateByUserId = async (req, res) => {
  try {
    let data = await quotesServices.getNextDateByUserId(req.params.userID);
    res
      .status(200)
      .send({ status: 200, message: "CORRECTLY OBTAINED DATA", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR IN OBTAINING DATA", error: error.message },
    });
  }
};


export const getQuotesByGenre = async (req, res) => {
  try {
    let data = await quotesServices.getQuotesByGenre(req.params.genre);
    res
      .status(200)
      .send({ status: 200, message: "CORRECTLY OBTAINED DATA", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR IN OBTAINING DATA", error: error.message },
    });
  }
};
