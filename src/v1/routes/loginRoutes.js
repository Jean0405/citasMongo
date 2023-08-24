import { Router } from "express";
import { generateToken } from "../../JWT/token.js";
const v1Login = Router();

v1Login.all("/", generateToken);

export default v1Login;
