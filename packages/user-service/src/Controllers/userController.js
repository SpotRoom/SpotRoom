const admin = require("firebase-admin");

const { User } = require("../models/User.model");

const { errorHandler } = require("../errors/error");

const bcrypt = require("bcrypt");

const serviceAccount = require("../config/serviceAccount.json");
const firebaseConfig = require("../config/firebaseConfig");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
});

const cookieOptions = {
  httpOnly: true,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  signed: true,
};

async function signup(req, res, next) {
  const { username, email_id, password, phonenumber } = req.body;

  try {
    let user = await User.findOne({ email_id });
    if (user) {
      return next(errorHandler(400, "User already exists"));
    }

    user = new User({
      username,
      email_id,
      password,
      phonenumber,
    });

    await user.save();
    const token = user.generateAuthToken();
    const userResponse = user.getUserData();
    res.cookie("token", token, cookieOptions);
    res.json({
      ...userResponse,
      token,
    });
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
}

async function signin(req, res, next) {
  const { email_id, password } = req.body;

  try {
    let user = await User.findOne({ email_id });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(401, "Invalid credentials"));
    }

    const token = user.generateAuthToken();
    const userResponse = user.getUserData();
    res.cookie("token", token, cookieOptions);
    res.json({
      ...userResponse,
      token,
    });
  } catch (error) {
    console.error(error.message);
    next(errorHandler(500, "Internal Server Error"));
  }
}

async function googleApi(req, res) {
  const { idToken } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    const { name, email, picture } = decodedToken;

    const user = await User.findOne({ email_id: email });
    console.log(user);
    if (user) {
      const token = user.generateAuthToken();
      res.cookie("token", token, cookieOptions);
      res.status(200).json({ token, name, email, id: user_id, picture });
    } else {
      res.status(200).json({ idToken, name, email, picture });
    }
  } catch (error) {
    next(errorHandler(401, "Authentication Failed"));
  }
}

async function googleApiCallBack(req, res) {
  const { idtoken } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idtoken);
    const { email, picture } = decodedToken;

    const generatePassword =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);

    const newUser = new User({
      username: req.body.name,
      email_id: email,
      password: generatePassword,
      phonenumber: req.body.phonenumber,
      profilePicture: req.body.picture,
    });

    await newUser.save();

    const token = newUser.generateAuthToken();
    res.cookie("token", token, cookieOptions);
    res.json({
      token,
      name: newUser.username,
      email,
      picture,
    });
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
}

module.exports = {
  signup,
  signin,
  googleApi,
  googleApiCallBack,
};
