import * as doctorServices from "../services/doctorServices.js";

export const getAllDoctors = async (req, res) => {
  try {
    let data = await doctorServices.getAllDoctors();
    res
      .status(200)
      .send({ status: 200, message: "CORRECTLY OBTAINED DATA", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR IN OBTAINING DATA", error: error },
    });
  }
};

export const getDoctorsBySpecialty = async (req, res) => {
  try {
    let data = await doctorServices.getDoctorsBySpecialty(req.params.specialty);
    res
      .status(200)
      .send({ status: 200, message: "CORRECTLY OBTAINED DATA", data });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR IN OBTAINING DATA", error: error.message },
    });
  }
};
