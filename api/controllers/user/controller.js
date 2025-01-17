const User = require("../../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { nom, prenom, email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      nom,
      prenom,
      email,
      password: hashedPassword,
      phone,
    });
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    console.log("Error in signUp => ", error);
    res.status(500).send({
      message: "Server error",
    });
  }
};

const logIn = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "User doesn't exist",
      });
    }
    console.log(password);
    const samePassword = await bcrypt.compare(password, user.password);
    if (!samePassword) {
      return res.status(400).send({
        message: "Wrong password",
      });
    }
    const token = jwt.sign({ email: user.email }, process.env.PRIVATE_KEY);
    return res.status(200).send({
      accessToken: token,
    });
  } catch (error) {
    console.log("Error in logIn => ", error);
    res.status(500).send({
      message: "Server error",
    });
  }
};

const getInfo = async (req, res) => {
  try {
    const { data } = req;
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return res.status(400).send({
        message: "user not found",
      });
    }
    console.log("user = ", user);

    res.send({
      nom: user.nom,
      prenom: user.prenom,
    });
  } catch (error) {
    console.log("Error in getInfo", error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

module.exports = {
  signUp,
  logIn,
  getInfo,
};
