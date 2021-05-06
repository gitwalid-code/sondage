const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).send({
        message: "No token",
      });
    }
    const data = jwt.verify(token, process.env.PRIVATE_KEY);
    req.data = data;
    next();
  } catch (error) {
    console.log("Error in verifyToken =>", error);
    let message = "Server error";
    if (error.toString().includes("JsonWebTokenError")) {
      message = "Invalid token";
    }
    res.status(500).send({
      message,
    });
  }
};

module.exports = {
  verifyToken,
};
