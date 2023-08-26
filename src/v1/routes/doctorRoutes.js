import { Router } from "express";
import * as doctorControllers from "../../controllers/doctorController.js";

const v1Doctors = Router();

v1Doctors
  .get("/", doctorControllers.getAllDoctors)
  .get("/specialty/:specialty", doctorControllers.getDoctorsBySpecialty);

export default v1Doctors;
