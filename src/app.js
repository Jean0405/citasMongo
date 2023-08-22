console.clear();
import "dotenv/config";
import express from "express";
import v1User from "./v1/routes/userRoutes.js";

//config server
const SERVER = JSON.parse(process.env.SERVER);
const APP = express();
APP.use(express.json());

APP.use("/v1/user", v1User);

APP.listen(SERVER, () => {
  console.log(`🚀 Server running at http://${SERVER.hostname}:${SERVER.port}`);
});
