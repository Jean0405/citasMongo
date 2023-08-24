import v1Users from "./routes/userRoutes.js";
import v1Quotes from "./routes/quotesRoutes.js";
import v1Login from "./routes/loginRoutes.js";
import { Router } from "express";

const v1Routes = Router();

v1Routes.use("/login", v1Login);
v1Routes.use("/users", v1Users);
v1Routes.use("/quotes", v1Quotes);

export default v1Routes;
