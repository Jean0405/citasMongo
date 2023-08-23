import Joi from "joi";

export const userSchema = Joi.object({
  ID: Joi.number().integer().required(),
  names: Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
  }),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  address: Joi.string().required(),
  email: Joi.string().email().required(),
  genre: Joi.object({
    nameGenre: Joi.string().valid("masculino", "femenino").required(),
    abbreviation: Joi.string().valid("M", "F").required(),
  }),
  attendant: Joi.object({
    ID: Joi.number().integer().required(),
    name: Joi.string().required(),
    phone: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    address: Joi.string().required(),
  }),
});
