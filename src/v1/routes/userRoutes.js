import { Router } from "express";
//CONTROLLERS
import * as userController from "../../controllers/userControllers.js";
//MIDDLEWARES
import { validateSchema } from "../../helpers/validateSchema.js";
//SCHEMAS
import { userSchema } from "../../middlewares/userMiddleware.js";

const v1User = Router();

v1User
  .get("/", userController.getAllUsers)
  .get("/:userId", userController.getUser)
  .post("/", validateSchema(userSchema), userController.postUser);

// const xd = {
//   "ID": 1005328638,
//   "names": {
//     "name": "Deiby",
//     "surname": "Peñato",
//   },
//   "phone": "3133705455",
//   "address": "Calle 31 #2-39",
//   "email": "deiby.penaa@gmail.com",
//   "genre": {
//     "nameGenre": "masculino",
//     "abbreviation": "M",
//   },
//   "attendant": {
//     "ID": 1122334455,
//     "name": "Brandom Peñato",
//     "phone": "3224097916",
//     "address": "Calle 31 #2-39",
//   },
// };
export default v1User;
