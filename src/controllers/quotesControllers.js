

export const getAllQuotes = async (req, res) => {
  try {
    let data = await quoteServices.getAllQuotes();
    res
      .status(200)
      .send({ status: 200, message: "CORRECTLY OBTAINED DATA", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR IN OBTAINING DATA", error: error },
    });
  }
};
