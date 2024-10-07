const { signupValidation,loginValidation} = require('../middlewares/validation');
const { signup,login,logoutUser} = require('../controllers/auth')
const router = require('express').Router();
const {verifyJWT} = require("../middlewares/logout.middleware")


router.post("/signup", signupValidation ,signup);
router.post("/login", loginValidation ,login);
router.post('/logout',verifyJWT,logoutUser);

module.exports = router;
