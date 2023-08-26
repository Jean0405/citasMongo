import { Router } from "express";
import { verifyToken } from "../JWT/token.js";
import { maxLogin } from "../helpers/maxLogin.js";
import v1Users from "./routes/userRoutes.js";
import v1Quotes from "./routes/quotesRoutes.js";
import v1Login from "./routes/loginRoutes.js";
import v1Doctors from "./routes/doctorRoutes.js";

const v1Routes = Router();

v1Routes.use("/login", maxLogin(), v1Login);
v1Routes.use("/users", v1Users);
v1Routes.use("/quotes", v1Quotes);
v1Routes.use("/doctors", verifyToken("mid_level"), v1Doctors);

export default v1Routes;
