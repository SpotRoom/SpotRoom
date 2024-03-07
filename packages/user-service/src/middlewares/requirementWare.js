const jwt = require("jsonwebtoken");

const { User } = require("../models/User.model");

const { errorHandler } = require("../errors/error");
const { TOKEN_SCEC } = require("../config/config");

const userAuth = async (req, res, next) => {
  const cookie = req.signedCookies.token;
  if (!cookie) {
    return next(errorHandler(401, "You must be logged in"));
  }

  try {
    const { id, username, email_id } = jwt.verify(cookie, TOKEN_SCEC);

    const user = await User.findOne({ _id: id });

    req.user = user;
    next();
  } catch (error) {
    next(errorHandler(401, "You must be logged in"));
  }
};

module.exports = {
  userAuth,
};
