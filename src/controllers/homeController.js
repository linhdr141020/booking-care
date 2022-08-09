import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("-----------", data);
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getAboutPage = (req, res) => {
  return res.render("about.ejs");
};

let getCrudPage = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log("message", message);
  res.send("create new user");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("----------------");
  console.log(data);
  res.render("display-crud.ejs", {
    dataTable: data,
  });
};
module.exports = {
  getHomePage,
  getAboutPage,
  getCrudPage,
  postCRUD,
  displayGetCRUD,
};
