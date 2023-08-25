import * as userServices from "../services/userServices.js";

export const getAllUsers = async (req, res) => {
  try {
    let data = await userServices.getAllUsers();
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

export const getUser = async (req, res) => {
  try {
    let data = await userServices.getUser(req.params.userId);
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

export const postUser = async (req, res) => {

  if(req.body.age < 18 && !req.body.attendant) return res.status(500).json({status: 500, message: "YOU MUST ENTER A ATTENDANT"});

  try {
    let data = await userServices.postUser(req.body);
    res
      .status(200)
      .send({ status: 200, message: "DATA SAVED CORRECTLY", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR SAVING DATA", error: error },
    });
  }
};
