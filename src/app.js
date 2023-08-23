console.clear();
//SERVER CONFIG
import { server } from "./configuration/serverConfig.js";
import express from "express";
//V1 ROUTERS
import v1Routes from "./v1/index.js"; 

//MIDDLEWARES
const APP = express();
APP.use(express.json());

//ROUTERS VERSIONING
APP.use("/v1", v1Routes);


//SERVER LISTENING
APP.listen(server.PORT, () => {
  console.log(`🚀 Server running at http://${server.HOSTNAME}:${server.PORT}`);
});
