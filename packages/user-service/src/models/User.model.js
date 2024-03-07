const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { TOKEN_SCEC } = require("../config/config");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: [5, "Username must be at least 6, got {vlaue}"],
    maxLength: 20,
  },
  email_id: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  phonenumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, "Password Must be at least 6, got {VALUE}"],
    max: [12, "Password Must be at most 12, got {VALUE}"],
  },

  profilePicture: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  },
});

// Hashing the password before saving to database middleware

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateAuthToken = function () {
  const payload = {
    id: this._id,
    username: this.username,
    email_id: this.email_id,
  };

  const token = jwt.sign(payload, TOKEN_SCEC, {
    expiresIn: "1800s",
  });

  return token;
};

userSchema.methods.getUserData = async function () {
  const user = await User.findById(this._id);
  console.log(user._id);
  return {
    userId: user._id,
    name: user.username,
    email: user.email_id,
    profilePicture: user.profilePicture,
  };
};

const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
