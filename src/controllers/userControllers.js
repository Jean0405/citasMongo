import * as userService from "../services/userServices.js";

export const getAllUsers = async (req, res) => {
  try {
    let data = await userService.getAllUsers();
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
    let data = await userService.getUser(req.params.userId);
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
  try {
    // let data = await userService.postUser(req.body);
    // res
    //   .status(200)
    //   .send({ status: 200, message: "DATA SAVED CORRECTLY", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: { message: "ERROR SAVING DATA", error: error },
    });
  }
};
