export const validateSchema = (schema) => async (req, res, next) => {
  try {
    schema.parse(req.body);
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "DATA VALIDATION ERROR", error: error },
    });
  }
};
