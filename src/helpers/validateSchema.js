import { userSchema } from "../middlewares/userMiddleware.js";

export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).send({
      status: 400,
      errorInfo: { message: "DATA VALIDATION ERROR", error: error.message },
    });
  }
};
