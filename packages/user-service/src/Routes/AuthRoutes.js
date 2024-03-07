const express = require("express");
const router = express.Router();

const userControllers = require("../Controllers/userController");
const { userAuth } = require("../middlewares/requirementWare");

router.post("/signup", userControllers.signup);

router.post("/signin", userControllers.signin);

router.post("/google-api", userControllers.googleApi);

router.post("/google-api-callback", userControllers.googleApiCallBack);

router.get("/test", userAuth, (req, res) => {
  const user = req.user;
  return res.json({
    user,
  });
});
module.exports = router;
