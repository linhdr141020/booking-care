import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log('-----------',data)
    return res.render("homepage.ejs",{
        data: JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
};

let getAboutPage = (req, res) => {
  return res.render("about.ejs");
};

module.exports = {
  getHomePage,
  getAboutPage,
};
