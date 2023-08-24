import "dotenv/config.js";
import { SignJWT, jwtVerify } from "jose";
import { connDB } from "../databases/connectDB.js";

export const generateToken = async (req, res) => {
  const { emailDoctor, passwordDoctor } = req.body;

  let db = await connDB();
  let collection = db.collection("doctors");
  let result = await collection
    .find({ email: emailDoctor, password: passwordDoctor })
    .toArray();

  if (!result[0])
    return res.send({ status: 404, message: "Usuario no encontrado" });

  // const { ID, role } = result[0];
  const dataDoctor = {
    ID: result[0].ID,
    role: result[0].role,
  };

  const encoder = new TextEncoder();
  const jwt = await new SignJWT(dataDoctor)
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("3h")
    .sign(encoder.encode(process.env.PRIVATE_KEY));
  res
    .status(200)
    .send({ status: 200, message: "TOKEN CREADO CORRECTAMENTE", token: jwt });
};

export const verifyToken= (accessIndicator) => async (req, res, next) => {
  const { authorization } = req.headers;
  if(!authorization) return res
  .status(400)
  .send({ status: 400, message: "unassigned token" });

  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(authorization, encoder.encode(process.env.PRIVATE_KEY));
  
  const permissions = jwtData.payload.role.permissions;

  if (!permissions.includes("*")) {
    if (!permissions.includes(accessIndicator)) res.send("ERROR ACCESS PERMISSIONS")
  }
  next();
};
